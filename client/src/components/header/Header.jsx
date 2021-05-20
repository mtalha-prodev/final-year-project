import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="left__side">
        <Link to="www.http://dealstore.com">www.dealstore.com</Link>
        <p>+92 300 006 0018</p>
      </div>
      <div className="right__side"></div>
    </div>
  );
};

export default Header;
