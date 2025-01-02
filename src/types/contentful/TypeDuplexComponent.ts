import type { Entry, EntryFields } from "contentful";

export interface TypeDuplexComponentFields {
    heading?: EntryFields.Symbol;
    componentLeft?: Entry<Record<string, any>>;
    componentRight?: Entry<Record<string, any>>;
    internalName: EntryFields.Symbol;
}

export type TypeDuplexComponent = Entry<TypeDuplexComponentFields>;
