"use client";

import { useState } from "react";
import Carousel from "./Carousel"; // Carousel Component
import Lightbox from "./Lightbox"; // Lightbox Component

const CarouselLightbox = ({
  title,
  imageGroup,
  slidesPerViewInit,
  scrollPerView,
  imageFit,
  aspectRatio,
  pageColors,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to open the lightbox and set the initial index
  const openLightbox = (index) => {
    setCurrentIndex(index);
    if (typeof window !== "undefined" && window.innerWidth >= 640) {
      setIsLightboxOpen(true);
    }
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div>
      <Carousel
        title={title}
        imageGroup={imageGroup}
        slidesPerViewInit={slidesPerViewInit}
        scrollPerView={scrollPerView}
        imageFit={imageFit}
        aspectRatio={aspectRatio}
        currentSlideIndex={currentIndex}
        setCurrentSlideIndex={setCurrentIndex}
        onImageClick={openLightbox}
        pageColors={pageColors}
      />

      {isLightboxOpen && (
        <Lightbox
          isLightboxOpen={isLightboxOpen}
          imageGroup={imageGroup}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClose={closeLightbox}
          pageColors={pageColors}
        />
      )}
    </div>
  );
};

export default CarouselLightbox;
