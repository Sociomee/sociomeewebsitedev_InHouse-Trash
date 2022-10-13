import * as types from '../../Constants/AdManager/index';
import axios from "axios";

const getAdType = (adType) => ({
    type: types.GET_TYPE,
    payload: adType,
});

const getAdTypeOfType = (singleTypeOfType) => ({
    type : types.GET_TYPE_OF_TYPES,
    payload: singleTypeOfType,
})
// send user following request
export const loadAdType = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user?.token) {
            const data = {
                "pageIndex": 1,
                "pageSize":10
            }
            axios.post(`${process.env.REACT_APP_IPURL}/ads/adMaster/adType`, data,
                { headers: { Authorization: `Bearer ${user?.token}` } })
                .then((res) => {
                    console.log(res.data)
                    dispatch(getAdType(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// GET AD TYPE OF TYPE
export const getSingleAdTypeOfType = (id) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        const config = {
            headers: { Authorization: `Bearer ${user?.token}` }
        };
        if (user) {
            const adTypeOfTypebody=({ 
                "id" : id, 
            })
            axios.post(`${process.env.REACT_APP_IPURL}/ads/adMaster/adType/subTypes/by`, adTypeOfTypebody, config)
                .then((res) => {
                    console.log("single admin response :", res.data.data);
                    dispatch(getAdTypeOfType(res.data.data));
                })
                .catch((error) => {
                    console.log("eroooooooo", error);
                })
        }
    };
};