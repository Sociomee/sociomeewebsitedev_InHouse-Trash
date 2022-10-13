import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import GroupMenu from './GroupMenu';
import Models from './Models';
import { useSelector, useDispatch } from 'react-redux';
import './style.css'

// MUI Dialog box
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { loadAllPostsByUserId } from '../../Services/Actions/SocialFeed/getAllPostsByUserIdAction';
import { deletePost } from '../../Services/Actions/SocialFeed/getAllUserPostsAction';
import { loadAllGroupsByUserId } from '../../Services/Actions/Group/getAllGroupsByUserIdAction';
import NewGrpCreateSection from './AllGroupsSections/NewGrpCreateSection';
import OwnedGrpSection from './AllGroupsSections/OwnedGrpSection';
import InviteGrpSection from './AllGroupsSections/InviteGrpSection';
import JoinedGrpSection from './AllGroupsSections/JoinedGrpSection';
import GroupInvitationSection from './AllGroupsSections/GroupInvitationSection';

export default function Group() {
    var ownedGroupSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    };

    // get all user posts by id using redux
    const { allGroupsByUserId } = useSelector(state => state.getAllGroupsByUserData)
    const [globalPostId, setGlobalPostId] = useState('');

    // load more functionality
    const [groupNumber, setGroupNumber] = useState(10)
    // MUI State
    const [open, setOpen] = useState(false);

    let dispatch = useDispatch();

    const postDeleteHandler = (id) => {
        const postId = { postId: [id] }
        dispatch(deletePost(postId))
        setOpen(false)
    }

    useEffect(() => {
        dispatch(loadAllGroupsByUserId())
    }, [])

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header></Header>
            <div className="page-body container-fluid profile-page">
                <LeftSidebar></LeftSidebar>
                <div className="page-center">
                    <div className="group-heading"><h2>Groups</h2></div>
                    <GroupMenu></GroupMenu>

                    <div className="container-fluid section-t-space px-0">
                        <div className="group-main-block">

                            {/* START WITH CRETE GROUP */}
                            <NewGrpCreateSection />

                            <OwnedGrpSection />

                            <JoinedGrpSection />

                            <InviteGrpSection />

                            <GroupInvitationSection />


                        </div>
                    </div>
                </div>
                <RightSidebar></RightSidebar>
            </div>
            <Models></Models>
        </>
    );
} 