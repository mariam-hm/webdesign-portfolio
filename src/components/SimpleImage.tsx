import { type Image as ImageType } from "@/types";
import Image from "next/image";
import ZoomableCarousel from "./ZoomableCarousel/ZoomableCarousel";
import GalleryModal from "./ZoomableCarousel/GalleryModal";
import Lightbox from "./Lightbox";

export default function SimpleImage({
  url,
  width,
  height,
  description,
}: ImageType) {
  return (
    <div>
      {/* <Lightbox image={{ url, width, height, description }} /> */}
      <div className="container flex flex-col justify-center align-middle">
        <Image src={url} width={width} height={height} alt={description} />
      </div>
    </div>
  );
}
