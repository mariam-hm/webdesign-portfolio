"use client";

// TODO Make sure all imports are from types/index
import Image from "next/image";
import SimpleImage from "./SimpleImage";
import { useState, useEffect } from "react";
import Lightbox from "./Lightbox";

export default function KOTBGridMoodboard({ imageGroup, pageColors }: any) {
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

  const imageFit = "cover";

  if (windowWidth <= 640) {
    return (
      <div className="container grid grid-cols-2 gap-4 my-8">
        {imageGroup.map((image: any, index: number) => (
          <div key={index} className="group relative h-[200px]">
            <Image
              className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
              src={image.url}
              alt={image.description}
              fill
              style={{ objectFit: imageFit }}
              sizes="(min-width: 640px) 33vw, 50vw"
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
          gridTemplateRows: "repeat(8, 80px)",
          gridTemplateColumns: "0.3fr 0.3fr 0.2fr 0.2fr",
        }}
      >
        <div className="group relative" style={{ gridArea: "1/1/4/2" }}>
          <Image
            className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
            src={imageGroup[0].url}
            alt={imageGroup[0].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 33vw, 50vw"
            onClick={() => openLightbox(0)}
          />
          {/* <div className="opacity-0 text-zinc-400 text-sm text-center italic -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition ease-in-out duration-300">
              {imageGroup[0].description}
            </div> */}
        </div>

        <div className="group relative" style={{ gridArea: "1/2/5/3" }}>
          <Image
            className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
            src={imageGroup[1].url}
            alt={imageGroup[1].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 33vw, 50vw"
            onClick={() => openLightbox(1)}
          />
        </div>

        <div className="group relative" style={{ gridArea: "1/3/3/5" }}>
          <Image
            className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
            src={imageGroup[2].url}
            alt={imageGroup[2].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 33vw, 50vw"
            onClick={() => openLightbox(2)}
          />
        </div>

        <div className="group relative" style={{ gridArea: "4/1/7/2" }}>
          <Image
            className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
            src={imageGroup[3].url}
            alt={imageGroup[3].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 33vw, 50vw"
            onClick={() => openLightbox(3)}
          />
        </div>

        <div className="group relative" style={{ gridArea: "5/2/8/3" }}>
          <Image
            className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
            src={imageGroup[4].url}
            alt={imageGroup[4].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 33vw, 50vw"
            onClick={() => openLightbox(4)}
          />
        </div>

        <div className="group relative" style={{ gridArea: "3/3/6/5" }}>
          <Image
            className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
            src={imageGroup[5].url}
            alt={imageGroup[5].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 33vw, 50vw"
            onClick={() => openLightbox(5)}
          />
        </div>

        <div className="group relative" style={{ gridArea: "7/1/9/2" }}>
          <Image
            className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
            src={imageGroup[6].url}
            alt={imageGroup[6].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 33vw, 50vw"
            onClick={() => openLightbox(6)}
          />
        </div>

        <div className="group relative" style={{ gridArea: "8/2/9/3" }}>
          <Image
            className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
            src={imageGroup[7].url}
            alt={imageGroup[7].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 33vw, 50vw"
            onClick={() => openLightbox(7)}
          />
        </div>

        <div className="group relative" style={{ gridArea: "6/3/9/4" }}>
          <Image
            className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
            src={imageGroup[8].url}
            alt={imageGroup[8].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 33vw, 50vw"
            onClick={() => openLightbox(8)}
          />
        </div>

        <div className="group relative" style={{ gridArea: "6/4/9/5" }}>
          <Image
            className="rounded-md group-hover:-translate-y-1 group-hover:drop-shadow-md transition ease-in-out duration-300"
            src={imageGroup[9].url}
            alt={imageGroup[9].description}
            fill
            style={{ objectFit: imageFit }}
            sizes="(min-width: 640px) 33vw, 50vw"
            onClick={() => openLightbox(9)}
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
