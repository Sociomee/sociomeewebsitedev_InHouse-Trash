import * as types from "../../Constants/SocialFeed/index";

const initialState = {
  allUserPosts: [],
  loading: true,
};

const getAllUserPosts = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_USER_POSTS:
      return {
        ...state,
        allUserPosts: action.payload,
        loading: false, 
      };
      case types.CREATE_POST:
      case types.DELETE_POST:
    default:
      return state;
  }
};

export default getAllUserPosts;
