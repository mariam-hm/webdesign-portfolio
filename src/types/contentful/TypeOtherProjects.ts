import type { Entry, EntryFields } from "contentful";

export interface TypeOtherProjectsFields {
    heading?: EntryFields.Symbol;
    projects?: Entry<Record<string, any>>[];
}

export type TypeOtherProjects = Entry<TypeOtherProjectsFields>;
