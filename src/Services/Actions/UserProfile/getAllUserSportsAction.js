import * as types from '../../Constants/UserProfile/index';
import axios from 'axios';
import { loadProfileByUserId, loadSportsByUserId } from './getUserProfileByUserIdAction';

const getAllSports = (allSports) => ({
    type: types.LOAD_ALL_SPORTS,
    payload: allSports,
});


// get all interest 
export const loadAllSports = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getAllSports`, {}, {
                headers: { Authorization: `Bearer ${user?.token}` }
            })
                .then((res) => {
                    dispatch(getAllSports(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// add interests
export const addSports = (sport) => {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        user && axios.post(`${process.env.REACT_APP_IPURL}/user/addSports`, sport, { headers: { Authorization: `Bearer ${user?.token}` } })
            .then((res) => {
                console.log(res)
                dispatch(loadSportsByUserId())
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

