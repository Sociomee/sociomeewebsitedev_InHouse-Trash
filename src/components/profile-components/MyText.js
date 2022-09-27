import React,{useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';


export default function MyText() {  
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
                                            <h3>Text (23)</h3>
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
                                            <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                                                <a href="#" className="btn btn-outline-grey" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"  className="iw-13 ih-13"><path d="M12.347 7.5006L13.9624 7.5006M12.347 7.5006C12.347 7.07217 12.1768 6.6613 11.8739 6.35835C11.5709 6.05541 11.1601 5.88522 10.7316 5.88522C10.3032 5.88522 9.89233 6.05541 9.58938 6.35835C9.28644 6.66129 9.11625 7.07217 9.11625 7.5006M12.347 7.5006C12.347 7.92903 12.1768 8.33991 11.8739 8.64285C11.5709 8.94579 11.1601 9.11599 10.7316 9.11599C10.3032 9.11599 9.89233 8.94579 9.58938 8.64285C9.28644 8.33991 9.11625 7.92903 9.11625 7.5006M9.11625 7.5006L1.03932 7.5006M2.65471 2.65445C2.65471 3.08287 2.8249 3.49375 3.12784 3.7967C3.43079 4.09964 3.84167 4.26983 4.27009 4.26983C4.69852 4.26983 5.1094 4.09964 5.41234 3.7967C5.71529 3.49375 5.88548 3.08287 5.88548 2.65445M2.65471 2.65445C2.65471 2.22602 2.8249 1.81514 3.12784 1.5122C3.43079 1.20925 3.84167 1.03906 4.27009 1.03906C4.69852 1.03906 5.1094 1.20925 5.41234 1.5122C5.71529 1.81514 5.88548 2.22602 5.88548 2.65445M2.65471 2.65445L1.03932 2.65445M5.88548 2.65445L13.9624 2.65445M2.65471 12.3468C2.65471 12.7752 2.8249 13.1861 3.12784 13.489C3.43079 13.7919 3.84167 13.9621 4.27009 13.9621C4.69852 13.9621 5.1094 13.7919 5.41234 13.489C5.71529 13.1861 5.88548 12.7752 5.88548 12.3468M2.65471 12.3468C2.65471 11.9183 2.8249 11.5074 3.12784 11.2045C3.43079 10.9016 3.84167 10.7314 4.27009 10.7314C4.69852 10.7314 5.1094 10.9016 5.41234 11.2045C5.71529 11.5074 5.88548 11.9183 5.88548 12.3468M2.65471 12.3468L1.03932 12.3468M5.88548 12.3468L13.9624 12.3468" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Filter</a>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                    <ul className="custom-drop-list-block">
                                                        <li><a href="#">All</a></li>
                                                        <li><a href="#">Text</a></li>
                                                        <li><a href="#">Thought</a></li>
                                                        <li><a href="#">Alert</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-outline-green ms-3" data-bs-toggle="modal" data-bs-target="#createGroup">Create Post</a>
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
                                            <div className="recomdation-content">
                                                <NavLink to="/MyTextDetail" className="mytext-list-block">
                                                    <h3>Text</h3>
                                                    <div className="recom-listcont-blk">
                                                        <h4>In a world full of noise, how do you get people to read what you write? It takes more than good how do you get people to read what you write? It takes more than good containt wi...</h4>
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
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block mytext-threat-blk">
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
                                                <NavLink to="/MyThreatDetail" className="mytext-list-block">
                                                    <h3>Threat</h3>
                                                    <div className="recom-listcont-blk">
                                                        <p>●  Mordreate</p>
                                                        <h4>Heavy rainfall will hit New castle town by tonight. If you want light to come into your life, you need to stand where it is shining. Happiness is the only thing that multiplies when you share it.</h4>
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
                                                </NavLink>
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
                                                <NavLink to="/MyThoughtDetail" className="mytext-list-block">
                                                    <h3>Thought</h3>
                                                    <div className="recom-listcont-blk thoughtlist-blk">
                                                        <div className="left-thougnt-icon"><span class="ti-quote-left"></span></div>
                                                        <h4>In a world full of noise, how do you get people to read what you write? It takes more than good </h4>
                                                        <div className="right-thougnt-icon"><span class="ti-quote-right"></span></div>
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
                                                </NavLink>
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
                                            <div className="recomdation-content">
                                                <NavLink to="/MyThoughtDetail" className="mytext-list-block">
                                                    <h3>Thought</h3>
                                                    <div className="recom-listcont-blk thoughtlist-blk">
                                                        <div className="left-thougnt-icon"><span class="ti-quote-left"></span></div>
                                                        <h4>In a world full of noise, how do you get people to read what you write? It takes more than good </h4>
                                                        <div className="right-thougnt-icon"><span class="ti-quote-right"></span></div>
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
                                                </NavLink>
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
                                                <NavLink to="/MyTextDetail" className="mytext-list-block">
                                                    <h3>Text</h3>
                                                    <div className="recom-listcont-blk">
                                                        <h4>In a world full of noise, how do you get people to read what you write? It takes more than good how do you get people to read what you write? It takes more than good containt wi...</h4>
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
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="group-slide-box recom-text-block mytext-threat-blk mythreat-serve-blk">
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
                                                <NavLink to="/MyThreatDetail" className="mytext-list-block">
                                                    <h3>Threat</h3>
                                                    <div className="recom-listcont-blk">
                                                        <p>●  Mordreate</p>
                                                        <h4>Heavy rainfall will hit New castle town by tonight. If you want light to come into your life, you need to stand where it is shining. Happiness is the only thing that multiplies when you share it.</h4>
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
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="group-slide-box recom-text-block mytext-threat-blk mythreat-mild-blk">
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
                                                <NavLink to="/MyThreatDetail" className="mytext-list-block">
                                                    <h3>Threat</h3>
                                                    <div className="recom-listcont-blk">
                                                        <p>●  Mordreate</p>
                                                        <h4>Heavy rainfall will hit New castle town by tonight. If you want light to come into your life, you need to stand where it is shining. Happiness is the only thing that multiplies when you share it.</h4>
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
                                                </NavLink>
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
                                                <NavLink to="/MyThoughtDetail" className="mytext-list-block">
                                                    <h3>Thought</h3>
                                                    <div className="recom-listcont-blk thoughtlist-blk">
                                                        <div className="left-thougnt-icon"><span class="ti-quote-left"></span></div>
                                                        <h4>In a world full of noise, how do you get people to read what you write? It takes more than good </h4>
                                                        <div className="right-thougnt-icon"><span class="ti-quote-right"></span></div>
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
                                                </NavLink>
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
                                                <NavLink to="/MyTextDetail" className="mytext-list-block">
                                                    <h3>Text</h3>
                                                    <div className="recom-listcont-blk">
                                                        <h4>In a world full of noise, how do you get people to read what you write? It takes more than good how do you get people to read what you write? It takes more than good containt wi...</h4>
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
                                                </NavLink>
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