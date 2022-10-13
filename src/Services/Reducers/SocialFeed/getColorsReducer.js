import * as types from "../../Constants/SocialFeed/index";

const initialState = {
  colors: [],
  loading: true,
};

const getColorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_COLORS:
      return {
        ...state,
        colors: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default getColorsReducer;
