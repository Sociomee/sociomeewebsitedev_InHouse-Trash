import React,{useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';


export default function MyPollCompleted() {  
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
                <div className="row">
                    <div className="col-md-6">
                        <div className="poll-card-block">
                            <ul className="nav nav-tabs">
                              <li className="nav-item">
                                <NavLink to="/MyPoll" className="nav-link">All Polls (76)</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink to="/MyPollRunning" className="nav-link">Running</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink to="/MyPollCompleted" className="nav-link">Completed</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink to="/MyPollScheduled" className="nav-link">Scheduled</NavLink>
                              </li>
                            </ul>
                            <div className="my-polls-list-tab-block">
                              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active" id="poll-1-tab" data-bs-toggle="pill" data-bs-target="#poll-1" type="button" role="tab" aria-controls="poll-1" aria-selected="true">
                                  <div className="mypoll-cont-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none"><g clip-path="url(#clip0_6361_317349)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92599 2.41661C2.6143 2.41661 3.17228 1.87563 3.17228 1.20831C3.17228 0.540977 2.6143 0 1.92599 0C1.23767 0 0.679688 0.540977 0.679688 1.20831C0.679688 1.87563 1.23767 2.41661 1.92599 2.41661ZM2.97109 2.55872C2.67784 2.77195 2.31129 2.89633 1.9264 2.89633C1.54151 2.89633 1.15663 2.77195 0.863381 2.55872C0.460167 2.75418 0.16692 3.12733 0.111936 3.57156L0.0202968 4.21125C0.00196892 4.38894 0.130264 4.5311 0.313543 4.5311H3.53926C3.72253 4.5311 3.85083 4.37117 3.8325 4.21125L3.74086 3.57156C3.66755 3.10956 3.3743 2.75418 2.97109 2.55872ZM5.64695 0.693359H16.6804C17.1019 0.693359 17.4318 1.03097 17.4318 1.4219V3.0922C17.4318 3.50089 17.1019 3.82074 16.6804 3.82074H5.64695C5.22541 3.82074 4.89551 3.50089 4.89551 3.0922V1.4219C4.89551 1.0132 5.22541 0.693359 5.64695 0.693359ZM2.97109 8.03125C2.67784 8.24448 2.31129 8.36887 1.90807 8.36887C1.50486 8.36887 1.15663 8.24448 0.845053 8.03125C0.441839 8.22671 0.148592 8.59986 0.0936085 9.0441L0.0202968 9.70156C0.00196892 9.87925 0.130264 10.0214 0.313543 10.0214H3.53926C3.72253 10.0214 3.85083 9.86148 3.8325 9.70156L3.74086 9.06186C3.66755 8.59986 3.3743 8.22671 2.97109 8.03125ZM3.17228 6.68096C3.17228 7.34829 2.6143 7.88927 1.92599 7.88927C1.23767 7.88927 0.679688 7.34829 0.679688 6.68096C0.679688 6.01363 1.23767 5.47266 1.92599 5.47266C2.6143 5.47266 3.17228 6.01363 3.17228 6.68096ZM14.1694 6.18372H5.64695C5.22541 6.18372 4.89551 6.50356 4.89551 6.91225V8.58256C4.89551 8.99125 5.22541 9.3111 5.64695 9.3111H14.1694C14.591 9.3111 14.9209 8.99125 14.9209 8.58256V6.91225C14.9209 6.50356 14.5726 6.18372 14.1694 6.18372ZM1.90784 13.8599C2.31106 13.8599 2.67762 13.7356 2.97086 13.5223C3.37408 13.7178 3.66732 14.0909 3.72231 14.5352L3.81395 15.1749C3.83227 15.3348 3.70398 15.4947 3.5207 15.4947H0.294988C0.111709 15.4947 -0.0165866 15.3526 0.0017413 15.1749L0.0933808 14.5352C0.148365 14.0909 0.441611 13.7178 0.844825 13.5223C1.1564 13.7356 1.50463 13.8599 1.90784 13.8599ZM1.92599 13.3805C2.6143 13.3805 3.17228 12.8395 3.17228 12.1722C3.17228 11.5048 2.6143 10.9639 1.92599 10.9639C1.23767 10.9639 0.679688 11.5048 0.679688 12.1722C0.679688 12.8395 1.23767 13.3805 1.92599 13.3805ZM5.64695 11.6738H11.6402C12.0617 11.6738 12.41 11.9937 12.41 12.4024V14.0727C12.41 14.4814 12.08 14.8012 11.6585 14.8012H5.64695C5.22541 14.8012 4.89551 14.4814 4.89551 14.0727V12.4024C4.89551 11.9937 5.22541 11.6738 5.64695 11.6738Z" fill="#F95C89"/>
                                    </g><defs><clipPath id="clip0_6361_317349"><rect width="18" height="16" fill="white"/></clipPath></defs></svg>
                                    <div className="mypoll-cont-text-blk">
                                      <div className="mypoll-cont-heading">
                                        <h4>The organization invests time and money to keep the employee updated with technology.</h4>
                                        <p>Posted on 23 Mar 2021</p>
                                        <div className="vote-view-blk"><span><b>355</b> Viewed</span> <span><b>156</b> Voted</span></div>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <button className="nav-link" id="poll-2-tab" data-bs-toggle="pill" data-bs-target="#poll-2" type="button" role="tab" aria-controls="poll-2" aria-selected="false">
                                  <div className="mypoll-cont-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none"><g clip-path="url(#clip0_6361_317349)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92599 2.41661C2.6143 2.41661 3.17228 1.87563 3.17228 1.20831C3.17228 0.540977 2.6143 0 1.92599 0C1.23767 0 0.679688 0.540977 0.679688 1.20831C0.679688 1.87563 1.23767 2.41661 1.92599 2.41661ZM2.97109 2.55872C2.67784 2.77195 2.31129 2.89633 1.9264 2.89633C1.54151 2.89633 1.15663 2.77195 0.863381 2.55872C0.460167 2.75418 0.16692 3.12733 0.111936 3.57156L0.0202968 4.21125C0.00196892 4.38894 0.130264 4.5311 0.313543 4.5311H3.53926C3.72253 4.5311 3.85083 4.37117 3.8325 4.21125L3.74086 3.57156C3.66755 3.10956 3.3743 2.75418 2.97109 2.55872ZM5.64695 0.693359H16.6804C17.1019 0.693359 17.4318 1.03097 17.4318 1.4219V3.0922C17.4318 3.50089 17.1019 3.82074 16.6804 3.82074H5.64695C5.22541 3.82074 4.89551 3.50089 4.89551 3.0922V1.4219C4.89551 1.0132 5.22541 0.693359 5.64695 0.693359ZM2.97109 8.03125C2.67784 8.24448 2.31129 8.36887 1.90807 8.36887C1.50486 8.36887 1.15663 8.24448 0.845053 8.03125C0.441839 8.22671 0.148592 8.59986 0.0936085 9.0441L0.0202968 9.70156C0.00196892 9.87925 0.130264 10.0214 0.313543 10.0214H3.53926C3.72253 10.0214 3.85083 9.86148 3.8325 9.70156L3.74086 9.06186C3.66755 8.59986 3.3743 8.22671 2.97109 8.03125ZM3.17228 6.68096C3.17228 7.34829 2.6143 7.88927 1.92599 7.88927C1.23767 7.88927 0.679688 7.34829 0.679688 6.68096C0.679688 6.01363 1.23767 5.47266 1.92599 5.47266C2.6143 5.47266 3.17228 6.01363 3.17228 6.68096ZM14.1694 6.18372H5.64695C5.22541 6.18372 4.89551 6.50356 4.89551 6.91225V8.58256C4.89551 8.99125 5.22541 9.3111 5.64695 9.3111H14.1694C14.591 9.3111 14.9209 8.99125 14.9209 8.58256V6.91225C14.9209 6.50356 14.5726 6.18372 14.1694 6.18372ZM1.90784 13.8599C2.31106 13.8599 2.67762 13.7356 2.97086 13.5223C3.37408 13.7178 3.66732 14.0909 3.72231 14.5352L3.81395 15.1749C3.83227 15.3348 3.70398 15.4947 3.5207 15.4947H0.294988C0.111709 15.4947 -0.0165866 15.3526 0.0017413 15.1749L0.0933808 14.5352C0.148365 14.0909 0.441611 13.7178 0.844825 13.5223C1.1564 13.7356 1.50463 13.8599 1.90784 13.8599ZM1.92599 13.3805C2.6143 13.3805 3.17228 12.8395 3.17228 12.1722C3.17228 11.5048 2.6143 10.9639 1.92599 10.9639C1.23767 10.9639 0.679688 11.5048 0.679688 12.1722C0.679688 12.8395 1.23767 13.3805 1.92599 13.3805ZM5.64695 11.6738H11.6402C12.0617 11.6738 12.41 11.9937 12.41 12.4024V14.0727C12.41 14.4814 12.08 14.8012 11.6585 14.8012H5.64695C5.22541 14.8012 4.89551 14.4814 4.89551 14.0727V12.4024C4.89551 11.9937 5.22541 11.6738 5.64695 11.6738Z" fill="#F95C89"/>
                                    </g><defs><clipPath id="clip0_6361_317349"><rect width="18" height="16" fill="white"/></clipPath></defs></svg>
                                    <div className="mypoll-cont-text-blk">
                                      <div className="mypoll-cont-heading">
                                        <h4>The organization invests time and money to keep the employee updated with technology.</h4>
                                        <p>Posted on 23 Mar 2021</p>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <button className="nav-link" id="poll-3-tab" data-bs-toggle="pill" data-bs-target="#poll-3" type="button" role="tab" aria-controls="poll-3" aria-selected="false">
                                  <div className="mypoll-cont-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none"><g clip-path="url(#clip0_6361_317349)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92599 2.41661C2.6143 2.41661 3.17228 1.87563 3.17228 1.20831C3.17228 0.540977 2.6143 0 1.92599 0C1.23767 0 0.679688 0.540977 0.679688 1.20831C0.679688 1.87563 1.23767 2.41661 1.92599 2.41661ZM2.97109 2.55872C2.67784 2.77195 2.31129 2.89633 1.9264 2.89633C1.54151 2.89633 1.15663 2.77195 0.863381 2.55872C0.460167 2.75418 0.16692 3.12733 0.111936 3.57156L0.0202968 4.21125C0.00196892 4.38894 0.130264 4.5311 0.313543 4.5311H3.53926C3.72253 4.5311 3.85083 4.37117 3.8325 4.21125L3.74086 3.57156C3.66755 3.10956 3.3743 2.75418 2.97109 2.55872ZM5.64695 0.693359H16.6804C17.1019 0.693359 17.4318 1.03097 17.4318 1.4219V3.0922C17.4318 3.50089 17.1019 3.82074 16.6804 3.82074H5.64695C5.22541 3.82074 4.89551 3.50089 4.89551 3.0922V1.4219C4.89551 1.0132 5.22541 0.693359 5.64695 0.693359ZM2.97109 8.03125C2.67784 8.24448 2.31129 8.36887 1.90807 8.36887C1.50486 8.36887 1.15663 8.24448 0.845053 8.03125C0.441839 8.22671 0.148592 8.59986 0.0936085 9.0441L0.0202968 9.70156C0.00196892 9.87925 0.130264 10.0214 0.313543 10.0214H3.53926C3.72253 10.0214 3.85083 9.86148 3.8325 9.70156L3.74086 9.06186C3.66755 8.59986 3.3743 8.22671 2.97109 8.03125ZM3.17228 6.68096C3.17228 7.34829 2.6143 7.88927 1.92599 7.88927C1.23767 7.88927 0.679688 7.34829 0.679688 6.68096C0.679688 6.01363 1.23767 5.47266 1.92599 5.47266C2.6143 5.47266 3.17228 6.01363 3.17228 6.68096ZM14.1694 6.18372H5.64695C5.22541 6.18372 4.89551 6.50356 4.89551 6.91225V8.58256C4.89551 8.99125 5.22541 9.3111 5.64695 9.3111H14.1694C14.591 9.3111 14.9209 8.99125 14.9209 8.58256V6.91225C14.9209 6.50356 14.5726 6.18372 14.1694 6.18372ZM1.90784 13.8599C2.31106 13.8599 2.67762 13.7356 2.97086 13.5223C3.37408 13.7178 3.66732 14.0909 3.72231 14.5352L3.81395 15.1749C3.83227 15.3348 3.70398 15.4947 3.5207 15.4947H0.294988C0.111709 15.4947 -0.0165866 15.3526 0.0017413 15.1749L0.0933808 14.5352C0.148365 14.0909 0.441611 13.7178 0.844825 13.5223C1.1564 13.7356 1.50463 13.8599 1.90784 13.8599ZM1.92599 13.3805C2.6143 13.3805 3.17228 12.8395 3.17228 12.1722C3.17228 11.5048 2.6143 10.9639 1.92599 10.9639C1.23767 10.9639 0.679688 11.5048 0.679688 12.1722C0.679688 12.8395 1.23767 13.3805 1.92599 13.3805ZM5.64695 11.6738H11.6402C12.0617 11.6738 12.41 11.9937 12.41 12.4024V14.0727C12.41 14.4814 12.08 14.8012 11.6585 14.8012H5.64695C5.22541 14.8012 4.89551 14.4814 4.89551 14.0727V12.4024C4.89551 11.9937 5.22541 11.6738 5.64695 11.6738Z" fill="#F95C89"/>
                                    </g><defs><clipPath id="clip0_6361_317349"><rect width="18" height="16" fill="white"/></clipPath></defs></svg>
                                    <div className="mypoll-cont-text-blk">
                                      <div className="mypoll-cont-heading">
                                        <h4>The organization invests time and money to keep the employee updated with technology.</h4>
                                        <p>Posted on 23 Mar 2021</p>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <button className="nav-link" id="poll-4-tab" data-bs-toggle="pill" data-bs-target="#poll-4" type="button" role="tab" aria-controls="poll-4" aria-selected="false">
                                  <div className="mypoll-cont-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none"><g clip-path="url(#clip0_6361_317349)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92599 2.41661C2.6143 2.41661 3.17228 1.87563 3.17228 1.20831C3.17228 0.540977 2.6143 0 1.92599 0C1.23767 0 0.679688 0.540977 0.679688 1.20831C0.679688 1.87563 1.23767 2.41661 1.92599 2.41661ZM2.97109 2.55872C2.67784 2.77195 2.31129 2.89633 1.9264 2.89633C1.54151 2.89633 1.15663 2.77195 0.863381 2.55872C0.460167 2.75418 0.16692 3.12733 0.111936 3.57156L0.0202968 4.21125C0.00196892 4.38894 0.130264 4.5311 0.313543 4.5311H3.53926C3.72253 4.5311 3.85083 4.37117 3.8325 4.21125L3.74086 3.57156C3.66755 3.10956 3.3743 2.75418 2.97109 2.55872ZM5.64695 0.693359H16.6804C17.1019 0.693359 17.4318 1.03097 17.4318 1.4219V3.0922C17.4318 3.50089 17.1019 3.82074 16.6804 3.82074H5.64695C5.22541 3.82074 4.89551 3.50089 4.89551 3.0922V1.4219C4.89551 1.0132 5.22541 0.693359 5.64695 0.693359ZM2.97109 8.03125C2.67784 8.24448 2.31129 8.36887 1.90807 8.36887C1.50486 8.36887 1.15663 8.24448 0.845053 8.03125C0.441839 8.22671 0.148592 8.59986 0.0936085 9.0441L0.0202968 9.70156C0.00196892 9.87925 0.130264 10.0214 0.313543 10.0214H3.53926C3.72253 10.0214 3.85083 9.86148 3.8325 9.70156L3.74086 9.06186C3.66755 8.59986 3.3743 8.22671 2.97109 8.03125ZM3.17228 6.68096C3.17228 7.34829 2.6143 7.88927 1.92599 7.88927C1.23767 7.88927 0.679688 7.34829 0.679688 6.68096C0.679688 6.01363 1.23767 5.47266 1.92599 5.47266C2.6143 5.47266 3.17228 6.01363 3.17228 6.68096ZM14.1694 6.18372H5.64695C5.22541 6.18372 4.89551 6.50356 4.89551 6.91225V8.58256C4.89551 8.99125 5.22541 9.3111 5.64695 9.3111H14.1694C14.591 9.3111 14.9209 8.99125 14.9209 8.58256V6.91225C14.9209 6.50356 14.5726 6.18372 14.1694 6.18372ZM1.90784 13.8599C2.31106 13.8599 2.67762 13.7356 2.97086 13.5223C3.37408 13.7178 3.66732 14.0909 3.72231 14.5352L3.81395 15.1749C3.83227 15.3348 3.70398 15.4947 3.5207 15.4947H0.294988C0.111709 15.4947 -0.0165866 15.3526 0.0017413 15.1749L0.0933808 14.5352C0.148365 14.0909 0.441611 13.7178 0.844825 13.5223C1.1564 13.7356 1.50463 13.8599 1.90784 13.8599ZM1.92599 13.3805C2.6143 13.3805 3.17228 12.8395 3.17228 12.1722C3.17228 11.5048 2.6143 10.9639 1.92599 10.9639C1.23767 10.9639 0.679688 11.5048 0.679688 12.1722C0.679688 12.8395 1.23767 13.3805 1.92599 13.3805ZM5.64695 11.6738H11.6402C12.0617 11.6738 12.41 11.9937 12.41 12.4024V14.0727C12.41 14.4814 12.08 14.8012 11.6585 14.8012H5.64695C5.22541 14.8012 4.89551 14.4814 4.89551 14.0727V12.4024C4.89551 11.9937 5.22541 11.6738 5.64695 11.6738Z" fill="#F95C89"/>
                                    </g><defs><clipPath id="clip0_6361_317349"><rect width="18" height="16" fill="white"/></clipPath></defs></svg>
                                    <div className="mypoll-cont-text-blk">
                                      <div className="mypoll-cont-heading">
                                        <h4>The organization invests time and money to keep the employee updated with technology.</h4>
                                        <p>Posted on 23 Mar 2021</p>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <button className="nav-link" id="poll-4-tab" data-bs-toggle="pill" data-bs-target="#poll-4" type="button" role="tab" aria-controls="poll-4" aria-selected="false">
                                  <div className="mypoll-cont-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none"><g clip-path="url(#clip0_6361_317349)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92599 2.41661C2.6143 2.41661 3.17228 1.87563 3.17228 1.20831C3.17228 0.540977 2.6143 0 1.92599 0C1.23767 0 0.679688 0.540977 0.679688 1.20831C0.679688 1.87563 1.23767 2.41661 1.92599 2.41661ZM2.97109 2.55872C2.67784 2.77195 2.31129 2.89633 1.9264 2.89633C1.54151 2.89633 1.15663 2.77195 0.863381 2.55872C0.460167 2.75418 0.16692 3.12733 0.111936 3.57156L0.0202968 4.21125C0.00196892 4.38894 0.130264 4.5311 0.313543 4.5311H3.53926C3.72253 4.5311 3.85083 4.37117 3.8325 4.21125L3.74086 3.57156C3.66755 3.10956 3.3743 2.75418 2.97109 2.55872ZM5.64695 0.693359H16.6804C17.1019 0.693359 17.4318 1.03097 17.4318 1.4219V3.0922C17.4318 3.50089 17.1019 3.82074 16.6804 3.82074H5.64695C5.22541 3.82074 4.89551 3.50089 4.89551 3.0922V1.4219C4.89551 1.0132 5.22541 0.693359 5.64695 0.693359ZM2.97109 8.03125C2.67784 8.24448 2.31129 8.36887 1.90807 8.36887C1.50486 8.36887 1.15663 8.24448 0.845053 8.03125C0.441839 8.22671 0.148592 8.59986 0.0936085 9.0441L0.0202968 9.70156C0.00196892 9.87925 0.130264 10.0214 0.313543 10.0214H3.53926C3.72253 10.0214 3.85083 9.86148 3.8325 9.70156L3.74086 9.06186C3.66755 8.59986 3.3743 8.22671 2.97109 8.03125ZM3.17228 6.68096C3.17228 7.34829 2.6143 7.88927 1.92599 7.88927C1.23767 7.88927 0.679688 7.34829 0.679688 6.68096C0.679688 6.01363 1.23767 5.47266 1.92599 5.47266C2.6143 5.47266 3.17228 6.01363 3.17228 6.68096ZM14.1694 6.18372H5.64695C5.22541 6.18372 4.89551 6.50356 4.89551 6.91225V8.58256C4.89551 8.99125 5.22541 9.3111 5.64695 9.3111H14.1694C14.591 9.3111 14.9209 8.99125 14.9209 8.58256V6.91225C14.9209 6.50356 14.5726 6.18372 14.1694 6.18372ZM1.90784 13.8599C2.31106 13.8599 2.67762 13.7356 2.97086 13.5223C3.37408 13.7178 3.66732 14.0909 3.72231 14.5352L3.81395 15.1749C3.83227 15.3348 3.70398 15.4947 3.5207 15.4947H0.294988C0.111709 15.4947 -0.0165866 15.3526 0.0017413 15.1749L0.0933808 14.5352C0.148365 14.0909 0.441611 13.7178 0.844825 13.5223C1.1564 13.7356 1.50463 13.8599 1.90784 13.8599ZM1.92599 13.3805C2.6143 13.3805 3.17228 12.8395 3.17228 12.1722C3.17228 11.5048 2.6143 10.9639 1.92599 10.9639C1.23767 10.9639 0.679688 11.5048 0.679688 12.1722C0.679688 12.8395 1.23767 13.3805 1.92599 13.3805ZM5.64695 11.6738H11.6402C12.0617 11.6738 12.41 11.9937 12.41 12.4024V14.0727C12.41 14.4814 12.08 14.8012 11.6585 14.8012H5.64695C5.22541 14.8012 4.89551 14.4814 4.89551 14.0727V12.4024C4.89551 11.9937 5.22541 11.6738 5.64695 11.6738Z" fill="#F95C89"/>
                                    </g><defs><clipPath id="clip0_6361_317349"><rect width="18" height="16" fill="white"/></clipPath></defs></svg>
                                    <div className="mypoll-cont-text-blk">
                                      <div className="mypoll-cont-heading">
                                        <h4>The organization invests time and money to keep the employee updated with technology.</h4>
                                        <p>Posted on 23 Mar 2021</p>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <button className="nav-link" id="poll-4-tab" data-bs-toggle="pill" data-bs-target="#poll-4" type="button" role="tab" aria-controls="poll-4" aria-selected="false">
                                  <div className="mypoll-cont-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none"><g clip-path="url(#clip0_6361_317349)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92599 2.41661C2.6143 2.41661 3.17228 1.87563 3.17228 1.20831C3.17228 0.540977 2.6143 0 1.92599 0C1.23767 0 0.679688 0.540977 0.679688 1.20831C0.679688 1.87563 1.23767 2.41661 1.92599 2.41661ZM2.97109 2.55872C2.67784 2.77195 2.31129 2.89633 1.9264 2.89633C1.54151 2.89633 1.15663 2.77195 0.863381 2.55872C0.460167 2.75418 0.16692 3.12733 0.111936 3.57156L0.0202968 4.21125C0.00196892 4.38894 0.130264 4.5311 0.313543 4.5311H3.53926C3.72253 4.5311 3.85083 4.37117 3.8325 4.21125L3.74086 3.57156C3.66755 3.10956 3.3743 2.75418 2.97109 2.55872ZM5.64695 0.693359H16.6804C17.1019 0.693359 17.4318 1.03097 17.4318 1.4219V3.0922C17.4318 3.50089 17.1019 3.82074 16.6804 3.82074H5.64695C5.22541 3.82074 4.89551 3.50089 4.89551 3.0922V1.4219C4.89551 1.0132 5.22541 0.693359 5.64695 0.693359ZM2.97109 8.03125C2.67784 8.24448 2.31129 8.36887 1.90807 8.36887C1.50486 8.36887 1.15663 8.24448 0.845053 8.03125C0.441839 8.22671 0.148592 8.59986 0.0936085 9.0441L0.0202968 9.70156C0.00196892 9.87925 0.130264 10.0214 0.313543 10.0214H3.53926C3.72253 10.0214 3.85083 9.86148 3.8325 9.70156L3.74086 9.06186C3.66755 8.59986 3.3743 8.22671 2.97109 8.03125ZM3.17228 6.68096C3.17228 7.34829 2.6143 7.88927 1.92599 7.88927C1.23767 7.88927 0.679688 7.34829 0.679688 6.68096C0.679688 6.01363 1.23767 5.47266 1.92599 5.47266C2.6143 5.47266 3.17228 6.01363 3.17228 6.68096ZM14.1694 6.18372H5.64695C5.22541 6.18372 4.89551 6.50356 4.89551 6.91225V8.58256C4.89551 8.99125 5.22541 9.3111 5.64695 9.3111H14.1694C14.591 9.3111 14.9209 8.99125 14.9209 8.58256V6.91225C14.9209 6.50356 14.5726 6.18372 14.1694 6.18372ZM1.90784 13.8599C2.31106 13.8599 2.67762 13.7356 2.97086 13.5223C3.37408 13.7178 3.66732 14.0909 3.72231 14.5352L3.81395 15.1749C3.83227 15.3348 3.70398 15.4947 3.5207 15.4947H0.294988C0.111709 15.4947 -0.0165866 15.3526 0.0017413 15.1749L0.0933808 14.5352C0.148365 14.0909 0.441611 13.7178 0.844825 13.5223C1.1564 13.7356 1.50463 13.8599 1.90784 13.8599ZM1.92599 13.3805C2.6143 13.3805 3.17228 12.8395 3.17228 12.1722C3.17228 11.5048 2.6143 10.9639 1.92599 10.9639C1.23767 10.9639 0.679688 11.5048 0.679688 12.1722C0.679688 12.8395 1.23767 13.3805 1.92599 13.3805ZM5.64695 11.6738H11.6402C12.0617 11.6738 12.41 11.9937 12.41 12.4024V14.0727C12.41 14.4814 12.08 14.8012 11.6585 14.8012H5.64695C5.22541 14.8012 4.89551 14.4814 4.89551 14.0727V12.4024C4.89551 11.9937 5.22541 11.6738 5.64695 11.6738Z" fill="#F95C89"/>
                                    </g><defs><clipPath id="clip0_6361_317349"><rect width="18" height="16" fill="white"/></clipPath></defs></svg>
                                    <div className="mypoll-cont-text-blk">
                                      <div className="mypoll-cont-heading">
                                        <h4>The organization invests time and money to keep the employee updated with technology.</h4>
                                        <p>Posted on 23 Mar 2021</p>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="poll-card-block">
                          <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="poll-1" role="tabpanel" aria-labelledby="poll-1-tab">
                              <div className="mypoll-details-block post-panel">
                                <div className="post-wrapper col-grid-box">
                                    <div className="post-details">
                                      <div className="mypoll-cont-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none"><g clip-path="url(#clip0_6361_317349)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92599 2.41661C2.6143 2.41661 3.17228 1.87563 3.17228 1.20831C3.17228 0.540977 2.6143 0 1.92599 0C1.23767 0 0.679688 0.540977 0.679688 1.20831C0.679688 1.87563 1.23767 2.41661 1.92599 2.41661ZM2.97109 2.55872C2.67784 2.77195 2.31129 2.89633 1.9264 2.89633C1.54151 2.89633 1.15663 2.77195 0.863381 2.55872C0.460167 2.75418 0.16692 3.12733 0.111936 3.57156L0.0202968 4.21125C0.00196892 4.38894 0.130264 4.5311 0.313543 4.5311H3.53926C3.72253 4.5311 3.85083 4.37117 3.8325 4.21125L3.74086 3.57156C3.66755 3.10956 3.3743 2.75418 2.97109 2.55872ZM5.64695 0.693359H16.6804C17.1019 0.693359 17.4318 1.03097 17.4318 1.4219V3.0922C17.4318 3.50089 17.1019 3.82074 16.6804 3.82074H5.64695C5.22541 3.82074 4.89551 3.50089 4.89551 3.0922V1.4219C4.89551 1.0132 5.22541 0.693359 5.64695 0.693359ZM2.97109 8.03125C2.67784 8.24448 2.31129 8.36887 1.90807 8.36887C1.50486 8.36887 1.15663 8.24448 0.845053 8.03125C0.441839 8.22671 0.148592 8.59986 0.0936085 9.0441L0.0202968 9.70156C0.00196892 9.87925 0.130264 10.0214 0.313543 10.0214H3.53926C3.72253 10.0214 3.85083 9.86148 3.8325 9.70156L3.74086 9.06186C3.66755 8.59986 3.3743 8.22671 2.97109 8.03125ZM3.17228 6.68096C3.17228 7.34829 2.6143 7.88927 1.92599 7.88927C1.23767 7.88927 0.679688 7.34829 0.679688 6.68096C0.679688 6.01363 1.23767 5.47266 1.92599 5.47266C2.6143 5.47266 3.17228 6.01363 3.17228 6.68096ZM14.1694 6.18372H5.64695C5.22541 6.18372 4.89551 6.50356 4.89551 6.91225V8.58256C4.89551 8.99125 5.22541 9.3111 5.64695 9.3111H14.1694C14.591 9.3111 14.9209 8.99125 14.9209 8.58256V6.91225C14.9209 6.50356 14.5726 6.18372 14.1694 6.18372ZM1.90784 13.8599C2.31106 13.8599 2.67762 13.7356 2.97086 13.5223C3.37408 13.7178 3.66732 14.0909 3.72231 14.5352L3.81395 15.1749C3.83227 15.3348 3.70398 15.4947 3.5207 15.4947H0.294988C0.111709 15.4947 -0.0165866 15.3526 0.0017413 15.1749L0.0933808 14.5352C0.148365 14.0909 0.441611 13.7178 0.844825 13.5223C1.1564 13.7356 1.50463 13.8599 1.90784 13.8599ZM1.92599 13.3805C2.6143 13.3805 3.17228 12.8395 3.17228 12.1722C3.17228 11.5048 2.6143 10.9639 1.92599 10.9639C1.23767 10.9639 0.679688 11.5048 0.679688 12.1722C0.679688 12.8395 1.23767 13.3805 1.92599 13.3805ZM5.64695 11.6738H11.6402C12.0617 11.6738 12.41 11.9937 12.41 12.4024V14.0727C12.41 14.4814 12.08 14.8012 11.6585 14.8012H5.64695C5.22541 14.8012 4.89551 14.4814 4.89551 14.0727V12.4024C4.89551 11.9937 5.22541 11.6738 5.64695 11.6738Z" fill="#F95C89"/>
                                        </g><defs><clipPath id="clip0_6361_317349"><rect width="18" height="16" fill="white"/></clipPath></defs></svg>
                                        <div className="mypoll-cont-text-blk">
                                          <div className="mypoll-cont-heading">
                                            <h4>The organization invests time and money to keep the employee updated with technology.</h4>
                                            <p>Total Participant: 234k</p>
                                            <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                                              <a href="#" className="mypoll-3dot-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#6E6B7B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-17 ih-17"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                              <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                  <ul className="custom-drop-list-block">
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                  </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mypoll-progress-innercont">
                                        <div className="progress-inner-cont-blk">
                                          <div className="progress-contmypoll">
                                            <span>Audi A6</span>
                                            <span>30%</span>
                                          </div>
                                          <div className="progress">
                                            <div className="progress-bar progress-bar-completed" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                        </div>
                                        <div className="progress-inner-cont-blk">
                                          <div className="progress-contmypoll">
                                            <span>BMW 5 Series</span>
                                            <span>20%</span>
                                          </div>
                                          <div className="progress">
                                            <div className="progress-bar progress-bar-completed" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                        </div>
                                        <div className="progress-inner-cont-blk">
                                          <div className="progress-contmypoll">
                                            <span>Lexus ES 200</span>
                                            <span>12%</span>
                                          </div>
                                          <div className="progress">
                                            <div className="progress-bar progress-bar-completed" role="progressbar" style={{width: '12%'}} aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                        </div>
                                        <div className="progress-inner-cont-blk">
                                          <div className="progress-contmypoll">
                                            <span>Volvo Hatchback</span>
                                            <span>50%</span>
                                          </div>
                                          <div className="progress">
                                            <div className="progress-bar progress-bar-completed" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="detail-box">
                                          <div className="bookmark favourite-btn">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                          </div>
                                          <div className="people-likes">
                                              <ul>
                                                  <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                      data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
                                                      <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt=""/>
                                                  </li>
                                                  <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                      data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                                      <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                                  </li>
                                                  <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                      data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                                      <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                                  </li>
                                              </ul>
                                              <h6>+12 people react this post</h6>
                                          </div>
                                      </div>
                                      <div className="like-panel">
                                          <div className="left-emoji">
                                              <ul>
                                                  <li>
                                                      <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                                  </li>
                                                  <li>
                                                      <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                                  </li>
                                                  <li>
                                                      <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                                  </li>
                                                  <li>
                                                      <img src="assets/svg/emoji/033.svg" alt="angry"/>
                                                  </li>
                                              </ul>
                                              <h6>+75</h6>
                                          </div>
                                          <div className="right-stats">
                                              <ul>
                                                  <li>
                                                      <h5>
                                                          <i className="iw-16 ih-16" data-feather="message-square"></i>
                                                          <span>4565</span> comment
                                                      </h5>
                                                  </li>
                                                  <li>
                                                      <h5>
                                                          <i className="iw-16 ih-16" data-feather="share"></i><span>985</span>
                                                          share
                                                      </h5>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="mypoll-analitics-block">
                                        <div className="mypoll-analitics-header">
                                          <h4>Poll analytics</h4>
                                          <span className="">● Completed</span>
                                        </div>
                                        <div className="mypoll-details-4block">
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="likeshare-voteview-blk">
                                                <h3>2.5k</h3>
                                                <p>Total likes <a hre="#" data-bs-toggle="modal" data-bs-target="#totalLikeModel">View</a></p>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="likeshare-voteview-blk">
                                                <h3>2.5k</h3>
                                                <p>Total shares <a hre="#" data-bs-toggle="modal" data-bs-target="#totalShareModel">View</a></p>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="likeshare-voteview-blk">
                                                <h3>2.5k</h3>
                                                <p>Viewed <a hre="#" data-bs-toggle="modal" data-bs-target="#totalViewedModel">View</a></p>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="likeshare-voteview-blk">
                                                <h3>2.5k</h3>
                                                <p>Voted <a hre="#" data-bs-toggle="modal" data-bs-target="#totalVotedModel">View</a></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="gender-age-location-tabs">
                                          <div class="nav nav-pills flex-column flex-sm-row" id="pills-tab" role="tablist">
                                              <a href="#" class="flex-sm-fill text-sm-center nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Gender</a>
                                              <a href="#" class="flex-sm-fill text-sm-center nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Age</a>
                                              <a href="#" class="flex-sm-fill text-sm-center nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Location</a>
                                          </div>
                                          <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                              <div className="genage-progress-block">
                                                <div class="genage-progress-list-blk">
                                                  <div className="genage-progress-cont-blk"><span>Male</span> <span>2.1k</span></div>
                                                  <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                                </div>
                                                <div class="genage-progress-list-blk">
                                                  <div className="genage-progress-cont-blk"><span>Female</span> <span>965</span></div>
                                                  <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                                </div>
                                                <div class="genage-progress-list-blk">
                                                  <div className="genage-progress-cont-blk"><span>Other</span> <span>365</span></div>
                                                  <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                              <div className="genage-progress-block">
                                                <div class="genage-progress-list-blk">
                                                  <div className="genage-progress-cont-blk"><span>10_ Years Old</span> <span>452</span></div>
                                                  <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{width:'30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                                </div>
                                                <div class="genage-progress-list-blk">
                                                  <div className="genage-progress-cont-blk"><span>20+ Years Old</span> <span>1.5k</span></div>
                                                  <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{width:'70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                                </div>
                                                <div class="genage-progress-list-blk">
                                                  <div className="genage-progress-cont-blk"><span>40+ Years Old</span> <span>365</span></div>
                                                  <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                              <div className="genage-progress-block">
                                                <div class="genage-progress-list-blk">
                                                  <div className="genage-progress-cont-blk"><span>USA</span> <span>2.1k</span></div>
                                                  <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                                </div>
                                                <div class="genage-progress-list-blk">
                                                  <div className="genage-progress-cont-blk"><span>India</span> <span>965</span></div>
                                                  <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                                </div>
                                                <div class="genage-progress-list-blk">
                                                  <div className="genage-progress-cont-blk"><span>Dubai</span> <span>365</span></div>
                                                  <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="poll-2" role="tabpanel" aria-labelledby="poll-2-tab">No Content</div>
                            <div className="tab-pane fade" id="poll-3" role="tabpanel" aria-labelledby="poll-3-tab">No Content</div>
                            <div className="tab-pane fade" id="poll-4" role="tabpanel" aria-labelledby="poll-4-tab">No Content</div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <RightSidebar></RightSidebar>
        </div>
        <div className="modal fade" id="totalLikeModel" tabIndex="-1" role="dialog" aria-labelledby="totalLikeModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Total likes (70)</h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have seen your poll.</p>
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
                            <a className="btn btn-default">Follow</a>
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
                            <a className="btn btn-default">Following</a>
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
                            <a className="btn btn-default">Add Friend</a>
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
                            <a className="btn btn-default">Following</a>
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
        <div className="modal fade" id="totalShareModel" tabIndex="-1" role="dialog" aria-labelledby="totalShareModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Total shares (40)</h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have seen your poll.</p>
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
                            <a className="btn btn-default">Follow</a>
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
                            <a className="btn btn-default">Following</a>
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
                            <a className="btn btn-default">Add Friend</a>
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
                            <a className="btn btn-default">Following</a>
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
        <div className="modal fade" id="totalViewedModel" tabIndex="-1" role="dialog" aria-labelledby="totalViewedModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Viewed (70)</h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have seen your poll.</p>
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
                            <a className="btn btn-default">Follow</a>
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
                            <a className="btn btn-default">Following</a>
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
                            <a className="btn btn-default">Add Friend</a>
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
                            <a className="btn btn-default">Following</a>
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
        <div className="modal fade" id="totalVotedModel" tabIndex="-1" role="dialog" aria-labelledby="totalVotedModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Voted (40)</h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have seen your poll.</p>
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
                            <a className="btn btn-default">Follow</a>
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
                            <a className="btn btn-default">Following</a>
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
                            <a className="btn btn-default">Add Friend</a>
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
                            <a className="btn btn-default">Following</a>
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