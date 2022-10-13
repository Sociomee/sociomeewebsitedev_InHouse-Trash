import React, { Component, useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../Header';
import LeftSidebar from '../../../LeftSidebar';
import RightSidebar from '../../../RightSidebar';
import GroupDetailMenu from '../GroupDetailMenu';
import GroupDetailsTop from '../GroupDetailsTop';
import Models from '../../Models';
import { getSingleGroup } from '../../../../Services/Actions/Group/getAllUserGroupsAction';
import { getGroupAdministraterAction } from '../../../../Services/Actions/Group/getGroupAdministraterAction';

export default function GroupMember() {
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
    const { getGroupAdministrater } = useSelector((state) => state.getGroupAdministraterData);
    console.log(getGroupAdministrater)

    useEffect(() => {
        dispatch(getGroupAdministraterAction(id))
    }, [])
    useEffect(() => {
        setState({ ...getGroupAdministrater })
    }, [getGroupAdministrater])
    return (
        <>
            <div className="container-fluid section-t-space px-0">
                <div className="page-content">
                    <div className="content-center w-100">
                        <div className="group-page-section section-b-space">
                            <div className="group-page-title">
                                <div className="row align-items-center">
                                    <div className="col-md-4 col-12">
                                        <h3>Current people</h3>
                                    </div>
                                    <div className="col-md-8 col-12">
                                        <div className="group-search-assign-filter">
                                            <div className="search-block-podcast">
                                                <div className="input-search-blk">
                                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                    <input type="text" className="form-control" name="search" placeholder="Search..." data-bs-toggle="modal" data-bs-target="#peopleSearch" />
                                                </div>
                                            </div>
                                            <a href="#" className="assign-group-btn">Assign Group Role</a>
                                            <a href="#" className="group-filter-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg> Filter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-detail-page-blk">
                                <h4>SuperAdmin  · 2</h4>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src={getGroupAdministrater[0]?.profileImage} />
                                                <div className="member-cont-blk">
                                                    <h4>{getGroupAdministrater[0]?.fullName}</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn green">Modify</a>
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-detail-page-blk">
                                <h4>Admins  · 3</h4>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-4.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn green">Modify</a>
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-2.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn green">Modify</a>
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-3.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-detail-page-blk">
                                <h4>Moderators  · 2</h4>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-2.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn green">Modify</a>
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-3.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn green">Modify</a>
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-detail-page-blk">
                                <h4>members  · 2,091</h4>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-3.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-2.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-4.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-2.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-3.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-4.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-2.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-3.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-4.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-2.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-3.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="group-members-block">
                                            <div className="group-member-img-cont-blk">
                                                <img src="/assets/images/story-4.jpg" />
                                                <div className="member-cont-blk">
                                                    <h4>Kenjomen Norke</h4>
                                                    <p>Joined on 23 Mar 2021</p>
                                                    <p>+3 Mutual Group</p>
                                                </div>
                                            </div>
                                            <div className="members-btns-blk">
                                                <a href="#" className="member-btn">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 