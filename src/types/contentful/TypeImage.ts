import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeImageFields {
  mainImage: Asset;
  imageGroup?: Asset[];
}

export type TypeImage = Entry<TypeImageFields>;
