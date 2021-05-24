import "./css/carousel.css";
import carousel_1 from "../../img/01.png";
import carousel_2 from "../../img/02.png";
import carousel_3 from "../../img/03.png";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="carousel__wrapper">
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel carousel-dark slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel_1} className="d-block w-50" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>CONVERSE</h2>
              <h4>Chuck Taylor All Star II</h4>
              <h4>
                for Only <span style={{ fontWeight: "700" }}>$250.5</span>
              </h4>
              <Link to={`/product`} type="button" className="btn btn-default">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel_2} className="d-block  w-50" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>PUMA</h2>
              <h4>Puma backpancks collections</h4>
              <h4>
                starting at <span style={{ fontWeight: "700" }}>$37.0</span>
              </h4>
              <Link to={`/product`} type="button" className="btn btn-default">
                View Offers
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel_3} className="d-block w-50" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>MOTO</h2>
              <h4>Smart Watch Moto 360 2nd</h4>
              <h4>
                for Only <span style={{ fontWeight: "700" }}>$390.0</span>
              </h4>
              <Link to={`/product`} type="button" className="btn btn-default">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
