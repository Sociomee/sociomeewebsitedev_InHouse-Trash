import React,{useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';


export default function MyGroup() {  
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
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
                                            <h3>My Group</h3>
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
                                            <a href="#" className="btn btn-outline-green ms-3" data-bs-toggle="modal" data-bs-target="#createGroup">Create Group</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-section">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="OwnedGroup-tab" data-bs-toggle="tab"
                                            href="#OwnedGroup" role="tab" aria-selected="false">Owned Group (4)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="JoinedGroup-tab" data-bs-toggle="tab" href="#JoinedGroup" role="tab"
                                            aria-selected="true">Joined Group (11)</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="OwnedGroup"
                                        role="tabpanel" aria-labelledby="OwnedGroup-tab">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-1.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                            <div className="grouptextoneline">Learn how to master your commun Learn how to master</div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-2.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                            <div className="grouptextoneline">Learn how to master your commun Learn how to master</div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-3.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                            <div className="grouptextoneline">Learn how to master your commun Learn how to master</div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-4.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                            <div className="grouptextoneline">Learn how to master your commun Learn how to master</div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-5.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                            <div className="grouptextoneline">Learn how to master your commun Learn how to master</div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-6.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                            <div className="grouptextoneline">Learn how to master your commun Learn how to master</div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
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
                                    <div className="tab-pane fade" id="JoinedGroup" role="tabpanel" aria-labelledby="JoinedGroup-tab">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Exit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06036 0.217798C1.27076 0.543285 0.771077 1.0145 0.356279 1.82496C0.122112 2.28252 0 2.78916 0 3.30315V8.545V14.239C0 14.4485 0.0912424 14.6476 0.24993 14.7844C0.414976 14.9268 0.609772 15 0.823539 15C1.12433 15 1.26426 14.8835 2.80035 13.3525L4.45349 11.7049L8.41709 11.6757C12.1046 11.6486 12.4104 11.6344 12.807 11.4722C13.812 11.0613 14.6226 10.1438 14.8783 9.12784C14.9959 8.66073 15.0145 8.07164 14.9913 5.54471L14.9709 3.30537C14.9662 2.78922 14.8418 2.28121 14.6074 1.8213C14.1921 1.00611 13.6248 0.483992 12.831 0.186276C12.3432 0.00321777 12.1965 -0.00178286 7.45621 0.000270968L3.14836 0.00208674C2.77509 0.00224408 2.40546 0.075528 2.06036 0.217798ZM12.2924 1.77201C12.7421 1.97677 13.2017 2.49514 13.2717 2.87608C13.3011 3.03672 13.3132 4.45708 13.2983 6.03236L13.2714 8.89656L13.0323 9.25857C12.8884 9.47645 12.6379 9.69595 12.403 9.80998C12.0226 9.99455 11.9085 9.99938 7.92926 9.99938H3.84585L2.74682 11.0887L1.64779 12.178V7.56729C1.64779 4.52673 1.68003 2.87099 1.74256 2.70516C1.87723 2.3478 2.25738 1.96721 2.67209 1.77478C3.00388 1.62074 3.33468 1.6094 7.48186 1.6094C11.5994 1.6094 11.9622 1.62163 12.2924 1.77201ZM6.93016 2.71391C6.77147 2.85078 6.68023 3.04996 6.68023 3.25952V4.55227V5.84501C6.68023 6.05457 6.77147 6.25375 6.93016 6.39062C7.08799 6.52671 7.29125 6.6061 7.48186 6.6061C7.67247 6.6061 7.87573 6.52671 8.03356 6.39062C8.19225 6.25375 8.28349 6.05457 8.28349 5.84501V4.55227V3.25952C8.28349 3.04996 8.19225 2.85078 8.03356 2.71391C7.87573 2.57783 7.67247 2.49844 7.48186 2.49844C7.29125 2.49844 7.08799 2.57783 6.93016 2.71391ZM7.05878 7.5955C6.86755 7.70722 6.6357 8.14048 6.6357 8.38623C6.6357 8.48606 6.75087 8.69707 6.8916 8.85495C7.0937 9.08176 7.21786 9.14213 7.48186 9.14213C7.74586 9.14213 7.87003 9.08176 8.07213 8.85495C8.21286 8.69707 8.32802 8.48606 8.32802 8.38623C8.32802 8.12923 8.09012 7.69962 7.88757 7.59104C7.67096 7.47478 7.26177 7.47701 7.05878 7.5955Z" fill="#999999"/></svg> Report Group</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-3.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                        <div className="people-likes matual-friend-sec">
                                                            <ul className="matual-friend-blk">
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
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                                                    <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                                                    <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                            </ul>
                                                            <h6>+75 members</h6>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            <a href="#" className="group-btn">Leave</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Exit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06036 0.217798C1.27076 0.543285 0.771077 1.0145 0.356279 1.82496C0.122112 2.28252 0 2.78916 0 3.30315V8.545V14.239C0 14.4485 0.0912424 14.6476 0.24993 14.7844C0.414976 14.9268 0.609772 15 0.823539 15C1.12433 15 1.26426 14.8835 2.80035 13.3525L4.45349 11.7049L8.41709 11.6757C12.1046 11.6486 12.4104 11.6344 12.807 11.4722C13.812 11.0613 14.6226 10.1438 14.8783 9.12784C14.9959 8.66073 15.0145 8.07164 14.9913 5.54471L14.9709 3.30537C14.9662 2.78922 14.8418 2.28121 14.6074 1.8213C14.1921 1.00611 13.6248 0.483992 12.831 0.186276C12.3432 0.00321777 12.1965 -0.00178286 7.45621 0.000270968L3.14836 0.00208674C2.77509 0.00224408 2.40546 0.075528 2.06036 0.217798ZM12.2924 1.77201C12.7421 1.97677 13.2017 2.49514 13.2717 2.87608C13.3011 3.03672 13.3132 4.45708 13.2983 6.03236L13.2714 8.89656L13.0323 9.25857C12.8884 9.47645 12.6379 9.69595 12.403 9.80998C12.0226 9.99455 11.9085 9.99938 7.92926 9.99938H3.84585L2.74682 11.0887L1.64779 12.178V7.56729C1.64779 4.52673 1.68003 2.87099 1.74256 2.70516C1.87723 2.3478 2.25738 1.96721 2.67209 1.77478C3.00388 1.62074 3.33468 1.6094 7.48186 1.6094C11.5994 1.6094 11.9622 1.62163 12.2924 1.77201ZM6.93016 2.71391C6.77147 2.85078 6.68023 3.04996 6.68023 3.25952V4.55227V5.84501C6.68023 6.05457 6.77147 6.25375 6.93016 6.39062C7.08799 6.52671 7.29125 6.6061 7.48186 6.6061C7.67247 6.6061 7.87573 6.52671 8.03356 6.39062C8.19225 6.25375 8.28349 6.05457 8.28349 5.84501V4.55227V3.25952C8.28349 3.04996 8.19225 2.85078 8.03356 2.71391C7.87573 2.57783 7.67247 2.49844 7.48186 2.49844C7.29125 2.49844 7.08799 2.57783 6.93016 2.71391ZM7.05878 7.5955C6.86755 7.70722 6.6357 8.14048 6.6357 8.38623C6.6357 8.48606 6.75087 8.69707 6.8916 8.85495C7.0937 9.08176 7.21786 9.14213 7.48186 9.14213C7.74586 9.14213 7.87003 9.08176 8.07213 8.85495C8.21286 8.69707 8.32802 8.48606 8.32802 8.38623C8.32802 8.12923 8.09012 7.69962 7.88757 7.59104C7.67096 7.47478 7.26177 7.47701 7.05878 7.5955Z" fill="#999999"/></svg> Report Group</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-6.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                        <div className="people-likes matual-friend-sec">
                                                            <ul className="matual-friend-blk">
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
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                                                    <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                                                    <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                            </ul>
                                                            <h6>+75 members</h6>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            <a href="#" className="group-btn">Leave</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Exit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06036 0.217798C1.27076 0.543285 0.771077 1.0145 0.356279 1.82496C0.122112 2.28252 0 2.78916 0 3.30315V8.545V14.239C0 14.4485 0.0912424 14.6476 0.24993 14.7844C0.414976 14.9268 0.609772 15 0.823539 15C1.12433 15 1.26426 14.8835 2.80035 13.3525L4.45349 11.7049L8.41709 11.6757C12.1046 11.6486 12.4104 11.6344 12.807 11.4722C13.812 11.0613 14.6226 10.1438 14.8783 9.12784C14.9959 8.66073 15.0145 8.07164 14.9913 5.54471L14.9709 3.30537C14.9662 2.78922 14.8418 2.28121 14.6074 1.8213C14.1921 1.00611 13.6248 0.483992 12.831 0.186276C12.3432 0.00321777 12.1965 -0.00178286 7.45621 0.000270968L3.14836 0.00208674C2.77509 0.00224408 2.40546 0.075528 2.06036 0.217798ZM12.2924 1.77201C12.7421 1.97677 13.2017 2.49514 13.2717 2.87608C13.3011 3.03672 13.3132 4.45708 13.2983 6.03236L13.2714 8.89656L13.0323 9.25857C12.8884 9.47645 12.6379 9.69595 12.403 9.80998C12.0226 9.99455 11.9085 9.99938 7.92926 9.99938H3.84585L2.74682 11.0887L1.64779 12.178V7.56729C1.64779 4.52673 1.68003 2.87099 1.74256 2.70516C1.87723 2.3478 2.25738 1.96721 2.67209 1.77478C3.00388 1.62074 3.33468 1.6094 7.48186 1.6094C11.5994 1.6094 11.9622 1.62163 12.2924 1.77201ZM6.93016 2.71391C6.77147 2.85078 6.68023 3.04996 6.68023 3.25952V4.55227V5.84501C6.68023 6.05457 6.77147 6.25375 6.93016 6.39062C7.08799 6.52671 7.29125 6.6061 7.48186 6.6061C7.67247 6.6061 7.87573 6.52671 8.03356 6.39062C8.19225 6.25375 8.28349 6.05457 8.28349 5.84501V4.55227V3.25952C8.28349 3.04996 8.19225 2.85078 8.03356 2.71391C7.87573 2.57783 7.67247 2.49844 7.48186 2.49844C7.29125 2.49844 7.08799 2.57783 6.93016 2.71391ZM7.05878 7.5955C6.86755 7.70722 6.6357 8.14048 6.6357 8.38623C6.6357 8.48606 6.75087 8.69707 6.8916 8.85495C7.0937 9.08176 7.21786 9.14213 7.48186 9.14213C7.74586 9.14213 7.87003 9.08176 8.07213 8.85495C8.21286 8.69707 8.32802 8.48606 8.32802 8.38623C8.32802 8.12923 8.09012 7.69962 7.88757 7.59104C7.67096 7.47478 7.26177 7.47701 7.05878 7.5955Z" fill="#999999"/></svg> Report Group</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-7.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                        <div className="people-likes matual-friend-sec">
                                                            <ul className="matual-friend-blk">
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
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                                                    <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                                                    <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                            </ul>
                                                            <h6>+75 members</h6>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            <a href="#" className="group-btn">Leave</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Exit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06036 0.217798C1.27076 0.543285 0.771077 1.0145 0.356279 1.82496C0.122112 2.28252 0 2.78916 0 3.30315V8.545V14.239C0 14.4485 0.0912424 14.6476 0.24993 14.7844C0.414976 14.9268 0.609772 15 0.823539 15C1.12433 15 1.26426 14.8835 2.80035 13.3525L4.45349 11.7049L8.41709 11.6757C12.1046 11.6486 12.4104 11.6344 12.807 11.4722C13.812 11.0613 14.6226 10.1438 14.8783 9.12784C14.9959 8.66073 15.0145 8.07164 14.9913 5.54471L14.9709 3.30537C14.9662 2.78922 14.8418 2.28121 14.6074 1.8213C14.1921 1.00611 13.6248 0.483992 12.831 0.186276C12.3432 0.00321777 12.1965 -0.00178286 7.45621 0.000270968L3.14836 0.00208674C2.77509 0.00224408 2.40546 0.075528 2.06036 0.217798ZM12.2924 1.77201C12.7421 1.97677 13.2017 2.49514 13.2717 2.87608C13.3011 3.03672 13.3132 4.45708 13.2983 6.03236L13.2714 8.89656L13.0323 9.25857C12.8884 9.47645 12.6379 9.69595 12.403 9.80998C12.0226 9.99455 11.9085 9.99938 7.92926 9.99938H3.84585L2.74682 11.0887L1.64779 12.178V7.56729C1.64779 4.52673 1.68003 2.87099 1.74256 2.70516C1.87723 2.3478 2.25738 1.96721 2.67209 1.77478C3.00388 1.62074 3.33468 1.6094 7.48186 1.6094C11.5994 1.6094 11.9622 1.62163 12.2924 1.77201ZM6.93016 2.71391C6.77147 2.85078 6.68023 3.04996 6.68023 3.25952V4.55227V5.84501C6.68023 6.05457 6.77147 6.25375 6.93016 6.39062C7.08799 6.52671 7.29125 6.6061 7.48186 6.6061C7.67247 6.6061 7.87573 6.52671 8.03356 6.39062C8.19225 6.25375 8.28349 6.05457 8.28349 5.84501V4.55227V3.25952C8.28349 3.04996 8.19225 2.85078 8.03356 2.71391C7.87573 2.57783 7.67247 2.49844 7.48186 2.49844C7.29125 2.49844 7.08799 2.57783 6.93016 2.71391ZM7.05878 7.5955C6.86755 7.70722 6.6357 8.14048 6.6357 8.38623C6.6357 8.48606 6.75087 8.69707 6.8916 8.85495C7.0937 9.08176 7.21786 9.14213 7.48186 9.14213C7.74586 9.14213 7.87003 9.08176 8.07213 8.85495C8.21286 8.69707 8.32802 8.48606 8.32802 8.38623C8.32802 8.12923 8.09012 7.69962 7.88757 7.59104C7.67096 7.47478 7.26177 7.47701 7.05878 7.5955Z" fill="#999999"/></svg> Report Group</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-2.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                        <div className="people-likes matual-friend-sec">
                                                            <ul className="matual-friend-blk">
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
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                                                    <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                                                    <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                            </ul>
                                                            <h6>+75 members</h6>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            <a href="#" className="group-btn">Leave</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Exit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06036 0.217798C1.27076 0.543285 0.771077 1.0145 0.356279 1.82496C0.122112 2.28252 0 2.78916 0 3.30315V8.545V14.239C0 14.4485 0.0912424 14.6476 0.24993 14.7844C0.414976 14.9268 0.609772 15 0.823539 15C1.12433 15 1.26426 14.8835 2.80035 13.3525L4.45349 11.7049L8.41709 11.6757C12.1046 11.6486 12.4104 11.6344 12.807 11.4722C13.812 11.0613 14.6226 10.1438 14.8783 9.12784C14.9959 8.66073 15.0145 8.07164 14.9913 5.54471L14.9709 3.30537C14.9662 2.78922 14.8418 2.28121 14.6074 1.8213C14.1921 1.00611 13.6248 0.483992 12.831 0.186276C12.3432 0.00321777 12.1965 -0.00178286 7.45621 0.000270968L3.14836 0.00208674C2.77509 0.00224408 2.40546 0.075528 2.06036 0.217798ZM12.2924 1.77201C12.7421 1.97677 13.2017 2.49514 13.2717 2.87608C13.3011 3.03672 13.3132 4.45708 13.2983 6.03236L13.2714 8.89656L13.0323 9.25857C12.8884 9.47645 12.6379 9.69595 12.403 9.80998C12.0226 9.99455 11.9085 9.99938 7.92926 9.99938H3.84585L2.74682 11.0887L1.64779 12.178V7.56729C1.64779 4.52673 1.68003 2.87099 1.74256 2.70516C1.87723 2.3478 2.25738 1.96721 2.67209 1.77478C3.00388 1.62074 3.33468 1.6094 7.48186 1.6094C11.5994 1.6094 11.9622 1.62163 12.2924 1.77201ZM6.93016 2.71391C6.77147 2.85078 6.68023 3.04996 6.68023 3.25952V4.55227V5.84501C6.68023 6.05457 6.77147 6.25375 6.93016 6.39062C7.08799 6.52671 7.29125 6.6061 7.48186 6.6061C7.67247 6.6061 7.87573 6.52671 8.03356 6.39062C8.19225 6.25375 8.28349 6.05457 8.28349 5.84501V4.55227V3.25952C8.28349 3.04996 8.19225 2.85078 8.03356 2.71391C7.87573 2.57783 7.67247 2.49844 7.48186 2.49844C7.29125 2.49844 7.08799 2.57783 6.93016 2.71391ZM7.05878 7.5955C6.86755 7.70722 6.6357 8.14048 6.6357 8.38623C6.6357 8.48606 6.75087 8.69707 6.8916 8.85495C7.0937 9.08176 7.21786 9.14213 7.48186 9.14213C7.74586 9.14213 7.87003 9.08176 8.07213 8.85495C8.21286 8.69707 8.32802 8.48606 8.32802 8.38623C8.32802 8.12923 8.09012 7.69962 7.88757 7.59104C7.67096 7.47478 7.26177 7.47701 7.05878 7.5955Z" fill="#999999"/></svg> Report Group</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-5.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                        <div className="people-likes matual-friend-sec">
                                                            <ul className="matual-friend-blk">
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
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                                                    <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                                                    <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                            </ul>
                                                            <h6>+75 members</h6>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            <a href="#" className="group-btn">Leave</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="group-slide-box mygroup-list-block">
                                                    <div className="gallery-img-sublink">
                                                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18282 0.674088C7.99404 0.673076 7.94163 0.699079 7.75324 0.887467C7.40071 1.23999 7.03903 1.95071 6.9891 2.38895C6.97044 2.55243 6.92128 2.60699 5.62148 3.90679C4.84832 4.67995 4.25905 5.24089 4.23997 5.22181C4.2217 5.20354 3.96027 5.17881 3.65904 5.1668C2.51273 5.12126 1.45093 5.47982 0.634608 6.18808C0.250017 6.52178 0.175138 6.73312 0.33933 7.02166C0.400831 7.12976 0.89985 7.65957 1.59681 8.35675L2.75227 9.51265L1.64608 10.6191C0.614104 11.6513 0.536878 11.7382 0.49505 11.9145C0.441293 12.1412 0.579318 12.3801 0.82294 12.4822C1.11983 12.6065 1.1836 12.5606 2.39289 11.3513L3.4919 10.2523L4.6478 11.4077C5.34498 12.1047 5.8748 12.6037 5.98289 12.6652C6.2673 12.8271 6.48187 12.752 6.79186 12.3819C7.31382 11.7588 7.66918 10.9888 7.79467 10.2094C7.85802 9.81578 7.85762 9.18793 7.79381 8.89042L7.75791 8.72293L9.09224 7.3886L10.4266 6.05423L10.7605 5.97489C11.2151 5.86686 11.6703 5.63163 12.0308 5.31854C12.3263 5.06194 12.3318 5.05307 12.3305 4.83196L12.3293 4.60674L10.3635 2.64101L8.39782 0.675282L8.18282 0.674088ZM10.9086 4.83237C10.7005 4.92492 10.4467 4.99626 10.1779 5.03775L9.92473 5.07684L8.33688 6.66469C7.36886 7.6327 6.73704 8.29286 6.7183 8.35583C6.70137 8.41262 6.71893 8.64114 6.75731 8.86355C6.89487 9.66082 6.75775 10.5371 6.39928 11.152C6.31229 11.3011 6.22816 11.4361 6.21229 11.452C6.19638 11.4679 5.13312 10.4306 3.84944 9.1469L1.51545 6.81291L1.67823 6.70139C1.89783 6.55087 2.45281 6.31712 2.74617 6.25156C3.10015 6.1725 3.77889 6.17208 4.18191 6.25063C4.37686 6.2886 4.58631 6.30488 4.64737 6.28665C4.72168 6.26456 5.28432 5.72086 6.34844 4.64283L7.93849 3.03207L7.98652 2.71437C8.02589 2.45392 8.15356 2.04038 8.21295 1.98099C8.22056 1.97338 8.85876 2.59915 9.63116 3.37155L11.0355 4.77593L10.9086 4.83237Z" fill="#999999"/></svg> Pin Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Exit Group</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="iw-16 ih-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06036 0.217798C1.27076 0.543285 0.771077 1.0145 0.356279 1.82496C0.122112 2.28252 0 2.78916 0 3.30315V8.545V14.239C0 14.4485 0.0912424 14.6476 0.24993 14.7844C0.414976 14.9268 0.609772 15 0.823539 15C1.12433 15 1.26426 14.8835 2.80035 13.3525L4.45349 11.7049L8.41709 11.6757C12.1046 11.6486 12.4104 11.6344 12.807 11.4722C13.812 11.0613 14.6226 10.1438 14.8783 9.12784C14.9959 8.66073 15.0145 8.07164 14.9913 5.54471L14.9709 3.30537C14.9662 2.78922 14.8418 2.28121 14.6074 1.8213C14.1921 1.00611 13.6248 0.483992 12.831 0.186276C12.3432 0.00321777 12.1965 -0.00178286 7.45621 0.000270968L3.14836 0.00208674C2.77509 0.00224408 2.40546 0.075528 2.06036 0.217798ZM12.2924 1.77201C12.7421 1.97677 13.2017 2.49514 13.2717 2.87608C13.3011 3.03672 13.3132 4.45708 13.2983 6.03236L13.2714 8.89656L13.0323 9.25857C12.8884 9.47645 12.6379 9.69595 12.403 9.80998C12.0226 9.99455 11.9085 9.99938 7.92926 9.99938H3.84585L2.74682 11.0887L1.64779 12.178V7.56729C1.64779 4.52673 1.68003 2.87099 1.74256 2.70516C1.87723 2.3478 2.25738 1.96721 2.67209 1.77478C3.00388 1.62074 3.33468 1.6094 7.48186 1.6094C11.5994 1.6094 11.9622 1.62163 12.2924 1.77201ZM6.93016 2.71391C6.77147 2.85078 6.68023 3.04996 6.68023 3.25952V4.55227V5.84501C6.68023 6.05457 6.77147 6.25375 6.93016 6.39062C7.08799 6.52671 7.29125 6.6061 7.48186 6.6061C7.67247 6.6061 7.87573 6.52671 8.03356 6.39062C8.19225 6.25375 8.28349 6.05457 8.28349 5.84501V4.55227V3.25952C8.28349 3.04996 8.19225 2.85078 8.03356 2.71391C7.87573 2.57783 7.67247 2.49844 7.48186 2.49844C7.29125 2.49844 7.08799 2.57783 6.93016 2.71391ZM7.05878 7.5955C6.86755 7.70722 6.6357 8.14048 6.6357 8.38623C6.6357 8.48606 6.75087 8.69707 6.8916 8.85495C7.0937 9.08176 7.21786 9.14213 7.48186 9.14213C7.74586 9.14213 7.87003 9.08176 8.07213 8.85495C8.21286 8.69707 8.32802 8.48606 8.32802 8.38623C8.32802 8.12923 8.09012 7.69962 7.88757 7.59104C7.67096 7.47478 7.26177 7.47701 7.05878 7.5955Z" fill="#999999"/></svg> Report Group</a>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/GroupDetail"><img src="assets/images/group-img-8.jpg" className="img-fluid group-img"/></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <div className="groupmember-blk">
                                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>78.9k members</span> 
                                                        </div>
                                                        <div className="people-likes matual-friend-sec">
                                                            <ul className="matual-friend-blk">
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
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                                                    <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                                                    <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                            </ul>
                                                            <h6>+75 members</h6>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn" data-bs-toggle="modal" data-bs-target="#invitePeopleModel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11 mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                                                            <a href="#" className="group-btn">Leave</a>
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
        <div className="modal fade" id="createGroup" tabIndex="-1" role="dialog" aria-labelledby="createGroupTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Create Group</h5>
                        <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                    </div>
                    <div className="modal-body">
                        <form className="theme-form">
                            <div className="form-group">
                                <label>Name </label>
                                <input type="text" className="form-control" placeholder="Enter your group name" />
                                <p className="instruction-msg">Max 64 Characters</p>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" placeholder="Discribe your group" />
                                <p className="instruction-msg">Max 180 charectors</p>
                            </div>

                            <div className="form-group">
                                <label>Group Catagory</label>
                                <select className="form-control">
                                    <option>Choose catagory</option>
                                    {/* {
                                        allGroupCategory.data.successResult.map((val) => {
                                            return <option>{val.name}</option>
                                        })
                                    } */}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Group Privacy</label>
                                <select id="inputState" className="form-control">
                                    <option>Choose privacy</option>
                                    <option>Privacy 1</option>
                                    <option>Privacy 2</option>
                                    <option>Privacy 3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Group Image</label>
                                <div className="upload-image-blk">
                                    <input type="file" onChange={handleChange} />
                                    <img src={file} className="event-img-prev" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-solid">Save</button>
                    </div>
                </div>
            </div>
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
                            <input type="text" className="form-control" name="search" placeholder="Find Sports..."/>
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
      </>
    );
} 