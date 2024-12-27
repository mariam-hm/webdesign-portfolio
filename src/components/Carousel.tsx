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
  slidesPerViewInit,
  coverOrContain,
  pageColors,
}) {
  const slides = imageGroup;

  const slidesToScrollInit = 2; // Keep slidesToScroll fixed as per your initial logic

  // Function to calculate slides per view based on window size
  const getSlidesPerView = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024)
      return slidesPerViewInit;
    return 1;
  };

  const getSlidesToScroll = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024)
      return slidesToScrollInit;
    return 1;
  };

  // State to manage slides per view
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const [slidesToScroll, setSlidesToScroll] = useState(getSlidesToScroll());

  // State to manage current slide index and button states
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(
    slides.length <= slidesPerView
  );

  const slideContainerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Track whether the component has mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);

    // Dynamically calculate the number of slides per view
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
      setSlidesToScroll(getSlidesToScroll());
    };

    // Initial calculations
    handleResize();

    // Recalculate slide width when resizing
    const calculateSlideWidth = () => {
      if (slideContainerRef.current) {
        const firstSlide = slideContainerRef.current.querySelector(".slide");
        if (firstSlide) {
          setSlideWidth(firstSlide.clientWidth);
        }
      }
    };

    calculateSlideWidth();
    updateButtonStates(currentSlideIndex);

    // Recalculate on window resize
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", calculateSlideWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", calculateSlideWidth);
    };
  }, [currentSlideIndex]);

  const updateButtonStates = (index: number) => {
    setPrevBtnDisabled(index === 0);
    setNextBtnDisabled(index >= slides.length - slidesPerView);
  };

  const prevButtonClick = () => {
    console.log("prevButtonClick");
    const prevSlideIndex = currentSlideIndex - slidesToScroll;
    const minIndex = 0;
    // Ensure we don't scroll past the first set of slides
    if (prevSlideIndex >= minIndex) {
      goToSlide(prevSlideIndex);
    } else {
      goToSlide(minIndex); // Go to the first valid slide index
    }
  };

  const nextButtonClick = () => {
    console.log("nextButtonClick");
    const nextSlideIndex = currentSlideIndex + slidesToScroll;
    const maxIndex = slides.length - slidesPerView;
    // Ensure we don't scroll past the last set of slides
    if (nextSlideIndex <= maxIndex) {
      goToSlide(nextSlideIndex);
    } else {
      goToSlide(maxIndex); // Go to the last valid slide index
    }
  };

  const goToSlide = (index: number) => {
    const maxIndex = slides.length - slidesPerView;
    const boundedIndex = Math.min(index, maxIndex);
    setCurrentSlideIndex(boundedIndex);
    if (slideContainerRef.current) {
      let gapValue = 8;
      slideContainerRef.current.style.transform = `translateX(-${
        boundedIndex * (slideWidth + gapValue)
      }px)`;
    }
    updateButtonStates(boundedIndex);
  };

  // If not mounted, return nothing (to avoid window errors)
  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <section
        className="container section"
        style={
          {
            "--slides-per-view": slidesPerView.toString(), // Pass as a CSS variable
          } as React.CSSProperties
        }
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
              className="slide-container flex transition duration-500 ease-in-out"
              style={{ gap: "8px" }}
              ref={slideContainerRef}
            >
              {imageGroup.map((image: any) => (
                <div
                  className="slide"
                  style={{ padding: "0px 8px" }}
                  key={image.url}
                >
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
            <ChevronRightIcon className="size-8" />
          </button>
        </div>

        <div className="flex justify-center align-middle flex-row mt-2">
          {Array.from({
            length:
              Math.ceil((slides.length - slidesPerView) / slidesToScroll) + 1,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${
                index === Math.floor(currentSlideIndex / slidesToScroll)
                  ? "bg-light-primary"
                  : "bg-light-primary-light"
              } mx-1 h-2 w-2 rounded-full`}
            />
          ))}
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
