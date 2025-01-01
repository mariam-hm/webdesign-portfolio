import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function HeroSectionBasic({ mainHeading, subheading }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container flex flex-col justify-center items-start mt-[-8rem]">
        {mainHeading && <h1>{mainHeading}</h1>}
        {subheading && <h3>{subheading}</h3>}
      </div>
    </div>
  );
}
