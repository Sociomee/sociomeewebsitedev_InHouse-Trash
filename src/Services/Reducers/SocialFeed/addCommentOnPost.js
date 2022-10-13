import * as types from "../../Constants/SocialFeed/index";

const initialState = {
  loading: true,
};

const addCommentOnPost = (state = initialState, action) => {
  switch (action.type) {
      case types.ADD_COMMENT_ON_POST:
    default:
      return state;
  }
};

export default addCommentOnPost;
