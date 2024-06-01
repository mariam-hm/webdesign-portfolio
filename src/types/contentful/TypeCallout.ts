import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCalloutFields {
  heading?: EntryFields.Symbol;
  textContent: EntryFields.RichText;
  image?: {
    url: string;
    width: number;
    height: number;
    description: string;
  };
}

export type TypeCallout = Entry<TypeCalloutFields>;
