import type { Entry, EntryFields } from "contentful";
import type { TypeProjectCardFields } from "./TypeProjectCard";

export interface TypeProjectsGroupFields {
    textContent?: EntryFields.Symbol;
    projectCardsGroup: Entry<TypeProjectCardFields>[];
    internalName: EntryFields.Symbol;
}

export type TypeProjectsGroup = Entry<TypeProjectsGroupFields>;
