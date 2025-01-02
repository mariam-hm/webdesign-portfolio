import type { Entry, EntryFields } from "contentful";

export interface TypeTextBlockFields {
    heading?: EntryFields.Symbol;
    subheading?: EntryFields.Symbol;
    textContent: EntryFields.RichText;
    internalName?: EntryFields.Symbol;
}

export type TypeTextBlock = Entry<TypeTextBlockFields>;
