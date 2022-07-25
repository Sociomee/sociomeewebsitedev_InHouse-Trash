import * as types from '../Constants/index';
import axios from 'axios';
import { loadAllUserPosts } from './getAllUserPostsAction';


const answerAdded = () => ({
    type: types.ADD_ANSWER_ON_POLL_POST,
});

// add answer on poll post
export const addAnswerOnPollPost = (answer) => {
    let user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: { Authorization: `Bearer ${user.token ? user?.token : ''}` }
    };
    return function (dispatch) {
        axios.post(`https://apiserver.msgmee.com/post/selectUserPollOption/`, answer, config)
            .then((res) => {
                console.log("add answer response :", res);
                dispatch(answerAdded(res.data));
                dispatch(loadAllUserPosts());

            })
            .catch((error) => {
                console.log(error);
            })
    };
};

