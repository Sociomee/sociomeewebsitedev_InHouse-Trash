import * as types from "../Constants/index";

const initialState = {
  allUserGroups: [],
  loading: true,
};
 
const getAllUserGroups = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_USER_GROUPS:
      return {
        ...state,
        allUserGroups: action.payload,
        loading: false, 
      };
      case types.CREATE_GROUP:
      case types.DELETE_GROUP:
    default:
      return state;
  }
};

export default getAllUserGroups;
