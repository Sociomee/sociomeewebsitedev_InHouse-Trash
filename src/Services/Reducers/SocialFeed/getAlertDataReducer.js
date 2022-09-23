import * as types from "../../Constants/SocialFeed/index";

const initialState = {
  alertRange: [],
  alertLavel: [],
  loading: true,
};

const getAlertDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALERT_RANGE:
      return {
        ...state,
        alertRange: action.payload,
        loading: false, 
      };
    case types.GET_ALERT_LEVEL:
      return {
        ...state,
        alertLevel: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default getAlertDataReducer;
