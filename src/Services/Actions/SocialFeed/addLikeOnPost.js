import * as types from '../../Constants/SocialFeed/index';
import axios from 'axios';
import { loadAllUserPosts } from '../SocialFeed/getAllUserPostsAction';


const likeAdded = () => ({
    type: types.ADD_LIKE_ON_POST,
});

// add like on post
export const addLikeOnPost = (like) => {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    const config = {
        headers: { Authorization: `Bearer ${user?.token}` }
    };
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_IPURL}/post/setLike/`, like, config)
            .then((res) => {
                dispatch(likeAdded(res.data));
                // dispatch(loadAllUserPosts());

            })
            .catch((error) => {
                console.log(error);
            })
    };
};

