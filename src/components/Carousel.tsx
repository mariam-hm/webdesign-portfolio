"use client";

import { useEffect, useRef, useState } from "react";
import { type Carousel } from "@/types";
import Image from "next/image";
import ImageSlide from "./ImageSlide";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Carousel({
  title,
  imageGroup,
  slidesPerViewInit,
  scrollPerView,
  imageFit,
  aspectRatio,
  pageColors,
  setCurrentSlideIndex,
  currentSlideIndex,
  onImageClick,
}) {
  const slides = imageGroup;
  const GAP_VALUE = 0;

  // Function to calculate slides per view based on window size
  const getSlidesPerView = () => {
    return typeof window !== "undefined" && window.innerWidth >= 1024
      ? slidesPerViewInit
      : 1;
  };

  const getSlidesToScroll = () => {
    return typeof window !== "undefined" && window.innerWidth >= 1024
      ? scrollPerView
        ? slidesPerViewInit
        : 1
      : 1;
  };

  const getRatio = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "16:9":
        return 0.5625;
      case "9:16":
        return 1.78;
      case "4:3":
        return 0.75;
      case "1:1":
        return 1;
      default:
        return 0.5625;
    }
  };

  // Aspect ratio
  const ratio = getRatio(aspectRatio);

  // State to manage slides per view
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const [slidesToScroll, setSlidesToScroll] = useState(getSlidesToScroll());

  // State to manage current slide index and button states
  //const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(
    slides.length <= slidesPerView
  );

  // State to manage current slide index and button states
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Track whether the component has mounted to avoid window errors
  const [isMounted, setIsMounted] = useState(false);

  // State to manage variables related to drag movements
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
      setSlidesToScroll(getSlidesToScroll());
    };

    handleResize(); // Initial calculations
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const calculateSlideWidth = () => {
      if (slideContainerRef.current) {
        const firstSlide = slideContainerRef.current.querySelector(".slide");
        if (firstSlide) {
          setSlideWidth(firstSlide.clientWidth);
        }
      }
    };

    const timeoutId = setTimeout(calculateSlideWidth, 50); // Delay to ensure DOM is ready

    window.addEventListener("resize", calculateSlideWidth);

    return () => {
      window.removeEventListener("resize", calculateSlideWidth);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    updateButtonStates(currentSlideIndex);
  }, [currentSlideIndex]);

  // * ----------------------- TOUCH NAVIGATION --------------------------

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    const newTranslate = prevTranslate + deltaX;
    setCurrentTranslate(newTranslate);

    if (slideContainerRef.current) {
      slideContainerRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);

    snapToSlide();
  };

  const snapToSlide = () => {
    if (slideContainerRef.current && slideWidth) {
      // TODO Find a way to implement slidesToScroll with this
      const snapIndex = Math.round(-currentTranslate / (slideWidth + 8)); // Calculate nearest slide index
      const boundedIndex = Math.max(
        0,
        Math.min(snapIndex, slides.length - slidesPerView)
      );
      const snappedTranslate = -boundedIndex * (slideWidth + GAP_VALUE);

      slideContainerRef.current.style.transition = "transform 0.3s ease-out";
      slideContainerRef.current.style.transform = `translateX(${snappedTranslate}px)`;

      setPrevTranslate(snappedTranslate);
      setCurrentSlideIndex(snapIndex);
    }
  };

  // * ----------------------- ARROW NAVIGATION --------------------------

  const updateButtonStates = (index: number) => {
    setPrevBtnDisabled(index === 0);
    setNextBtnDisabled(index >= slides.length - slidesPerView);
  };

  const prevButtonClick = () => {
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
    let translateValue = boundedIndex * (slideWidth + GAP_VALUE);
    if (slideContainerRef.current) {
      slideContainerRef.current.style.transform = `translateX(-${translateValue}px)`;
    }
    setCurrentTranslate(translateValue);
    updateButtonStates(boundedIndex);
  };

  // If not mounted, return nothing (to avoid window errors)
  if (!isMounted) {
    return null;
  }

  return (
    <section
      className="container section"
      style={
        {
          "--slides-per-view": slidesPerView.toString(), // Pass as a CSS variable
        } as React.CSSProperties
      }
    >
      {title && <h4 className="text-center">{title}</h4>}
      <div className="viewport-and-buttons flex mt-4">
        <button
          disabled={prevBtnDisabled}
          onClick={prevButtonClick}
          style={{
            color: prevBtnDisabled
              ? pageColors.light.light
              : pageColors.light.main, // Replace with your hex codes
          }}
        >
          <ChevronLeftIcon className="size-8" />
        </button>
        <div className="viewport overflow-hidden">
          <div
            className="slide-container flex transition duration-500 ease-in-out"
            style={{ gap: GAP_VALUE }}
            ref={slideContainerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {imageGroup.map((image: any, index: number) => (
              <ImageSlide
                key={image.url}
                image={image}
                index={index}
                imageFit={imageFit}
                slideWidth={slideWidth}
                ratio={ratio}
                onImageClick={onImageClick}
              />
            ))}
          </div>
        </div>
        <button
          disabled={nextBtnDisabled}
          onClick={nextButtonClick}
          style={{
            color: nextBtnDisabled
              ? pageColors.light.light
              : pageColors.light.main, // Replace with your hex codes
          }}
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
            className="mx-1 h-2 w-2 rounded-full"
            style={{
              backgroundColor:
                index === Math.floor(currentSlideIndex / slidesToScroll)
                  ? pageColors.light.main
                  : pageColors.light.light,
            }}
          />
        ))}
      </div>
    </section>
  );
}
