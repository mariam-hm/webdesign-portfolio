import { type Image } from "@/types";
import ZoomableCarousel from "./ZoomableCarousel/ZoomableCarousel";

export default function Image({ singleImage, imageGroup }: Image) {
  return (
    <div>
      <p>And voilà!!</p>
      <ZoomableCarousel
        singleImage={singleImage}
        slides={imageGroup}
        fit="contain"
      />
    </div>
  );
}
