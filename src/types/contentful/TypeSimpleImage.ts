import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeSimpleImageFields {
    image: Asset;
    internalName: EntryFields.Symbol;
}

export type TypeSimpleImage = Entry<TypeSimpleImageFields>;
