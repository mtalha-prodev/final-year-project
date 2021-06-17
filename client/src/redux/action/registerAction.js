import * as actionTypes from "../constants/types";
import { base_url } from "../../utils/constants";
import axios from "axios";

// send request to register
export const registerRequest = (userData, history) => async (dispatch) => {
  dispatch({
    type: actionTypes.REGISTER_REQUEST,
  });
  try {
    // sava value in database using register form
    await axios.post(`${base_url}/api/user/register`, userData);
    dispatch(registerSuccess());
    history.push("/login");
  } catch (error) {
    dispatch(registerError(error.response.data.message.errors));
    // console.log(error.response.data.message.errors);
  }
};

// responser success register
export const registerSuccess = () => {
  return {
    type: actionTypes.REGISTER_REQUEST_SUCCESS,
  };
};

// register error
export const registerError = (error) => {
  return {
    type: actionTypes.REGISTER_REQUEST_ERROR,
    payload: error,
  };
};
