import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeTestimonialFields {
    author?: EntryFields.Symbol;
    textContent?: EntryFields.RichText;
    picture?: Asset;
    internalName: EntryFields.Symbol;
}

export type TypeTestimonial = Entry<TypeTestimonialFields>;
