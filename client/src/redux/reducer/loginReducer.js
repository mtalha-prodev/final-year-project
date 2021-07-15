import * as actionTypes from "../constants/types";

const initialState = {
  loading: false,
  error: {},
  userAuth: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.LOGIN_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.SET_USER_LOGIN:
      return {
        ...state,
        loading: false,
        user: action.payload,
        userAuth: true,
        error: {},
      };
    case actionTypes.SET_USER_LOGOUT:
      return {
        ...state,
        userAuth: false,
        user: {},
      };
    case actionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
