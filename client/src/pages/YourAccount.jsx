import { useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserProfile from "../components/userProfile/UserProfile";
const YourAccount = () => {
  const { userAuth } = useSelector((state) => state.login);

  useEffect(() => {
    document.title = "dStore | Your Account";

    // redirect user not login
    // if (!userAuth) {
    //   history.push("/login");
    // }
    // return () => {};
  }, []);

  return (
    <>
      <div className="set__route">
        <Link to="/">home</Link>
        <span>
          <RiArrowRightSLine />
        </span>
        <Link to="/your_account">your account</Link>
      </div>
      <div className="container-xl profile">
        <h1 className="profile__status">Your Account</h1>
        <UserProfile />
      </div>
    </>
  );
};

export default YourAccount;
