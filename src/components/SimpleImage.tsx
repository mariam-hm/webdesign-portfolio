"use client";

import { type Image as ImageType } from "@/types";
import Image from "next/image";
import ZoomableCarousel from "./ZoomableCarousel/ZoomableCarousel";
import GalleryModal from "./ZoomableCarousel/GalleryModal";
import Lightbox from "./Lightbox";
import { useState } from "react";

const SimpleImage = ({ url, width, height, description, pageColors }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to open the lightbox and set the initial index
  const openLightbox = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 640) {
      setIsLightboxOpen(true);
    }
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="container flex items-center group cursor-pointer">
      <div>
        <Image
          className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
          src={url}
          width={width}
          height={height}
          alt={description}
          onClick={() => openLightbox()}
          sizes="100vw"
        />
        <div className="opacity-0 text-zinc-400 text-sm text-center italic -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition ease-in-out duration-300">
          {description}
        </div>
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
