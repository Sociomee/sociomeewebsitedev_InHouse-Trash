import * as types from '../../Constants/SocialFeed/index';
import axios from 'axios';

const getAllComments = (comments) => ({
    type: types.GET_ALL_COMMENTS,
    payload: comments,
});

// get all comments by post id
export const loadAllCommments = (data) => {

    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/post/getComments`, data,
                {
                    headers: { Authorization: `Bearer ${user?.token}` }
                })
                .then((res) => {
                    dispatch(getAllComments(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
