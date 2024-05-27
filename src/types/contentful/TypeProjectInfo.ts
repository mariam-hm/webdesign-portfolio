import type { Entry } from "contentful";
import type { TypeLabelValuePairFields } from "./TypeLabelValuePair";

export interface TypeProjectInfoFields {
    details?: Entry<TypeLabelValuePairFields>[];
}

export type TypeProjectInfo = Entry<TypeProjectInfoFields>;
