import * as types from "../Constants/index";

const initialState = {
    savePosts: [],
    loading: true,
};

const postSavedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_SAVED_POST:
            return {
                ...state,
                savePosts: action.payload,
                loading: false,
            };
        case types.SET_POST_SAVED:
        default:
            return state;
    }
};

export default postSavedReducer;
