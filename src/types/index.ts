import * as Contentful from "./contentful";

// TODO in contentful:
// Remake the Carousel and Image Types so they get the right ids
// Rename the testimonial property picture to image

// ? All types:

type ContentTypeField = {
  pageColors?: any;
  _type: string;
};

// * Carousel
export type Carousel = Omit<
  Contentful.TypeImageFields,
  "imageGroup" | "internalName"
> & {
  imageGroup: Array<Image>;
} & ContentTypeField;

// * Image
export type Image = {
  // Make url, width, height accessible
  url: string;
  width: number;
  height: number;
  description: string;
} & ContentTypeField;

// * Hero section
export type HeroSection = Omit<
  Contentful.TypeHeroSectionFields,
  "mainImage" | "backgroundImage" | "usedImages" | "internalName"
> & {
  mainImage: Image;
  backgroundImage: Image;
  usedImages: Array<Image>;
} & ContentTypeField;

// * Callout
export type Callout = Omit<
  Contentful.TypeCalloutFields,
  "image" | "internalName"
> & {
  image?: Image;
} & ContentTypeField;

// * Label Value pair
export type LabelValuePair = Omit<
  Contentful.TypeLabelValuePairFields,
  "internalName"
> &
  ContentTypeField;

// * Section title
export type SectionTitle = Omit<
  Contentful.TypeSectionTitleFields,
  "internalName"
> &
  ContentTypeField;

// * Testimonial
export type Testimonial = Omit<Contentful.TypeTestimonialFields, "picture"> &
  ContentTypeField & {
    image?: Image;
  };

// * Text block
export type TextBlock = Omit<Contentful.TypeTextBlockFields, "internalName"> &
  ContentTypeField;

// * Project Info
export type ProjectInfo = Omit<
  Contentful.TypeProjectInfoFields,
  "details" | "internalName"
> &
  ContentTypeField & {
    details: Array<LabelValuePair>;
  };

// * Project Info
export type Duplex = Omit<
  Contentful.TypeDuplexComponentFields,
  "componentLeft" | "componentRight" | "internalName"
> &
  ContentTypeField & {
    componentLeft: TextBlock | Callout | Image | Testimonial;
    componentRight: TextBlock | Callout | Image | Testimonial;
  };

// * Project Card
export type ProjectCard = Omit<
  Contentful.TypeProjectCardFields,
  "internalName"
> &
  ContentTypeField;

// * Project Group
export type ProjectGroup = Omit<
  Contentful.TypeProjectsGroupFields,
  "internalName" | "projectsCardsGroup"
> & {
  projectCardsGroup: Array<ProjectCard>;
} & ContentTypeField;

// * Tag
export type Tag = Omit<Contentful.TypeTagFields, "internalName"> &
  ContentTypeField;

// * Page
export type Page = Omit<Contentful.TypePageFields, "content" | "internalName"> &
  ContentTypeField & {
    content: Array<
      | Image
      | Callout
      | SectionTitle
      | Testimonial
      | TextBlock
      | ProjectInfo
      | Duplex
    >;
  };

// * Menu
export type Menu = {
  pageLinks: {
    title: string;
    link: string;
  }[];
  name: string;
} & ContentTypeField;
