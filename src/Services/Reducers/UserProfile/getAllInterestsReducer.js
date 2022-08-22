import * as types from "../../Constants/UserProfile/index";

const initialState = {
  allInterests: {},
  loading: true,
};

const getAllInterestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_INTERESTS:
      return {
        ...state,
        allInterests: action.payload,
        loading: false,
      };
    case types.ADD_INTERESTS:
    default:
      return state;
  }
};

export default getAllInterestsReducer;
