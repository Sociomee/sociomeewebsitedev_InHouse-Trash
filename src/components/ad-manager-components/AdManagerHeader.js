import React, { Component, useRef, useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

// MUI Dialog box
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function AdManagerHeader() {

    const [userProfile, setUserProfile] = useState('');

    // MUI State
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();

    // Mobile Menu Button 
    const olRef = useRef(null);
    const menuRef = useRef(null);
    const [userData, setUserData] = useState();
    const menuBtnClick = (e) => {
        olRef.current.classList.add("show");
        menuRef.current.classList.add("show");
    };
    const closeMenuBtnClick = (e) => {
        olRef.current.classList.remove("show");
        menuRef.current.classList.remove("show");
    };

    const logoutUser = () => {
        setOpen(false)
        const config = {
            headers: { Authorization: `Bearer ${userProfile.token}` }
        };
        const logoutBody = { userId: userProfile.id }
        console.log(logoutBody)

        axios.post(`${process.env.REACT_APP_IPURL}/user/logOut/`, logoutBody, config)
            .then((respo) => {
                if (respo.data.data?.successResult) {
                    localStorage.removeItem('sociomeeUser');
                    navigate('/');
                    console.log(respo)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setUserProfile(JSON.parse(localStorage.getItem('sociomeeUser')));
    }, [])


    return (
        <>
            <div className="d-flex">
                <header className="header-light unset">
                    <div className="mobile-fix-menu"></div>
                    <div className="container-fluid custom-padding">
                        <div className="header-section">
                            <div className="header-left">
                                <div className="brand-logo ads-logo">
                                    <NavLink to="/Home">
                                        <img src="assets/images/logo.png" alt="logo" className="img-fluid" />
                                    </NavLink>
                                    <Link to='/AdManager'><h3 className="ad-title" style={{ color: "black" }}>Ads Manager</h3></Link>
                                </div>
                            </div>
                            <div className="header-right">
                                <ul className="option-list">


                                    <li className="header-btn custom-dropdown profile-btn btn-group">
                                        <a className="main-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light strokeWidth-3 d-sm-none d-block iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            <div className="media d-none d-sm-flex">
                                                <div className="user-img">
                                                    <img src="assets/images/my-profile.jpg"
                                                        className="img-fluid bg-img" alt="user" />
                                                    <span className="available-stats online"></span>
                                                </div>
                                                <div className="media-body d-none d-md-block">
                                                    <h4>{userProfile?.fullName}</h4>
                                                    <span>active now</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <div className="dropdown-header">
                                                <span>profile</span>
                                                <div className="mobile-close">
                                                    <h5>close</h5>
                                                </div>
                                            </div>
                                            <div className="dropdown-content">
                                                <ul className="friend-list">
                                                    <li>
                                                        <NavLink to="/MyProfile">
                                                            <div className="media">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0">Profile</h5>
                                                                        <h6>Profile preview & settings</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div className="media">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0">setting & privacy</h5>
                                                                        <h6>all settings & privacy</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div className="media">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0">help & support</h5>
                                                                        <h6>browse help here</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => setOpen(true)}>
                                                            <div className="media">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0">log out</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="header-btn custom-dropdown d-md-none d-block app-btn">
                                        <a className="main-link" href="#" onClick={menuBtnClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light strokeWidth-3 iw-16 ih-16"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                        </a>
                                        <div className="overlay-bg app-overlay" ref={olRef} onClick={closeMenuBtnClick}></div>
                                        <div className="app-box" ref={menuRef}>
                                            <ul className="sidebar-icon">
                                                <li className="active">
                                                    <NavLink to="/">
                                                        <img src="assets/images/home.png" className="bar-icon-img" alt="Home" />
                                                        <h4>Home</h4>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="header-btn custom-dropdown dropdown-lg btn-ads message-btn">
                                        <a className="main-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <img src="/assets/images/adIcon/icon (4).png" alt="" />
                                            {/* <span className="count success">2</span> */}
                                        </a>
                                    </li>
                                    <li className="header-btn custom-dropdown dropdown-lg btn-ads notification-btn">
                                        <a className="main-link" href="/" data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                           <img src="/assets/images/adIcon/icon (5).png" alt="" />
                                            {/* <span className="count warning">2</span> */}
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <div className="dropdown-header">
                                                <span>Notification</span>
                                                <div className="mobile-close">
                                                    <h5>close</h5>
                                                </div>
                                            </div>
                                            <div className="dropdown-content model-height">
                                                <ul className="friend-list">
                                                    <li className="d-block">
                                                        <div>
                                                            <div className="media">
                                                                <img src="/assets/images/gallery-6.jpg" alt="user" />
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0"><span>New Traffic Ad - Kickstarter</span></h5>
                                                                        <p className='color-grey'>Approved</p>
                                                                        <p className='color-grey'>14 Mar 20, 05:20</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-block">
                                                        <div>
                                                            <div className="media">
                                                                <img src="/assets/images/post-6.jpg" alt="user" />
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0"><span>New Traffic Ad - Kickstarter</span></h5>
                                                                        <p className='color-grey'>Approved</p>
                                                                        <p className='color-grey'>14 Mar 20, 05:20</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-block">
                                                        <div>
                                                            <div className="media">
                                                                <img src="/assets/images/gallery-6.jpg" alt="user" />
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0"><span>New Traffic Ad - Kickstarter</span></h5>
                                                                        <p className='color-grey'>Approved</p>
                                                                        <p className='color-grey'>14 Mar 20, 05:20</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-block">
                                                        <div>
                                                            <div className="media">
                                                                <img src="/assets/images/post-6.jpg" alt="user" />
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0"><span>New Traffic Ad - Kickstarter</span></h5>
                                                                        <p className='color-grey'>Approved</p>
                                                                        <p className='color-grey'>14 Mar 20, 05:20</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-block">
                                                        <div>
                                                            <div className="media">
                                                                <img src="/assets/images/gallery-6.jpg" alt="user" />
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0"><span>New Traffic Ad - Kickstarter</span></h5>
                                                                        <p className='color-grey'>Approved</p>
                                                                        <p className='color-grey'>14 Mar 20, 05:20</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-block">
                                                        <div>
                                                            <div className="media">
                                                                <img src="/assets/images/post-6.jpg" alt="user" />
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0"><span>New Traffic Ad - Kickstarter</span></h5>
                                                                        <p className='color-grey'>Approved</p>
                                                                        <p className='color-grey'>14 Mar 20, 05:20</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-block">
                                                        <div>
                                                            <div className="media">
                                                                <img src="/assets/images/gallery-6.jpg" alt="user" />
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0"><span>New Traffic Ad - Kickstarter</span></h5>
                                                                        <p className='color-grey'>Approved</p>
                                                                        <p className='color-grey'>14 Mar 20, 05:20</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-block">
                                                        <div>
                                                            <div className="media">
                                                                <img src="/assets/images/post-6.jpg" alt="user" />
                                                                <div className="media-body">
                                                                    <div>
                                                                        <h5 className="mt-0"><span>New Traffic Ad - Kickstarter</span></h5>
                                                                        <p className='color-grey'>Approved</p>
                                                                        <p className='color-grey'>14 Mar 20, 05:20</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="header-btn custom-dropdown dropdown-lg btn-ads message-btn">
                                        <a className="main-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                                Refresh
                                            <img src="/assets/images/adIcon/refresh-cw.png" alt="" />
                                            {/* <span className="count success">2</span> */}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header> 

                {/* MUI Dialog Box  */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are You Sure, you want to logout ?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>No</Button>
                        <Button onClick={logoutUser}>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>




            </div>
        </>
    );
}
// export default Header 