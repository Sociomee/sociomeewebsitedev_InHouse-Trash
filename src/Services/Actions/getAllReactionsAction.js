import * as types from '../Constants/index';
import axios from 'axios';
import { loadAllPostsByUserId } from './getAllPostsByUserIdAction';

const getAllReactions = (allReactions) => ({
    type: types.GET_ALL_REACTIONS,
    payload: allReactions,
});
// get all user post
export const loadAllReactions = () => {
    
    let user = JSON.parse(localStorage.getItem('user'));
    return function (dispatch) {
        if (user) {
            axios.post(`https://apiserver.msgmee.com/admin/getAllReactions`,{},{ headers: { Authorization: `Bearer ${user.token}` }})
                .then((res) => {
                    dispatch(getAllReactions(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
