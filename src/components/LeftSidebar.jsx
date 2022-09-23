import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

// MUI Dialog box
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

const LeftSidebar=()=> {
    const userProfile = JSON.parse(localStorage.getItem('sociomeeUser'));
    // MUI State
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();

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
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="sidebar-panel panel-lg">
                <ul className="sidebar-icon">
                    <li className="active">
                        <NavLink to="/Home">
                            <img src="/assets/images/left-side-menu-icon/home.svg" className="bar-icon-img" alt="Home" />
                            <h4>Home</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Favorites">
                            <img src="/assets/images/left-side-menu-icon/star.svg" className="bar-icon-img" alt="favourite" />
                            <h4>favourite</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Group">
                            <img src="/assets/images/left-side-menu-icon/users.svg" className="bar-icon-img" alt="Groups" />
                            <h4>Groups</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Connection">
                            <img src="/assets/images/left-side-menu-icon/user-check.svg" className="bar-icon-img" alt="Connections " />
                            <h4>Connections </h4>
                        </NavLink>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/assets/images/left-side-menu-icon/headphones.svg" className="bar-icon-img" alt="Podcast" />
                            <h4>Podcast</h4>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/assets/images/left-side-menu-icon/calendar.svg" className="bar-icon-img" alt="Shotz" />
                            <h4>Shotz</h4>
                        </a>
                    </li>
                    <li>
                        <NavLink to="/biz">
                            <img src="/assets/images/left-side-menu-icon/briefcase.svg" className="bar-icon-img" alt="Business Page" />
                            <h4>Business Page</h4>
                        </NavLink>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/assets/images/left-side-menu-icon/zap.svg" className="bar-icon-img" alt="Events" />
                            <h4>Events</h4>
                        </a>
                    </li>
                    <li>
                        <NavLink to="/Marketplace">
                            <img src="/assets/images/left-side-menu-icon/shopping-cart.svg" className="bar-icon-img" alt="MarkrtPlace" />
                            <h4>MarkrtPlace</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/AdManager">
                            <img src="/assets/images/left-side-menu-icon/box.svg" className="bar-icon-img" alt="Ad Manager" />
                            <h4>Ad Manager</h4>
                        </NavLink>
                    </li>
                    <li onClick={()=>setOpen(true)}>
                        <a>
                            <img src="/assets/images/left-side-menu-icon/power.svg" className="bar-icon-img" alt="logout" />
                            <h4>logout</h4>
                        </a>
                    </li>
                </ul>
            </div>
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
        </>
    );
} 
export default LeftSidebar;