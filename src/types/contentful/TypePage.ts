import type { Entry, EntryFields } from "contentful";
import type { TypeCalloutFields } from "./TypeCallout";
import type { TypeDuplexComponentFields } from "./TypeDuplexComponent";
import type { TypeHeroSectionFields } from "./TypeHeroSection";
import type { TypeImageFields } from "./TypeImage";
import type { TypeProjectCardFields } from "./TypeProjectCard";
import type { TypeProjectInfoFields } from "./TypeProjectInfo";
import type { TypeProjectsGroupFields } from "./TypeProjectsGroup";
import type { TypeSectionTitleFields } from "./TypeSectionTitle";
import type { TypeSimpleImageFields } from "./TypeSimpleImage";
import type { TypeTestimonialFields } from "./TypeTestimonial";
import type { TypeTextBlockFields } from "./TypeTextBlock";

export interface TypePageFields {
    title?: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    content?: Entry<TypeCalloutFields | TypeDuplexComponentFields | TypeHeroSectionFields | TypeImageFields | TypeProjectCardFields | TypeProjectInfoFields | TypeProjectsGroupFields | TypeSectionTitleFields | TypeSimpleImageFields | TypeTestimonialFields | TypeTextBlockFields>[];
    mainColor?: EntryFields.Symbol;
    internalName: EntryFields.Symbol;
}

export type TypePage = Entry<TypePageFields>;
