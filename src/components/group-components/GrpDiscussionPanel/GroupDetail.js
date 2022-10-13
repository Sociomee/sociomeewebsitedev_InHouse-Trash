import React, { Component, useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Header';
import LeftSidebar from '../../LeftSidebar';
import RightSidebar from '../../RightSidebar';
import Models from '../../Models';
import { getSingleGroup } from '../../../Services/Actions/Group/getAllUserGroupsAction';
import GroupDetailsTop from './GroupDetailsTop';
import GroupMainField from './GrpDetailsPages/GroupMainField';
import GdAbout from './GrpDetailsPages/GdAbout';
import GroupMember from './GrpDetailsPages/GroupMember';

export default function GroupDetail() {
    const [accord, setAccord] = useState(1);

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
            <Header></Header>
            <div className="page-body container-fluid profile-page">
                <LeftSidebar></LeftSidebar>
                <div className="page-center">
                    <GroupDetailsTop></GroupDetailsTop>

                    <div className="profile-menu section-t-space">
                        <ul>
                            <li>
                                <NavLink to="#" onClick={() => { setAccord(1) }}>
                                    <h6>Discussion</h6>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" onClick={() => { setAccord(2) }}>
                                    <h6>Members</h6>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" onClick={() => { setAccord(3) }}>
                                    <h6>About</h6>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="right-menu d-xl-flex d-none">
                            <li>
                                <NavLink to="/GdSetting">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                    <h6>Setting</h6>
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                    <div style={{ display: accord === 1 ? 'block' : 'none' }}>
                        <GroupMainField></GroupMainField>
                    </div>
                    <div style={{ display: accord === 2 ? 'block' : 'none' }}>
                        <GdAbout></GdAbout>
                    </div>
                    <div style={{ display: accord === 3 ? 'block' : 'none' }}>
                        <GroupMember></GroupMember>
                    </div>


                </div>
                <RightSidebar></RightSidebar>
            </div>
            <Models></Models>
        </>
    );
} 