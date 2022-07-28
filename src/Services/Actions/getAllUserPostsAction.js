import * as types from '../Constants/index';
import axios from 'axios';
import { loadAllPostsByUserId } from './getAllPostsByUserIdAction';

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
    let user = JSON.parse(localStorage.getItem('user'));
const config = {
    headers: { Authorization: `Bearer ${user?.token}` }
};
    return function (dispatch) {
        if (user) {
            axios.post(`https://apiserver.msgmee.com/post/getFeedPosts`,data,config)
                .then((res) => {
                    // console.log("all posts:", res.data.data.successResult);
                    dispatch(getAllUserPosts(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// add post
export const addPost = (post) => {
    let user = JSON.parse(localStorage.getItem('user'));
const config = {
    headers: { Authorization: `Bearer ${user.token!==undefined ? user?.token:''}` }
};
    return function (dispatch) {
        axios.post(`https://apiserver.msgmee.com/post/createPost/`, post,config)
        .then((res) => {
            console.log("add post response :", res);
            dispatch(postAdded(res.data));
            dispatch(loadAllUserPosts({pageIndex: 0,pageSize: 3}));
            dispatch(loadAllPostsByUserId());

        }) 
        .catch((error) => {
            console.log(error);
        })
    };
};

// add post
export const deletePost = (id) => {
    let user = JSON.parse(localStorage.getItem('user'));
const config = {
    headers: { Authorization: `Bearer ${user.token!==undefined ? user?.token:''}` }
};
    return function (dispatch) {
        axios.post(`https://apiserver.msgmee.com/post/deletePost/`, id,config)
        .then((res) => {
            console.log("delete post response :", res);
            dispatch(postDeleted(res.data));
            dispatch(loadAllUserPosts({pageIndex: 0,pageSize: 3}));
            dispatch(loadAllPostsByUserId());
        }) 
        .catch((error) => {
            console.log(error);
        })
    };
};
