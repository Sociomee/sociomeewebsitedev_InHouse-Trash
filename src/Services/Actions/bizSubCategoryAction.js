import * as types from '../Constants/index';
import axios from 'axios';

const getBizSubCategory = (bizSubCategory) => ({
    type: types.GET_BIZ_SUBCATEGORY,
    payload: bizSubCategory,
});
// get all biz category
export const loadBizSubCategory = (categoryId) => {
    
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));

    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/bp/getAllSubCategory`,categoryId,{headers: { Authorization: `Bearer ${user?.token}` }})
                .then((res) => {
                    dispatch(getBizSubCategory(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
