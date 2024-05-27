import type { Entry } from "contentful";
import type { TypePageFields } from "./TypePage";

export interface TypeMenuFields {
    pageLinks?: Entry<TypePageFields>[];
}

export type TypeMenu = Entry<TypeMenuFields>;
