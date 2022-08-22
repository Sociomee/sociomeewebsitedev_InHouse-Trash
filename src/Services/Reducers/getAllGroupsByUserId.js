import * as types from "../Constants/index";

const initialState = {
  allGroupsByUserId: [],
  singleGrpById: {},
  loading: true,
};

const getAllGroupsByUserId = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_GROUPS_BY_USER_ID:
      return {
        ...state,
        allGroupsByUserId: action.payload,
        loading: false,
      };
    case types.GET_SINGLE_GROUP:
      return {
        ...state,
        singleGrpById: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default getAllGroupsByUserId;
