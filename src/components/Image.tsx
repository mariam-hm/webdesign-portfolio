import { type Image } from "@/types";
import ZoomableCarousel from "./ZoomableCarousel/ZoomableCarousel";

export default function Image({ mainImage, imageGroup }: Image) {
  console.log("Image Group: ", imageGroup);

  const altGroup = imageGroup?.splice(-1);
  console.log("Alt Group: ", altGroup);

  return (
    <div>
      <p>And voilà!!</p>
      <ZoomableCarousel slides={imageGroup} fit="contain" />
    </div>
  );
}
