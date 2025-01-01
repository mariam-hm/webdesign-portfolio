import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function HeroSectionBasic({
  mainHeading,
  subheading,
  textContent,
  mainImage,
  backgroundImage,
  pageColors,
}) {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage.url})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc-950 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative text-white text-center flex flex-col justify-center items-center h-full">
        {subheading && (
          <h4
            className="text-lg font-medium mt-0 mb-2"
            style={{ color: pageColors.light.main }}
          >
            {subheading}
          </h4>
        )}
        {mainHeading && (
          <h2 className="text-3xl font-bold mt-0 mb-6">{mainHeading}</h2>
        )}

        {mainImage && (
          <div className="flex justify-center items-center mb-6">
            <Image
              src={mainImage.url}
              width={mainImage.width}
              height={mainImage.height}
              alt={mainImage.description}
              className="rounded-lg"
            />
          </div>
        )}

        <div className="text-lg max-w-4xl mx-auto">
          {textContent && documentToReactComponents(textContent)}
        </div>
      </div>
    </div>
  );
}
