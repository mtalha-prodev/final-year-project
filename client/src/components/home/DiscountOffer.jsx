import { Link } from "react-router-dom";
import "./css/discountOffer.css";
import homeImg1 from "../../img/home/home_01.jpg";
import homeImg2 from "../../img/home/home_2.jpg";

const DiscountOffer = () => {
  return (
    <div className="row discount__offer d-flex justify-content-center">
      <div className=" col-xl-6 col-md-6 mb-4">
        <div className="bg-light  h-100 d-flex  flex-column">
          <p>Limited Offers</p>
          <div className="product__limit d-flex align-items-center justify-content-center flex-column">
            <h3>New</h3>
            <h1>Sunglasses</h1>
            <p>collection at discounted price!</p>
            <div className="limited d-flex">
              <div className="offer__limit">
                <p className="time__set">00</p>
                <span>Day</span>
              </div>
              <div className="offer__limit">
                <p className="time__set">00</p>
                <span>Hour</span>
              </div>
              <div className="offer__limit">
                <p className="time__set">00</p>
                <span>Min</span>
              </div>
              <div className="offer__limit">
                <p className="time__set">00</p>
                <span>Sec</span>
              </div>
            </div>
            <Link to="/" className="btn btn-default">
              VIEW OFFERS
            </Link>
          </div>
        </div>
      </div>
      <div className=" col-xl-6 col-md-6 mb-4">
        <div className="limited__img">
          <img src={homeImg1} className="d-block w-100" alt="" />
        </div>
      </div>
      <div className="col-xl-12">
        <div className="old__collection ">
          <div className="img__layout"></div>
          <img src={homeImg2} className="d-block w-100 h-100" alt="" />
          <div className="huge__sale">
            <p>Old Collection</p>
            <p>HUGE SALE</p>
            <p>at our outlet stores</p>
            <Link to="/products" className="btn btn-default">
              LOCATE STORES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountOffer;
