import { combineReducers } from "redux";
import currentUser from "./currentUser";
import currentCompany from "./currentCompany";
import company from "./company";
import errors from "./errors";
import jobList from "./jobList";
import user from "./user";

const rootReducer = combineReducers({
  currentUser,
  currentCompany,
  company,
  errors,
  jobList,
  user
});

export default rootReducer;
