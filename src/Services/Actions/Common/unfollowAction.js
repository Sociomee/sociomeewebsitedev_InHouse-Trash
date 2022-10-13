import axios from "axios";
import { loadAllUserFollowers } from "./getUserFollowersAction";
import { loadAllUserFollowing } from "./getUserFollowingAction";

// send user following request
export const unfollowAction = (id) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user?.token) { 
            const data = {
                "followingRequestId": id,
            }
            axios.post(`${process.env.REACT_APP_IPURL}/user/disapproveFollowingRequest`, data,
                { headers: { Authorization: `Bearer ${user?.token}` } })
                .then((res) => {
                    dispatch(loadAllUserFollowing())
                    dispatch(loadAllUserFollowers())
                    console.log(res.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};