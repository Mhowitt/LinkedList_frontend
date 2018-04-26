import {
  GET_COMPANY,
  UPDATE_COMPANY,
  REMOVE_COMPANY,
  IS_USER
} from "../actionTypes";

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return [...action.company];

    default:
      return state;
  }
};
