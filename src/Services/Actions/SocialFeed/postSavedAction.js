import * as types from '../../Constants/SocialFeed/index';
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
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/post/getAllSavedPost`, {}, config)
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
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/post/setPostSaved`,data, config)
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