import { type Callout } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function Callout({ heading, textContent, image }: Callout) {
  return (
    <div className="container bg-zinc-300 p-4 rounded-md">
      {image && (
        <Image
          src={image.url}
          alt={image.description}
          width={image.width}
          height={image.height}
        />
      )}
      <h3>{heading}</h3>
      {documentToReactComponents(textContent)}
    </div>
  );
}
