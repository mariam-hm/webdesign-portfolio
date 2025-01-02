import type { Entry, EntryFields } from "contentful";

export interface TypeSectionTitleFields {
    heading?: EntryFields.Symbol;
    internalName: EntryFields.Symbol;
}

export type TypeSectionTitle = Entry<TypeSectionTitleFields>;
