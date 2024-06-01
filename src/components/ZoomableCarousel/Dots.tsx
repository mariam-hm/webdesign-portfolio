const Dots = ({ slides, slidesPerView, currentSlideIndex, goToSlide }) => {
  const totalViews = slides.length - slidesPerView + 1;

  return (
    <div className="flex flex-row mt-2">
      {Array.from({ length: totalViews }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`${
            index === currentSlideIndex ? "bg-red-500" : "bg-red-200"
          } mx-1 h-2 w-2 rounded-full`}
        />
      ))}
    </div>
  );
};

export default Dots;
