import * as Contentful from "./contentful";

type MetaFields = {
  _id: string;
};

export type Page = Contentful.TypePageFields &
  MetaFields & { urlPath: "Hello" };
