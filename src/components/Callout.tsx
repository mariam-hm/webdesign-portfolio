import { type Callout } from "@/types";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function Callout({
  heading,
  textContent,
  image,
  pageColors,
}: Callout) {
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => (
        <span
          style={{ color: `${pageColors.light.dark}` }}
          className="font-calistoga text-lg"
        >
          {text}
        </span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="text-center">{children}</p>
      ),
    },
  };

  return (
    <div className="container">
      <div
        style={{
          backgroundColor: `${pageColors.light.light}`,
        }}
        className="flex flex-col p-8 gap-2 rounded my-12"
      >
        <div className="flex justify-center items-center">
          {image && (
            <Image
              src={image.url}
              alt={image.description}
              width={image.width}
              height={image.height}
              className="w-[500px] h-40"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>

        <h4 className="flex justify-center items-center">{heading}</h4>
        {documentToReactComponents(textContent!, options)}
      </div>
    </div>
  );
}
