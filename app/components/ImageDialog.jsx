"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export const ImageDialog = ({
  image,
  caption,
  isCarousel = false,
  options = {},
  onNextButtonClick,
  onPrevButtonClick,
  prevBtnDisabled,
  nextBtnDisabled,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  // const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  return (
    <>
      <Image
        className="image"
        onClick={() => setIsOpen(true)}
        src={image}
        alt={caption}
        quality={100}
      />
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          {/* {isCarousel && (
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          )} */}
          <Dialog.Panel className="mx-auto max-h-full max-w-5xl max-h-screen bg-transparent">
            <Image
              className="rounded-lg"
              src={image}
              alt={caption}
              quality={100}
            />
            {/* <p className="text-white text-center">{caption}</p> */}
          </Dialog.Panel>
          {/* {isCarousel && (
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          )} */}
        </div>
      </Dialog>
    </>
  );
};
