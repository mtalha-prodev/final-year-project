import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducers } from "./reducer";
import logger from "redux-logger";

const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
export default store;
