import { Link } from "react-router-dom";

const CategoryItem = ({ img_1, img_2, img_3, title, price }) => {
  return (
    <div className="card" style={{ width: "19rem" }}>
      <div className="image__categories">
        <img src={img_1} className="card-img-top left__img" alt="..." />
        <div className="right__side__img">
          <img src={img_2} className="mt-1 right__top__img" alt="..." />
          <img src={img_3} className="mt-1 right__bottom__img" alt="..." />
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">Starting from ${price}</p>
        <Link to="/" className="btn btn-default">
          VIEW PRODUCTS
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
