import { apiCall, setTokenHeader } from "../../services/api";
import { addError, removeError } from "./errors";
import { GET_COMPANY } from "../actionTypes";

export function grabCompany(handle) {
  console.log("madeit to function" + handle);
  return async dispatch => {
    try {
      let foundCompany = await apiCall("get", `/companies/${handle}`);
      //let authData = await apiCall("post", `/user-auth`, { data });

      dispatch(getCompany(foundCompany.data));
      // remove any error messages
      dispatch(removeError());
      return;
    } catch (err) {
      dispatch(addError(err.message));
      return Promise.reject(err); // indicate the API call failed
    }
  };
}

export function getCompany(company) {
  return {
    type: GET_COMPANY,
    company
  };
}
