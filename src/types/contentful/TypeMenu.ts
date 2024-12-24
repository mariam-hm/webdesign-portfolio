import type { Entry, EntryFields } from "contentful";
import type { TypePageFields } from "./TypePage";

export interface TypeMenuFields {
    pageLinks?: Entry<TypePageFields>[];
    name?: EntryFields.Symbol;
    internalName: EntryFields.Symbol;
}

export type TypeMenu = Entry<TypeMenuFields>;
