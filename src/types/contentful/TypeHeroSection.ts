import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeHeroSectionFields {
    mainHeading?: EntryFields.Symbol;
    subheading?: EntryFields.Symbol;
    textContent?: EntryFields.RichText;
    usedImages?: Asset[];
}

export type TypeHeroSection = Entry<TypeHeroSectionFields>;
