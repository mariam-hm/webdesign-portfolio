import * as Contentful from "./contentful";

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
  }>;
}; // * Make url, width, height accessible

export type Callout = Contentful.TypeCalloutFields;
export type LabelValuePair = Contentful.TypeLabelValuePairFields;
export type SectionTitle = Contentful.TypeSectionTitleFields;
export type Testimonial = Contentful.TypeTestimonialFields;
export type TextBlock = Omit<Contentful.TypeTextBlockFields, "internalName">;

export type ProjectInfo = Omit<Contentful.TypeProjectInfoFields, "details"> & {
  details: Array<LabelValuePair>;
};

export type Duplex = Omit<
  Contentful.TypeDuplexComponentFields,
  "componentLeft" | "componentRight"
> & {
  componentLeft: TextBlock | Callout | Image | Testimonial;
  componentRight: TextBlock | Callout | Image | Testimonial;
};

export type Menu = {
  pageLinks: string[];
};

export type ProjectCard = Contentful.TypeProjectCardFields;

export type Page = Omit<Contentful.TypePageFields, "content"> & {
  content:
    | Image
    | Callout
    | SectionTitle
    | Testimonial
    | TextBlock
    | ProjectInfo
    | Duplex;
};
