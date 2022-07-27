import * as types from '../Constants/index';
import axios from 'axios';

const getAlertRange = (alertRange) => ({
    type: types.GET_ALERT_RANGE,
    payload: alertRange,
});

const getAlertLevel = (alertLevel) => ({
    type: types.GET_ALERT_LEVEL,
    payload: alertLevel,
});


// get all alert range
export const loadAlertRange = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: { Authorization: `Bearer ${user?.token}` }
    };
    return function (dispatch) {
        if (user) {
            axios.post(`https://apiserver.msgmee.com/post/getAlertDistance`, {}, config)
                .then((res) => {
                    dispatch(getAlertRange(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get all alert level
export const loadAlertLevel = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: { Authorization: `Bearer ${user?.token}` }
    };
    return function (dispatch) {
        if (user) {
            axios.post(`https://apiserver.msgmee.com/post/getAlertLevels`, {}, config)
                .then((res) => {
                    dispatch(getAlertLevel(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
