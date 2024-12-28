"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import { type Image as ImageType } from "@/types";
import { useState, useEffect, useRef } from "react";
import Thumbnails from "./Thumbnails";

const Lightbox = ({
  isLightBoxOpen,
  slides,
  currentIndex,
  setCurrentIndex,
  onClose,
  pageColors,
}: {
  image: ImageType;
  slides: ImageType[];
  currentIndex: number;
  setCurrentSlideIndex: Function;
}) => {
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  let image = slides[currentIndex];

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideImage = (e: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperRef.current) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();

      // Get the intrinsic aspect ratio of the image
      const image = slides[currentIndex];
      const imageAspectRatio = image.width / image.height;

      // Calculate the visible image dimensions based on the wrapper's size
      const wrapperWidth = wrapperRect.width;
      const wrapperHeight = wrapperRect.height;
      const wrapperAspectRatio = wrapperWidth / wrapperHeight;

      let visibleImageWidth, visibleImageHeight;

      if (imageAspectRatio > wrapperAspectRatio) {
        // Image is constrained by width
        visibleImageWidth = wrapperWidth;
        visibleImageHeight = wrapperWidth / imageAspectRatio;
      } else {
        // Image is constrained by height
        visibleImageWidth = wrapperHeight * imageAspectRatio;
        visibleImageHeight = wrapperHeight;
      }

      // Calculate the visible image's boundaries within the wrapper
      const imageLeft =
        wrapperRect.left + (wrapperWidth - visibleImageWidth) / 2;
      const imageTop =
        wrapperRect.top + (wrapperHeight - visibleImageHeight) / 2;
      const imageRight = imageLeft + visibleImageWidth;
      const imageBottom = imageTop + visibleImageHeight;

      // Check if the click is outside the visible image
      const isClickOutsideImage =
        e.clientX < imageLeft ||
        e.clientX > imageRight ||
        e.clientY < imageTop ||
        e.clientY > imageBottom;

      if (isClickOutsideImage) {
        onClose();
      }
    }
  };

  return (
    <Dialog open={isLightBoxOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-zinc-950/50"></div>

      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="w-[85vw] h-[90vh] flex flex-col space-y-4">
            <div
              className="flex-grow flex relative pointer-events-none"
              ref={wrapperRef}
              onClick={handleClickOutsideImage}
            >
              <Image
                src={image.url}
                alt={image.description}
                fill={true}
                className="pointer-events-auto"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="flex w-full justify-center mt-2">
              <div className="flex justify-center space-x-2 h-[10vh]">
                {slides.map((img, index) => (
                  <div
                    key={img.description}
                    className={`relative w-16 h-16 rounded-sm overflow-hidden cursor-pointer transition duration-200 ${
                      index === currentIndex ? "ring-2" : ""
                    }`}
                    style={{
                      boxShadow:
                        index === currentIndex
                          ? `0 0 0 2px ${pageColors.light.main}`
                          : undefined, // Replace #FF5733 with your hex code
                    }}
                    onClick={() => goToSlide(index)}
                  >
                    <Image
                      src={img.url}
                      quality={50}
                      fill={true}
                      className="object-cover"
                      alt={img.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Lightbox;
