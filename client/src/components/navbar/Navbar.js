import "./navbar.css";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useState } from "react";

const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);
  const scrolly = () => {
    if (window.scrollY >= 100) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };

  window.addEventListener("scroll", scrolly);

  return (
    <div>
      <nav className={navFixed ? "navbar fix" : "navbar "}>
        <div className="nev__left">
          <div className="triger">
            <MenuRoundedIcon className="humburger" />
          </div>
          <Link to="/products">dealStore</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
