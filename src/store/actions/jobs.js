import { ADD_JOB_LIST } from "../actionTypes";

export function addJobList(jobList) {
    return {
        type: ADD_JOB_LIST,
        jobList
    }
}

