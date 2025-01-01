import { type Testimonial } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function Testimonial({
  author,
  textContent,
  image,
  pageColors,
}: Testimonial) {
  const hexToRgba = (hex, opacity) => {
    // Remove the hash if it exists
    const trimmedHex = hex.replace("#", "");
    // Convert hex to RGB
    const bigint = parseInt(trimmedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const quoteMarkColor = hexToRgba(pageColors.light.main, 0.5);

  return (
    <div className="container flex justify-center items-center">
      <blockquote
        className="relative max-w-xl flex justify-between items-center p-8 my-8 rounded-lg overflow-hidden gap-6 z-0"
        style={{
          backgroundColor: pageColors.light.light,
        }}
      >
        {" "}
        <div
          className="absolute text-[16rem] top-[-7rem] left-0 font-serif pointer-events-none z-10"
          style={{ color: quoteMarkColor }}
        >
          ❝
        </div>
        <div
          className="flex flex-col z-20"
          style={{ color: pageColors.light.dark }}
        >
          <div className="font-calistoga">
            {textContent && documentToReactComponents(textContent)}
          </div>
          <p className="text-right mt-0">{"- " + author}</p>
        </div>
        {image && (
          <div
            className="relative flex shrink-0 h-24 w-24 rounded-full overflow-hidden z-20 border"
            style={{ borderColor: pageColors.light.dark }}
          >
            <Image
              src={image.url}
              alt={image.description}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </blockquote>
    </div>
  );
}
