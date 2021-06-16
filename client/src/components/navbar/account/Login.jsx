import "./css/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const onSubmitLogin = (e) => {
    // after submit input clrear
    e.preventDefault();
    setTimeout(() => {
      setLogin({
        email: "",
        password: "",
      });
    }, 1000);
  };

  const loginEvent = (e) => {
    // input form value set in using state
    const { name, value } = e.target;

    setLogin((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  return (
    <div className="login">
      <div className="login__form">
        <h1>Login</h1>
        <form onSubmit={onSubmitLogin} autoComplete="off">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={login.email}
              onChange={loginEvent}
              required
              placeholder="enter your email"
            />
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={login.password}
              onChange={loginEvent}
              required
              placeholder="*********"
            />
            <div className="form-text">
              password must be at least 6 charectors.
            </div>
          </div>

          <button type="submit" className="btn btn-default form-control mt-2">
            Submit
          </button>
          <div className=" comp__logo text-muted text-center">
            <span></span> dealStore <span></span>
          </div>

          <Link to="/register" className="btn btn-dark form-control">
            Create an Account
          </Link>
          <Link
            to="/register"
            className="btn btn-google-auth my-2 form-control"
          >
            <span>G</span> sign in with google
          </Link>
          <Link to="/register" className="btn btn-face-auth form-control">
            <span>F</span> sign in with facebook
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
