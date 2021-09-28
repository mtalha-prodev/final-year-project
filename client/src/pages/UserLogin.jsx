import { useEffect } from "react";
import Login from "../components/navbar/account/Login";
// import Login from "../components/account/Login";

const UserLogin = () => {
  useEffect(() => {
    document.title = "dStore | Login";
  }, []);
  return (
    <div className="container">
      <Login />
    </div>
  );
};

export default UserLogin;
