import React from "react";
import { withRouter } from "react-router-dom";
import Register from "../components/navbar/account/Register";

const UserRegister = () => {
  return (
    <div className="">
      <Register />
    </div>
  );
};

export default withRouter(UserRegister);
