import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function HeroSectionBasic({
  mainHeading,
  subheading,
  textContent,
  mainImage,
  backgroundImage,
}) {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage.url})` }}>
      <h2>{mainHeading}</h2>
      <h4>{subheading}</h4>
      <Image
        src={mainImage.url}
        width={mainImage.width}
        height={mainImage.height}
        alt={mainImage.description}
      />
      <div>{textContent && documentToReactComponents(textContent)}</div>
    </div>
  );
}
