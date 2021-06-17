import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";

export const rootReducers = combineReducers({
  register: registerReducer,
});
