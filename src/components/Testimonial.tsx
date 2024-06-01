import { type Testimonial } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function Testimonial({
  author,
  textContent,
  picture,
}: Testimonial) {
  return (
    <div className="bg-zinc-300 p-4 rounded-md">
      {picture && (
        <Image
          src={picture.url}
          alt={picture.description}
          width={picture.width}
          height={picture.height}
          className="rounded-full"
        />
      )}
      <div>{textContent && documentToReactComponents(textContent)}</div>
      <p className="flex justify-end">{author}</p>
    </div>
  );
}
