import "./addToCart.css";
import { Link } from "react-router-dom";
import { cardData } from "./cartData";

const AddToCart = () => {
  return (
    <div className="cart__container pt-3">
      {cardData.map((item, index) => {
        return (
          <div className="cart__item" key={index}>
            <div className="img__container">
              <img src={item.image} className="d-block w-100" alt="add cart" />
            </div>
            <div className="cart__detail">
              <p className="text-title">{item.title}</p>
              <p className="text-muted">
                {item.items}x{item.price}
              </p>
            </div>
            <button className="btn btn-default">x</button>
          </div>
        );
      })}

      <div className="total__price">
        <h3>Total:</h3>
        <p>$235</p>
      </div>

      <div className="cart__btn">
        <Link to="/cartview" className="btn btn-default">
          View Cart
        </Link>
        <Link to="/checkout" className="btn btn-default">
          CheckOut
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
