import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeHeroSectionFields {
    mainHeading?: EntryFields.Symbol;
    subheading?: EntryFields.Symbol;
    textContent?: EntryFields.RichText;
    mainImage?: Asset;
    backgroundImage?: Asset;
    usedImages?: Asset[];
    style: EntryFields.Symbol;
    internalName: EntryFields.Symbol;
}

export type TypeHeroSection = Entry<TypeHeroSectionFields>;
