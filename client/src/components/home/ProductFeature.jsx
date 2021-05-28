import "./css/productFeature.css";
import ProductItem from "./ProductItem";
// import product from "../../img/shop/productFeature/02.jpg";
import productImg2 from "../../img/shop/productFeature/01.jpg";
import productImg3 from "../../img/shop/productFeature/03.jpg";
import productImg4 from "../../img/shop/productFeature/04.jpg";
import { BiHeart } from "react-icons/bi";

const ProductFeature = () => {
  return (
    <div className="products__feature">
      <h1>Featured Products</h1>
      <div className="product__feature__card">
        <ProductItem
          img={productImg2}
          title="valinta"
          price={123}
          path="/"
          AddWhishlist={BiHeart}
        />
        <ProductItem
          img={productImg4}
          title="valinta"
          price={123}
          path="/"
          AddWhishlist={BiHeart}
        />
        <ProductItem
          img={productImg3}
          title="valinta"
          price={123}
          path="/"
          AddWhishlist={BiHeart}
        />
        <ProductItem
          img={productImg3}
          title="valinta"
          price={123}
          path="/"
          AddWhishlist={BiHeart}
        />
        <ProductItem
          img={productImg3}
          title="valinta"
          price={123}
          path="/"
          AddWhishlist={BiHeart}
        />
        <ProductItem
          img={productImg3}
          title="valinta"
          price={123}
          path="/"
          AddWhishlist={BiHeart}
        />
      </div>
    </div>
  );
};

export default ProductFeature;
