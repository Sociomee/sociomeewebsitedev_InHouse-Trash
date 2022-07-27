import * as types from "../Constants/index";

const initialState = {
  allPostsByUserId: [],
  loading: true,
};

const getAllPostsByUserId = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS_BY_USER_ID:
      return {
        ...state,
        allPostsByUserId: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default getAllPostsByUserId;
