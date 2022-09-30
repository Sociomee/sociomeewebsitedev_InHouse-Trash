import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';


export default function MyEvent() {  

    return (
      <>
        <Header></Header>
        <div className="page-body container-fluid profile-page">
          <LeftSidebar></LeftSidebar>
          <div className="page-center">
            <div className="profile-cover">
              <img src="assets/images/user-cover-bg.jpg" className="img-fluid bg-img" alt="cover"/>
              <div className="profile-box d-lg-block d-none">
                <div className="profile-content">
                  <a href="#" className="image-section">
                    <div className="profile-img">
                      <div>
                        <img src="assets/images/my-profile.jpg" className="img-fluid bg-img" alt="profile"/>
                      </div>
                      <span className="stats">
                        <img src="assets/images/verified-1.png" className="img-fluid" alt="verified"/>
                      </span>
                    </div>
                  </a>
                  <div className="profile-detail">
                    <a href="#"><h2>kelin jasen <span>❤</span></h2></a>
                    <h5>Student</h5>
                    <div className="description">
                      <p>Kelin-Jasen123<span>Lives in Milan, Italy</span></p>
                    </div>
                    <div className="counter-stats">
                      <ul id="counter">
                        <li>
                          <h3 className="counter-value" data-count="546">546</h3>
                          <h5>following</h5>
                        </li>
                        <li>
                          <h3 className="counter-value" data-count="26335">845</h3>
                          <h5>likes</h5>
                        </li>
                        <li>
                          <h3 className="counter-value" data-count="6845">965</h3>
                          <h5>followers</h5>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-solid">Edit profile</a>
                  </div>
                </div>
              </div>
              <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                  <a className="btn-white btn-cover" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                      edit cover
                  </a>
                  <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                      <ul>
                          <li>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#choosePhoto"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>choose photo</a>
                          </li>
                          <li className="choose-file">
                              <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>upload photo</a>
                              <input type="file"/>
                          </li>
                          <li>
                              <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>remove photo</a>
                          </li>
                      </ul>
                  </div>
              </div>
            </div>
            <div className="d-lg-none d-block">
              <div className="profile-box">
                <div className="profile-content">
                  <div className="image-section">
                    <div className="profile-img">
                      <div>
                        <img src="assets/images/my-profile.jpg" className="img-fluid bg-img" alt="profile"/>
                      </div>
                      <span className="stats">
                        <img src="assets/images/verified-1.png" className="img-fluid" alt="verified"/>
                      </span>
                    </div>
                  </div>
                  <div className="profile-detail">
                    <a href="#"><h2>kelin jasen <span>❤</span></h2></a>
                    <h5>Student</h5>
                    <div className="description">
                      <p>Kelin-Jasen123<span>Lives in Milan, Italy</span></p>
                    </div>
                    <div className="counter-stats">
                      <ul id="counter">
                        <li>
                          <h3 className="counter-value" data-count="546">546</h3>
                          <h5>following</h5>
                        </li>
                        <li>
                          <h3 className="counter-value" data-count="26335">845</h3>
                          <h5>likes</h5>
                        </li>
                        <li>
                          <h3 className="counter-value" data-count="6845">965</h3>
                          <h5>followers</h5>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-solid">Edit profile</a>
                  </div>
                </div>
              </div>
            </div>

            <ProfileMenu></ProfileMenu>

            <div className="container-fluid section-t-space px-0">
                <div className="page-content">
                    <div className="content-center w-100">
                        <div className="gallery-page-section section-b-space">
                            <div className="custom-profile-buttons-header">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <div className="card-title">
                                            <h3>My Event</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="right-setting">
                                            <div className="search-block-podcast">
                                                <div className="input-search-blk">
                                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                    <input type="text" className="form-control" name="search" placeholder="Search..."/>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-outline-green ms-3"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Create New</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="tab-section">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="myhosted-tab" data-bs-toggle="tab"
                                            href="#myhosted" role="tab" aria-selected="false">My hosted (30)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="ongoing-tab" data-bs-toggle="tab" href="#ongoing" role="tab" aria-selected="true">Ongoing (21)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="interested-tab" data-bs-toggle="tab" href="#interested" role="tab" aria-selected="true">Interested (14)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="notinterested-tab" data-bs-toggle="tab" href="#notinterested" role="tab" aria-selected="true">Not Interested (14)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="invitations-tab" data-bs-toggle="tab" href="#invitations" role="tab" aria-selected="true">Invitations (24)</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="myhosted"
                                        role="tabpanel" aria-labelledby="myhosted-tab">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn d-block">Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn d-block">Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn d-block">Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn d-block">Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn d-block">Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn d-block">Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="pagination-block">
                                            <li><a className="prev"><img src="assets/images/prev.png"/></a></li>
                                            <li><a className="active">1</a></li>
                                            <li><a>2</a></li>
                                            <li><a>3</a></li>
                                            <li><a>4</a></li>
                                            <li><a className="next"><img src="assets/images/next.png"/></a></li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="ongoing" role="tabpanel" aria-labelledby="ongoing-tab">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="pagination-block">
                                            <li><a className="prev"><img src="assets/images/prev.png"/></a></li>
                                            <li><a className="active">1</a></li>
                                            <li><a>2</a></li>
                                            <li><a>3</a></li>
                                            <li><a>4</a></li>
                                            <li><a className="next"><img src="assets/images/next.png"/></a></li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="interested" role="tabpanel" aria-labelledby="interested-tab">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="pagination-block">
                                            <li><a className="prev"><img src="assets/images/prev.png"/></a></li>
                                            <li><a className="active">1</a></li>
                                            <li><a>2</a></li>
                                            <li><a>3</a></li>
                                            <li><a>4</a></li>
                                            <li><a className="next"><img src="assets/images/next.png"/></a></li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="notinterested" role="tabpanel" aria-labelledby="notinterested-tab">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk custom-3dot-dropdown-blk">
                                                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="group-btn green-clr-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Going</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="pagination-block">
                                            <li><a className="prev"><img src="assets/images/prev.png"/></a></li>
                                            <li><a className="active">1</a></li>
                                            <li><a>2</a></li>
                                            <li><a>3</a></li>
                                            <li><a>4</a></li>
                                            <li><a className="next"><img src="assets/images/next.png"/></a></li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="invitations" role="tabpanel" aria-labelledby="invitations-tab">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>  Going</a>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested Call</a>
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>  Going</a>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested Call</a>
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>  Going</a>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested Call</a>
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>  Going</a>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested Call</a>
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>  Going</a>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested Call</a>
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="myarticles-list-blk myevent-list-block">
                                                    <div className="article-img-blk">
                                                        <NavLink to="/MyEventDetail"><img src="assets/images/post-6.jpg"/></NavLink>
                                                        <div className="article-img-cont">
                                                            <span><img src="assets/images/i-eye.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="article-cont-blk">
                                                        <div className="catdate-blk">
                                                            <p>Sun, 26 Jun 2022, 06:00PM - 09:30AM</p>
                                                            <div className="custom-3dot-dropdown-blk">
                                                                <a className="dropbtn-cust" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-Width="2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-cust-list-blk">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Event</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3><NavLink to="/MyEventDetail">Liverpool Win Champ ions liverpool Win Champ ions</NavLink></h3>
                                                        <div className="myevent-locgoin-blk">
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#goingPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 160 Going</p>
                                                            <p className="going-int-half-blk" data-bs-toggle="modal" data-bs-target="#interestedPeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 154 Interested</p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn d-block"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>  Going</a>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Interested Call</a>
                                                            <a href="#" className="group-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not Interested</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="pagination-block">
                                            <li><a className="prev"><img src="assets/images/prev.png"/></a></li>
                                            <li><a className="active">1</a></li>
                                            <li><a>2</a></li>
                                            <li><a>3</a></li>
                                            <li><a>4</a></li>
                                            <li><a className="next"><img src="assets/images/next.png"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <RightSidebar></RightSidebar>
        </div>

        <div className="modal fade" id="invitePeopleModel" tabIndex="-1" role="dialog" aria-labelledby="invitePeopleModelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Invite People</h5>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <div className="searchfilter-blk invite-people-search-block">
                        <div className="input-search-blk">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" className="form-control" name="search" placeholder="Find..."/>
                        </div>
                        <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                            <a href="#" className="btn btn-outline-grey" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"  className="iw-13 ih-13"><path d="M12.347 7.5006L13.9624 7.5006M12.347 7.5006C12.347 7.07217 12.1768 6.6613 11.8739 6.35835C11.5709 6.05541 11.1601 5.88522 10.7316 5.88522C10.3032 5.88522 9.89233 6.05541 9.58938 6.35835C9.28644 6.66129 9.11625 7.07217 9.11625 7.5006M12.347 7.5006C12.347 7.92903 12.1768 8.33991 11.8739 8.64285C11.5709 8.94579 11.1601 9.11599 10.7316 9.11599C10.3032 9.11599 9.89233 8.94579 9.58938 8.64285C9.28644 8.33991 9.11625 7.92903 9.11625 7.5006M9.11625 7.5006L1.03932 7.5006M2.65471 2.65445C2.65471 3.08287 2.8249 3.49375 3.12784 3.7967C3.43079 4.09964 3.84167 4.26983 4.27009 4.26983C4.69852 4.26983 5.1094 4.09964 5.41234 3.7967C5.71529 3.49375 5.88548 3.08287 5.88548 2.65445M2.65471 2.65445C2.65471 2.22602 2.8249 1.81514 3.12784 1.5122C3.43079 1.20925 3.84167 1.03906 4.27009 1.03906C4.69852 1.03906 5.1094 1.20925 5.41234 1.5122C5.71529 1.81514 5.88548 2.22602 5.88548 2.65445M2.65471 2.65445L1.03932 2.65445M5.88548 2.65445L13.9624 2.65445M2.65471 12.3468C2.65471 12.7752 2.8249 13.1861 3.12784 13.489C3.43079 13.7919 3.84167 13.9621 4.27009 13.9621C4.69852 13.9621 5.1094 13.7919 5.41234 13.489C5.71529 13.1861 5.88548 12.7752 5.88548 12.3468M2.65471 12.3468C2.65471 11.9183 2.8249 11.5074 3.12784 11.2045C3.43079 10.9016 3.84167 10.7314 4.27009 10.7314C4.69852 10.7314 5.1094 10.9016 5.41234 11.2045C5.71529 11.5074 5.88548 11.9183 5.88548 12.3468M2.65471 12.3468L1.03932 12.3468M5.88548 12.3468L13.9624 12.3468" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Filter</a>
                            <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                <ul className="custom-drop-list-block">
                                    <li><a href="#">SocioMate</a></li>
                                    <li><a href="#">Following</a></li>
                                    <li><a href="#">Colleagues</a></li>
                                    <li><a href="#">Family</a></li>
                                    <li><a href="#">Friends</a></li>
                                    <li><a href="#">Relatives</a></li>
                                    <li><a href="#">Work</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="invite-people-head-blk">
                        <h4>SocioMate (839)</h4>
                        <a href="#">Invite all</a>
                    </div>
                    <ul className="sportfiler-list invite-people-list-blk">
                        <li>
                            <div className="form-check checkbox_animated">
                                <input type="checkbox" className="form-check-input" id="Mughal-e-Aazam"/>
                                <label className="form-check-label" htmlFor="Mughal-e-Aazam">
                                    <div className="invitepp-blk">
                                        <img src="assets/images/sport-1.jpg"/> 
                                        <div className="ip-user-cont-blk">
                                            <h5>Marvin McKinney</h5>
                                            <p>dianne-russell123</p>
                                            <div className="follow-time-blk">Following since 2 Days</div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check checkbox_animated">
                                <input type="checkbox" className="form-check-input" id="Shole"/>
                                <label className="form-check-label" htmlFor="Shole">
                                    <div className="invitepp-blk">
                                        <img src="assets/images/sport-1.jpg"/> 
                                        <div className="ip-user-cont-blk">
                                            <h5>Marvin McKinney</h5>
                                            <p>dianne-russell123</p>
                                            <div className="follow-time-blk">Following since 2 Days</div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check checkbox_animated">
                                <input type="checkbox" className="form-check-input" id="PK"/>
                                <label className="form-check-label" htmlFor="PK">
                                    <div className="invitepp-blk">
                                        <img src="assets/images/sport-1.jpg"/> 
                                        <div className="ip-user-cont-blk">
                                            <h5>Marvin McKinney</h5>
                                            <p>dianne-russell123</p>
                                            <div className="follow-time-blk">Following since 2 Days</div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check checkbox_animated">
                                <input type="checkbox" className="form-check-input" id="Shaun of the Dead"/>
                                <label className="form-check-label" htmlFor="Shaun of the Dead">
                                    <div className="invitepp-blk">
                                        <img src="assets/images/sport-1.jpg"/> 
                                        <div className="ip-user-cont-blk">
                                            <h5>Marvin McKinney</h5>
                                            <p>dianne-russell123</p>
                                            <div className="follow-time-blk">Following since 2 Days</div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check checkbox_animated">
                                <input type="checkbox" className="form-check-input" id="Raees"/>
                                <label className="form-check-label" htmlFor="Raees">
                                    <div className="invitepp-blk">
                                        <img src="assets/images/sport-1.jpg"/> 
                                        <div className="ip-user-cont-blk">
                                            <h5>Marvin McKinney</h5>
                                            <p>dianne-russell123</p>
                                            <div className="follow-time-blk">Following since 2 Days</div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check checkbox_animated">
                                <input type="checkbox" className="form-check-input" id="Dil Wale Dulhaniya le jaye ge"/>
                                <label className="form-check-label" htmlFor="Dil Wale Dulhaniya le jaye ge">
                                    <div className="invitepp-blk">
                                        <img src="assets/images/sport-1.jpg"/> 
                                        <div className="ip-user-cont-blk">
                                            <h5>Marvin McKinney</h5>
                                            <p>dianne-russell123</p>
                                            <div className="follow-time-blk">Following since 2 Days</div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check checkbox_animated">
                                <input type="checkbox" className="form-check-input" id="Don"/>
                                <label className="form-check-label" htmlFor="Don">
                                    <div className="invitepp-blk">
                                        <img src="assets/images/sport-1.jpg"/> 
                                        <div className="ip-user-cont-blk">
                                            <h5>Marvin McKinney</h5>
                                            <p>dianne-russell123</p>
                                            <div className="follow-time-blk">Following since 2 Days</div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid">Done</button>
                </div>
                </div>
            </div>  
        </div>
        <div className="modal fade" id="interestedPeopleModel" tabIndex="-1" role="dialog" aria-labelledby="interestedPeopleModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Total Interested (70) </h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have Interested your Event.</p>
                  <div className="searchfilter-blk">
                      <div className="input-search-blk">
                          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                          <input type="text" className="form-control" name="search" placeholder="Find..."/>
                      </div>
                  </div>
                  <ul className="sportfiler-list likeshare-model-list-blk">
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                  </ul>
              </div>
              </div>
          </div>  
        </div>
        <div className="modal fade" id="goingPeopleModel" tabIndex="-1" role="dialog" aria-labelledby="goingPeopleModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Total Going People (70) </h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have Going your Event.</p>
                  <div className="searchfilter-blk">
                      <div className="input-search-blk">
                          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                          <input type="text" className="form-control" name="search" placeholder="Find..."/>
                      </div>
                  </div>
                  <ul className="sportfiler-list likeshare-model-list-blk">
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                      <li>
                          <div className="liked-cust-popup-blk">
                            <div className="invitepp-blk">
                              <img src="assets/images/sport-1.jpg"/> 
                              <div className="ip-user-cont-blk">
                                <h5>Marvin McKinney</h5>
                                <p>Joined on 23 Mar 2021</p>
                                <div className="follow-time-blk"><span>9.8M Followers</span> • <span>18M Posts</span></div>
                              </div>
                            </div>
                            <a className="btn btn-default">Sociomate</a>
                          </div>
                      </li>
                  </ul>
              </div>
              </div>
          </div>  
        </div>
      </>
    );
} 
// export default MyProfile