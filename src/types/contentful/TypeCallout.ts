import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCalloutFields {
    heading?: EntryFields.Symbol;
    textContent?: EntryFields.RichText;
    image?: Asset;
}

export type TypeCallout = Entry<TypeCalloutFields>;
