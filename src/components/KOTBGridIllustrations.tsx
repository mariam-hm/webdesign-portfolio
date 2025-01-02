"use client";

import Image from "next/image";
import Lightbox from "./Lightbox";
import { useState, useEffect } from "react";

export default function KOTBGridIllustrations({ imageGroup, pageColors }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Initial calculations
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to open the lightbox and set the initial index
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const imageFit = "contain";

  if (windowWidth <= 640) {
    return (
      <div className="container grid grid-cols-2 gap-4 my-8">
        {imageGroup.map((image: any, index: number) => (
          <div
            key={index}
            className="relative h-[200px] bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
            style={{ borderColor: pageColors.light.main }}
          >
            <Image
              src={image.url}
              alt={image.description}
              fill
              style={{ objectFit: imageFit }}
              sizes="(min-width: 640px) 30vw, 50vw"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}

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
  } else {
    return (
      <div
        className="container grid gap-4 my-8"
        style={{
          gridTemplateRows: "repeat(9, 75px)",
          gridTemplateColumns: "repeat(12, 1fr)",
        }}
      >
        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "1/1/4/4" }}
        >
          <Image
            src={imageGroup[0].url}
            alt={imageGroup[0].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(0)}
          />
          {/* <div className="opacity-0 text-zinc-400 text-sm text-center italic -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition ease-in-out duration-300">
            {imageGroup[0].description}
          </div> */}
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "1/4/4/6" }}
        >
          <Image
            src={imageGroup[1].url}
            alt={imageGroup[1].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(1)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "1/6/5/8" }}
        >
          <Image
            src={imageGroup[2].url}
            alt={imageGroup[2].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(2)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "1/8/3/10" }}
        >
          <Image
            src={imageGroup[3].url}
            alt={imageGroup[3].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(3)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "3/8/5/10" }}
        >
          <Image
            src={imageGroup[4].url}
            alt={imageGroup[4].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(4)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "1/10/5/13" }}
        >
          <Image
            src={imageGroup[5].url}
            alt={imageGroup[5].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(5)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "4/1/8/3" }}
        >
          <Image
            src={imageGroup[6].url}
            alt={imageGroup[6].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(6)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "4/3/7/6" }}
        >
          <Image
            src={imageGroup[7].url}
            alt={imageGroup[7].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(7)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "5/6/10/10" }}
        >
          <Image
            src={imageGroup[8].url}
            alt={imageGroup[8].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(8)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "5/10/7/13" }}
        >
          <Image
            src={imageGroup[9].url}
            alt={imageGroup[9].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(9)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "8/1/10/3" }}
        >
          <Image
            src={imageGroup[10].url}
            alt={imageGroup[10].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(10)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "7/3/10/6" }}
        >
          <Image
            src={imageGroup[11].url}
            alt={imageGroup[11].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(11)}
          />
        </div>

        <div
          className="relative bg-white rounded-md border hover:-translate-y-1 hover:drop-shadow-md transition ease-in-out duration-300"
          style={{ borderColor: pageColors.light.main, gridArea: "7/10/10/13" }}
        >
          <Image
            src={imageGroup[12].url}
            alt={imageGroup[12].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 30vw, 50vw"
            onClick={() => openLightbox(12)}
          />
        </div>

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
  }
}
