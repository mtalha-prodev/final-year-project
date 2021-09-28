import React from "react";
import { Link } from "react-router-dom";
import CategoriesItem from "../components/categories/CategoriesItem";
import { BsCircle } from "react-icons/bs";
import CategoriesData from "../components/categories/CategoriesData";

const Categories = () => {
  return (
    <div>
      <div className="shop_category">
        <h2>Categories</h2>
        <div>
          <Link to="/">Home</Link> . <span>Categories</span>
        </div>
      </div>
      <div className="all_categories container-xl mt-4 mb-4">
        <div className="left__side p-2">
          <div className="category__brand">
            <h5>Categories</h5>
            <hr />
            <div className="shoping__category">
              <Link to="/menShop">MenShoping</Link>
              <Link to="/womenShop">WomenShoping</Link>
              <Link to="/KidShop">Kids Collection</Link>
            </div>
            <h5 className="mt-3">Brands</h5>
            <hr />
            <div className="shoping__category">
              <Link>jeans</Link>
              <Link>T-Shirt</Link>
              <Link>sleaper</Link>
              <Link>Clothing</Link>
              <Link>Bags</Link>
              <Link>Hats</Link>
              <Link>Sunglasses</Link>
            </div>
            <h5 className="mt-3">Colors</h5>
            <hr />
            <div className="shoping__category">
              <Link>
                <BsCircle /> white
              </Link>
              <Link>
                <BsCircle />
                off white
              </Link>
              <Link>
                <BsCircle />
                yellow
              </Link>
              <Link>
                <BsCircle />
                pink
              </Link>
              <Link>
                <BsCircle />
                parpar
              </Link>
              <Link>
                <BsCircle />
                orange
              </Link>
              <Link>
                <BsCircle />
                green
              </Link>
              <Link>
                <BsCircle />
                red
              </Link>
              <Link>
                <BsCircle />
                blue
              </Link>
              <Link>
                <BsCircle />
                black
              </Link>
            </div>
          </div>
        </div>
        <div className="right__side">
          <CategoriesItem />
        </div>
      </div>
    </div>
  );
};

export default Categories;
