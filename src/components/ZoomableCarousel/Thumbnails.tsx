import Image from "next/image";

const Thumbnails = ({ slides, currentSlideIndex, goToSlide }) => {
  const thumbnailSize = slides.length > 8 ? "w-16 h-16" : "w-20 h-20";

  return (
    <div className="flex w-full justify-center mt-2">
      <div className="flex justify-center space-x-2 h-[10vh]">
        {slides.map((img, index) => (
          <div
            key={img.description}
            className={`relative ${thumbnailSize} rounded-sm overflow-hidden cursor-pointer transition duration-200 ${
              index === currentSlideIndex ? "ring-2 ring-red-500" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            <Image
              src={img.url}
              quality={50}
              fill={true}
              className="object-cover"
              alt={img.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnails;
