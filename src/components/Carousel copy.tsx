"use client";

import { useEffect, useRef, useState } from "react";
import { type Carousel } from "@/types";
import Image from "next/image";
import ZoomableCarousel from "./ZoomableCarousel/ZoomableCarousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Carousel({
  title,
  imageGroup,
  slidesWidth,
  slidesPerView,
  coverOrContain,
  pageColors,
}) {
  let slides = imageGroup;
  slidesPerView = 2;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(
    slides.length <= slidesPerView
  );

  const slideContainerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    // Dynamically calculate the width of a single slide
    const calculateSlideWidth = () => {
      if (slideContainerRef.current) {
        const firstSlide = slideContainerRef.current.querySelector(".slide");
        if (firstSlide) {
          setSlideWidth(firstSlide.clientWidth);
        }
      }
    };

    // Initial calculation
    calculateSlideWidth();
    updateButtonStates(currentSlideIndex);

    // Recalculate on window resize
    window.addEventListener("resize", calculateSlideWidth);
    return () => window.removeEventListener("resize", calculateSlideWidth);
  }, []);

  const updateButtonStates = (index: number) => {
    setPrevBtnDisabled(index === 0);
    setNextBtnDisabled(index >= slides.length - slidesPerView);
  };

  const prevButtonClick = () => {
    console.log("prevButtonClick");
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  };

  const nextButtonClick = () => {
    console.log("nextButtonClick");
    if (currentSlideIndex < slides.length - slidesPerView) {
      goToSlide(currentSlideIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    console.log("goToSlide");
    setCurrentSlideIndex(index);
    if (slideContainerRef.current) {
      let gapValue = 8;
      slideContainerRef.current.style.transform = `translateX(-${
        index * (slideWidth + gapValue)
      }px)`;
    }
    updateButtonStates(index);
  };

  return (
    <div>
      // * Let's build a new carousel here
      <section
        className="container section"
        style={
          {
            "--slides-per-view": slidesPerView.toString(), // Pass as a CSS variable
          } as React.CSSProperties
        } // Ensure compatibility with TypeScript
      >
        <div className="viewport-and-buttons flex">
          <button
            className="disabled:text-light-primary-light"
            disabled={prevBtnDisabled}
            onClick={prevButtonClick}
          >
            <ChevronLeftIcon className="size-8" />
          </button>
          <div className="viewport overflow-hidden">
            <div
              className="slide-container flex"
              style={{ gap: "8px" }}
              ref={slideContainerRef}
            >
              {imageGroup.map((image: any) => (
                <div className="slide" style={{ padding: "0px 8px" }}>
                  <Image
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    alt={image.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="disabled:text-light-primary-light"
            disabled={nextBtnDisabled}
            onClick={nextButtonClick}
          >
            <ChevronRightIcon className="size-8" onClick={nextButtonClick} />
          </button>
        </div>

        <div className="flex justify-center align-middle flex-row mt-2">
          {Array.from({ length: slides.length - slidesPerView + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${
                  index === currentSlideIndex
                    ? "bg-light-primary"
                    : "bg-light-primary-light"
                } mx-1 h-2 w-2 rounded-full`}
              />
            )
          )}
        </div>
      </section>
      <div> ------------------</div>
      <ZoomableCarousel
        singleImage={imageGroup[0]}
        slides={imageGroup}
        slidesWidth={slidesWidth}
        slidesPerView={slidesPerView}
        fit={coverOrContain}
      />
    </div>
  );
}
