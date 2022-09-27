import React,{useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';


export default function MyRecommendation() {  
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
                                            <h3>Recommendation (26)</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="right-setting">
                                            <div className="search-block-podcast">
                                                <div className="input-search-blk">
                                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                    <input type="text" className="form-control" name="search" placeholder="Find..."/>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-outline-green ms-3" data-bs-toggle="modal" data-bs-target="#createGroup">Create Recommendation</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-recom-list-section">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <NavLink to="/RecommendationDetail"><img src="assets/images/trend-1.jpg" className="img-fluid group-img"/></NavLink>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amou...</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <NavLink to="/RecommendationDetail"><img src="assets/images/trend-1.jpg" className="img-fluid group-img"/></NavLink>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amou...</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I visited Goa on a friend’s and the  recommendation and I really enjoyed it.</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amount I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amou...</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amount.</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <NavLink to="/RecommendationDetail"><img src="assets/images/trend-1.jpg" className="img-fluid group-img"/></NavLink>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amou...</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amount...</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <NavLink to="/RecommendationDetail"><img src="assets/images/trend-1.jpg" className="img-fluid group-img"/></NavLink>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amou...</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <NavLink to="/RecommendationDetail"><img src="assets/images/trend-1.jpg" className="img-fluid group-img"/></NavLink>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amou...</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <NavLink to="/RecommendationDetail"><img src="assets/images/trend-1.jpg" className="img-fluid group-img"/></NavLink>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amou...</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amou...</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block">
                                            <div className="gallery-img-sublink">
                                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#4D4D4D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                <ul>
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="recomdation-content">
                                                <div className="recomhead-blk"><NavLink to="/RecommendationDetail">Action Dhamaka</NavLink></div>
                                                <div className="recom-listcont-blk">
                                                    <h4>I am seeking recommendation for Buying 5 “Mercedes Benz” but how to manage this large amou...</h4>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bessemer, North Carolina</p>
                                                </div>
                                                <div className="likechatshare-blk">
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-like.png"/>
                                                        <span>10k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-chat.png"/>
                                                        <span>5.2k</span>
                                                    </div>
                                                    <div className="lcs-btns">
                                                        <img src="assets/images/icon-share.png"/>
                                                        <span>1.2k</span>
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
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <RightSidebar></RightSidebar>
        </div>
      </>
    );
} 