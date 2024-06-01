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
 * @param {string} [locale=en] - The locale of the content to fetch
 * @returns {Promise<Page>} - The fetched and processed page data
 * TODO Add error handling
 * @throws Will throw an error if the fetch operation fails
 */
export const fetchPage = async (slug: string, locale = "en") => {
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
    console.log(`Failed to fetch page with slug ${slug}:`, error);
    // TODO Implement redirect or error handling
  }
};

/**
 * Fetch a page by its slug from Contentful
 * @param {string} slug - The slug of the page to fetch
 * @param {string} [locale=en] - The locale of the content to fetch
 * @returns {Promise<Page>} - The fetched and processed page data
 * TODO Add error handling
 * @throws Will throw an error if the fetch operation fails
 */
export const fetchAllPages = async (locale = "en") => {
  try {
    const response = await client.getEntries<EntrySkeletonType>({
      content_type: "page",
      include: 5, // Populates nested fields
      locale: locale,
    });

    if (response.items.length > 0) {
      const processedPages = response.items.map((page) => processPage(page));
      return processedPages;
    } else {
      // TODO Implement redirect or error handling
      console.log("No pages found.");
    }
  } catch (error) {
    console.log("Failed to fetch pages: ", error);
    // TODO Implement redirect or error handling
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
    _type: "page",
  };
};

/**
 * Maps each Contentful entry to the corresponding TypeScript type
 * @param {any} component - The Contentful entry JSON object
 * @returns {any} - The mapped TypeScript type (e.g., TextBlock, Callout, Image)
 */
const mapObjectToType = (component: any): any => {
  switch (component.sys.contentType.sys.id) {
    case "heroSection":
      return { ...component.fields, _type: "heroSection" } as SectionTitle;
    case "projectInfo":
      const details = component.fields.details.map((labelValueObj: any) => {
        return {
          ...labelValueObj.fields,
          _type: "labelValuePair",
        } as LabelValuePair;
      });
      component.fields.details = details;
      return { ...component.fields, _type: "projectInfo" } as ProjectInfo;
    case "sectionTitle":
      return { ...component.fields, _type: "sectionTitle" } as SectionTitle;
    case "textBlock":
      return { ...component.fields, _type: "textBlock" } as TextBlock;
    case "duplexComponent":
      return {
        heading: component.fields.heading,
        componentLeft: mapObjectToType(component.fields.componentLeft),
        componentRight: mapObjectToType(component.fields.componentRight),
        _type: "duplex",
      } as Duplex;
    case "callout":
      let img = {
        url: "https:" + component.fields.image.fields.file.url,
        width: component.fields.image.fields.file.details.image.width,
        height: component.fields.image.fields.file.details.image.height,
        description: component.fields.image.fields.description,
      };

      component.fields.image = img;
      return {
        ...component.fields,
        _type: "callout",
      } as Callout;
    case "image":
      const mainImg = {
        url: "https:" + component.fields.mainImage.fields.file.url,
        width: component.fields.mainImage.fields.file.details.image.width,
        height: component.fields.mainImage.fields.file.details.image.height,
        description: component.fields.mainImage.fields.description,
      };

      const imageGrp = component.fields.imageGroup
        ? component.fields.imageGroup.map((img: any) => {
            return {
              url: "https:" + img.fields.file.url,
              width: img.fields.file.details.image.width,
              height: img.fields.file.details.image.height,
              description: img.fields.description,
            };
          })
        : [];

      return {
        mainImage: mainImg,
        imageGroup: imageGrp,
        _type: "image",
      } as Image;
    case "testimonial":
      const pict = {
        url: "https:" + component.fields.picture.fields.file.url,
        width: component.fields.picture.fields.file.details.image.width,
        height: component.fields.picture.fields.file.details.image.height,
        description: component.fields.picture.fields.description,
      };

      component.fields.picture = pict;

      return { ...component.fields, _type: "testimonial" } as Testimonial;
    default:
      // TODO Add error handling
      console.log("Entry isn't mapped to any type");
      return component.fields;
  }
};
