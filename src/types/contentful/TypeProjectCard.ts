import type { Asset, Entry, EntryFields } from "contentful";
import type { TypePageFields } from "./TypePage";
import type { TypeTagFields } from "./TypeTag";

export interface TypeProjectCardFields {
    title?: EntryFields.Symbol;
    client?: EntryFields.Symbol;
    description?: EntryFields.RichText;
    coverImage?: Asset;
    page: Entry<TypePageFields>;
    tags?: Entry<TypeTagFields>[];
    internalName: EntryFields.Symbol;
}

export type TypeProjectCard = Entry<TypeProjectCardFields>;
