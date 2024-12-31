import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeImageFields {
    title?: EntryFields.Symbol;
    imageGroup?: Asset[];
    slidesWidth?: EntryFields.Integer;
    slidesPerView?: EntryFields.Integer;
    coverOrContain?: EntryFields.Boolean;
    internalName?: EntryFields.Symbol;
}

export type TypeImage = Entry<TypeImageFields>;
