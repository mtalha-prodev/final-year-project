import "./sellerIntro.css";
import { useEffect } from "react";

const SellerIntro = () => {
  useEffect(() => {
    document.title = "dStore | SellerIntro";
  }, []);

  return (
    <div className="seller__intro">
      <div className="seller__start">
        <div className="container-lg ">
          <h1>
            "Since last 6 years my friends wealth increased by 3000% thanks to
            selling of PINK SALT, Python, AIR PAK & etc on dealStore"
          </h1>
          <p>Apna Imran, C Sharp PK (dealStore Seller)</p>
          <button className="btn btn-default">Start selling</button>
          <p>It only takes 15 minutes to setup your account</p>
        </div>
      </div>
      <div className="container-xl seller__option">
        <h3>Why Sell on dealStore?</h3>
        <div className="sell__components ">
          <div className="seller__detail">
            <h5>E-Commerce: Your next big sales channel</h5>
            <p>
              start selling on dealStore - without building a website.Register
              now to start selling on dealStore.app
            </p>
          </div>
          <div className="seller__detail">
            <h5>E-Commerce: Your next big sales channel</h5>
            <p>
              start selling on dealStore - without building a website.Register
              now to start selling on dealStore.app
            </p>
          </div>
          <div className="seller__detail">
            <h5>E-Commerce: Your next big sales channel</h5>
            <p>
              start selling on dealStore - without building a website.Register
              now to start selling on dealStore.app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerIntro;
