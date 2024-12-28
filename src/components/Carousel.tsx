"use client";

import { useEffect, useRef, useState } from "react";
import { type Carousel } from "@/types";
import Image from "next/image";
import ZoomableCarousel from "./ZoomableCarousel/ZoomableCarousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Lightbox from "./Lightbox";

export default function Carousel({
  title,
  imageGroup,
  slidesPerViewInit = 2,
  slidesToScrollInit = 1,
  imageFit = "none",
  pageColors,
  onImageClick,
  setCurrentSlideIndex,
  currentSlideIndex,
}) {
  const slides = imageGroup;

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

  // * Add for momentum if I need
  // const [deltaTime, setDeltaTime] = useState(0); // Time between touch events
  // const [velocity, setVelocity] = useState(0); // Speed of drag
  // const [lastTouchTime, setLastTouchTime] = useState(0); // Last touch timestamp

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
          console.log("FirstSlide is here!!");
          setSlideWidth(firstSlide.clientWidth);
        }
      }
    };

    const timeoutId = setTimeout(calculateSlideWidth, 50); // Delay to ensure DOM is ready
    updateButtonStates(currentSlideIndex);

    // Recalculate on window resize
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", calculateSlideWidth);

    //debugLog("useEffect");

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", calculateSlideWidth);
      clearTimeout(timeoutId);
    };
  }, [currentSlideIndex]);

  // const debugLog = (origin: string, values: any = []) => {
  //   console.log("-------- LOGS FROM :", origin, "---------");
  //   console.log("slideWidth: ", slideWidth);
  //   console.log("currentSlideIndex: ", currentSlideIndex);

  //   for (const key in values) {
  //     console.log(key, " :", values[key]);
  //   }

  //   console.log("---------------------------------");
  // };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    //const currentX = e.touches[0].clientX;
    // Delta X transformation = currentX - startX
    const deltaX = e.touches[0].clientX - startX;

    // TODO If I want momentum dragging
    //const currentTime = Date.now();

    // const deltaTime = currentTime - lastTouchTime;
    // setLastTouchTime(currentTime);

    // const newVelocity = deltaX / deltaTime;
    // setVelocity(newVelocity);

    const newTranslate = prevTranslate + deltaX;
    setCurrentTranslate(newTranslate);

    if (slideContainerRef.current) {
      slideContainerRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);

    const threshold = 0.5;

    // applyMomentumScrolling();

    snapToSlide();

    // if (Math.abs(velocity) > threshold) {
    //   applyMomentumScrolling();
    // } else {
    //   snapToSlide();
    // }
  };

  // const applyMomentumScrolling = () => {
  //   let momentumVelocity = velocity; // Initial speed

  //   const friction = 0.25; // Decay rate (0.25 means 25% speed loss every 100ms)
  //   const updateMomentum = () => {
  //     if (Math.abs(momentumVelocity) < 0.1) {
  //       // Stop if the velocity is very low
  //       return;
  //     }

  //     // Update translate position
  //     const newTranslate = prevTranslate + momentumVelocity;
  //     setCurrentTranslate(newTranslate);
  //     if (slideContainerRef.current) {
  //       slideContainerRef.current.style.transform = `translateX(${newTranslate}px)`;
  //     }

  //     // Reduce velocity over time (friction effect)
  //     momentumVelocity *= friction;

  //     // Request the next frame
  //     requestAnimationFrame(updateMomentum);
  //   };

  //   // Start the momentum scrolling
  //   updateMomentum();
  // };

  const snapToSlide = () => {
    if (slideContainerRef.current && slideWidth) {
      console.log("currentTranslate: ", currentTranslate);

      // TODO Find a way to implement slidesToScroll with this
      const snapIndex = Math.round(-currentTranslate / (slideWidth + 8)); // Calculate nearest slide index
      const boundedIndex = Math.max(
        0,
        Math.min(snapIndex, slides.length - slidesPerView)
      );
      const gapValue = 8;
      const snappedTranslate = -boundedIndex * (slideWidth + gapValue);

      slideContainerRef.current.style.transition = "transform 0.3s ease-out";
      slideContainerRef.current.style.transform = `translateX(${snappedTranslate}px)`;

      setPrevTranslate(snappedTranslate);
      console.log("setCurrentSlideIndex from snapToSlide: ", snapIndex);
      setCurrentSlideIndex(snapIndex);
    }
  };

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
    let gapValue = 8;
    let translateValue = boundedIndex * (slideWidth + gapValue);
    if (slideContainerRef.current) {
      slideContainerRef.current.style.transform = `translateX(-${translateValue}px)`;
    }
    setCurrentTranslate(translateValue);
    updateButtonStates(boundedIndex);

    //debugLog("goToSlide", [translateValue]);
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
            style={{ gap: "8px" }}
            ref={slideContainerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {imageGroup.map((image: any, index: number) => {
              return imageFit != "none" ? (
                <div
                  className="slide relative h-[500px] rounded-lg overflow-hidden"
                  style={{ padding: "0px 8px" }}
                  key={image.url}
                  onClick={() => {
                    console.log(
                      "Enter onClick Carousel Slide, onImageClick: ",
                      onImageClick
                    );
                    onImageClick(index);
                  }}
                >
                  <Image
                    src={image.url}
                    alt={image.description}
                    fill={true}
                    style={{ objectFit: imageFit }}
                  />
                </div>
              ) : (
                <div
                  className="slide"
                  style={{ padding: "0px 8px" }}
                  key={image.url}
                  onClick={() => {
                    console.log(
                      "Enter onClick Carousel Slide, onImageClick: ",
                      onImageClick
                    );
                    onImageClick(index);
                  }}
                >
                  <Image
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    alt={image.description}
                    className="rounded-lg overflow-hidden"
                  />
                </div>
              );
            })}
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
