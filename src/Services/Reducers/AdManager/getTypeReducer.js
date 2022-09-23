import * as types from "../../Constants/AdManager/index";

const initialState = {
  adType: [],
  singleTypeOfType: {},
  loading: true,
};

const getTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TYPE:
      return {
        ...state,
        adType: action.payload,
        loading: false,
      };
      case types.GET_TYPE_OF_TYPES:
        return {
          ...state,
          singleTypeOfType: action.payload,
          loading: false,
        };
    default:
      return state;
  }
};

export default getTypeReducer;
