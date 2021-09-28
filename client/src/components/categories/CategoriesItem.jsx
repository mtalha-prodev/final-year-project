import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { useState } from "react";
import { BiHeart } from "react-icons/bi";
import "./css/categoryItem.css";

import { categoryData } from "./CategoriesData";

const CategoriesItem = () => {
  const [changeColor, setChangeColor] = useState(false);

  return (
    // category items caching in categoryData
    <div className="category__cart ">
      {categoryData.map((item, index) => {
        return (
          <div key={index} className="card mt-4">
            <div className="star__off">
              <p>22% off</p>
            </div>
            <img
              src={item.img}
              className="card-img-top d-block w-75"
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text ">${item.price}</p>
              <div className="add__card__btn">
                <Tooltip
                  TransitionComponent={Zoom}
                  title="whishlist"
                  placement="top"
                  arrow
                >
                  <span
                    className="add__whish"
                    onClick={() => setChangeColor(!changeColor)}
                  >
                    <BiHeart
                      className={
                        changeColor ? "whish__product red" : "whish__product"
                      }
                    />
                  </span>
                </Tooltip>
                <Link to={item.path} className="btn btn-default">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesItem;
