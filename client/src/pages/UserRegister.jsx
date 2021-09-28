import { useEffect } from "react";
import Register from "../components/navbar/account/Register";

const UserRegister = () => {
  useEffect(() => {
    document.title = "dStore | Register";
  }, []);
  return (
    <div>
      <Register />
    </div>
  );
};

export default UserRegister;
