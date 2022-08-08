import * as types from '../Constants/index';
import axios from 'axios';

const getAllSavedPost = (savedPost) => ({
    type: types.GET_ALL_SAVED_POST,
    payload: savedPost,
});

const postSaved = () => ({
    type: types.SET_POST_SAVED,
});



// get all saved post
export const loadAllSavedPost = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`https://apiserver.msgmee.com/post/getAllSavedPost`, {}, config)
                .then((res) => {
                    dispatch(getAllSavedPost(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};


// get all saved post
export const setPostSaved = (data) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`https://apiserver.msgmee.com/post/setPostSaved`,data, config)
                .then((res) => {
                    dispatch(postSaved(res.data.data.successResult))
                    dispatch(loadAllSavedPost())
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};