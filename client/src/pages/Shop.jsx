import { useEffect } from "react";
import "./css/shop.css";
import TopCategory from "../components/home/TopCategory";
import { ShopCategory } from "../components/home/TopCategory";
import Alert_img from "../img/shop/shop/alert-bg.jpg";
import { Link } from "react-router-dom";

const Shop = () => {
  useEffect(() => {
    document.title = "dStore | Shop";
  }, []);
  return (
    <div>
      <div className="shop_category">
        <h2>Shop Category</h2>
        <div>
          <Link to="/">Home</Link> . <span>Shop Categories</span>
        </div>
      </div>
      <div className="offer_shop  p-0 ">
        <img src={Alert_img} alt="shop alert img" className="d-block w-100" />
      </div>
      <TopCategory path="/categories" />
      <ShopCategory path="/categories" />
    </div>
  );
};

export default Shop;
