import * as types from "../../Constants/Common/index.js";

const initialState = { 
    getUserFollowing: [],
    loading: true,
};

const GetUserFollowingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_FOLLOWING:
            return {
                ...state,
                getUserFollowing: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default GetUserFollowingReducer;
