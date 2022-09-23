import * as types from "../../Constants/UserProfile/index";

const initialState = {
  loading: true,
};

const updateUserByUserIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_BIO:
    default:
      return state;
  }
};

export default updateUserByUserIdReducer;
