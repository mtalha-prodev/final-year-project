import { FaShoppingBag, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileItem = ({ Title, Icon, Text, Path }) => {
  return (
    <Link to={Path} className="profile__category">
      <div className="profile__body">
        <span>{Icon}</span>
        <h1>{Title}</h1>
      </div>
      <p className="body__text">{Text}</p>
    </Link>
  );
};

export default ProfileItem;
