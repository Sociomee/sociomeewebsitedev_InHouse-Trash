import * as types from "../Constants/index";

const initialState = {
  eventCategory: [],
  loading: true,
};

const getEventCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EVENT_CATEGORY:
      return {
        ...state,
        eventCategory: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default getEventCategoryReducer;
