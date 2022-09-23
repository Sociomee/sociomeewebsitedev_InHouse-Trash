import * as types from "../../Constants/BizPage/index";

const initialState = {
  bizSubCategory: [],
  loading: true,
};

const bizSubCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BIZ_SUBCATEGORY:
      return {
        ...state,
        bizSubCategory: action.payload,
        loading: false, 
      };
   
    default:
      return state;
  }
};

export default bizSubCategoryReducer;
