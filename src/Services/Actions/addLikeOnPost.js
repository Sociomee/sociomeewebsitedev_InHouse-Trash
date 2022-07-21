import * as types from '../Constants/index';
import axios from 'axios';
import { loadAllUserPosts } from './getAllUserPostsAction';


const likeAdded = () => ({
    type: types.ADD_LIKE_ON_POST,
});

// add like on post
export const addLikeOnPost = (like) => {
    let user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: { Authorization: `Bearer ${user.token ? user?.token : ''}` }
    };
    return function (dispatch) {
        axios.post(`https://apiserver.msgmee.com/post/setLike/`, like, config)
            .then((res) => {
                console.log("add like response :", res);
                dispatch(likeAdded(res.data));
                dispatch(loadAllUserPosts());

            })
            .catch((error) => {
                console.log(error);
            })
    };
};

