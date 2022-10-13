import * as types from '../../Constants/BizPage/index';
import axios from 'axios';

const getBizSubCategory = (bizSubCategory) => ({
    type: types.GET_BIZ_SUBCATEGORY,
    payload: bizSubCategory,
});
// get all biz category
export const loadBizSubCategory = (categoryId) => {
    
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    const config = {
        headers: { Authorization: `Bearer ${user?.token}` }
    };
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/bp/getAllSubCategory`,categoryId,config)
                .then((res) => {
                    dispatch(getBizSubCategory(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
