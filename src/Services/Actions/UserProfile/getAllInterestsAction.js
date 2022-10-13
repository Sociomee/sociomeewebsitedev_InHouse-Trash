import * as types from '../../Constants/UserProfile/index';
import axios from 'axios';
import { loadProfileByUserId } from './getUserProfileByUserIdAction';

const getAllInterests = (allInterests) => ({
    type: types.GET_ALL_INTERESTS,
    payload: allInterests,
});


// get all interest 
export const loadAllInterests = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/admin/getAllInterests`,{},{ headers: { Authorization: `Bearer ${user?.token}` } })
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
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        user && axios.post(`${process.env.REACT_APP_IPURL}/user/addInterests/`, { interestIds: interest }, {headers: { Authorization: `Bearer ${user?.token}` }})
            .then((res) => {
                console.log(res)
                dispatch(loadProfileByUserId())
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

