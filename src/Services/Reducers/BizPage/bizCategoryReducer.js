import * as types from "../../Constants/BizPage/index";

const initialState = {
  bizCategory: [],
  loading: true,
};

const bizCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BIZ_CATEGORY:
      return {
        ...state,
        bizCategory: action.payload,
        loading: false, 
      };
   
    default:
      return state;
  }
};

export default bizCategoryReducer;
