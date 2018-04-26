import { SET_CURRENT_COMPANY } from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false,
  company: {}
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_COMPANY:
      return {
        // turn an empty object into false or an object with keys to be true
        isAuthenticated: !!Object.keys(action.company).length,
        company: action.company
      };
    default:
      return state;
  }
};
