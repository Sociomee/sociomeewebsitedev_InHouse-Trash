import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import BizDetailMenu from './BizDetailMenu';
// import Models from './Models';

export default function GroupDetail() {  

    return (
      <>
        <Header></Header>
        <div className="page-body container-fluid profile-page">
          <LeftSidebar></LeftSidebar>
          <div className="page-center">
            <div className="group-details-top biz-details-top">
                <div className="gd-top-block" style={{background:"url(assets/images/bizcover.jpg)"}}>
                    <div className="gd-top-btns">
                        <a href="#" className="grey-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" class="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                        <a href="#" className="grey-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" class="iw-13 ih-13"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit </a>
                    </div>
                </div>
                <div className="heading-title-blk head-title-biz">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4 col-12 order-lg-2">
                            <div className="biz-user-pro-blk">
                                <img src="assets/images/my-profile.jpg"/>
                                <h5>THE DETECTOR CLUB</h5>
                                <p><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" class="iw-10 ih-10"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Copenhagen, Denmark</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-12 order-lg-1">
                            <div className="gd-content-area-top-blk">
                                <div className="groupmember-blk">
                                    <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>Entertainment</span> 
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
                                    <h6>+54 Visited today</h6>
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
                                    <h6>+12k members</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-12 order-lg-3">
                            <ul className="followlist-blk">
                                <li>4.2<span>Rating</span></li>
                                <li>42k<span>Likes</span></li>
                                <li>52<span>Posts</span></li>
                                <li>524<span>Followers</span></li>
                                <li>502<span>Follow</span></li>
                            </ul>
                            <div className="create-biz-btn"><a href="#" class="btn btn-primary green-clr-btn">Creat BizPage</a></div>
                        </div>
                    </div>
                </div>
                
            </div>
            <BizDetailMenu></BizDetailMenu>

            <div className="container-fluid section-t-space px-0">
                <div className="page-content">
                    <div className="content-center w-100">
                        <div className="gdpost-about-blk">
                            <div className="row">
                                <div className="col-lg-4 col-12">
                                    <div class="review-counter section-b-space">
                                        <div class="card-title">
                                            <h3>review</h3>
                                            <div class="settings">
                                                <div class="setting-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-width-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-content">
                                            <h2>4.6</h2>
                                            <h4>based on 22 ratings</h4>
                                            <ul class="ratings">
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="far fa-star"></i></li>
                                            </ul>
                                            <div class="review-part">
                                                <ul>
                                                    <li>
                                                        <h5>5 stars</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{width: "80%"}}
                                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h5>4 star</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{width: "70%"}}
                                                                aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h5>3 star</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{width: "60%"}}
                                                                aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h5>2 star</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{width: "30%"}}
                                                                aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h5>1 star</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{width: "10%"}}
                                                                aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <div className="mybizpost-blk">
                                        <div className="post-panel">
                                            <div className="post-wrapper col-grid-box">
                                                <div className="post-title">
                                                    <div className="profile">
                                                        <div className="media">
                                                            <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                data-name="sufiya eliza" data-img="assets/images/my-profile.jpg">
                                                                <img src="assets/images/my-profile.jpg"
                                                                    className="img-fluid bg-img" alt="user"/>
                                                            </a>
                                                            <div className="media-body">
                                                                <h5>sufiya eliza</h5>
                                                                <h6>30 mins ago</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                            <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                            </div>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                                <ul>
                                                                    <li>
                                                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-details">
                                                    <div className="detail-box">
                                                        <h3>Celebration new album song launched</h3>
                                                        <h5 className="tag"><span>#Musiccelebration,</span> #music, #party, #music
                                                        </h5>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                            has been the industry's standard dummy text ever since the 1500s
                                                        </p>
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
                                            <div className="post-wrapper col-grid-box section-b-space">
                                                <div className="post-title">
                                                    <div className="profile">
                                                        <div className="media">
                                                            <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                data-name="sufiya eliza" data-img="assets/images/my-profile.jpg">
                                                                <img src="assets/images/my-profile.jpg"
                                                                    className="img-fluid bg-img" alt="user"/>
                                                            </a>
                                                            <div className="media-body">
                                                                <h5>sufiya eliza</h5>
                                                                <h6>30 mins ago</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                            <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                            </div>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                                <ul>
                                                                    <li>
                                                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-details">
                                                    <div className="detail-box">
                                                        <h3>Today Our Three Cute Puppy Dog Birthday !!!!</h3>
                                                        <h5 className="tag"><span>#ourcutepuppy,</span> #puppy, #birthday, #dog</h5>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                            has been the industry's standard dummy text ever since the 1500s</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <RightSidebar></RightSidebar>
        </div>
          {/* <Models></Models> */}
      </>
    );
} 