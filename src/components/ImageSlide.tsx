import React from "react";
import Image from "next/image";

function ImageSlide({
  image,
  index,
  imageFit,
  slideWidth,
  ratio,
  onImageClick,
}) {
  return imageFit != "none" ? (
    <div
      className="slide group relative p-1 rounded-lg overflow-hidden hover:drop-shadow-md transition ease-in-out duration-300"
      style={{
        padding: "0px 8px",
        height: slideWidth * ratio + "px",
      }}
      onClick={() => {
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
      className="slide box-border group p-1 hover:drop-shadow-md transition ease-in-out duration-300"
      onClick={() => {
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
}

export default ImageSlide;
