import "./css/register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerEvent = (e) => {
    // input form value set in using state
    const { name, value } = e.target;
    setUserRegister((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const SubmitRegister = (e) => {
    e.preventDefault();
    // after submit input clrear
    setTimeout(() => {
      setUserRegister({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 1000);
  };

  return (
    <div className="register">
      <div className="register__form">
        <h1>Register</h1>
        <form onSubmit={SubmitRegister} autoComplete="off">
          <div className="mb-2">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              onChange={registerEvent}
              value={userRegister.userName}
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={registerEvent}
              value={userRegister.email}
              required
            />
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={userRegister.password}
              onChange={registerEvent}
              required
            />
            <div className="form-text">
              password must be at least 6 charectors.
            </div>
          </div>
          <div className="mb-2">
            <label className="form-label">Password Again</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={userRegister.confirmPassword}
              onChange={registerEvent}
              required
            />
            <div className="form-text">password must match the above.</div>
          </div>
          <button type="submit" className="btn btn-default form-control mt-2">
            Register
          </button>
          <div className=" comp__logo text-muted text-center">
            <span></span> OR <span></span>
          </div>
          <div className="already__account">
            already have an Account?
            <Link to="/login"> sign in</Link>
          </div>
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

export default Register;
