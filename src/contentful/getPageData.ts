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
  HeroSection,
  Carousel,
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
      let mainImg = component.fields.mainImage
        ? processImageAsset(component.fields.mainImage)
        : [];
      let bgImg = component.fields.backgroundImage
        ? processImageAsset(component.fields.backgroundImage)
        : [];

      let usedImgs = component.fields.usedImages
        ? component.fields.usedImages.map((img: any) => processImageAsset(img))
        : [];

      return {
        mainHeading: component.fields.mainHeading || "",
        subheading: component.fields.subheading || "",
        textContent: component.fields.textContent || "",
        mainImage: mainImg || null,
        backgroundImage: bgImg || null,
        usedImages: usedImgs || [],
        style: component.fields.style || "basic",
        _type: "heroSection",
      } as HeroSection;

    case "projectInfo":
      const details = component.fields.details.map((labelValueObj: any) => {
        return {
          ...labelValueObj.fields,
          _type: "labelValuePair",
        } as LabelValuePair;
      });
      component.fields.details = details || [];
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
      let img = processImageAsset(component.fields.image);
      component.fields.image = img;

      return {
        ...component.fields,
        _type: "callout",
      } as Callout;

    case "simpleImage":
      let image = processImageAsset(component.fields.image);
      return image as Image;

    case "image": // ! WARNING: This is the current Carousel type
      const imageGrp = component.fields.imageGroup.map((img: any) => {
        return processImageAsset(img);
      });
      return {
        title: component.fields.title || "",
        imageGroup: imageGrp || [],
        slidesWidth: component.fields.slidesWidth || "80vw",
        slidesPerView: component.fields.slidesPerView || 1,
        coverOrContain: component.fields.coverOrContain || "cover",
        _type: "image",
      } as Carousel;

    case "testimonial":
      const pict = processImageAsset(component.fields.picture);
      component.fields.picture = pict;

      return { ...component.fields, _type: "testimonial" } as Testimonial;
    case "projectCard":
      // Get page slug
      component.fields.page = component.fields.page.fields.slug;

      // Process image
      const coverImg = processImageAsset(component.fields.coverImage);
      component.fields.coverImage = coverImg;

      // Process Tags
      const tags = component.fields.tags.map((tag: any) => {
        return {
          ...tag.fields,
          _type: "tag",
        };
      });

      component.fields.tags = tags;

      return { ...component.fields, _type: "projectCard" };

    case "projectsGroup":
      let projectCards = component.fields.projectCardsGroup.map((card: any) => {
        // Get page slug
        let pageSlug = card.fields.page.fields.slug;

        // Process image
        const coverImg = processImageAsset(card.fields.coverImage);

        // Get tags
        const tags = card.fields.tags.map((tag: any) => {
          return {
            ...tag.fields,
            _type: "tag",
          };
        });

        return {
          title: card.fields.title,
          client: card.fields.client,
          description: card.fields.description, // We may not need it
          coverImage: coverImg,
          page: pageSlug,
          tags: tags,
          _type: "projectCardSmall",
        };
      });

      component.fields.projectCardsGroup = projectCards;

      return { ...component.fields, _type: "projectsGroup" };

    default:
      // TODO Add error handling
      console.log("Entry isn't mapped to any type");
      return component.fields;
  }
};

const processImageAsset = (imgAsset: any) => {
  return {
    url: "https:" + imgAsset.fields.file.url,
    width: imgAsset.fields.file.details.image.width,
    height: imgAsset.fields.file.details.image.height,
    description: imgAsset.fields.description,
  };
};
