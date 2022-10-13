import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';

import { loadAllGroupsByUserId } from '../../../Services/Actions/Group/getAllGroupsByUserIdAction';
import { deletePost } from '../../../Services/Actions/Group/getAllUserGroupsAction';

const OwnedGrpSection = () => {
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
            <div className="group-custom-block">
                <div className="heading-podcast-blk">
                    <h3>Owned Group ({allGroupsByUserId?.length})</h3>
                    <NavLink to="/OwnedGroup" className="single-ancor-blk">See All →</NavLink>
                </div>
                <Slider {...ownedGroupSettings} className="default-space">
                    {
                        allGroupsByUserId?.length !== 0 ? allGroupsByUserId.map((allGroups) => {
                            return (
                                <div>
                                    <div className="group-slide-box" key={allGroups.id}>
                                        <div className="gallery-img-sublink">
                                            <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li>
                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <NavLink to={`/GroupDetail/group/${allGroups.id}`}><img src={allGroups.coverPic} className="img-fluid group-img" /></NavLink>
                                        <div className="group-content">
                                            <h4>{allGroups.name}</h4>
                                            <div className="groupmember-blk">
                                                <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> {allGroups.privacy} Group</span> • <span>78.9k members</span>
                                            </div>
                                            <div className="people-likes matual-friend-sec">
                                                <ul className="matual-friend-blk">
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
                                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                        data-name="sufiya eliza" data-img="/assets/images/story-3.jpg">
                                                        <img src="/assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
                                                    </li>
                                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                        data-name="sufiya eliza" data-img="/assets/images/story-4.jpg">
                                                        <img src="/assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
                                                    </li>
                                                </ul>
                                                <h6>+75 members</h6>
                                            </div>
                                            <div className="group-buttons-blk">
                                                <a href="#" className="group-btn">View Activity</a>
                                                <a href="#" className="group-btn">Ignore</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                            : <div id="load-more" className="text-center mb-3">
                                <div className="no-more-text text-center">
                                    <h2>No Group Found</h2>
                                </div>
                            </div>
                    }
                </Slider>
            </div>
        </>
    )
}

export default OwnedGrpSection