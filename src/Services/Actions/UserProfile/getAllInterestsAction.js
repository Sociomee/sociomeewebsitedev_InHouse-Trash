import * as types from '../../Constants/UserProfile/index';
import axios from 'axios';

const getAllInterests = (allInterests) => ({
    type: types.GET_ALL_INTERESTS,
    payload: allInterests,
});

// get all interest 
export const loadAllInterests = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            axios.post(`https://apiserver.msgmee.com/admin/getAllInterests`,{},{ headers: { Authorization: `Bearer ${user.token}` } })
                .then((res) => {
                    dispatch(getAllInterests(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// add interests
export const addInterests = (interest) => {
    let user = JSON.parse(localStorage.getItem('user'));
    return function (dispatch) {
        axios.post(`https://apiserver.msgmee.com/user/addInterests/`, interest, {headers: { Authorization: `Bearer ${user.token}` }})
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

