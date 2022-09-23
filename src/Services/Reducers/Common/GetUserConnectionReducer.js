import * as types from "../../Constants/Common/index.js";

const initialState = {
    getUserConnection: [],
    privacy: {},
    loading: true,
};

const GetUserConnectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_CONNECTION:
            return {
                ...state,
                getUserConnection: action.payload,
                loading: false,
            };
        case types.GET_ADD_USER_CONNECTION:
        default:
            return state;
    }
};

export default GetUserConnectionReducer;
