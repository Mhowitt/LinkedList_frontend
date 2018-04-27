import { combineReducers } from "redux";
import currentUser from "./currentUser";
import currentCompany from "./currentCompany";
import companies from "./companies";
import errors from "./errors";
import jobList from "./jobList";
import user from "./user";

const rootReducer = combineReducers({
  currentUser,
  currentCompany,
  companies,
  errors,
  jobList,
  user
});

export default rootReducer;
