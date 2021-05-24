import React, { useState, useEffect } from "react";
import FooterItem from "./FooterItem";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "./footer.css";
import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
  GrGooglePlus,
} from "react-icons/gr";
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [containerSize, setContainerSize] = useState(false);
  const [formSize, setFormSize] = useState(false);
  const containerResize = () => {
    if (window.innerWidth >= 1200) {
      setContainerSize(true);
    } else {
      setContainerSize(false);
    }
  };
  const formResize = () => {
    if (window.innerWidth <= 575) {
      setFormSize(true);
    } else {
      setFormSize(false);
    }
  };
  useEffect(() => {
    containerResize();
    formResize();
  }, []);

  window.addEventListener("resize", containerResize);
  window.addEventListener("resize", formResize);

  return (
    <div className=" footer_section">
      <div className={containerSize ? "container" : "fluid"}>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 col-12">
            <h4>Shop departments</h4>
            <hr />
            <div className="row m-0 p-0">
              <div className="col-lg-6 col-md-6 col-12 p-0 ">
                <FooterItem title="shoes & cothing" path="/" />
                <FooterItem title="Men's shoes $ clothing" path="/" />
                <FooterItem title="women's shoes & clothing" path="/" />
                <FooterItem title="kids products" path="/" />
                <FooterItem title="Software" path="/" />
              </div>
              <div className="col-lg-6 col-md-6 col-12 p-0">
                <FooterItem title=" accessories" path="/" />
                <FooterItem title="glass" path="/" />
                <FooterItem title="hat" path="/" />
                <FooterItem title="watches" path="/" />
                <FooterItem title="braslate" path="/" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <h4>about us</h4>
            <hr />
            <FooterItem title="careers" path="/" />
            <FooterItem title="about e-Shop" path="/" />
            <FooterItem title="our story" path="/" />
            <FooterItem title="services" path="/" />
            <FooterItem title="our blog" path="/" />
            <FooterItem title="contacts" path="/" />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h4>account & shipping info</h4>
            <hr />
            <FooterItem title="your account" path="/" />
            <FooterItem title="shipping rates & policies" path="/" />
            <FooterItem title="refunds & replacements" path="/" />
            <FooterItem title="taxes" path="/" />
            <FooterItem title="delivery info" path="/" />
            <FooterItem title="affiliate program" path="/" />
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <h4>Get In Touch With Us</h4>
            <hr />
            <p>Phone: +1 (900) 33 169 7720</p>
            <p>
              <span>Monday-Friday:</span> 9.00 am - 8.00 pm
            </p>
            <p>
              <span>Saturday:</span> 10.00 am - 6.00 pm
            </p>
            <p>
              <Link to="/" className="footer_link">
                online@eshop.com
              </Link>
            </p>
            <div className="social_media">
              <Link to="/" className="social_link">
                <span>
                  <GrFacebookOption className="social_icon" />
                </span>
              </Link>
              <Link to="/" className="social_link">
                <span>
                  <GrInstagram className="social_icon" />
                </span>
              </Link>
              <Link to="/" className="social_link">
                <span>
                  <GrTwitter className="social_icon" />
                </span>
              </Link>
              <Link to="/" className="social_link">
                <span>
                  <GrGooglePlus className="social_icon" />
                </span>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <h4>Payment Methods</h4>
            <hr />
            <p>We support one of the following payment methods.</p>
            <div className="payment_methods">
              <FaCcPaypal className="pay_card" />
              <FaCcVisa className="pay_card" />
              <FaCcMastercard className="pay_card" />
              <FaCcDiscover className="pay_card" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12 footer__form">
            <h4>Be Informed</h4>
            <hr />
            <div className="row p-0 m-0">
              <form action="#" method="post">
                <div className={!formSize ? "form_item" : ""}>
                  <div className="col-lg-8 col-md-9 col-sm-9 col-12 p-0 m-0">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Your e-mail"
                    />
                    <span>
                      Subscribe to our Newsletter to receive early discount
                      offers, latest news, sales and promo information.
                    </span>
                  </div>

                  <div className="col-lg-4 col-md-3 col-sm-3 col-12 p-0 d-flex justify-content-end m-0 ">
                    <button
                      className={
                        formSize
                          ? "form-control btn btn-primary  "
                          : "btn btn-primary "
                      }
                    >
                      {/* <button className="form-control btn btn-primary  "> */}
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <p className="copy_right">
              &copy; all right reserved. made with selfcodex
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
