import "./css/popularBrand.css";
import PopularBrandItem from "./PopularBrandItem";
import brandImg1 from "../../img/shop/popularBrand/05.jpg";

const PopularBrand = () => {
  return (
    <div className="popular__brand">
      <PopularBrandItem
        Img={brandImg1}
        title="Top Sellers"
        name="Palace Shell Track Jacket"
        path="/"
      />
      <PopularBrandItem
        Img={brandImg1}
        title="new arrivals"
        name="Palace Shell Track Jacket"
        path="/"
      />
      <PopularBrandItem
        Img={brandImg1}
        title="new arrivals"
        name="Palace Shell Track Jacket"
        path="/"
      />
    </div>
  );
};

export default PopularBrand;
