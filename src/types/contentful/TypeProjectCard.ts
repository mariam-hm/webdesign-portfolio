import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeProjectCardFields {
    title?: EntryFields.Symbol;
    client?: EntryFields.Symbol;
    description?: EntryFields.RichText;
    tags?: EntryFields.Symbol[];
    projectCover?: Asset;
}

export type TypeProjectCard = Entry<TypeProjectCardFields>;
