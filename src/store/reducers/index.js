import { combineReducers } from "redux";
import currentUser from "./currentUser";
import currentCompany from "./currentCompany";
import companies from "./companies";
import errors from "./errors";

const rootReducer = combineReducers({
  currentUser,
  currentCompany,
  companies,
  errors
});

export default rootReducer;
