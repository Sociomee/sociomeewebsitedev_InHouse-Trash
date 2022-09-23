import * as types from '../../Constants/SocialFeed/index';
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
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    const config = {
        headers: { Authorization: `Bearer ${user?.token}` }
    };
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/post/getAlertDistance`, {}, config)
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
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    const config = {
        headers: { Authorization: `Bearer ${user?.token}` }
    };
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/post/getAlertLevels`, {}, config)
                .then((res) => {
                    dispatch(getAlertLevel(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
