import * as types from '../../Constants/UserProfile/index';
import axios from 'axios';

const suggestedUsersGet = (suggestedUsers) => ({
    type: types.GET_SUGGESTED_USERS,
    payload: suggestedUsers,
});

// get suggested user 
export const getSuggestedUsers = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user?.token) {
            axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=c1016d597c494a02aa190877148a5688')
                .then((res) => {
                    const location = { lat: res.data.latitude, long: res.data.longitude,pageIndex:0,pageSize:20 }
                    axios.post(`${process.env.REACT_APP_IPURL}/post/getSuggestedUsers`, location, { headers: { Authorization: `Bearer ${user?.token}` } })
                        .then((res) => {
                            dispatch(suggestedUsersGet(res.data.data.successResult))
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    };
};


