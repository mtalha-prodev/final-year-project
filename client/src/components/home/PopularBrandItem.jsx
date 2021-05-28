import { Link } from "react-router-dom";

const PopularBrandItem = ({ Img, title, path, name }) => {
  return (
    <div className="card " style={{ width: "19rem" }}>
      <h4>{title}</h4>
      <div className="card-body p-0">
        <div className="brand">
          <div className="brand__img">
            <img src={Img} className="d-block w-100" alt="" />
          </div>
          <div className="brand__body">
            <Link to={path} className="brand__text">
              {name}
            </Link>
            <p className="brand__price">$200.00</p>
          </div>
        </div>
        <div className="brand">
          <div className="brand__img">
            <img src={Img} className="d-block w-100" alt="" />
          </div>
          <div className="brand__body">
            <Link to={path} className="brand__text">
              cole haan
            </Link>
            <p className="brand__price">$200.00</p>
          </div>
        </div>
        <div className="brand">
          <div className="brand__img">
            <img src={Img} className="d-block w-100" alt="" />
          </div>
          <div className="brand__body">
            <Link to={path} className="brand__text">
              cole haan
            </Link>
            <p className="brand__price">$200.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBrandItem;
