import * as actionTypes from "../constants/types";
import { base_url } from "../../utils/constants";
import setAuthToken from "../../utils/setAuthToken";
import Swal from "sweetalert2";
import axios from "axios";

export const loginRequest = (userData, history) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_REQUEST,
  });

  try {
    const user = await axios.post(`${base_url}/api/user/login`, userData);

    // console.log("user login data", user.data);
    // console.log("user login data", user.data.user);
    dispatch(setLogin(user.data.user));

    dispatch(loginSuccess());
    // store jwt token in localStorage
    localStorage.setItem("jwtToken", user.data.token);
    // store user dedail in localStorage
    localStorage.setItem("user", JSON.stringify(user.data.user));

    setAuthToken(user.data.token);

    history.push("/your_account");
  } catch (error) {
    dispatch(loginError(error.response.data));
    console.log(error.response.data);
  }
};

// CHANGE PASSWORD
export const changePassword = (user, history) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_REQUEST,
  });

  try {
    const res = await axios.put(`${base_url}/api/user/change_password`, user);

    dispatch(loginSuccess());

    // updata user detail in localStorage
    localStorage.setItem("user", JSON.stringify(res.data.user));

    dispatch({ type: actionTypes.CHANGE_PASSWORD, payload: res.data.user });

    Swal.fire("Status", "Password Change Success", "success");
    console.log(res.data.user);
  } catch (error) {
    dispatch(loginError(error.response.data));
    dispatch(loginSuccess());
  }
};

export const loginSuccess = () => {
  return {
    type: actionTypes.LOGIN_REQUEST_SUCCESS,
  };
};

export const loginError = (error) => {
  return {
    type: actionTypes.LOGIN_REQUEST_ERROR,
    payload: error,
  };
};

const setLogin = (user) => {
  return {
    type: actionTypes.SET_USER_LOGIN,
    payload: user,
  };
};
export const setLogout = (history) => async (dispatch) => {
  dispatch({
    type: actionTypes.SET_USER_LOGOUT,
  });

  // clear data from localstorage
  localStorage.clear();

  // delete  jwt authtoken
  setAuthToken(false);

  // redirect after logout
  history.push("/");
};
