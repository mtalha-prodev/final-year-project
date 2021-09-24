import "./style/changePassword.css";
import { Link, useHistory } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changePassword } from "../../../redux/action/loginAction";
import { base_url } from "../../../utils/constants";

const ChangePassword = () => {
  const { user } = useSelector((state) => state.login);
  const [passwordUpdata, setPasswordUpdata] = useState({
    name: user.name,
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
    profile_pic: null,
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

  // upload and change profile pic

  const profileUpload = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("profile_pic", passwordUpdata.profile_pic);

    console.log(formData.get("profile_pic"));

    setTimeout(() => {
      setPasswordUpdata({
        profile_pic: "",
      });
    }, 1000);
  };

  const uploadEvent = (e) => {
    console.log("pic change");

    console.log(e.target.files[0]);
    setPasswordUpdata({ profile_pic: e.target.files[0] });
  };

  // change password and name
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
          {/* profile pic upload start */}
          <div className="form__container">
            <div className="card mx-auto shadow mb-5 mt-3 bg-body rounded">
              <img
                src={base_url + "/profile_pic/" + user.profile_pic}
                width="200px"
                height="200px"
                className="mx-auto"
                alt={user.profile_pic}
              />
            </div>

            <form
              onSubmit={profileUpload}
              encType="multipart/form-data"
              autoComplete="off"
            >
              <div className="mb-3">
                <label className="form-label">Upload Profile Pic</label>
                <input
                  type="file"
                  className="form-control"
                  name="profile_pic"
                  onChange={uploadEvent}
                />
              </div>
              <button type="submit" className="btn btn-danger">
                Update
              </button>
            </form>
          </div>
          {/* profile pic upload end */}

          {/* change password start*/}
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

              <button type="submit" className="btn btn-success">
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
