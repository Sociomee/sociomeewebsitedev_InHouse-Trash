import * as types from '../../Constants/UserProfile/index';
import axios from 'axios';

const getUserProfileByUserId = (userProfileByUserId) => ({
    type: types.GET_PROFILE_BY_USER_ID,
    payload: userProfileByUserId,
});

// get user profile by user id
export const loadProfileByUserId = (id) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            axios.post(`https://apiserver.msgmee.com/user/getUserProfileById`, { userId: user.id },{ headers: { Authorization: `Bearer ${user.token}` } })
                .then((res) => {
                    // console.log("all posts:", res.data.data.successResult);
                    dispatch(getUserProfileByUserId(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
