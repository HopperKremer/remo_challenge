import { combineReducers } from "redux";

import data from "./gameDataReducer";
import userReducer from "./user.reducer";

export default combineReducers({
  userReducer,
});
