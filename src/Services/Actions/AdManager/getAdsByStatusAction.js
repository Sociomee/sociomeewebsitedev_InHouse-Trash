import * as types from '../../Constants/AdManager/index';
import axios from "axios";

const getAdsByStatus = (allAdsByStatus) => ({
    type: types.GET_ALL_ADS_BY_STATUS,
    payload: allAdsByStatus,
});

// send user following request
export const loadAdsByStatus = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user?.token) {
            const data = {
                "pageNumber": 10,
                "pageSize": 0, 
                "adStatus": "DRAFT"
            }
            axios.post(`${process.env.REACT_APP_IPURL}/ads/adMaster/get/ad/by/adStatus`, data,
                { headers: { Authorization: `Bearer ${user?.token}` } })
                .then((res) => {
                    console.log(res.data)
                    dispatch(getAdsByStatus(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};