import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function HeroSectionBasic({ mainHeading, subheading }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-start">
        <h1>{mainHeading}</h1>
        <h3>{subheading}</h3>
      </div>
    </div>
  );
}
