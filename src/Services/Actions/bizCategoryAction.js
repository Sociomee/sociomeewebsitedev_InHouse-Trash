import * as types from '../Constants/index';
import axios from 'axios';

const getAllBizCategory = (bizCategory) => ({
    type: types.GET_BIZ_CATEGORY,
    payload: bizCategory,
});
// get all biz category
export const loadAllBizCategory = () => {
    
    let user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };
    return function (dispatch) {
        if (user) {
            axios.post(`https://apiserver.msgmee.com/bp/getAllCategory`,{},config)
                .then((res) => {
                    dispatch(getAllBizCategory(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
