import * as types from '../../Constants/SocialFeed/index';
import axios from 'axios';
import { loadAllPostsByUserId } from '../SocialFeed/getAllPostsByUserIdAction';

const getAllReactions = (allReactions) => ({
    type: types.GET_ALL_REACTIONS,
    payload: allReactions,
});
// get all user post
export const loadAllReactions = () => {
    
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/admin/getAllReactions`,{},{ headers: { Authorization: `Bearer ${user.token}` }})
                .then((res) => {
                    dispatch(getAllReactions(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
