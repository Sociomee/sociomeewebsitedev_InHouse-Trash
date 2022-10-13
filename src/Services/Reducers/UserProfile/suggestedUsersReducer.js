import * as types from "../../Constants/UserProfile/index";

const initialState = {
  suggestedUsers: [],
  loading: true,
};

const suggestedUsers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SUGGESTED_USERS:
      return {
        ...state,
        suggestedUsers: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default suggestedUsers;
