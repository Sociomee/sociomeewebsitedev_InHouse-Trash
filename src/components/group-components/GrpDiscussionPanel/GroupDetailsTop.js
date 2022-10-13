import React, { Component, useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSingleGroup } from '../../../Services/Actions/Group/getAllUserGroupsAction';

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

            <div className="group-details-top biz-details-top biz-cration-preview">

                <div className="gd-top-block grp-create-bg" style={{ background: `url(${singleGrpById.coverPic})` }} >
                </div>
                <div className="heading-title-blk head-title-biz">
                    <div className="row align-items-center">
                        <div className="grp-preview">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <div className="biz-user-pro-blk-new">
                                            <h5>{singleGrpById.name || "Group Name"}</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="group-buttons-blk">
                                            <p className="">--</p>
                                            <p className="">--</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-12 order-lg-1">
                            <div className="gd-content-area-top-blk">
                                <div className="groupmember-blk">
                                    <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> {singleGrpById.privacy || "404 error"} group</span> • <span>Catagory</span>
                                </div>
                                <div>
                                    <p>
                                    {singleGrpById.description || "404 error" }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-12 order-lg-3">
                            <div className="create-biz-btn">
                                <button className="btn btn-primary green-clr-btn">Invite</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupDetailsTop