import * as types from "../../Constants/UserProfile/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const getUserProfileByUserId = (userProfileByUserId) => ({
  type: types.GET_PROFILE_BY_USER_ID,
  payload: userProfileByUserId,
});
const getUserSportByUserId = (userSportsByUserId) => ({
  type: types.GET_USERS_SPORTS,
  payload: userSportsByUserId,
});
const getUserHobbieByUserId = (userHobbiesByUserId) => ({
  type: types.GET_USERS_HOBBIES,
  payload: userHobbiesByUserId,
});

// get user profile by user id
export const loadProfileByUserId = (id) => {
  return function (dispatch) {
    let user = JSON.parse(localStorage.getItem("sociomeeUser"));
    if (user) {
      axios
        .post(
          `${process.env.REACT_APP_IPURL}/user/getUserProfileById`,
          { userId: user.id },
          { headers: { Authorization: `Bearer ${user?.token}` } }
        )
        .then((res) => {
          // console.log("all posts:", res.data.data.successResult);
          dispatch(getUserProfileByUserId(res.data.data.successResult));
        })
        .catch((error) => {
          console.log(error);
          const navigate = useNavigate();
          const config = {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("sociomeeUser"))?.token
              }`,
            },
          };
          const logoutBody = {
            userId: JSON.parse(localStorage.getItem("sociomeeUser"))?.id,
          };

          axios
            .post(
              `${process.env.REACT_APP_IPURL}/user/logOut/`,
              logoutBody,
              config
            )
            .then((respo) => {
              if (respo.data.data?.successResult) {
                localStorage.removeItem("sociomeeUser");
                navigate("/");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        });
    }
  };
};

// get user profile by user id
export const loadSportsByUserId = (id) => {
  return function (dispatch) {
    let user = JSON.parse(localStorage.getItem("sociomeeUser"));
    if (user) {
      axios
        .post(
          `${process.env.REACT_APP_IPURL}/user/getSports`,
          { userId: user.id },
          { headers: { Authorization: `Bearer ${user?.token}` } }
        )
        .then((res) => {
          // console.log("all posts:", res.data.data.successResult);
          dispatch(getUserSportByUserId(res.data.data.successResult));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

// get user profile by user id
export const loadHobbiesByUserId = (id) => {
  return function (dispatch) {
    let user = JSON.parse(localStorage.getItem("sociomeeUser"));
    if (user) {
      axios
        .post(
          `${process.env.REACT_APP_IPURL}/user/getHobbies`,
          { userId: user.id },
          {
            headers: { Authorization: `Bearer ${user?.token}` },
          }
        )
        .then((res) => {
          // console.log("all posts:", res.data.data.successResult);
          dispatch(getUserHobbieByUserId(res.data.data.successResult.rows));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

// update user profile
export const updateUserProfile = (data) => {
  return function (dispatch) {
    let user = JSON.parse(localStorage.getItem("sociomeeUser"));
    if (user) {
      axios
        .post(`${process.env.REACT_APP_IPURL}/user/update`, data, {
          headers: { Authorization: `Bearer ${user?.token}` },
        })
        .then((res) => {
          // console.log("all posts:", res.data.data.successResult);
          dispatch(loadProfileByUserId(user.id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};
