import LeftArrow from "../../images/Vector-left.png";
import RightArrow from "../../images/Vector-right.png";

const CarouselControls = ({ prev, next, slides }) => {
  if (slides.length > 1) {
    return (
      <div>
        <img src={LeftArrow} className="carousel-control left" onClick={prev} />
        <img
          src={RightArrow}
          className="carousel-control right"
          onClick={next}
        />
      </div>
    );
  }
};

export default CarouselControls;
