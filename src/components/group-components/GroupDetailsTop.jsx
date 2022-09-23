import React, { Component, useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSingleGroup } from '../../Services/Actions/Group/getAllUserGroupsAction';

const GroupDetailsTop = () => {
    let dispatch = useDispatch();
    const { id } = useParams();

    // 
    const [state, setState] = useState({
        name: "",
        grpCategoryId: "",
        description: "",
        subtitle: "",
        privacy: "",
        visibility: "",
        coverPic: "",
        coverThumb: "",
        memberStatus: "",
        isMember: "",
    });
    const {
        name,
        grpCategoryId,
        subtitle,
        description,
        privacy,
        visibility,
        coverPic,
        coverThumb,
        memberStatus,
        isMember,
    } = state;

    // fetch single taxlist
    const { singleGrpById } = useSelector((state) => state.getAllGroupsByUserData);
    useEffect(() => {
        dispatch(getSingleGroup(id))
    }, [])
    useEffect(() => {
        setState({ ...singleGrpById })
    }, [singleGrpById])
    return (
        <>
            <div className="group-details-top">
                <div className="gd-top-block" style={{ background: `url(${singleGrpById.coverPic})` }}>
                    <div className="gd-top-btns">
                        <a href="#" className="grey-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                        <a href="#" className="grey-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit </a>
                    </div>
                </div>
                <div className="heading-title-blk">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                            <h3>{singleGrpById.name}</h3>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                            <ul className="followlist-blk">
                                <li>4k<span>Likes</span></li>
                                <li>52<span>Posts</span></li>
                                <li>524<span>Followers</span></li>
                                <li>502<span>Follow</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="gd-content-area-top-blk">
                    <div className="groupmember-blk">
                        <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> {singleGrpById.privacy} Group</span> • <span>Friend</span>
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
                    <p>{singleGrpById.description}</p>
                </div>
            </div>
        </>
    )
}

export default GroupDetailsTop