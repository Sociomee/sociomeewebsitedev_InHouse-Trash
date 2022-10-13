import * as types from "../../Constants/UserProfile/index";

const initialState = {
    userProfileByUserId: {},
    userSportsByUserId: [],
    userHobbiesByUserId: [],
  loading: true,
};

const getUserProfileByUserIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE_BY_USER_ID:
      return {
        ...state,
        userProfileByUserId: action.payload,
        loading: false, 
      };
    case types.GET_USERS_SPORTS:
      return {
        ...state,
        userSportsByUserId: action.payload,
        loading: false, 
      };
    case types.GET_USERS_HOBBIES:
      return {
        ...state,
        userHobbiesByUserId: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default getUserProfileByUserIdReducer;
