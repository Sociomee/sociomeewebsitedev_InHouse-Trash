import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import { addUserConnection } from '../../../Services/Actions/Common/getUserConnectionAction';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateConnectionGrp = () => {
    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: '', content: '' });

    const [state, setState] = useState({
        connectionName: "",
    });

    const [error, setError] = useState("");

    const {
        connectionName,
    } = state;
    console.log(state)

    let navigate = useNavigate();
    let dispatch = useDispatch();
    const onChangeHandler = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    // FILLED ERROR
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!connectionName) {
            setOpen(true);
            setAlert({ sev: "error", content: "Please Fill connectionName !", });
        }
        else {
            // Green Snackbar
            setOpen(true);
            setAlert({ sev: "success", content: "Added Successfully", });
            setError("");
            dispatch(addUserConnection(state));
            setError("");
        }
    };

    // Cancel Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        if (alert.sev === 'success') {
            // navigate("/Admin/privacy-policy");
        }
    };
    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="createGroup" tabIndex="-1" role="dialog" aria-labelledby="createGroupTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLongTitle">Enter new category name</h3>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="ed-model-block-">
                                <form className="theme-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="connectionName" placeholder="Enter new category name" onChange={onChangeHandler} />
                                        <div className="col-lg-12 d-flex p-3">

                                            <Stack spacing={2} sx={{ width: '100%', flexDirection: "unset"}} id="stack">
                                                <button className="btn btn-primary col-lg-8" onClick={handleSubmit}>Save</button>
                                                {/* Snackbar */}
                                                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                                                    <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                                                        {alert.content}
                                                    </Alert>
                                                </Snackbar>

                                                <button className="btn btn-connection-save-btn col-lg-4 m-0">Add members</button>
                                            </Stack>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateConnectionGrp