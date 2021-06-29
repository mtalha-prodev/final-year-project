import "./css/register.css";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerRequest } from "../../../redux/action/registerAction";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // set to user login not to back after login
  const userLogin = useSelector((state) => state.login);

  const history = useHistory();
  const register = useSelector((state) => state.register);
  const dispatch = useDispatch();

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

    const user = {
      name: userRegister.name,
      email: userRegister.email,
      password: userRegister.password,
    };

    dispatch(registerRequest(user, history));
    // console.log(userRegister);

    // after submit input clrear
    setTimeout(() => {
      setUserRegister({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 1000);
  };

  useEffect(() => {
    if (userLogin.userAuth) {
      history.push("/your_account");
    }
    return () => {
      // if (userLogin.userAuth) {
      //   history.push("/");
      // }
    };
  }, []);

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
              name="name"
              onChange={registerEvent}
              value={userRegister.name}
              // required
              // minLength="3"
              placeholder="enter your name"
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
              // required
              placeholder="enter your email"
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
              // required
              // minLength="8"
              placeholder="*********"
            />
            <div className="form-text">
              password must be at least 8 charectors.
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
              // required
              placeholder="********"
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
