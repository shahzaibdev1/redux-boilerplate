import { combineReducers } from "redux";
import counterReducer from "./counterReducers";

export default combineReducers({
  counter: counterReducer,
});
