import * as types from "../../Constants/AdManager/index";

const initialState = {
  allAdsByStatus: [],
  loading: true,
};

const getAllAdByStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ADS_BY_STATUS:
      return {
        ...state,
        allAdsByStatus: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default getAllAdByStatusReducer;
