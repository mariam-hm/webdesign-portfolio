import { Menu } from "@/types";
import { client } from "./contentfulClient";
import { EntrySkeletonType } from "contentful";

export const fetchNavbarMenu = async (locale = "en") => {
  try {
    const response = await client.getEntries<EntrySkeletonType>({
      content_type: "menu",
      "fields.name[match]": "mainMenu",
      include: 1, // Populates nested fields
      locale: locale,
    });

    if (response.items.length > 0) {
      return processMenu(response.items[0]);
    } else {
      // TODO Implement redirect or error handling
      console.log(`No menu found.`);
    }
  } catch (error) {
    console.log(`Failed to fetch menu:`, error);
    // TODO Implement redirect or error handling
  }
};

const processMenu = (data: any): Menu => {
  return {
    pageLinks: data.fields.pageLinks.map((page: any) => {
      return { title: page.fields.title, link: page.fields.slug };
    }),
    name: data.fields.name,
    _type: "mainMenu",
  };
};
