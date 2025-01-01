import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function HeroSectionBasic({ mainHeading, subheading }) {
  return (
    <div className="container flex justify-center items-center h-[90vh]">
      <div className="flex flex-col justify-center items-start w-4/5 mb-4 text-justify gap-0">
        {mainHeading && <h1 className="text-4xl">{mainHeading}</h1>}
        {subheading && (
          <h3 className="text-xl leading-tight mt-2">{subheading}</h3>
        )}
      </div>
    </div>
  );
}
