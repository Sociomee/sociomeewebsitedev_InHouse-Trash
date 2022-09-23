import * as types from '../../Constants/UserProfile/index';
import { loadProfileByUserId } from './getUserProfileByUserIdAction';
import axios from 'axios';

const userBioUpdated = () => ({
    type: types.UPDATE_USER_BIO,
});

export const updateUserBio = (id) => {
    return function (dispatch) {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    if (user) {
        axios.post(`${process.env.REACT_APP_IPURL}/user/update`, {} ,
        {
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then((res) => {
                dispatch(userBioUpdated());
                dispatch(loadProfileByUserId());
            })
            .catch((error) => {
                console.log(error);
            })
        }
    };
};