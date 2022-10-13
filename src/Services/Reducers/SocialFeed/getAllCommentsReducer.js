import * as types from "../../Constants/SocialFeed/index";

const initialState = {
  comments: [],
  loading: true,
};

const getAllCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default getAllCommentsReducer;
