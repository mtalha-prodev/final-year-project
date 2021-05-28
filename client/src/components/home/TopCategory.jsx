import CategoryItem from "./CategoryItem";
import "./css/categories.css";

import img_1 from "../../img/shop/categories/01.jpg";
import img_2 from "../../img/shop/categories/02.jpg";
import img_3 from "../../img/shop/categories/03.jpg";
import img_4 from "../../img/shop/categories/04.jpg";
import img_5 from "../../img/shop/categories/05.jpg";
import img_6 from "../../img/shop/categories/06.jpg";
import img_7 from "../../img/shop/categories/07.jpg";
import img_8 from "../../img/shop/categories/08.jpg";
import img_9 from "../../img/shop/categories/09.jpg";
import { Link } from "react-router-dom";

const TopCategory = () => {
  return (
    <div className="top__categories ">
      <h2>Top Categories</h2>
      <div className="category__items">
        <CategoryItem
          img_1={img_1}
          img_2={img_2}
          img_3={img_3}
          title="Clothing"
          price="59.96"
        />
        <CategoryItem
          img_1={img_4}
          img_2={img_5}
          img_3={img_6}
          title="Shoes"
          price="37.80"
        />
        <CategoryItem
          img_1={img_7}
          img_2={img_8}
          img_3={img_9}
          title="Bags"
          price="34.25"
        />
      </div>
      <div className="all__categories">
        <Link to="/allCategory" className="btn btn-default btn__all__category">
          ALL CATEGORIES
        </Link>
      </div>
    </div>
  );
};

export default TopCategory;
