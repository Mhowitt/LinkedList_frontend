import { GET_COMPANY } from "../actionTypes";

const DEFAULT_STATE = {
  handle: "",
  name: "",
  email: "",
  logo: "",
  employees: [],
  jobs: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...action.company
      };

    default:
      return state;
  }
};
