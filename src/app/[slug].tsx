import { fetchPage } from "../contentful/contentfulService";

export default function Page() {
  const page = fetchPage("id");

  return <div>[slug]</div>;
}
