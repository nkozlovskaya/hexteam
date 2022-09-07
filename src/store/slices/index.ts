import userReducer from "./userSlice";
import linkReducer from "./linkSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  links: linkReducer,
});
