import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const PrivateRouter = (props) => {
  const { userAuth } = useSelector((state) => state.login);
  if (userAuth) {
    return props.children;
  } else {
    return (
      <div>
        <Redirect to="/login" />
      </div>
    );
  }
};

export default PrivateRouter;
