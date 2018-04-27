import { GET_USER } from "../actionTypes";

const DEFAULT_STATE = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    currentCompanyName: "",
    currentCompany: "",
    photo: "",
    experience: [],
    education: [],
    applied: [],
    skills: []

};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...action.user
            };
        default:
            return state;
    }
};