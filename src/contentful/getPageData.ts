import { client } from "./contentfulClient";
import { EntrySkeletonType } from "contentful";
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

/**
 * Fetch a page by its slug from Contentful
 * @param {string} slug - The slug of the page to fetch
 * @param {string} [locale=en-CA] - The locale of the content to fetch
 * @returns {Promise<Page>} - The fetched and processed page data
 * TODO Add error handling
 * @throws Will throw an error if the fetch operation fails
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
      return processPage(response.items[0]);
    } else {
      // TODO Implement redirect or error handling
      console.log(`No page found with slug ${slug}`);
    }
  } catch (error) {
    console.error(`Failed to fetch page with slug ${slug}:`, error);
    // TODO Implement redirect or error handling
  }
};

/**
 * Maps each Contentful entry to the corresponding TypeScript type
 * @param {any} component - The Contentful entry JSON object
 * @returns {any} - The mapped TypeScript type (e.g., TextBlock, Callout, Image)
 */
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
      // TODO Add error handling
      console.log("Entry isn't mapped to any type");
      return component.fields;
  }
};

/**
 *  Processes the raw page data from Contentful and outputs a page with the right types
 * @param {any} data - The full page JSON object from Contentful
 * @returns {Page} - The processed page data with mapped content types
 */
const processPage = (data: any): Page => {
  const content = data.fields.content.map((component: any) =>
    mapObjectToType(component)
  );

  return {
    title: data.fields.title,
    slug: data.fields.slug,
    mainColor: data.fields.mainColor || "",
    content: content,
  };
};
