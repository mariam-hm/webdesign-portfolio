"use client";

import { type Image as ImageType } from "@/types";
import Image from "next/image";
import ZoomableCarousel from "./ZoomableCarousel/ZoomableCarousel";
import GalleryModal from "./ZoomableCarousel/GalleryModal";
import Lightbox from "./Lightbox";
import { useState } from "react";

const SimpleImage = ({ url, width, height, description, pageColors }) => {
  //console.log("simpleImage props: ", props);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to open the lightbox and set the initial index
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="container group">
      <Image
        className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
        src={url}
        width={width}
        height={height}
        alt={description}
        onClick={() => openLightbox()}
      />
      <div className="opacity-0 text-zinc-400 text-sm text-center italic -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition ease-in-out duration-300">
        {description}
      </div>

      {isLightboxOpen && (
        <Lightbox
          isLightboxOpen={isLightboxOpen}
          imageGroup={[{ url, width, height, description }]}
          currentIndex={0}
          onClose={closeLightbox}
          pageColors={pageColors}
        />
      )}
    </div>
  );
};

export default SimpleImage;
