import type { Entry, EntryFields } from "contentful";

export interface TypeLabelValuePairFields {
    label?: EntryFields.Symbol;
    value: EntryFields.RichText;
}

export type TypeLabelValuePair = Entry<TypeLabelValuePairFields>;
