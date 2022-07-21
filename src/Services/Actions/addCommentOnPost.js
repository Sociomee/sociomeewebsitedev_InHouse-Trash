import * as types from '../Constants/index';
import axios from 'axios';
import { loadAllUserPosts } from './getAllUserPostsAction';


const commentAdded = () => ({
    type: types.ADD_COMMENT_ON_POST,
});

// add comment on post
export const addCommentOnPost = (comment) => {
    let user = JSON.parse(localStorage.getItem('user'));
const config = {
    headers: { Authorization: `Bearer ${user.token ? user?.token:''}` }
};
    return function (dispatch) {
        axios.post(`https://apiserver.msgmee.com/post/addComment/`, comment,config)
        .then((res) => {
            console.log("add post response :", res);
            dispatch(commentAdded(res.data));
            dispatch(loadAllUserPosts());

        }) 
        .catch((error) => {
            console.log(error);
        })
    };
};

