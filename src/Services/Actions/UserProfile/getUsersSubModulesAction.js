import * as types from '../../Constants/UserProfile/index';
import axios from 'axios';
import {loadHobbiesByUserId} from './getUserProfileByUserIdAction';

const getAllUserSports = (userSports) => ({
    type: types.GET_USERS_SPORTS,
    payload: userSports,
});

const getAllUserMovies = (userMovies) => ({
    type: types.GET_USERS_MOVIES,
    payload: userMovies,
});

const getAllUserMusics = (userMusics) => ({
    type: types.GET_USERS_MUSICS,
    payload: userMusics,
});

const getAllUserEducations = (userEducations) => ({
    type: types.GET_USERS_EDUCATIONS,
    payload: userEducations,
});

const getAllHobies = (userHobbies) => ({
    type: types.GET_ALL_HOBBIES,
    payload: userHobbies,
});

const getAllProfession = (allProfession) => ({
    type: types.GET_ALL_PROFESSION,
    payload: allProfession,
});


// get all user's sports
export const loadAllUserSports = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getSports`, {}, {headers: { Authorization: `Bearer ${user?.token}` }})
                .then((res) => {
                    dispatch(getAllUserSports(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get all user's Music
export const loadAllUserMusics = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getMusic`, {}, config)
                .then((res) => {
                    dispatch(getAllUserMusics(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get all user's Movies
export const loadAllUserMovies = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getMovies`, {}, config)
                .then((res) => {
                    dispatch(getAllUserMovies(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get all user's Music
export const loadAllUserEducations = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getUserEducation`, {}, config)
                .then((res) => {
                    dispatch(getAllUserEducations(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get all user's Music
export const loadAllHobbies = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/admin/getAllHobbies`, {}, config)
                .then((res) => {
                    dispatch(getAllHobies(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get all professions
export const loadAllProfessions = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/admin/getAllProfessions`, {}, { headers: { Authorization: `Bearer ${user.token}` } })
                .then((res) => {
                    dispatch(getAllProfession(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// add user's hobbies
export const addUserHobbies = (hobbies) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('sociomeeUser'));
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/addHobbies`, hobbies, { headers: { Authorization: `Bearer ${user.token}` } })
                .then((res) => {
                    console.log(res.data)
                    dispatch(loadHobbiesByUserId());
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
