import dotenv from "dotenv";
import { createClient, Entry } from "contentful";

dotenv.config();

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchEntries(): Promise<any> {
  const contentful = client;
  let result: any;

  try {
    result = await contentful.getEntries({
      content_type: "textBlock",
    });
  } catch (error) {
    let msg;
    if (error instanceof Error) msg = error.message;
    else msg = String(error);

    console.log("Error: ", msg);
  }

  let entries = result.items.map((entry: any) => entry.fields);

  return entries;
}
