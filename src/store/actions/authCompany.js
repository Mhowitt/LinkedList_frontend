import { apiCall, setTokenHeader } from "../../services/api";
import { addError, removeError } from "./errors";
import { SET_CURRENT_COMPANY } from "../actionTypes";

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}
/**
 * Sign up or Sign in a company
 * @param {string} type signin or signup company
 * @param {object} companyData JSON object from form
 */
export function authCompany(type, data) {
  return async dispatch => {
    try {
      let newCompany = await apiCall("post", `/companies`, { data });
      let authData = await apiCall("post", `/company-auth`, { data });
      // once we have logged in, set a token in localStorage
      localStorage.setItem("jwtToken", authData.data.token);
      // set a header of Authorization
      setAuthorizationToken(authData.data.token);
      // set a currentUser in Redux
      dispatch(setCurrentCompany({ handle: newCompany.handle }));
      // remove any error messages
      dispatch(removeError());
      return;
    } catch (err) {
      dispatch(addError(err.message));
      return Promise.reject(err); // indicate the API call failed
    }
  };
}

export function loginCompany(type, data) {
  return async dispatch => {
    try {
      let authData = await apiCall("post", `/company-auth`, { data });
      // once we have logged in, set a token in localStorage
      localStorage.setItem("jwtToken", authData.data.token);
      // set a header of Authorization
      setAuthorizationToken(authData.data.token);
      // set a currentUser in Redux
      dispatch(setCurrentCompany({ handle: data.handle }));
      // remove any error messages
      dispatch(removeError());
      return;
    } catch (err) {
      dispatch(addError(err.message));
      return Promise.reject(err); // indicate the API call failed
    }
  };
}

export function logoutCompany() {
  // we need to make this a thunk so that we can dispatch setCurrentUser
  return dispatch => {
    // clear the token from localStorage
    localStorage.clear();
    // remove the Authorization header
    setAuthorizationToken(false);
    // set the currentUser to be {} in Redux
    dispatch(setCurrentCompany({}));
  };
}

export function setCurrentCompany(company) {
  return {
    type: SET_CURRENT_COMPANY,
    company
  };
}
