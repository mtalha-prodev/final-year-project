import "./navbar.css";
import { Link, useHistory } from "react-router-dom";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { useState } from "react";
import { navData } from "./navdata/navData";
import { IoMdCart } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { FaOpencart, FaRegUser, FaUserCircle } from "react-icons/fa";
import Badge from "@material-ui/core/Badge";
import AddToCart from "./drowpdown/AddToCart";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/action/loginAction";
import { base_url } from "../../utils/constants";

const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  // sidebar show
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();

  const { userAuth, user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  // console.log(user);

  // user logout
  const userLogout = () => {
    dispatch(setLogout(history));
  };

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

            {/* set userauth to login set name and pic in sidebar start */}
            {userAuth ? (
              <Link to="/your_account">
                <div className="user__acount">
                  {/* <FaRegUser className="avator__icon" /> */}
                  <img
                    src={`${base_url}/profile_pic/${user.profile_pic}`}
                    alt={user.name}
                    className="d-block user__img"
                    style={{
                      width: "45px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                  hi, {user.name}
                </div>
              </Link>
            ) : (
              <Link to="/login">
                <div className="user__acount">
                  <FaUserCircle
                    className="avator__icon"
                    style={{
                      width: "35px",
                      height: "35px",
                      marginRight: "10px",
                    }}
                  />
                  hi, sign in
                </div>
              </Link>
            )}
            {/* set userauth to login set name and pic in sidebar end */}

            <div className="sidebar__item">
              <ul className="navbar-nav flex-column">
                {navData.map((item, index) => {
                  return (
                    <li key={index} className={item.liClasses}>
                      <Link
                        to={item.path}
                        className={item.linkClasses}
                        onClick={() => setSidebar(!sidebar)}
                      >
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

          {/* main manu logo start left side  */}
          <Link to="/" className="logo__dealStore">
            <FaOpencart className="logo__icon" />
            dealStore
          </Link>
        </div>
        {/* main manu logo end  */}

        {/* right side manu icons start  */}
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
          {/* if user login authantication is true  */}
          {userAuth ? (
            <div className="user__avator">
              {/* <FaRegUser className="avator__icon" /> */}
              <img
                src={`${base_url}/profile_pic/${user.profile_pic}`}
                alt={user.name}
                className="w-100 h-100 d-block user__img m-0"
              />

              {/* dropdown menu  */}
              <div className="sign__body">
                <div className="sign__inner">
                  <Link to="/your_account">Your Account</Link>
                  <Link to="/your_account">Profile</Link>
                  <Link to="/your_account">Setting</Link>

                  {/* set user logout  */}
                  <button
                    type="button"
                    onClick={userLogout}
                    className="btn btn-default mb-2"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            //  if user not login

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
          )}
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
