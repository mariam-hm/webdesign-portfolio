import { TypePage } from "@/types/contentful";
import { createClient, EntrySkeletonType, Entry } from "contentful";
import {
  SectionTitle,
  Page,
  LabelValuePair,
  ProjectInfo,
  TextBlock,
  Callout,
  Image,
  Testimonial,
  Duplex,
} from "@/types";

// Create a delivery client instance with your Contentful space and access token
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
});

// Create a client instance with your Contentful space and access token
export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: "preview.contentful.com",
});

/**
 * Fetch a page by its slug from Contentful
 * @param {string} slug - The slug of the page to fetch
 * @returns {Promise<Object>} - The fetched page data
 */
export const fetchPage = async (slug: string, locale = "en-CA") => {
  try {
    const response = await client.getEntries<EntrySkeletonType>({
      content_type: "page",
      "fields.slug[match]": slug,
      include: 5, // Populates nested fields
      locale: locale,
    });

    if (response.items.length > 0) {
      //processPage(response.items[0]);
      const result = processPage(response.items[0]);
      return result;
    } else {
      // TODO Implement redirect or error handling
      console.log(`No page found with slug ${slug}`);
    }
  } catch (error) {
    console.error(`Failed to fetch page with slug ${slug}:`, error);
    // TODO Implement redirect or error handling
  }
};

const mapObjectToType = (component: any): any => {
  switch (component.sys.contentType.sys.id) {
    case "heroSection":
      return component.fields as SectionTitle;
    case "projectInfo":
      const details = component.fields.details.map((labelValueObj: any) => {
        return labelValueObj.fields as LabelValuePair;
      });
      component.fields.details = details;
      return component.fields as ProjectInfo;
    case "sectionTitle":
      return component.fields as SectionTitle;
    case "textBlock":
      return component.fields as TextBlock;
    case "duplexComponent":
      let result = {
        ...component.fields,
        componentLeft: mapObjectToType(component.fields.componentLeft),
        componentRight: mapObjectToType(component.fields.componentRight),
      };
      return result as Duplex;
    case "callout":
      return component.fields as Callout;
    case "image":
      const mainImg = {
        url: component.fields.mainImage.fields.file.url,
        width: component.fields.mainImage.fields.file.details.image.width,
        height: component.fields.mainImage.fields.file.details.image.height,
        description: component.fields.mainImage.fields.description,
      };

      const imageGrp = component.fields.imageGroup
        ? component.fields.imageGroup.map((img: any) => {
            return {
              url: img.fields.file.url,
              width: img.fields.file.details.image.width,
              height: img.fields.file.details.image.height,
              description: img.fields.description,
            };
          })
        : [];

      return { mainImage: mainImg, imageGroup: imageGrp } as Image;
    case "testimonial":
      const pict = {
        url: component.fields.picture.fields.file.url,
        width: component.fields.picture.fields.file.details.image.width,
        height: component.fields.picture.fields.file.details.image.height,
        description: component.fields.picture.fields.description,
      };

      component.fields.picture = pict;

      return component.fields as Testimonial;
    default:
      return component.fields;
  }
};

const processPage = (data: any): Page => {
  const content = data.fields.content.map((component: any) =>
    mapObjectToType(component)
  );

  const result = {
    title: data.fields.title,
    slug: data.fields.slug,
    mainColor: data.fields.mainColor || "",
    content: content,
  };

  return result;
};
