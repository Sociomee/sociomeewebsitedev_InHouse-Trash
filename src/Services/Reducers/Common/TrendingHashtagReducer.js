import * as types from "../../Constants/Common/index.js";

const initialState = { 
    trandingHashtags: [],
    loading: true,
};

const TrendingHashtagReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TRENDING_HASHTAG:
            return {
                ...state,
                trandingHashtags: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default TrendingHashtagReducer;
