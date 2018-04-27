import { apiCall, setTokenHeader } from "../../services/api";
import { addError, removeError } from "./errors";
import { GET_USER } from "../actionTypes";

export function grabUserInfo(username) {
  return async dispatch => {
    try {
      let user = await apiCall("get", `/users/${username}`);
      dispatch(getUser(user.data));
    } catch (err) {
      return Promise.reject(err); // indicate the API call failed
    }
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    user
  };
}

// dispatch(addError(err.message));
