import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { useState } from "react";

const ProductItem = ({ img, title, price, path, AddWhishlist }) => {
  const [changeColor, setChangeColor] = useState(false);

  return (
    <>
      <div className="card">
        <div className="star__off">
          <p>22% off</p>
        </div>
        <img src={img} className="card-img-top d-block w-75" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text ">${price}</p>
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
                <AddWhishlist
                  className={
                    changeColor ? "whish__product red" : "whish__product"
                  }
                />
              </span>
            </Tooltip>
            <Link to={path} className="btn btn-default">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
