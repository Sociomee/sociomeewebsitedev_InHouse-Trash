import * as types from "../../Constants/SocialFeed/index";
import axios from "axios";
import { loadAllPostsByUserId } from "../SocialFeed/getAllPostsByUserIdAction";

const getAllUserPosts = (allUserPosts) => ({
  type: types.GET_ALL_USER_POSTS,
  payload: allUserPosts,
});

const postAdded = () => ({
  type: types.CREATE_POST,
});

const postDeleted = () => ({
  type: types.DELETE_POST,
});

// get all user post
export const loadAllUserPosts = (data) => {
  let user = JSON.parse(localStorage.getItem("sociomeeUser"));
  const config = {
    headers: { Authorization: `Bearer ${user?.token}` },
  };
  return function (dispatch) {
    if (user) {
      axios
        .post(`${process.env.REACT_APP_IPURL}/post/getFeedPosts`, data, config)
        .then((res) => {
          // console.log("all posts:", res.data.data.successResult);
          dispatch(getAllUserPosts(res.data.data.successResult));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

// add post
export const addPost = (post) => {
  let user = JSON.parse(localStorage.getItem("sociomeeUser"));
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_IPURL}/post/createPost/`, post, {
        headers: {
          Authorization: `Bearer ${
           user?.token
          }`,
        },
      })
      .then((res) => {
        console.log("add posts:", res.data);
        dispatch(postAdded(res.data));
        dispatch(loadAllUserPosts({ pageIndex: 0, pageSize: 3 }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// delete post
export const deletePost = (id) => {
  let user = JSON.parse(localStorage.getItem("sociomeeUser"));
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_IPURL}/post/deletePost/`, id, {
    headers: {
      Authorization: `Bearer ${user?.token }`,
    },
  })
      .then((res) => {
        console.log("delete post response :", res);
        dispatch(postDeleted(res.data));
        dispatch(loadAllUserPosts({ pageIndex: 0, pageSize: 3 }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// undo delete post
export const undoDeletePost = (id) => {
  let user = JSON.parse(localStorage.getItem("sociomeeUser"));
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_IPURL}/post/undoPostDelete`, id, {
        headers: { Authorization: `Bearer ${user?.token}` },
      })
      .then((res) => {
        dispatch(loadAllUserPosts({ pageIndex: 0, pageSize: 3 }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
