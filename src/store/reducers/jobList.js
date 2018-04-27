import { ADD_JOB_LIST } from "../actionTypes";

const DEFAULT_STATE = {
    jobList: []
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_JOB_LIST:
            return {
                jobList: action.jobList
            };
        default:
            return state;
    }
}