import * as actionTypes from "../constants/types";
const initialState = {
  loading: false,
  error: {},
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
      };
    case actionTypes.REGISTER_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
