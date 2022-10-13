import * as types from "../../Constants/BizPage/index";

const initialState = {
  bizPage: {},
  singleBizPage: {},
  userBizPage: [],
  loading: true,
};

const createBizPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_BIZ_PAGE:
      return {
        ...state,
        bizPage: action.payload,
        loading: false, 
      };
    case types.GET_USER_BIZ_PAGE:
      return {
        ...state,
        userBizPage: action.payload,
        loading: false, 
      };
    case types.GET_SINGLE_BIZ_PAGE:
      return {
        ...state,
        singleBizPage: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default createBizPageReducer;
