import { type TextBlock } from "@/types";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { processImageAsset } from "@/contentful/getPageData";
import SimpleImage from "./SimpleImage";

export default function TextBlock({
  heading,
  subheading,
  textContent,
}: TextBlock) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        if (node.data.target.fields.file.contentType.includes("image")) {
          return <SimpleImage {...node.image} />;
        } else {
          return null;
        }
      },
    },
  };

  return (
    <section className="container">
      <div>
        {subheading && <h5>{subheading}</h5>}
        {heading &&
          (subheading ? (
            <h4 className="mt-0">{heading}</h4>
          ) : (
            <h4>{heading}</h4>
          ))}
      </div>
      {documentToReactComponents(textContent, options)}
    </section>
  );
}
