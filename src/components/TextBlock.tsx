import { type TextBlock } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function TextBlock({
  heading,
  subheading,
  textContent,
}: TextBlock) {
  // TODO Handle null values to make no empty div possible
  return (
    <section className="container">
      <div>
        <h5>{subheading}</h5>
        <h4>{heading}</h4>
      </div>
      {documentToReactComponents(textContent)}
    </section>
  );
}
