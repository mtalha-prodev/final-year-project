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
import img_10 from "../../img/shop/categories/10.jpg";
import img_11 from "../../img/shop/categories/11.jpg";
import img_12 from "../../img/shop/categories/12.jpg";
import img_13 from "../../img/shop/categories/13.jpg";
import img_14 from "../../img/shop/categories/14.jpg";
import img_15 from "../../img/shop/categories/15.jpg";
import img_16 from "../../img/shop/categories/16.jpg";
import img_17 from "../../img/shop/categories/17.jpg";
import img_18 from "../../img/shop/categories/18.jpg";

const TopCategory = ({ path }) => {
  return (
    <div className="top__categories ">
      <div className="category__items">
        <CategoryItem
          img_1={img_1}
          img_2={img_2}
          img_3={img_3}
          title="Clothing"
          price="59.96"
          path={path}
        />
        <CategoryItem
          img_1={img_4}
          img_2={img_5}
          img_3={img_6}
          title="Shoes"
          price="37.80"
          path={path}
        />
        <CategoryItem
          img_1={img_7}
          img_2={img_8}
          img_3={img_9}
          title="Bags"
          price="34.25"
          path={path}
        />
      </div>
    </div>
  );
};

export default TopCategory;

export const ShopCategory = ({ path }) => {
  return (
    <div className="top__categories ">
      <div className="category__items">
        <CategoryItem
          img_1={img_10}
          img_2={img_11}
          img_3={img_12}
          title="Hats"
          price="59.96"
          path={path}
        />
        <CategoryItem
          img_1={img_13}
          img_2={img_14}
          img_3={img_15}
          title="SunGlasses"
          price="37.80"
          path={path}
        />
        <CategoryItem
          img_1={img_16}
          img_2={img_17}
          img_3={img_18}
          title="Watches"
          price="34.25"
          path={path}
        />
      </div>
    </div>
  );
};
