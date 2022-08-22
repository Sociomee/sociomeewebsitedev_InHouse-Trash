import React, { Component, useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadAllGroupCategorys } from '../../Services/Actions/Group/getAllGroupCategoryAction';
import { Alert, Snackbar, Stack } from '@mui/material';
import axios from 'axios';
import { addGroup } from '../../Services/Actions/Group/getAllUserGroupsAction';

export default function Models() {
    // Media File Preview
    const [file, setFile] = useState();
    function handleChange(e) {
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    // LOAD ACTIONS
    let dispatch = useDispatch();
    const { allGroupCategory } = useSelector(state => state.getAllGroupCategoryData);
    useEffect(() => {
        dispatch(loadAllGroupCategorys());
    }, []);
    // LOAD ACTIONS ENDS

    // CREATE GROUP
    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: '', content: '' });

    const [state, setState] = useState({
        // userId: "419d7706-13cf-4b91-9fed-3f45de0f2b53",
        // name: "",
        // description: "",
        // grpCategoryId: "0535a31a-e2a5-472c-9e89-aecc5bb9edcd",
        // privacy: "",
        // coverThumb: "",
        // visibility: true,
        // allowMessage: true,
        // allowNotificationOnEmail: true,
        // blockMessage: false

        userId: "419d7706-13cf-4b91-9fed-3f45de0f2b53",
        name: "zennit 1.2",
        privacy: "Public",
        grpCategoryId: "0535a31a-e2a5-472c-9e89-aecc5bb9edcd",
        coverPic: "userProfileDp/6G7Ge0JLZ7K3t.jpeg",
        coverThumb: "userProfileDp/6G7Ge0JLZ7K3t.jpeg",
        description: "This the test group",
        visibility: true,
        allowMessage: true,
        allowNotificationOnEmail: true,
        blockMessage: false
    });

    const [error, setError] = useState("");

    const {
        userId,
        name,
        privacy,
        grpCategoryId,
        coverPic,
        coverThumb,
        description,
        visibility,
        allowMessage,
        allowNotificationOnEmail,
        blockMessage,
    } = state;
    // console.log(state)

    let navigate = useNavigate();
    const onChangeHandler = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    // FILLED ERROR
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setOpen(true);
            setAlert({ sev: "error", content: "Please Fill Title !", });
        }
        else if (!description) {
            setOpen(true);
            setAlert({ sev: "error", content: "Please Fill Content !", });
        }
        else if (!grpCategoryId) {
            setOpen(true);
            setAlert({ sev: "error", content: "Please Fill Status !", });
        }
        else if (!privacy) {
            setOpen(true);
            setAlert({ sev: "error", content: "Please Fill Status !", });
        }
        else {
            // Green Snackbar
            setOpen(true);
            setAlert({ sev: "success", content: "Added Successfully", });
            setError("");
            dispatch(addGroup(state));
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
            navigate("/OwnedGroup");
        }
    };

    return (
        <>
            <div className="modal fade" id="createGroup" tabIndex="-1" role="dialog" aria-labelledby="createGroupTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Create Group</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="ed-model-block">
                                <form className="theme-form">
                                    <div className="form-group">
                                        <label>Name </label>
                                        <input type="text" className="form-control" name="name" placeholder="Enter your group name" onChange={onChangeHandler} />
                                        <p className="instruction-msg">Max 64 Characters</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text" name="description" className="form-control" placeholder="Discribe your group" onChange={onChangeHandler} />
                                        <p className="instruction-msg">Max 180 charectors</p>
                                    </div>

                                    <div className="form-group">
                                        <label>Group Catagory</label>
                                        <select className="form-control" name='grpCategoryId' onChange={onChangeHandler}>
                                            <option>Choose catagory</option>
                                            {/* {
                                                allGroupCategory.data.successResult.map((val) => {
                                                    return <option>{val.name}</option>
                                                })
                                            } */}
                                            <option>Choose privacy</option>
                                            <option valus="1">Public</option>
                                            <option value="2">Private</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Group Privacy</label>
                                        <select id="inputState" className="form-control" name='privacy' onChange={onChangeHandler}>
                                            <option>Choose privacy</option>
                                            <option valus="Public">Public</option>
                                            <option value="Private">Private</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Group Image</label>
                                        <div className="upload-image-blk">
                                            <input type="file" name='coverThumb' onChange={handleChange} />
                                            <img src={file} className="event-img-prev" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Stack className="modal-footer">
                            <button type="button" className="btn btn-solid" onClick={handleSubmit}>Save</button>
                            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                                <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                                    {alert.content}
                                </Alert>
                            </Snackbar>
                        </Stack>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="peopleSearch" tabIndex="-1" role="dialog" aria-labelledby="peopleSearchTitle" aria-hidden="true">
                <div className="modal-dialog people-search-model modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="search-people-block">
                                <div className="sp-top-head-blk">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Create Group</h5>
                                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                                </div>
                                <div className="sp-body-block">
                                    <div className="input-search-blk">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" className="form-control" name="search" placeholder="Find Friends..." />
                                    </div>
                                    <ul className="search-people-list">
                                        <li>
                                            <div className="form-check checkbox_animated">
                                                <input type="checkbox" className="form-check-input" id="check-1" />
                                                <label className="form-check-label" htmlFor="check-1">
                                                    <div className="member-new-lt">
                                                        <img src="assets/images/story-2.jpg" />
                                                        <div className="member-new-cont">
                                                            <h4>Kenjomen Norke</h4>
                                                            <p>Joined on 23 Mar 2021</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check checkbox_animated">
                                                <input type="checkbox" className="form-check-input" id="check-2" />
                                                <label className="form-check-label" htmlFor="check-2">
                                                    <div className="member-new-lt">
                                                        <img src="assets/images/story-2.jpg" />
                                                        <div className="member-new-cont">
                                                            <h4>Kenjomen Norke</h4>
                                                            <p>Joined on 23 Mar 2021</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check checkbox_animated">
                                                <input type="checkbox" className="form-check-input" id="check-3" />
                                                <label className="form-check-label" htmlFor="check-3">
                                                    <div className="member-new-lt">
                                                        <img src="assets/images/story-2.jpg" />
                                                        <div className="member-new-cont">
                                                            <h4>Kenjomen Norke</h4>
                                                            <p>Joined on 23 Mar 2021</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check checkbox_animated">
                                                <input type="checkbox" className="form-check-input" id="check-4" />
                                                <label className="form-check-label" htmlFor="check-4">
                                                    <div className="member-new-lt">
                                                        <img src="assets/images/story-2.jpg" />
                                                        <div className="member-new-cont">
                                                            <h4>Kenjomen Norke</h4>
                                                            <p>Joined on 23 Mar 2021</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check checkbox_animated">
                                                <input type="checkbox" className="form-check-input" id="check-5" />
                                                <label className="form-check-label" htmlFor="check-5">
                                                    <div className="member-new-lt">
                                                        <img src="assets/images/story-2.jpg" />
                                                        <div className="member-new-cont">
                                                            <h4>Kenjomen Norke</h4>
                                                            <p>Joined on 23 Mar 2021</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sp-foot-blk">
                                    <button type="button" className="btn btn-solid">Save</button>
                                    <button type="button" className="btn btn-default ms-2">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 
