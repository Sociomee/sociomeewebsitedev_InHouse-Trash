import * as types from '../Constants/index';
import axios from 'axios';

const getAllPostsByUserId = (allPostsByUserId) => ({
    type: types.GET_ALL_POSTS_BY_USER_ID,
    payload: allPostsByUserId,
});

// get all post by user id
export const loadAllPostsByUserId = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            axios.post(`https://apiserver.msgmee.com/post/getAllPosts`,{},{ headers: { Authorization: `Bearer ${user.token}` }})
                .then((res) => {
                    // console.log("all posts:", res.data.data.successResult);
                    dispatch(getAllPostsByUserId(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
