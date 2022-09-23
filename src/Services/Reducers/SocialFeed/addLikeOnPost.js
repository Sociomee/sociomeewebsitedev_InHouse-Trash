import * as types from "../../Constants/SocialFeed/index";

const initialState = {
  loading: true,
};

const addLikeOnPost = (state = initialState, action) => {
  switch (action.type) {
      case types.ADD_LIKE_ON_POST:
    default:
      return state;
  }
};

export default addLikeOnPost;
