import type { Entry, EntryFields } from "contentful";

export interface TypePageFields {
  title?: EntryFields.Symbol;
  slug: EntryFields.Symbol;
  content?: Entry<Record<string, any>>[];
  mainColor?: EntryFields.Symbol;
}

export type TypePage = Entry<TypePageFields>;
