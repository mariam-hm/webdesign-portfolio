import type { Entry, EntryFields } from "contentful";
import type { TypeCalloutFields } from "./TypeCallout";
import type { TypeDuplexComponentFields } from "./TypeDuplexComponent";
import type { TypeHeroSectionFields } from "./TypeHeroSection";
import type { TypeImageFields } from "./TypeImage";
import type { TypeOtherProjectsFields } from "./TypeOtherProjects";
import type { TypeProjectInfoFields } from "./TypeProjectInfo";
import type { TypeSectionTitleFields } from "./TypeSectionTitle";
import type { TypeTestimonialFields } from "./TypeTestimonial";
import type { TypeTextBlockFields } from "./TypeTextBlock";

export interface TypePageFields {
    title?: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    content?: Entry<TypeCalloutFields | TypeDuplexComponentFields | TypeHeroSectionFields | TypeImageFields | TypeOtherProjectsFields | TypeProjectInfoFields | TypeSectionTitleFields | TypeTestimonialFields | TypeTextBlockFields>[];
    mainColor?: EntryFields.Symbol;
}

export type TypePage = Entry<TypePageFields>;
