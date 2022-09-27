import React,{useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';


export default function MyMarkrtPlace() {
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
                        <div className="mpdetails-block">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="mpdetails-head-blk">
                                        <h4>MarketPlace</h4>
                                        <NavLink to="/MyMarkrtPlace"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-15 ih-15"><polyline points="15 18 9 12 15 6"></polyline></svg> Back</NavLink>
                                    </div>
                                    <div className="post-panel mp-detail-post-block">
                                        <div className="post-wrapper col-grid-box section-b-space">
                                            <div className="mp-main-details-blk">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mp-details-img-blk">
                                                            <img src="assets/images/mp-3.jpg"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mp-details-cont-blk">
                                                            <h4>Glass Suitable For Drinking Water, Juice, Cocktail, Bourbon, Wine, Soda, Sharbat, Mocktail, Whisky</h4>
                                                            <h5><span className="green">Home Decoration</span></h5>
                                                            <h3>$75</h3>
                                                            <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                                                                <a href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                                    <div className="sellbuybtn onsell-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> On Sell</div>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                                    <ul class="custom-drop-list-block">
                                                                        <li><a href="#">Sold out</a></li>
                                                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#deleteMP">Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street, Oswego, NY 13126, USA</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-details">
                                                <div className="detail-box">
                                                    <h3>Product Description</h3>
                                                    <p>What are features and benefits? Think about what gets you excited about your product that makes it different from your competitors' products. It might be careful construction, ethically sourced materials, or all the bells and whistles you dreamed up over drinks one night. Those are features.</p>
                                                    <p>Now, think about what those things do for your customer. Does careful construction mean that your product is safe for children? Do ethically sourced materials make the buyer feel good about purchasing your product? Do those bells and whistles make everyone who sees your customer with your product weep with envy? Those are benefits.</p>
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
                                                                    <i className="iw-16 ih-16" data-feather="share"></i><span>985</span> share
                                                                </h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="post-react">
                                                    <ul>
                                                        <li className="react-btn">
                                                            <a className="react-click" href="#">
                                                                <div className="post-btn-cust"><img src="assets/images/like1.png"/></div> react
                                                            </a>
                                                            <div className="react-box">
                                                                <ul>
                                                                    <li data-title="smile">
                                                                        <a href="#">
                                                                            <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                                                        </a>
                                                                    </li>
                                                                    <li data-title="love">
                                                                        <a href="#">
                                                                            <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                                                        </a>
                                                                    </li>
                                                                    <li data-title="cry">
                                                                        <a href="#">
                                                                            <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                                                        </a>
                                                                    </li>
                                                                    <li data-title="wow">
                                                                        <a href="#">
                                                                            <img src="assets/svg/emoji/052.svg" alt="angry"/>
                                                                        </a>
                                                                    </li>
                                                                    <li data-title="angry">
                                                                        <a href="#">
                                                                            <img src="assets/svg/emoji/039.svg" alt="angry"/>
                                                                        </a>
                                                                    </li>
                                                                    <li data-title="haha">
                                                                        <a href="#">
                                                                            <img src="assets/svg/emoji/042.svg" alt=""/>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="comment-click">
                                                            <a href="#">
                                                                <div className="post-btn-cust"><img src="assets/images/comment1.png"/></div> comment
                                                            </a>
                                                        </li>
                                                        <li data-bs-target="#shareModal" data-bs-toggle="modal">
                                                            <a href="#">
                                                                <div className="post-btn-cust"><img src="assets/images/share.png"/></div> share
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="comment-section">
                                                    <div className="comments d-block">
                                                        <div className="main-comment">
                                                            <div className="media">
                                                                <a href="#" className="user-img popover-cls" data-bs-toggle="popover"
                                                                    data-placement="right" data-name="Pabelo mukrani"
                                                                    data-img="assets/images/story-2.jpg">
                                                                    <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt="user"/>
                                                                </a>
                                                                <div className="media-body">
                                                                    <a href="#">
                                                                        <h5>Pabelo Mukrani</h5>
                                                                    </a>
                                                                    <p>Oooo Very Cute and Sweet Dog, happy birthday Cuty....
                                                                        &#128578;
                                                                    </p>
                                                                    <ul className="comment-option">
                                                                        <li><a href="#"><img src="assets/images/liked-icon.png"/> like (5)</a></li>
                                                                        <li><a href="#"><img src="assets/images/chat-icon.png"/> reply (5)</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="comment-time">
                                                                    <h6>50 mins ago</h6>
                                                                </div>
                                                            </div>
                                                            <div className="sub-comment">
                                                                <div className="media">
                                                                    <a href="#" className="user-img popover-cls" data-bs-toggle="popover"
                                                                        data-placement="right" data-name="sufiya elija"
                                                                        data-img="assets/images/story-3.jpg">
                                                                        <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt="user"/>
                                                                    </a>
                                                                    <div className="media-body">
                                                                        <a href="#">
                                                                            <h5>sufiya elija</h5>
                                                                        </a>
                                                                        <p>Thank You So Much ❤❤</p>
                                                                        <ul className="comment-option">
                                                                            <li><a href="#">like</a></li>
                                                                            <li><a href="#">reply</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment-time">
                                                                        <h6>50 mins ago</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="media">
                                                                    <a href="#" className="user-img popover-cls" data-bs-toggle="popover"
                                                                        data-placement="right" data-name="sufiya eliza"
                                                                        data-img="assets/images/story-4.jpg">
                                                                        <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt="user"/>
                                                                    </a>
                                                                    <div className="media-body">
                                                                        <a href="#">
                                                                            <h5>sufiya elija</h5>
                                                                        </a>
                                                                        <p>Thank You So Much ❤❤</p>
                                                                        <ul className="comment-option">
                                                                            <li><a href="#">like</a></li>
                                                                            <li><a href="#">reply</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment-time">
                                                                        <h6>50 mins ago</h6>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="loader">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15 ih-15"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg> load more replies
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="main-comment">
                                                            <div className="media">
                                                                <a href="#" className="user-img popover-cls" data-bs-toggle="popover"
                                                                    data-placement="right" data-name="pabelo mukrani"
                                                                    data-img="assets/images/story-2.jpg">
                                                                    <img src="assets/images/story-2.jpg"
                                                                        className="img-fluid bg-img" alt="user"/>
                                                                </a>
                                                                <div className="media-body">
                                                                    <a href="#">
                                                                        <h5>Pabelo Mukrani</h5>
                                                                    </a>
                                                                    <p>It’s party time, Sufiya..... and happy birthday cuty 🎉🎊</p>
                                                                    <ul className="comment-option">
                                                                        <li><a href="#">like</a></li>
                                                                        <li><a href="#">reply</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="comment-time">
                                                                    <h6>50 mins ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="reply">
                                                        <div className="search-input input-style input-lg icon-right">
                                                            <input type="text" className="form-control emojiPicker"
                                                                placeholder="write a comment.."/>
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-2 iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                                            </a>
                                                            <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-14 ih-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mp-releted-block">
                                        <h3>Related Product</h3>
                                        <div className="mp-releted-pro-blk">
                                            <img src="assets/images/mp-3.jpg"/>
                                            <div className="content-mp-block">
                                                <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                                <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                                <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                            </div>
                                        </div>
                                        <div className="mp-releted-pro-blk">
                                            <img src="assets/images/mp-3.jpg"/>
                                            <div className="content-mp-block">
                                                <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                                <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                                <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                            </div>
                                        </div>
                                        <div className="mp-releted-pro-blk">
                                            <img src="assets/images/mp-3.jpg"/>
                                            <div className="content-mp-block">
                                                <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                                <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                                <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                            </div>
                                        </div>
                                        <div className="mp-releted-pro-blk">
                                            <img src="assets/images/mp-3.jpg"/>
                                            <div className="content-mp-block">
                                                <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                                <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                                <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                            </div>
                                        </div>
                                        <div className="mp-releted-pro-blk">
                                            <img src="assets/images/mp-3.jpg"/>
                                            <div className="content-mp-block">
                                                <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                                <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                                <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                            </div>
                                        </div>
                                        <div className="mp-releted-pro-blk">
                                            <img src="assets/images/mp-3.jpg"/>
                                            <div className="content-mp-block">
                                                <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                                <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                                <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                            </div>
                                        </div>
                                        <div className="mp-releted-pro-blk">
                                            <img src="assets/images/mp-3.jpg"/>
                                            <div className="content-mp-block">
                                                <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                                <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                                <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                            </div>
                                        </div>
                                        <div className="seeall-btn">
                                            <a href="#">See All <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg></a>
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