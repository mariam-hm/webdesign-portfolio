"use client";

import { useState } from "react";
import Carousel from "./Carousel"; // Carousel Component
import Lightbox from "./Lightbox"; // Lightbox Component

const CarouselLightbox = ({ imageGroup, pageColors }) => {
  //console.log(imageGroup);

  let images = imageGroup;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to open the lightbox and set the initial index
  const openLightbox = (index) => {
    console.log("open lightbox");
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  console.log("openLightbox in CarouselLightbox: ", openLightbox);

  return (
    <div>
      <Carousel
        imageGroup={images}
        currentSlideIndex={currentIndex}
        setCurrentSlideIndex={setCurrentIndex}
        onImageClick={openLightbox}
        pageColors={pageColors}
      />

      {isLightboxOpen && (
        <Lightbox
          isLightBoxOpen={isLightboxOpen}
          slides={images}
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
