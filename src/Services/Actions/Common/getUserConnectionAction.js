import * as types from '../../Constants/Common/index';
import axios from 'axios';

const getAllUserConnection = (getUserConnection) => ({
    type: types.GET_USER_CONNECTION,
    payload: getUserConnection,
});

const userConnectionAdded = () => ({
    type: types.GET_ADD_USER_CONNECTION,
});

// get all biz category
export const loadAllUserConnection = () => {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getUserConnections/`, {},
                {
                    headers: { Authorization: `Bearer ${user?.token}` }
                })
                .then((res) => {
                    dispatch(getAllUserConnection(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// ADD USER CONNECTION
export const addUserConnection = (privacy) => {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/addUserConnection/`, privacy,  
            { headers: { Authorization: `Bearer ${user?.token}` } })
                .then((res) => {
                    // console.log("added amenities response :", res);
                    dispatch(userConnectionAdded(res.data));
                    dispatch(loadAllUserConnection());
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
