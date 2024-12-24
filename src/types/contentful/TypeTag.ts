import type { Entry, EntryFields } from "contentful";

export interface TypeTagFields {
    name: EntryFields.Symbol;
    id: EntryFields.Symbol;
    color?: EntryFields.Symbol;
    internalName: EntryFields.Symbol;
}

export type TypeTag = Entry<TypeTagFields>;
