import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeImageFields {
    mainImage: Asset;
    description: EntryFields.Symbol;
    imageGroup?: Asset[];
}

export type TypeImage = Entry<TypeImageFields>;
