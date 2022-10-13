import * as types from "../../Constants/SocialFeed/index";

const initialState = {
  uploadFile: [],
  loading: true,
};

const uploadFile = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD_FILE:
      return {
        ...state,
        uploadFile: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default uploadFile;
