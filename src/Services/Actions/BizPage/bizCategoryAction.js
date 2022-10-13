import * as types from '../../Constants/BizPage/index';
import axios from 'axios';

const getAllBizCategory = (bizCategory) => ({
    type: types.GET_BIZ_CATEGORY,
    payload: bizCategory,
});
// get all biz category
export const loadAllBizCategory = () => {
    
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    const config = {
        headers: { Authorization: `Bearer ${user?.token}` }
    };
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/bp/getAllCategory`,{},config)
                .then((res) => {
                    dispatch(getAllBizCategory(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
