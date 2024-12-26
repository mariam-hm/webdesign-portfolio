import { type Testimonial } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function Testimonial({
  author,
  textContent,
  image,
}: Testimonial) {
  return (
    <div className="container">
      {image && (
        <Image
          src={image.url}
          alt={image.description}
          width={image.width}
          height={image.height}
          className="rounded-full"
        />
      )}
      <div>{textContent && documentToReactComponents(textContent)}</div>
      <p>{author}</p>
    </div>
  );
}
