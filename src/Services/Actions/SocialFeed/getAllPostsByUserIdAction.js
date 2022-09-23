import * as types from '../../Constants/SocialFeed/index';
import axios from 'axios';

const getAllPostsByUserId = (allPostsByUserId) => ({
    type: types.GET_ALL_POSTS_BY_USER_ID,
    payload: allPostsByUserId,
});

// get all post by user id
export const loadAllPostsByUserId = (pageSize) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser')); 
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/post/getAllPosts`, pageSize,
                {
                    headers: { Authorization: `Bearer ${user.token}` }
                })
                .then((res) => {
                    // console.log("all posts:", res.data.data.successResult);
                    dispatch(getAllPostsByUserId(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
