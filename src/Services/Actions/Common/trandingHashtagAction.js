import * as types from '../../Constants/Common/index';
import axios from 'axios';

const getAllTrendingHashtag = (trandingHashtags) => ({
    type: types.GET_TRENDING_HASHTAG,
    payload: trandingHashtags,
});
// get all biz category
export const loadAllTrendingHashtag = (pageSize) => {

    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/hashtag/getTrending`, pageSize,
                {
                    headers: { Authorization: `Bearer ${user?.token}` }
                })
                .then((res) => {
                    dispatch(getAllTrendingHashtag(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
