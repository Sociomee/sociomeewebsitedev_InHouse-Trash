import React, { Component, useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../Header';
import LeftSidebar from '../../../LeftSidebar';
import RightSidebar from '../../../RightSidebar';
import GroupDetailMenu from '../GroupDetailMenu';
import Models from '../../Models';
import { getSingleGroup } from '../../../../Services/Actions/Group/getAllUserGroupsAction';
import GroupDetailsTop from '../GroupDetailsTop';

export default function GdAbout() {
    return (
        <>
            <div className="container-fluid section-t-space px-0">
                <div className="page-content">
                    <div className="content-center w-100">
                        <div className="gdpost-about-blk">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="custom-card-block">
                                        <div className="custom-card-head"><h4>About this group</h4></div>
                                        <div className="custom-card-body">
                                            <div className="gd-abt-text">The #1 Platform for Virtual Sales Teams. Get visibility into your conversations and deals with Revenue Intelligence.</div>
                                            <div className="gd-about-blk">
                                                <div className="gd-abt-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
                                                <div className="gd-abt-cont">
                                                    <h4>Group privacy</h4>
                                                    <p>Public</p>
                                                </div>
                                            </div>
                                            <div className="gd-about-blk">
                                                <div className="gd-abt-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg></div>
                                                <div className="gd-abt-cont">
                                                    <h4>Group privacy</h4>
                                                    <p>Public</p>
                                                </div>
                                            </div>
                                            <div className="gd-about-blk">
                                                <div className="gd-abt-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
                                                <div className="gd-abt-cont">
                                                    <h4>Group privacy</h4>
                                                    <p>Public</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="custom-card-block">
                                        <div className="custom-card-head"><h4>About this group</h4></div>
                                        <div className="custom-card-body">
                                            <div className="gt-abt-member-bk">
                                                <ul className="abt-member-list">
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="/assets/images/story-2.jpg" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="/assets/images/story-3.jpg" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="/assets/images/story-4.jpg" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="/assets/images/story-3.jpg" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic abt-img-count">
                                                            +13
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="gd-abt-text">The #1 Platform for Virtual Sales Teams. Get visibility into your conversations and deals with Revenue Intelligence.</div>
                                            </div>
                                            <div className="gt-abt-member-bk">
                                                <ul className="abt-member-list">
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="/assets/images/story-2.jpg" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="/assets/images/story-3.jpg" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="/assets/images/story-4.jpg" />
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="gd-abt-text">Anurag Saini is an admin. Razdar is a moderator</div>
                                                <div className="abt-mm-btns">
                                                    <NavLink to="/GroupMember" className="btn btn-default">See all members</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
} 