import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { getSuggestedUsers } from '../../Services/Actions/UserProfile/suggestedUsersAction';
import { sendUserFollowingRequests } from '../../Services/Actions/UserProfile/userFollowingRequestsAction';


// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const FriendSuggestion=()=> {
    var FriendSuggestsettings = {
        dots: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        centerMode: true,
        centerPadding: '30px',
        responsive: [{
            breakpoint: 1800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        }, {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        }
        ]
    };


    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: 'success', content: '' });

    const { suggestedUsers } = useSelector(state => state.suggestedUsersData)

    const dispatch = useDispatch();

    // send friend request
    const requestSender = (id,isPrivate) => {
        dispatch(sendUserFollowingRequests(id,isPrivate))
        setOpen(true);
        setAlert({ sev: "success", content: "Request Sent Successfully !", });
    }


    // Cancel Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getSuggestedUsers())
    }, [])
    return (
        <>
            <div className="suggestion-box section-b-space">
                <div className="card-title">
                    <h3>Suggestion</h3>
                    <div className="settings">
                        <div className="seeall-btn">
                            <a href="#" className="d-flex">See All</a>
                        </div>
                    </div>
                </div>
                <div className="suggestion-content ratio_115 no-arrow frz-sug-slider-sec">
                    <Slider {...FriendSuggestsettings} className="default-space">
                        {
                            suggestedUsers?.rows && suggestedUsers?.rows?.map((user) => {
                                return <div key={user.id}>
                                    <div className="friend-sugges-box">
                                        <div className="fdimg-blk">
                                            <img src={user.profileImage} className="img-fluid bg-img" alt={user.fullName} />
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-24 ih-24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                        </div>
                                        <div className="fdcont-blk">
                                            <h4>{user.fullName}</h4>
                                            <div className="people-likes matual-friend-sec">
                                                {/* <ul className="matual-friend-blk">
                                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                        data-name="sufiya eliza" data-img="/assets/images/story-2.jpg">
                                                        <img src="/assets/images/story-2.jpg" className="img-fluid bg-img" alt="" />
                                                    </li>
                                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                        data-name="sufiya eliza" data-img="/assets/images/story-3.jpg">
                                                        <img src="/assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
                                                    </li>
                                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                        data-name="sufiya eliza" data-img="/assets/images/story-4.jpg">
                                                        <img src="/assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
                                                    </li>
                                                </ul> */}
                                                {/* <h6>+5 mutual</h6> */}
                                            </div>
                                            <a className="d-block btn btn-primary text-white" 
                                            onClick={() => requestSender(user.id, user.isPrivate)}>Send Request</a>
                                        </div>
                                    </div>
                                </div>
                            })
                        }


                    </Slider>
                </div>
            </div>
            {/* Snackbar */}
            <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                        {alert.content}
                    </Alert>
                </Snackbar>
            </Stack>
        </>
    );
}
export default FriendSuggestion 