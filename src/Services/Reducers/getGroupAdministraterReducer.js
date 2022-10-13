import * as types from "../Constants/index";

const initialState = {
  getGroupAdministrater: {},
  loading: true,
};

const getGroupAdministraterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_GROUP_ADMINISTRATER:
      return {
        ...state,
        getGroupAdministrater: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default getGroupAdministraterReducer;
