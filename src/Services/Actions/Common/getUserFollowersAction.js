import * as types from '../../Constants/Common/index';
import axios from 'axios';

const getAllUserFollowers = (getUserFollowers) => ({
    type: types.GET_USER_FOLLOWERS,
    payload: getUserFollowers,
});
// get all biz category
export const loadAllUserFollowers = () => {

    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getUserFollowers/`,{},
                {
                    headers: { Authorization: `Bearer ${user?.token}` }
                })
                .then((res) => {
                    dispatch(getAllUserFollowers(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
