import { combineReducers } from "redux";
import currentUser from "./currentUser";
import currentCompany from "./currentCompany";
import errors from "./errors";

const rootReducer = combineReducers({
  currentUser,
  currentCompany,
  errors
});

export default rootReducer;
