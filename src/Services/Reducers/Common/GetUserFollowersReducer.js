import * as types from "../../Constants/Common/index.js";

const initialState = { 
    getUserFollowers: [],
    loading: true,
};

const GetUserFollowersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_FOLLOWERS:
            return {
                ...state,
                getUserFollowers: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default GetUserFollowersReducer;
