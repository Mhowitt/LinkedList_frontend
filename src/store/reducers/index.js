import { combineReducers } from "redux";
import currentUser from "./currentUser";
import currentCompany from "./currentCompany";
import errors from "./errors";
import jobList from "./jobList";

const rootReducer = combineReducers({
  currentUser,
  currentCompany,
  errors,
  jobList
});

export default rootReducer;
