import * as types from "../../Constants/UserProfile/index";

const initialState = {
  userFollowingRequests: [],
  loading: true,
};

const userFollowingRequests = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FOLLOWING_REQUESTS:
      return {
        ...state,
        userFollowingRequests: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userFollowingRequests;
