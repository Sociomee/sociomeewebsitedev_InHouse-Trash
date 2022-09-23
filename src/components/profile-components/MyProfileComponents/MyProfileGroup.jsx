import React, { Component, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';
import { loadAllGroupsByUserId } from '../../../Services/Actions/Group/getAllGroupsByUserIdAction';

const MyProfileGroup = () => {
    var groupSettings = {
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

    const { allGroupsByUserId } = useSelector(state => state.getAllGroupsByUserData)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllGroupsByUserId())
    }, [])

    return (
        <>
            <div className="about-profile-box-blk">
                <div className="card-title">
                    <h3>Group</h3>
                    <div className="settings">
                        <div className="setting-btn">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card-block-box">
                    <Slider {...groupSettings} className="default-space">
                        {
                            allGroupsByUserId.length !== 0 ? allGroupsByUserId.map((allUserGroups) => {
                                return (
                                    <div key={allUserGroups.id}>
                                        <div className="profile-slide-box">
                                            <div className="adaptive-overlay"></div>
                                            <div className="story-bg">
                                                <img src={`${allUserGroups.coverPic || "assets/images/group-1.jpg"}`} className="img-fluid bg-img" />
                                            </div>
                                            <div className="story-content">
                                                <h6>{allUserGroups.name}</h6>
                                                <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>{`${allUserGroups.groupMembers || "0"}`} </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                                : <div id="load-more" className="text-center mb-3">
                                    <div className="no-more-text">
                                        <h2>No Group Found</h2>
                                    </div>
                                </div>
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default MyProfileGroup