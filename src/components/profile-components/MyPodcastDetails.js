import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';

export default function MyPodcastDetails() {  

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
                <div className="gallery-page-section section-b-space">
                    <div className="card-title">
                        <h3>Podcast (162)</h3>
                        <div className="right-setting">
                            <NavLink to="/MyMediaListView" className="btn btn-outline-grey ms-3"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg> List view</NavLink>
                        </div>
                    </div>

                    <div className="podcast-details-page">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-5 col-sm-5 col-12">
                          <div className="card-custom-blk">
                            <h3>Playing  Podcast</h3>
                            <div className="playingpodcast-blk">
                              <img src="assets/images/podcastd-1.jpg"/>
                              <h4>Esset's Adventures</h4>
                              <h5>12 Apr 2021</h5>
                              <p>Ariana Grande</p>
                              <div className="audio-tracker-blk">
                                <div className="audio-controls-blk">
                                  <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-23 ih-23"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg></a>
                                  <a href="#" className="play-pause-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-23 ih-23"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg></a>
                                  <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-23 ih-23"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg></a>
                                </div>
                                <div className="soudboxaudio">
                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-23 ih-23"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg></a>
                                <div className="progressbar-blk"></div>
                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-23 ih-23"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-custom-blk">
                            <h3>About the  Podcast</h3>
                            <p>Rock music is a broad genre of popular music that originated as "rock and roll" in the United States in the late 1940s and early 1950s, developing into a range of different styles in the mid-1960s and later, particularly in the United States and the United Kingdom.[3] It has its roots in 1940s and 1950s rock and roll, a style that drew directly from the blues and rhythm and blues genres of African-American music and from country music. </p>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-12">
                          <div className="my-podcast-anlytics-block">
                            <h3>Podcast Anlytics</h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="card-custom-blk">
                                  <ul className="pc-analitics-blk">
                                    <li><span>Total Listener</span> <b><a href="#" data-bs-toggle="modal" data-bs-target="#totalListenerModel">6453</a></b></li>
                                    <li><span>Total Likes</span> <b><a href="#" data-bs-toggle="modal" data-bs-target="#totalLikeModel">1434</a></b></li>
                                    <li><span>Total Comments</span> <b><a href="#" data-bs-toggle="modal" data-bs-target="#totalCommentsModel">843</a></b></li>
                                    <li><span>Total Share</span> <b><a href="#" data-bs-toggle="modal" data-bs-target="#totalShareModel">231</a></b></li>
                                    <li><span>Total Download</span> <b><a href="#" data-bs-toggle="modal" data-bs-target="#totalDownloadModel">231</a></b></li>
                                    <li><span>Total Purchases</span> <b><a href="#" data-bs-toggle="modal" data-bs-target="#totalPurchaseModel">231</a></b></li>
                                    <li><span>Total Earns</span> <b><a href="#">$231</a></b></li>
                                    <li><span>Price</span> <b className="green">Free</b></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
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
                          <div className="card-custom-blk">
                            <h3>Your Other Poscast </h3>
                            <div className="podcast-episode-blockmain">
                              <div className="podcast-episode-blk">
                                <div className="episode-img-blk">
                                  <img src="assets/images/pd-episode-1.jpg"/>
                                </div>
                                <div className="episode-cont-blk">
                                  <h4>‘Inspired’ Photoshoot Lyfe style & Journey</h4>
                                  <h6>Motivational</h6>
                                  <p>uploaded on 23 May, 2022</p>
                                </div>
                                <div className="episode-more-btn-blk">
                                  <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                                    <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                        <ul className="custom-drop-list-block">
                                          <li><a href="#">Hide from timeline</a></li>
                                          <li><a href="#">Edit Podcast</a></li>
                                          <li><a href="#">Delete Podcast</a></li>
                                          <li><a href="#">Share</a></li>
                                          <li><a href="#">Copy Link</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="podcast-episode-blk">
                                <div className="episode-img-blk">
                                  <img src="assets/images/pd-episode-1.jpg"/>
                                </div>
                                <div className="episode-cont-blk">
                                  <h4>‘Inspired’ Photoshoot Lyfe style & Journey</h4>
                                  <h6>Motivational</h6>
                                  <p>uploaded on 23 May, 2022</p>
                                </div>
                                <div className="episode-more-btn-blk">
                                  <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                                    <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                        <ul className="custom-drop-list-block">
                                          <li><a href="#">Hide from timeline</a></li>
                                          <li><a href="#">Edit Podcast</a></li>
                                          <li><a href="#">Delete Podcast</a></li>
                                          <li><a href="#">Share</a></li>
                                          <li><a href="#">Copy Link</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="podcast-episode-blk">
                                <div className="episode-img-blk">
                                  <img src="assets/images/pd-episode-1.jpg"/>
                                </div>
                                <div className="episode-cont-blk">
                                  <h4>‘Inspired’ Photoshoot Lyfe style & Journey</h4>
                                  <h6>Motivational</h6>
                                  <p>uploaded on 23 May, 2022</p>
                                </div>
                                <div className="episode-more-btn-blk">
                                  <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                                    <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                        <ul className="custom-drop-list-block">
                                          <li><a href="#">Hide from timeline</a></li>
                                          <li><a href="#">Edit Podcast</a></li>
                                          <li><a href="#">Delete Podcast</a></li>
                                          <li><a href="#">Share</a></li>
                                          <li><a href="#">Copy Link</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="podcast-episode-blk">
                                <div className="episode-img-blk">
                                  <img src="assets/images/pd-episode-1.jpg"/>
                                </div>
                                <div className="episode-cont-blk">
                                  <h4>‘Inspired’ Photoshoot Lyfe style & Journey</h4>
                                  <h6>Motivational</h6>
                                  <p>uploaded on 23 May, 2022</p>
                                </div>
                                <div className="episode-more-btn-blk">
                                  <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                                    <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                        <ul className="custom-drop-list-block">
                                          <li><a href="#">Hide from timeline</a></li>
                                          <li><a href="#">Edit Podcast</a></li>
                                          <li><a href="#">Delete Podcast</a></li>
                                          <li><a href="#">Share</a></li>
                                          <li><a href="#">Copy Link</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="podcast-episode-blk">
                                <div className="episode-img-blk">
                                  <img src="assets/images/pd-episode-1.jpg"/>
                                </div>
                                <div className="episode-cont-blk">
                                  <h4>‘Inspired’ Photoshoot Lyfe style & Journey</h4>
                                  <h6>Motivational</h6>
                                  <p>uploaded on 23 May, 2022</p>
                                </div>
                                <div className="episode-more-btn-blk">
                                  <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                                    <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                        <ul className="custom-drop-list-block">
                                          <li><a href="#">Hide from timeline</a></li>
                                          <li><a href="#">Edit Podcast</a></li>
                                          <li><a href="#">Delete Podcast</a></li>
                                          <li><a href="#">Share</a></li>
                                          <li><a href="#">Copy Link</a></li>
                                        </ul>
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
          </div>
          <RightSidebar></RightSidebar>
        </div>
        
        <div className="modal fade" id="totalListenerModel" tabIndex="-1" role="dialog" aria-labelledby="totalViewedModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Total Listener (70) </h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have Listen your Podcast.</p>
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
        <div className="modal fade" id="totalLikeModel" tabIndex="-1" role="dialog" aria-labelledby="totalLikeModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Total likes (70)</h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have Liked your Podcast.</p>
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
        <div className="modal fade" id="totalShareModel" tabIndex="-1" role="dialog" aria-labelledby="totalShareModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Total shares (40)</h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have Share your Podcast.</p>
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
        <div className="modal fade" id="totalCommentsModel" tabIndex="-1" role="dialog" aria-labelledby="totalVotedModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Total Comments (40)</h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have Comments your Podcast.</p>
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
        <div className="modal fade" id="totalDownloadModel" tabIndex="-1" role="dialog" aria-labelledby="totalVotedModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Total Download (70)</h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have Download your Podcast.</p>
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
        <div className="modal fade" id="totalPurchaseModel" tabIndex="-1" role="dialog" aria-labelledby="totalVotedModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Total Purchased (70)</h5>
                  <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
              </div>
              <div className="modal-body">
                  <p className="poll-subheading">This list shows the users who have Purchased your Podcast.</p>
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
                            <a className="btn btn-default">Download Invoice</a>
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
                            <a className="btn btn-default">Download Invoice</a>
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
                            <a className="btn btn-default">Download Invoice</a>
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
                            <a className="btn btn-default">Download Invoice</a>
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
                            <a className="btn btn-default">Download Invoice</a>
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
                            <a className="btn btn-default">Download Invoice</a>
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
                            <a className="btn btn-default">Download Invoice</a>
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