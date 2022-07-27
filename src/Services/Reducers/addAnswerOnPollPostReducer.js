import * as types from "../Constants/index";

const initialState = {
  loading: true,
};

const addAnswerOnPollPost = (state = initialState, action) => {
  switch (action.type) {
      case types.ADD_ANSWER_ON_POLL_POST:
    default:
      return state;
  }
};

export default addAnswerOnPollPost;
