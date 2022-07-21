import * as types from "../Constants/index";

const initialState = {
  allReactions: [],
  loading: true,
};

const getAllReactions = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_REACTIONS:
      return {
        ...state,
        allReactions: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default getAllReactions;
