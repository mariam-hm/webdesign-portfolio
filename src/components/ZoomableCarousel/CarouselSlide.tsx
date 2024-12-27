import Image from "next/image";

const CarouselSlide = ({ img, SLIDE_WIDTH_VW, setIsOpen, fit }) => {
  return (
    <div key={img.description} className="slide">
      <div
        className="group flex flex-col relative"
        style={{ width: `${SLIDE_WIDTH_VW}vw`, height: "400px" }}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={img.url}
          quality={50}
          fill={true}
          className={`transition translate-y-0 duration-200 ease-out group-hover:ease-in group-hover:-translate-y-1 rounded-lg overflow-hidden ${
            fit === "cover"
              ? "object-cover object-center p-1"
              : "object-contain"
          }`}
          alt={img.description}
        />
        <div
          className={`absolute bottom-1 py-1 px-2 mb-1 left-1/2 -translate-x-1/2 translate-y-1 bg-zinc-950/40 opacity-0 text-center rounded-md group-hover:opacity-100 group-hover:translate-y-0  transition duration-00 ease-out group-hover:ease-in ${
            fit === "cover" ? "mb-2" : ""
          }`}
        >
          <span className="bottom-2 text-white text-xs italic">
            {img.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
