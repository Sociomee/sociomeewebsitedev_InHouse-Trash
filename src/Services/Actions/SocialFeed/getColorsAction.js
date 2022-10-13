import * as types from '../../Constants/SocialFeed/index';
import axios from 'axios';

const getColors = (colors) => ({
    type: types.GET_ALL_COLORS,
    payload: colors,
});

// get all colors
export const loadColors = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/admin/getColors`,{},{headers: { Authorization: `Bearer ${user?.token}` }})
                .then((res) => {
                    // console.log("all posts:", res.data.data.successResult);
                    dispatch(getColors(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
