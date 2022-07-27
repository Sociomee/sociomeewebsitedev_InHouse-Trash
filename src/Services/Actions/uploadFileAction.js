import * as types from '../Constants/index';
import axios from 'axios';

const getUploadFiles = (uploadFile) => ({
    type: types.UPLOAD_FILE,
    payload: uploadFile,
});

let user = JSON.parse(localStorage.getItem('user'));
const config = {
    headers: { Authorization: `Bearer ${user.token}` }
};

// get all UPLOAD FILES
export const loadUploadFile = (formData) => {
    return function (dispatch) {
        if (user) {
            axios.post(`https://apiserver.msgmee.com/admin/UploadFile`,formData,config)
                .then((res) => {
                    console.log(res.data.data.successResult)
                    dispatch(getUploadFiles(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
