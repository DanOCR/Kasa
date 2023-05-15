const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
  return (
    <div className="carousel-indicators">
      {slides.map((_, index) => (
        <p key={index}
          className={`carousel-indicator-item${
            currentIndex === index ? " active" : ""
          }`}
        >
          {" "}
          {index + 1}/{slides.length}{" "}
        </p>
      ))}
    </div>
  );
};

export default CarouselIndicators;
