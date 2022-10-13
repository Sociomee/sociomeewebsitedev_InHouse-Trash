import * as types from '../../Constants/index';
import axios from 'axios';
import { loadAllGroupsByUserId } from './getAllGroupsByUserIdAction';

const getAllUserGroups = (allUserGroups) => ({
    type: types.GET_ALL_USER_GROUPS,
    payload: allUserGroups,
});

const groupAdded = () => ({
    type: types.CREATE_GROUP,
});
 
const groupDeleted = () => ({
    type: types.DELETE_GROUP,
});


const getGroup = (singleGrpById) => ({
    type : types.GET_SINGLE_GROUP,
    payload: singleGrpById,
})

let user = JSON.parse(localStorage.getItem('sociomeeUser'));

// get all user post
export const loadAllUserGroups = () => {
    return function (dispatch) {
        if (user) {
            axios.get(`${process.env.REACT_APP_IPURL}/group/getAllGroups`,{}, {
                headers: {
                    Authorization: 'Bearer ' + user?.token
                }
            })
                .then((res) => {
                    dispatch(getAllUserGroups(res.data.data.successResult.rows))
                    // console.log('your all groups...',res.data.data)
                })
                .catch((error) => { 
                    console.log(error);
                })
        }
    };
};

// add post
export const addGroup = (group) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_IPURL}/group/create`, group, {
            headers: {
                Authorization: 'Bearer ' + user?.token
            }
        })
            .then((res) => {
                console.log("add post response :", res);
                dispatch(groupAdded(res.data));
                // dispatch(loadAllUserGroups());
                // dispatch(loadAllGroupsByUserId());
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

// add post
export const deletePost = (id) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_IPURL}/group/delete/`, id, {
            headers: {
                Authorization: 'Bearer ' + user?.token
            }
        })
            .then((res) => {
                console.log("delete post response :", res);
                dispatch(groupDeleted(res.data));
                dispatch(loadAllUserGroups());
                dispatch(loadAllGroupsByUserId());
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

// get single grp by id
// find admin by id
export const getSingleGroup = (id) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        const config = {
            headers: { Authorization: `Bearer ${user?.token}` }
        };
        if (user) {
            const grpBody=({ 
                "groupId" : id,
                "userId" : user.id
            })
            axios.post(`${process.env.REACT_APP_IPURL}/group/getById`, grpBody, config)
                .then((res) => {
                    console.log("single admin response :", res.data.data);
                    dispatch(getGroup(res.data.data.successResult));
                })
                .catch((error) => {
                    console.log("eroooooooo", error);
                })
        }
    };
};