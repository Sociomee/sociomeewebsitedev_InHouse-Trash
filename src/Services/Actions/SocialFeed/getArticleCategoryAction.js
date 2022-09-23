import * as types from '../../Constants/SocialFeed/index';
import axios from 'axios';

const getArticleCategory = (articleCategory) => ({
    type: types.GET_ARTICLE_CATEGORY,
    payload: articleCategory,
});

// get all article category
export const loadArticleCategory = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/post/getArticleCategory`,{},config)
                .then((res) => {
                    // console.log("all posts:", res.data.data.successResult);
                    dispatch(getArticleCategory(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
