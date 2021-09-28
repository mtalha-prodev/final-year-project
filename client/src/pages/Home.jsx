import { useEffect } from "react";
import Carousel from "../components/home/Carousel";
import DiscountOffer from "../components/home/DiscountOffer";
import PopularBrand from "../components/home/PopularBrand";
import ProductFeature from "../components/home/ProductFeature";
import TopCategory from "../components/home/TopCategory";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "dealStore";
  }, []);
  return (
    <div>
      <Carousel />
      <div className="container-xl">
        <div className="top__categories ">
          <h2>Top Categories</h2>
          <TopCategory path="/categories" />
          <div className="all__categories">
            <Link to="/shop" className="btn btn-default btn__all__category">
              ALL CATEGORIES
            </Link>
          </div>
        </div>
        <DiscountOffer />
        <ProductFeature />
        <PopularBrand />
      </div>
    </div>
  );
};

export default Home;
