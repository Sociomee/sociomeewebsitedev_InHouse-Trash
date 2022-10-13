import * as types from '../../Constants/SocialFeed/index';
import axios from 'axios';
import { loadAllUserPosts } from '../SocialFeed/getAllUserPostsAction';
import { loadAllCommments } from './getAllCommentsAction';


const commentAdded = () => ({
    type: types.ADD_COMMENT_ON_POST,
});

// add comment on post
export const addCommentOnPost = (comment) => {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
   
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_IPURL}/post/addComment/`, comment, {headers: { Authorization: `Bearer ${user?.token}` }})
            .then((res) => {
                dispatch(commentAdded(res.data));

            })
            .catch((error) => {
                console.log(error);
            })
    };
};

// add like on comment
export const addLikeOnComment = (like) => {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_IPURL}/post/setCommentLike`, like, { headers: { Authorization: `Bearer ${user?.token}` } })
            .then((res) => {
                console.log(res.data)

            })
            .catch((error) => {
                console.log(error);
            })
    };
};

