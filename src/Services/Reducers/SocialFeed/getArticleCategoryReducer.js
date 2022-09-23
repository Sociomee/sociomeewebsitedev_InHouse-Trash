import * as types from "../../Constants/SocialFeed/index";

const initialState = {
  articleCategory: [],
  loading: true,
};

const getArticleCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ARTICLE_CATEGORY:
      return {
        ...state,
        articleCategory: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default getArticleCategoryReducer;
