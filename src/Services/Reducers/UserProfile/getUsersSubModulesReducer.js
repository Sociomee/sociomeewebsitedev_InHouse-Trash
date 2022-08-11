import * as types from "../../Constants/UserProfile/index";

const initialState = {
    userMovies: [],
    userSports: [],
    userMusics: [],
    userEducations: [],
    loading: true,
};

const getUserSubModulesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS_SPORTS:
            return {
                ...state,
                userSports: action.payload,
                loading: false,
            };
        case types.GET_USERS_MOVIES:
            return {
                ...state,
                userMovies: action.payload,
                loading: false,
            };
        case types.GET_USERS_MUSICS:
            return {
                ...state,
                userMusics: action.payload,
                loading: false,
            };
        case types.GET_USERS_EDUCATIONS:
            return {
                ...state,
                userEducations: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default getUserSubModulesReducer;
