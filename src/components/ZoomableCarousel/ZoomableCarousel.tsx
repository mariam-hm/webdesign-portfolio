"use client";

import { useEffect, useRef, useState } from "react";
import GalleryModal from "./GalleryModal";
import CarouselSlide from "./CarouselSlide";
import CarouselControls from "./CarouselControls";
import Dots from "./Dots";

const ZoomableCarousel = ({
  singleImage,
  slides,
  slidesWidth = 80,
  slidesPerView = 1,
  fit = "cover",
}) => {
  // TODO add color palette?
  // TODO check if size works with tailwind config
  const SLIDE_WIDTH_VW = slidesWidth;
  const VIEWPORT_SLIDES = slidesPerView;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(
    slides.length <= slidesPerView
  );
  const slideContainerRef = useRef();

  const updateButtonStates = (index) => {
    setPrevBtnDisabled(index === 0);
    setNextBtnDisabled(index >= slides.length - VIEWPORT_SLIDES);
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
    slideContainerRef.current.style.transform = `translateX(-${
      index * SLIDE_WIDTH_VW
    }vw)`;
    updateButtonStates(index);
  };

  const prevButtonClick = () => {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  };

  const nextButtonClick = () => {
    if (currentSlideIndex < slides.length - VIEWPORT_SLIDES) {
      goToSlide(currentSlideIndex + 1);
    }
  };

  useEffect(() => {
    updateButtonStates(currentSlideIndex);
    if (singleImage) goToSlide(currentSlideIndex);
  }, [currentSlideIndex]);

  return (
    <section className="section flex flex-col justify-center items-center">
      <div className="buttons-and-slide flex">
        {!singleImage && slides.length > 1 && (
          <CarouselControls
            direction="prev"
            onClick={prevButtonClick}
            disabled={prevBtnDisabled || isOpen}
          />
        )}

        <div
          className="viewport overflow-hidden"
          style={{ width: `${SLIDE_WIDTH_VW * VIEWPORT_SLIDES}vw` }}
        >
          <div
            className="slide-container flex transition duration-500 ease-in-out"
            ref={slideContainerRef}
          >
            {slides.map((img, index) =>
              isOpen && index === currentSlideIndex ? (
                <GalleryModal
                  key={img.description}
                  img={img}
                  slides={slides}
                  singleImage={singleImage}
                  currentSlideIndex={currentSlideIndex}
                  setCurrentSlideIndex={setCurrentSlideIndex}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  goToSlide={goToSlide}
                />
              ) : (
                <CarouselSlide
                  key={img.description}
                  img={img}
                  index={index}
                  SLIDE_WIDTH_VW={SLIDE_WIDTH_VW}
                  setIsOpen={setIsOpen}
                  fit={fit}
                />
              )
            )}
          </div>
        </div>

        {!singleImage && slides.length > 1 && (
          <CarouselControls
            direction="next"
            onClick={nextButtonClick}
            disabled={nextBtnDisabled || isOpen}
          />
        )}
      </div>

      {!singleImage && slides.length > 1 && (
        <Dots
          slides={slides}
          slidesPerView={slidesPerView}
          currentSlideIndex={currentSlideIndex}
          goToSlide={goToSlide}
        />
      )}
    </section>
  );
};

export default ZoomableCarousel;
