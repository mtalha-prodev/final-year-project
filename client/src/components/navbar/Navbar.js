import "./navbar.css";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { useState } from "react";
import { navData } from "./navdata/navData";
import { IoMdCart } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { FaOpencart, FaRegUser } from "react-icons/fa";
import Badge from "@material-ui/core/Badge";
import AddToCart from "./drowpdown/AddToCart";

const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);

  const [searchBox, setSearchBox] = useState(false);
  // sidebar show
  const [sidebar, setSidebar] = useState(false);

  const scrolly = () => {
    if (window.scrollY >= 40) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };

  window.addEventListener("scroll", scrolly);

  return (
    <div>
      <nav className={navFixed ? "navbar fix m-0" : "navbar m-0"}>
        <div className="nav__left">
          <div
            className="triger"
            onClick={() => {
              setSidebar(!sidebar);
            }}
          >
            <MenuRoundedIcon className="humburger" />
          </div>

          <div
            className={!sidebar ? "overlay__body" : "overlay__body show"}
            onClick={() => setSidebar(!sidebar)}
          ></div>
          {/* sidebar coding start */}
          <div className={!sidebar ? "sidebar" : "sidebar open"}>
            <div className="close" onClick={() => setSidebar(!sidebar)}>
              <CloseRoundedIcon className=" close_icon" />
            </div>
            <div className="user__acount">hi,sign in</div>
            <div className="sidebar__item">
              <ul className="navbar-nav flex-column">
                {navData.map((item, index) => {
                  return (
                    <li key={index} className={item.liClasses}>
                      <Link to={item.path} className={item.linkClasses}>
                        {item.title}
                      </Link>
                      <span className={item.iconClasses}>{item.icon}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* sidebar coding end */}

          <Link to="/" className="logo__dealStore">
            <FaOpencart className="logo__icon" />
            dealStore
          </Link>
        </div>

        <div className="nav__right">
          {/* searching box start */}
          <form action="#">
            {searchBox ? (
              <div className="search__box">
                <input
                  type="text"
                  name="search"
                  className="form-control shadow-none"
                  placeholder="Type to Search..."
                />
                <IoClose
                  className="close__icon"
                  onClick={() => setSearchBox(!searchBox)}
                />
              </div>
            ) : null}
            <div
              className="search__bar"
              onClick={() => setSearchBox(!searchBox)}
            >
              <BiSearch className="search__icon" />
            </div>
          </form>

          {/* end search box */}

          {/* user account start */}
          <div className="user__avator">
            <FaRegUser className="avator__icon" />
            {/* dropdown menu  */}
            <div className="sign__body">
              <div className="sign__inner">
                <Link to="/login" className="btn btn-default mb-2">
                  Login
                </Link>
                <p>
                  New Customer!<Link to="/register"> Register</Link>
                </p>
              </div>
            </div>
          </div>
          {/* user account end */}

          {/* add to card start */}
          <div className="add__cart">
            <Badge
              badgeContent={10}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              max={9}
            >
              <IoMdCart className="cart__icon" />
            </Badge>
            <div className="dropdown__cart">
              <AddToCart />
            </div>
          </div>
          {/* add to card end */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
