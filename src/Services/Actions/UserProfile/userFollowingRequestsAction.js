import * as types from '../../Constants/UserProfile/index';
import axios from 'axios';
import { getSuggestedUsers } from './suggestedUsersAction'
import { loadProfileByUserId } from './getUserProfileByUserIdAction';

const userFollowingRequestsGet = (userFollowingRequests) => ({
    type: types.GET_FOLLOWING_REQUESTS,
    payload: userFollowingRequests,
});


// get user following requests
export const getUserFollowingRequests = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user?.token) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getFollowingRequests/`, {}, { headers: { Authorization: `Bearer ${user?.token}` } })
                .then((res) => {
                    dispatch(userFollowingRequestsGet(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// send user following request
export const sendUserFollowingRequests = (id, isPrivate) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user?.token) { 
            const data = {
                "followingToId": id,
                "isFollowed": true,
                "isPrivate": isPrivate === 0 ? false : true
            }
            axios.post(`${process.env.REACT_APP_IPURL}/user/followUnFollow`, data,
                { headers: { Authorization: `Bearer ${user?.token}` } })
                .then((res) => {
                    dispatch(getSuggestedUsers())
                    dispatch(loadProfileByUserId())
                    console.log(res.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// approve user following request
export const approveUserFollowingRequests = (id) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user?.token) {
            const data = {
                "followingUserId": id,
                "connectionIds": []
            }
            axios.post(`${process.env.REACT_APP_IPURL}/user/approveFollowingRequest/`, data, { headers: { Authorization: `Bearer ${user?.token}` } })
                .then((res) => {
                    dispatch(getUserFollowingRequests())
                    console.log(res.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};


// reject user following request
export const rejectUserFollowingRequests = (id) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user?.token) {
            const data = {
                "followingRequestId": id
            }
            axios.post(`${process.env.REACT_APP_IPURL}/user/disapproveFollowingRequest/`, data, { headers: { Authorization: `Bearer ${user?.token}` } })
                .then((res) => {
                    dispatch(getUserFollowingRequests())
                    console.log(res.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};





