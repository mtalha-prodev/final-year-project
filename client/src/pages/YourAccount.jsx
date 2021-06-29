import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const YourAccount = () => {
  const { userAuth } = useSelector((state) => state.login);
  const history = useHistory();

  useEffect(() => {
    // redirect user not login
    if (!userAuth) {
      history.push("/login");
    }
    return () => {};
  }, []);

  return (
    <div>
      {/* <img src={user.user.profile_pic} className="w-100 d-block" alt="avator" /> */}
      your account
    </div>
  );
};

export default YourAccount;
