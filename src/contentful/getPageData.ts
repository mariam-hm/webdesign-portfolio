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
      const processedPage = processPage(response.items[0]);
      return processedPage;
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
      const processedPages = response.items.map(
        (page) => processPage(page)
        // TODO get a pageMap for the slugs and use it to make the project cards
      );
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
  const pageColors =
    data.fields.colorPalette && Object.keys(data.fields.colorPalette).length > 0
      ? data.fields.colorPalette
      : {
          light: {
            light: "#ffbab8",
            main: "#ff6f6b",
            dark: "#ce423e",
          },
          dark: {
            light: "#ffbab8",
            main: "#ff6f6b",
            dark: "#ce423e",
          },
        };

  const content = data.fields.content
    ? data.fields.content.map((component: any) =>
        mapObjectToType(component, pageColors)
      )
    : []; // TODO Add something to signal it's an empty page

  return {
    title: data.fields.title,
    slug: data.fields.slug,
    pageColors: pageColors,
    content: content,
    _type: "page",
  };
};

/**
 * Maps each Contentful entry to the corresponding TypeScript type
 * @param {any} component - The Contentful entry JSON object
 * @returns {any} - The mapped TypeScript type (e.g., TextBlock, Callout, Image)
 */
const mapObjectToType = (
  component: any,
  pageColors: any = null,
  origin = ""
): any => {
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
        pageColors,
        _type: "heroSection",
      } as HeroSection;

    case "projectInfo":
      const projectInfo = { ...component.fields };

      // TODO Maybe add comments to know what fields are required?
      const details = component.fields.details
        ? component.fields.details.map((labelValueObj: any) => {
            return {
              ...labelValueObj.fields,
              _type: "labelValuePair",
            } as LabelValuePair;
          })
        : [];

      projectInfo.details = details;

      return {
        ...projectInfo,
        pageColors,
        _type: "projectInfo",
      } as ProjectInfo;

    case "sectionTitle":
      return {
        ...component.fields,
        pageColors,
        _type: "sectionTitle",
      } as SectionTitle;

    case "textBlock":
      const textBlock = { ...component.fields };

      // * HANDLE SPECIAL EMBEDDED ASSETS
      // * Make the image info more accessible to the textblock
      // Maybe one day I'll have to do it with video
      textBlock.textContent.content.map((node: any) => {
        if (
          node.nodeType == "embedded-asset-block" &&
          node.data.target.fields.file.contentType.includes("image")
        ) {
          node.image = processImageAsset(node.data.target);
        }
      });

      return {
        ...textBlock,
        pageColors,
        _type: "textBlock",
      } as TextBlock;

    case "duplexComponent":
      return {
        heading: component.fields.heading,
        componentLeft: mapObjectToType(
          component.fields.componentLeft,
          pageColors
        ),
        componentRight: mapObjectToType(
          component.fields.componentRight,
          pageColors
        ),
        pageColors,
        _type: "duplex",
      } as Duplex;

    case "callout":
      const callout = { ...component.fields };

      let img = processImageAsset(component.fields.image);
      callout.image = img;

      return {
        ...callout,
        pageColors,
        _type: "callout",
      } as Callout;

    case "simpleImage":
      let image = processImageAsset(component.fields.image);
      return { ...image, pageColors, _type: "simpleImage" } as Image;

    case "image": // ! WARNING: This is actually the current Carousel type
      // It is a required field, but you never know
      const imageGrp = component.fields.imageGroup
        ? component.fields.imageGroup.map((img: any) => {
            return processImageAsset(img);
          })
        : [];

      return {
        title: component.fields.title || "",
        imageGroup: imageGrp || [],
        slidesPerViewInit: component.fields.slidesPerView || 1,
        scrollPerView: component.fields.scrollPerView || false,
        imageFit: component.fields.imageFit || "none",
        aspectRatio: component.fields.aspectRatio || "16:9",
        pageColors,
        _type: "image",
      } as Carousel;

    case "customImageLayout":
      const customImageLayout = { ...component.fields };

      const imgGroup = customImageLayout.imageGroup.map((image) =>
        processImageAsset(image)
      );

      customImageLayout.imageGroup = imgGroup;

      return { ...customImageLayout, pageColors, _type: "customImageLayout" };

    case "testimonial":
      const testimonial = { ...component.fields };

      const pict = processImageAsset(component.fields.picture);
      testimonial.image = pict;

      return {
        ...testimonial,
        pageColors,
        _type: "testimonial",
      } as Testimonial;

    case "projectCard":
      // TODO Investigate problem caused by because of already processed component
      // ? It seems like this is not actually working well for project groups: when I
      // ? added a card that wasn't on the homepage, it made the whole thing freez and bug
      const projectCard = { ...component.fields };
      // Process image
      const coverImg = processImageAsset(component.fields.coverImage);
      projectCard.coverImage = coverImg;

      // Process Tags
      const tags = component.fields.tags
        ? component.fields.tags.map((tag: any) => {
            return {
              ...tag.fields,
              _type: "tag",
            };
          })
        : [];

      projectCard.tags = tags;

      return { ...projectCard, pageColors, _type: "projectCard" };

    case "projectsGroup":
      const cardsGroup = component.fields.projectCardsGroup
        ? component.fields.projectCardsGroup.map((card: any) => {
            return mapObjectToType(card, pageColors, "from project group");
          })
        : [];

      return {
        textContent: component.fields.textContent || "",
        projectCardsGroup: cardsGroup,
        pageColors,
        _type: "projectsGroup",
      };

    default:
      // TODO Add error handling
      console.log("Entry isn't mapped to any type");
      return component.fields;
  }
};

export const processImageAsset = (imgAsset: any) => {
  if (imgAsset) {
    return {
      url: "https:" + imgAsset.fields.file.url,
      width: imgAsset.fields.file.details.image.width,
      height: imgAsset.fields.file.details.image.height,
      description: imgAsset.fields.description,
    };
  } else {
    return null;
  }
};
