import * as Contentful from "./contentful";

type ContentTypeField = {
  _type: string;
};

export type Image = {
  mainImage: {
    url: string;
    width: number;
    height: number;
    description: string;
  };
  imageGroup?: Array<{
    url: string;
    width: number;
    height: number;
    description: string;
  }> &
    ContentTypeField;
}; // * Make url, width, height accessible

export type HeroSection = Contentful.TypeHeroSectionFields & ContentTypeField;
export type Callout = Contentful.TypeCalloutFields & ContentTypeField;
export type LabelValuePair = Contentful.TypeLabelValuePairFields &
  ContentTypeField;
export type SectionTitle = Contentful.TypeSectionTitleFields & ContentTypeField;
export type Testimonial = Contentful.TypeTestimonialFields & ContentTypeField;
export type TextBlock = Omit<Contentful.TypeTextBlockFields, "internalName"> &
  ContentTypeField;

export type ProjectInfo = Omit<Contentful.TypeProjectInfoFields, "details"> &
  ContentTypeField & {
    details: Array<LabelValuePair>;
  };

export type Duplex = Omit<
  Contentful.TypeDuplexComponentFields,
  "componentLeft" | "componentRight"
> &
  ContentTypeField & {
    componentLeft: TextBlock | Callout | Image | Testimonial;
    componentRight: TextBlock | Callout | Image | Testimonial;
  };

export type Menu = {
  pageLinks: {
    title: string;
    link: string;
  }[];
  name: string;
} & ContentTypeField;

export type ProjectCard = Contentful.TypeProjectCardFields & ContentTypeField;

export type Page = Omit<Contentful.TypePageFields, "content"> &
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
