import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Thumbnails from "./Thumbnails";

const GalleryModal = ({
  img,
  slides,
  currentSlideIndex,
  isOpen,
  setIsOpen,
  goToSlide,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });
  const [currentOffset, setCurrentOffset] = useState({ x: 0, y: 0 });

  const resetZoomAndPosition = () => {
    setZoomLevel(1);
    setImageOffset({ x: 0, y: 0 });
    setCurrentOffset({ x: 0, y: 0 });
  };

  const zoomIn = () => setZoomLevel((prevZoom) => Math.min(prevZoom + 0.4, 3));
  const zoomOut = () =>
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.4, 0.6));

  const startDragging = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
      e.preventDefault();
    }
  };

  const stopDragging = () => {
    if (isDragging) {
      setIsDragging(false);
      setImageOffset((prevOffset) => ({
        x: prevOffset.x + currentOffset.x,
        y: prevOffset.y + currentOffset.y,
      }));
      setCurrentOffset({ x: 0, y: 0 });
    }
  };

  const handleDragging = (e) => {
    if (isDragging) {
      setCurrentOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  useEffect(() => {
    if (zoomLevel === 1) {
      setIsDragging(false);
      setImageOffset({ x: 0, y: 0 });
      setCurrentOffset({ x: 0, y: 0 });
    }
  }, [zoomLevel]);

  useEffect(() => {
    if (!isOpen) {
      goToSlide(currentSlideIndex);
    }
  }, [isOpen]);

  return (
    <Dialog
      open={true}
      onClose={() => {
        setIsOpen(false);
        resetZoomAndPosition();
      }}
    >
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="flex flex-col justify-between w-[80vw] h-[90vh] bg-transparent">
          <div className="relative flex flex-col w-full h-full rounded-lg overflow-hidden">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              <button
                onClick={zoomIn}
                className="p-2 bg-black bg-opacity-50 text-white rounded"
              >
                +
              </button>
              <div className="p-2 bg-black bg-opacity-50 text-white rounded">
                {Math.round(zoomLevel * 100)}%
              </div>
              <button
                onClick={zoomOut}
                className="p-2 bg-black bg-opacity-50 text-white rounded"
              >
                -
              </button>
              <button
                onClick={resetZoomAndPosition}
                className="p-2 bg-black bg-opacity-50 text-white rounded"
              >
                ⟳
              </button>
              <button
                onClick={() => downloadImage(img.img)}
                className="p-2 bg-black bg-opacity-50 text-white rounded"
              >
                ⬇
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  resetZoomAndPosition();
                }}
                className="p-2 bg-black bg-opacity-50 text-white rounded"
              >
                X
              </button>
            </div>
            <div
              className="relative w-full h-full overflow-hidden"
              onMouseDown={startDragging}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
              onMouseMove={handleDragging}
              style={{
                cursor:
                  zoomLevel > 1
                    ? isDragging
                      ? "grabbing"
                      : "grab"
                    : "default",
              }}
            >
              <Image
                src={img.url}
                quality={50}
                alt={img.description}
                fill={true}
                className="object-contain"
                style={{
                  transform: `scale(${zoomLevel}) translate(${
                    imageOffset.x + currentOffset.x
                  }px, ${imageOffset.y + currentOffset.y}px)`,
                  transition: isDragging ? "none" : "transform 0.3s ease",
                }}
              />
            </div>
          </div>
          <div className="w-full text-white p-2 text-center">
            {img.description}
          </div>
          <Thumbnails
            slides={slides}
            currentSlideIndex={currentSlideIndex}
            goToSlide={goToSlide}
          />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default GalleryModal;
