"use client";

import React from "react";
import Image from "next/image";
import { ImageDialog } from "./ImageDialog";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

export const EmblaCarouselDouble = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options || {});

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="flex flex-row items-center">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide flex flex-row" key={index}>
                <div className="embla__image--dbl">
                  {/* <Image
                    className="image  object-contain"
                    src={slide.imageLeft.src}
                    alt={slide.imageLeft.alt}
                    quality={100}
                  /> */}
                  <ImageDialog
                    options
                    isCarousel={true}
                    image={slide.imageLeft.src}
                    caption={slide.imageLeft.alt}
                    onNextButtonClick={onNextButtonClick}
                    onPrevButtonClick={onPrevButtonClick}
                    prevBtnDisabled={prevBtnDisabled}
                    nextBtnDisabled={nextBtnDisabled}
                  />
                </div>

                <div className="embla__image--dbl">
                  <ImageDialog
                    options
                    isCarousel={true}
                    image={slide.imageRight.src}
                    caption={slide.imageRight.alt}
                    onNextButtonClick={onNextButtonClick}
                    onPrevButtonClick={onPrevButtonClick}
                    prevBtnDisabled={prevBtnDisabled}
                    nextBtnDisabled={nextBtnDisabled}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </section>
  );
};
