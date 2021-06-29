import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";

export const rootReducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
});
