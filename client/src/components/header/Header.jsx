import "./header.css";
import {
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="left__side">
        <a href="http://dealstore.com" target="_blank" rel="noreferrer">
          <MailIcon className="header__icon" />
          dealstore.com
        </a>
        <a href="http://dealstore.com" target="_blank" rel="noreferrer">
          <CallIcon className="header__icon" /> +92 300 006 0018
        </a>
        <div className="social__icons">
          <a href="http://dealstore.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="http://dealstore.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="http://dealstore.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="http://dealstore.com" target="_blank" rel="noreferrer">
            <FaPinterestP />
          </a>
        </div>
      </div>
      <div className="right__side"></div>
    </div>
  );
};

export default Header;
