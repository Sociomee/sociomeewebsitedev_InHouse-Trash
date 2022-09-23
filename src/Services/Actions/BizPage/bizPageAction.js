import axios from 'axios';
import * as types from "../../Constants/BizPage/index";


const bizPageCreate = (bizPage) => ({
    type: types.CREATE_BIZ_PAGE,
    payload: bizPage,
});

const userBizPage = (userBizPage) => ({
    type: types.GET_USER_BIZ_PAGE,
    payload: userBizPage,
});

const singleBizPage = (singleBizPage) => ({
    type: types.GET_SINGLE_BIZ_PAGE,
    payload: singleBizPage,
});


// create biz page
export const createBizPage = (page) => {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_IPURL}/bp/create/businessPage`, page,
            { headers: { Authorization: `Bearer ${user.token}` } })
            .then((res) => {
                console.log("create page response :", res);
                dispatch(bizPageCreate(res.data.data))
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

// get user biz page
export const getUserBizPage = () => {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_IPURL}/user/getUserBusinessPages`, {}, { headers: { Authorization: `Bearer ${user.token}` } })
            .then((res) => {
                dispatch(userBizPage(res.data.data))
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

// get single biz page
export const getSingleBizPage = (id) => {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_IPURL}/bp/getpagedetails`, { id: id }, { headers: { Authorization: `Bearer ${user.token}` } })
            .then((res) => {
                dispatch(singleBizPage(res.data.data))
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

