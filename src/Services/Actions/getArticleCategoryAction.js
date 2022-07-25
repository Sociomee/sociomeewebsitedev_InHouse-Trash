import * as types from '../Constants/index';
import axios from 'axios';

const getArticleCategory = (articleCategory) => ({
    type: types.GET_ARTICLE_CATEGORY,
    payload: articleCategory,
});

// get all article category
export const loadArticleCategory = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`https://apiserver.msgmee.com/post/getArticleCategory`,{},config)
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
