import * as actionTypes from "../constants/types";

// send request to register
export const registerRequest = (userData, history) => (dispatch) => {};

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
