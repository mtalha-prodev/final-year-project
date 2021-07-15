import "./style/changePassword.css";
import { Link, useHistory } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changePassword } from "../../../redux/action/loginAction";

const ChangePassword = () => {
  const { user } = useSelector((state) => state.login);
  const [passwordUpdata, setPasswordUpdata] = useState({
    name: user.name,
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(user);

  const passwordEvent = (e) => {
    const { name, value } = e.target;

    setPasswordUpdata((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const passwordChange = (e) => {
    e.preventDefault();
    const user = {
      name: passwordUpdata.name,
      newPassword: passwordUpdata.newPassword,
      newPassword2: passwordUpdata.newPassword2,
      oldPassword: passwordUpdata.oldPassword,
    };

    dispatch(changePassword(user, history));

    setTimeout(() => {
      setPasswordUpdata({
        name: user.name,
        oldPassword: "",
        newPassword: "",
        newPassword2: "",
      });
    }, 1000);
  };
  return (
    <>
      <div className="set__route">
        <Link to="/your_account">your account</Link>
        <span>
          <RiArrowRightSLine />
        </span>
        <Link to="/change_password">change Password</Link>
      </div>
      <div className="container-xl password mb-4">
        <h1 className="profile__status">Change Password</h1>
        <div className="change__password">
          <div className="form__container">
            <form onSubmit={passwordChange} autoComplete="off">
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={passwordUpdata.name}
                  onChange={passwordEvent}
                  // required
                  placeholder="user name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="oldPassword"
                  value={passwordUpdata.oldPassword}
                  onChange={passwordEvent}
                  // required
                  placeholder="*****"
                  // minLength="6"
                />
                <div className="form-text">
                  password must be at least 6 charectors.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="newPassword"
                  value={passwordUpdata.newPassword}
                  onChange={passwordEvent}
                  // required
                  placeholder="*****"
                  // minLength="6"
                />
                <div className="form-text">
                  password must be at least 6 charectors.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Password Again</label>
                <input
                  type="password"
                  className="form-control"
                  name="newPassword2"
                  value={passwordUpdata.newPassword2}
                  onChange={passwordEvent}
                  // required
                  placeholder="*****"
                  // minLength="6"
                />
                <div className="form-text">password must match the above.</div>
              </div>

              <button type="submit" className="btn btn-success form-control ">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
