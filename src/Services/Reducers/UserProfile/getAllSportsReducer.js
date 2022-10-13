import * as types from "../../Constants/UserProfile/index";

const initialState = {
  allSports: {},
  loading: true,
};

const getAllSportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_ALL_SPORTS:
      return {
        ...state,
        allSports: action.payload,
        loading: false,
      };
    case types.ADD_SPORTS:
    default:
      return state;
  }
};

export default getAllSportsReducer;
