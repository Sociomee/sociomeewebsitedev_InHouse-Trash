import * as types from '../Constants/index';
import axios from 'axios';

const getBizSubCategory = (bizSubCategory) => ({
    type: types.GET_BIZ_SUBCATEGORY,
    payload: bizSubCategory,
});
// get all biz category
export const loadBizSubCategory = (categoryId) => {
    
    let user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };
    return function (dispatch) {
        if (user) {
            axios.post(`https://apiserver.msgmee.com/bp/getAllSubCategory`,categoryId,config)
                .then((res) => {
                    dispatch(getBizSubCategory(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
