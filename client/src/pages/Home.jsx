import React from "react";
import Carousel from "../components/home/Carousel";
import DiscountOffer from "../components/home/DiscountOffer";
import PopularBrand from "../components/home/PopularBrand";
import ProductFeature from "../components/home/ProductFeature";
import TopCategory from "../components/home/TopCategory";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="container-xl">
        <TopCategory />
        <DiscountOffer />
        <ProductFeature />
        <PopularBrand />
      </div>
    </div>
  );
};

export default Home;
