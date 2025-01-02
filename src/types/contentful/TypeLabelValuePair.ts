import type { Entry, EntryFields } from "contentful";

export interface TypeLabelValuePairFields {
    label?: EntryFields.Symbol;
    value: EntryFields.RichText;
    internalName: EntryFields.Symbol;
}

export type TypeLabelValuePair = Entry<TypeLabelValuePairFields>;
