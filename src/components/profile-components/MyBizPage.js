import React,{useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';


export default function MyBizPage() {  
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
                                            <h3>My BizPage</h3>
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
                                                        <li><a href="#">Marketting Agency</a></li>
                                                        <li><a href="#">Apartment & Building</a></li>
                                                        <li><a href="#">Visual Arts</a></li>
                                                        <li><a href="#">Beauty Salon</a></li>
                                                        <li><a href="#">Clothing Shop</a></li>
                                                        <li><a href="#">Video Game</a></li>
                                                        <li><a href="#">Grocery</a></li>
                                                        <li><a href="#">Electronic</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <NavLink to="/CreateBiz" className="btn btn-outline-green ms-3">Create Biz Page</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-section">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="OwnedGroup-tab" data-bs-toggle="tab"
                                            href="#OwnedGroup" role="tab" aria-selected="false">Owned BizPage (4)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="JoinedGroup-tab" data-bs-toggle="tab" href="#JoinedGroup" role="tab"
                                            aria-selected="true">Followed BizPage (11)</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-1.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn">Invite People</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-2.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn">Invite People</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-3.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn">Invite People</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-4.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn">Invite People</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-5.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn">Invite People</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-6.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel" className="group-btn">Invite People</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-3.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Call</a>
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> Message</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-4.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Call</a>
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> Message</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-5.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Call</a>
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> Message</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-1.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Call</a>
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> Message</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-2.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Call</a>
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> Message</a>
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
                                                            <li><a href="#">Share page via message</a></li>
                                                            <li><a href="#">Share page</a></li>
                                                            <li><a href="#">Edit page</a></li>
                                                            <li><a href="#">Turn of page notification</a></li>
                                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#invitePeopleModel">Invite page to page</a></li>
                                                            <li><NavLink to="/CreateBiz">Create new page</NavLink></li>
                                                            <li><a href="#">Pin this group</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-6.jpg" className="img-fluid group-img"/><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg"/></div></NavLink>
                                                    <div className="group-content">
                                                        <h4>Action Dhamaka</h4>
                                                        <h5>danceacademy@gmail.com</h5>
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
                                                            <h6>+79k people likes</h6>
                                                        </div>
                                                        <div className="likepost-follow-blk">
                                                            <p>4k<span>Likes</span></p>
                                                            <p>42<span>Posts</span></p>
                                                            <p>524<span>Followers</span></p>
                                                            <p>502<span>Follow</span></p>
                                                        </div>
                                                        <div className="group-buttons-blk">
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Call</a>
                                                            <a href="#" className="group-btn green-clr-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14 mr-1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> Message</a>
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