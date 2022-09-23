import * as types from '../../Constants/SocialFeed/index';
import axios from 'axios';
import { loadAllUserPosts } from '../SocialFeed/getAllUserPostsAction';


const answerAdded = () => ({
    type: types.ADD_ANSWER_ON_POLL_POST,
});

// add answer on poll post
export const addAnswerOnPollPost = (answer) => {
    let user = JSON.parse(localStorage.getItem('sociomeeUser'));
    const config = {
        headers: { Authorization: `Bearer ${user.token ? user?.token : ''}` }
    };
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_IPURL}/post/selectUserPollOption/`, answer, config)
            .then((res) => {
                console.log("add answer response :", res);
                dispatch(answerAdded(res.data));
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

