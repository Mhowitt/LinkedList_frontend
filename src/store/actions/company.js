import { apiCall, setTokenHeader } from "../../services/api";
import { addError, removeError } from "./errors";
import { GET_COMPANY } from "../actionTypes";

export function grabCompanyInfo(handle) {
  return async dispatch => {
    try {
      let company = await apiCall("get", `/companies/${handle}`);
      dispatch(getCompany(company.data));
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

export function getCompany(company) {
  return {
    type: GET_COMPANY,
    company
  };
}

// dispatch(addError(err.message));
