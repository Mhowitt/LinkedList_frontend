import { combineReducers } from "redux";
import currentUser from "./currentUser";
import currentCompany from "./currentCompany";
import companies from "./companies";
import errors from "./errors";
import jobList from "./jobList";

const rootReducer = combineReducers({
  currentUser,
  currentCompany,
  companies,
  errors,
  jobList
});

export default rootReducer;
