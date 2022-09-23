import * as types from '../../Constants/Common/index';
import axios from 'axios';

const getAllUserFollowing = (getUserFollowing) => ({
    type: types.GET_USER_FOLLOWING,
    payload: getUserFollowing,
});
// get all biz category
export const loadAllUserFollowing = () => {

    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getUserFollowings/`,{},
                {
                    headers: { Authorization: `Bearer ${user.token}` }
                })
                .then((res) => {
                    dispatch(getAllUserFollowing(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
