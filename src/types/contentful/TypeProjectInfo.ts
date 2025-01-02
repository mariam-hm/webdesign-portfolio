import type { Entry, EntryFields } from "contentful";
import type { TypeLabelValuePairFields } from "./TypeLabelValuePair";

export interface TypeProjectInfoFields {
    details?: Entry<TypeLabelValuePairFields>[];
    internalName: EntryFields.Symbol;
}

export type TypeProjectInfo = Entry<TypeProjectInfoFields>;
