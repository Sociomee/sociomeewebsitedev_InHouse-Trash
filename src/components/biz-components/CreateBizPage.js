import React, { Component, useState } from 'react';
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import Slider from "react-slick";
import { CardTitle, Col, Form, FormGroup, Input, Label, Row, UncontrolledTooltip } from 'reactstrap';
import { Info } from 'react-feather';
import Map from '../biz-components/Img/map.png'
import Gmail from '../biz-components/Img/gmail.png'
import Tym from '../biz-components/Img/Time.png'
import Phone from '../biz-components/Img/phone.png'


// export default function GroupDetail() {  
//     var FriendSuggestsettings = {
//         dots: false,
//         speed: 300,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 5000,
//         infinite: true,
//         centerMode: true,
//         centerPadding: '30px',
//         responsive: [{
//                 breakpoint: 1800,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     centerPadding: '40px'
//                 }
//             }, {
//                 breakpoint: 1400,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     centerPadding: '40px'
//                 }
//             },
//             {
//                 breakpoint: 991,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     centerPadding: '40px'
//                 }
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     centerPadding: '40px'
//                 }
//             },
//             {
//                 breakpoint: 460,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     centerPadding: '40px'
//                 }
//             }
//         ]
//     };
//     return (
//       <>
//         <Header></Header>
//         <div className="page-body container-fluid profile-page">
//           <LeftSidebar></LeftSidebar>
//           <div className="page-center">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="createbizpage-block">
//                         <h3>Create BizPage</h3>
//                         <form className="theme-form form-sm">
//                             <div className="row">
//                                 <div className="form-group col-md-4">
//                                     <label>BizPage Name</label>
//                                     <input type="text" className="form-control" required/>
//                                     <p className="input-hints">Max 60 charectors</p>
//                                 </div>
//                                 <div className="form-group col-md-4">
//                                     <label>Biz Catagory</label>
//                                     <select id="inputState" className="form-control">
//                                         <option>Marketting Agency</option>
//                                         <option>Apartment & Building </option>
//                                         <option>Visual Arts</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-group col-md-4">
//                                     <label>Sub Catagory</label>
//                                     <select id="inputState" className="form-control">
//                                         <option>Electronic</option>
//                                         <option>Grocery</option>
//                                         <option>Video Game </option>
//                                     </select>
//                                 </div>
//                                 <div className="form-group col-md-3">
//                                     <label>Biz Page Privacy</label>
//                                     <select id="inputState" className="form-control">
//                                         <option>Public</option>
//                                         <option>Private</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-group col-md-3">
//                                     <label>Biz Page URL</label>
//                                     <input type="text" className="form-control" required/>
//                                 </div>
//                                 <div className="form-group col-md-3">
//                                     <label>Add your biz logo</label>
//                                     <input type="file" className="form-control" required/>
//                                 </div>
//                                 <div className="form-group col-md-3">
//                                     <label>Add your cover image</label>
//                                     <input type="file" className="form-control" required/>
//                                 </div>
//                                 <div className="form-group col-md-12">
//                                     <label>Summery</label>
//                                     <textarea rows="2" className="form-control"></textarea>
//                                     <p className="input-hints">Max 180 Characters</p>
//                                 </div>
//                             </div>
//                             <hr/>
//                             <h4>Details</h4>
//                             <div className="row">
//                                 <div className="form-group col-md-4">
//                                     <label>Add your biz logo</label>
//                                     <input type="file" className="form-control" required/>
//                                 </div>
//                                 <div className="form-group col-md-4">
//                                     <label>Add your cover image</label>
//                                     <input type="file" className="form-control" required/>
//                                 </div>
//                             </div>
//                             <div className="bizcreate-btns">
//                                 <a href="#" data-bs-toggle="modal" data-bs-target="#createbizmodel" className="btn btn-primary mr-3">Creat BizPage</a>
//                                 <a href="#" className="btn btn-default">Cancel</a>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="col-md-12">
//                     <div className="group-details-top biz-details-top biz-cration-preview">
//                         <div className="gd-top-block" style={{background:"url(assets/images/demo-banner-1.jpg)"}}>
//                         </div>
//                         <div className="heading-title-blk head-title-biz">
//                             <div className="row align-items-center">
//                                 <div className="col-xl-4 col-lg-4 col-12 order-lg-2">
//                                     <div className="biz-user-pro-blk">
//                                         <img src="assets/images/demo-1.jpg"/>
//                                         <h5>PAGE NAME</h5>
//                                         <p><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Addess</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-4 col-lg-4 col-12 order-lg-1">
//                                     <div className="gd-content-area-top-blk">
//                                         <div className="groupmember-blk">
//                                             <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Privacy group</span> • <span>Catagory</span> 
//                                         </div>
//                                         <div className="people-likes matual-friend-sec">
//                                             <ul className="matual-friend-blk">
//                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                 </li>
//                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                 </li>
//                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                 </li>
//                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                 </li>
//                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                 </li>
//                                             </ul>
//                                             <h6>Visited Person</h6>
//                                         </div>
//                                         <div className="people-likes matual-friend-sec">
//                                             <ul className="matual-friend-blk">
//                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                 </li>
//                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                 </li>
//                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                 </li>
//                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                 </li>
//                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                 </li>
//                                             </ul>
//                                             <h6>Members</h6>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-4 col-lg-4 col-12 order-lg-3">
//                                     <ul className="followlist-blk">
//                                         <li>0<span>Rating</span></li>
//                                         <li>0<span>Likes</span></li>
//                                         <li>0<span>Posts</span></li>
//                                         <li>0<span>Followers</span></li>
//                                         <li>0<span>Follow</span></li>
//                                     </ul>
//                                     <div className="create-biz-btn"><a href="#" className="btn btn-primary green-clr-btn">Create Biz Page</a></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="profile-menu section-t-space biz-cration-menu-preview">
//                         <ul>
//                             <li>
//                                 <a href="#" className="active-disable">
//                                 <h6>Overview</h6>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     <h6>Post</h6>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     <h6>Review</h6>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     <h6>Photos</h6>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     <h6>About</h6>
//                                 </a>
//                             </li>
//                         </ul>
//                         <ul className="right-menu d-xl-flex d-none biz-cration-menu-preview">
//                             <li>
//                                 <a href="#">
//                                     <h6>Post an offer</h6>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
//                                     <h6>Setting</h6>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="container-fluid section-t-space px-0">
//                         <div className="page-content">
//                             <div className="content-left">
//                                 <div className="suggestion-box section-b-space">
//                                     <div className="card-title">
//                                         <h3>friend suggestion</h3>
//                                     </div>
//                                     <div className="suggestion-content ratio_115 no-arrow frz-sug-slider-sec  biz-cration-fsslide-preview">
//                                         <Slider {...FriendSuggestsettings} className="default-space">
//                                             <div>
//                                                 <div className="friend-sugges-box">
//                                                     <div className="fdimg-blk">
//                                                         <img src="assets/images/demo-2.jpg" className="img-fluid bg-img" alt=""/>
//                                                         <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-24 ih-24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
//                                                     </div>
//                                                     <div className="fdcont-blk">
//                                                         <h4>User Name</h4>
//                                                         <div className="people-likes matual-friend-sec">
//                                                             <ul className="matual-friend-blk">
//                                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                                 </li>
//                                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                                 </li>
//                                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                                 </li>
//                                                             </ul>
//                                                             <h6>mutual</h6>
//                                                         </div>
//                                                         <a href="#" className="d-block btn btn-primary">Send Request</a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <div className="friend-sugges-box">
//                                                     <div className="fdimg-blk">
//                                                         <img src="assets/images/demo-2.jpg" className="img-fluid bg-img" alt=""/>
//                                                         <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-24 ih-24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
//                                                     </div>
//                                                     <div className="fdcont-blk">
//                                                         <h4>User Name</h4>
//                                                         <div className="people-likes matual-friend-sec">
//                                                             <ul className="matual-friend-blk">
//                                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                                 </li>
//                                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                                 </li>
//                                                                 <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                                                     data-name="User Name" data-img="assets/images/user-sm-1.jpg">
//                                                                     <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
//                                                                 </li>
//                                                             </ul>
//                                                             <h6>mutual</h6>
//                                                         </div>
//                                                         <a href="#" className="d-block btn btn-primary">Send Request</a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </Slider>
//                                     </div>
//                                     </div>
//                             </div>
//                             <div className="content-center">
//                                 <div className="create-post-demo">
//                                    <img src="assets/images/demo-3.png"/>
//                                 </div>
//                             </div>
//                             <div className="content-right">
//                                 <div className="gallery-section section-b-space">
//                                     <div className="gallery-top">
//                                         <div className="card-title">
//                                             <h3>gallery</h3>
//                                         </div>
//                                     </div>
//                                     <div className="portfolio-section ratio_square">
//                                         <div className="container-fluid p-0">
//                                             <div className="row">
//                                                 <div className="col-4">
//                                                     <div className="overlay">
//                                                         <div className="portfolio-image">
//                                                             <a href="#" data-bs-toggle="modal"
//                                                                 data-bs-target="#imageModel">
//                                                                 <img src="assets/images/event-bg.jpg" alt=""
//                                                                     className="img-fluid bg-img"/>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-4">
//                                                     <div className="overlay">
//                                                         <div className="portfolio-image">
//                                                             <a href="#" data-bs-toggle="modal"
//                                                                 data-bs-target="#imageModel">
//                                                                 <img src="assets/images/event-bg.jpg" alt=""
//                                                                     className="img-fluid bg-img"/>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-4">
//                                                     <div className="overlay">
//                                                         <div className="portfolio-image">
//                                                             <a href="#" data-bs-toggle="modal"
//                                                                 data-bs-target="#imageModel">
//                                                                 <img src="assets/images/event-bg.jpg" alt=""
//                                                                     className="img-fluid bg-img"/>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-4 row m-0">
//                                                     <div className="col-12 pt-cls p-0">
//                                                         <div className="overlay">
//                                                             <div className="portfolio-image">
//                                                                 <a href="#" data-bs-toggle="modal"
//                                                                     data-bs-target="#imageModel">
//                                                                     <img src="assets/images/event-bg.jpg" alt=""
//                                                                         className="img-fluid bg-img"/>
//                                                                 </a>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12 pt-cls p-0">
//                                                         <div className="overlay">
//                                                             <div className="portfolio-image">
//                                                                 <a href="#" data-bs-toggle="modal"
//                                                                     data-bs-target="#imageModel">
//                                                                     <img src="assets/images/event-bg.jpg" alt=""
//                                                                         className="img-fluid bg-img"/>
//                                                                 </a>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-8 pt-cls">
//                                                     <div className="overlay">
//                                                         <div className="portfolio-image">
//                                                             <a href="#" data-bs-toggle="modal"
//                                                                 data-bs-target="#imageModel">
//                                                                 <img src="assets/images/event-bg.jpg" alt=""
//                                                                     className="img-fluid bg-img"/>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//           </div>
//           <RightSidebar></RightSidebar>
//         </div>
//         <div className="modal fade" id="createbizmodel" tabIndex="-1" role="dialog" aria-labelledby="createbizmodelTitle" aria-hidden="true">
//             <div className="modal-dialog modal-dialog-centered createbizpageModel" role="document">
//                 <div className="modal-content">
//                 <div className="modal-header">
//                     <img src="assets/images/Star1.png"/>
//                     <h5 className="modal-title" id="exampleModalLongTitle">BizPage Created Successfully!</h5>                  
//                 </div>
//                 <div className="modal-body">
//                     <div className="searchfilter-blk">
//                         <p>Connections list</p>
//                         <div className="input-search-blk">
//                             <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
//                             <input type="text" className="form-control" name="search" placeholder="Find Connections..."/>
//                         </div>
//                         <ul className="connection-list">
//                             <li>
//                                 <div className="connection-member">
//                                     <img src="assets/images/story-3.jpg"/>
//                                     <h5>Emilly Watsonr<br/><small>amaze_amilly</small></h5>
//                                 </div>
//                                 <a href="#" className="btn btn-primary">Send invite</a>
//                             </li>
//                             <li>
//                                 <div className="connection-member">
//                                     <img src="assets/images/story-3.jpg"/>
//                                     <h5>Emilly Watsonr<br/><small>amaze_amilly</small></h5>
//                                 </div>
//                                 <a href="#" className="btn btn-primary">invited</a>
//                             </li>
//                             <li>
//                                 <div className="connection-member">
//                                     <img src="assets/images/story-3.jpg"/>
//                                     <h5>Emilly Watsonr<br/><small>amaze_amilly</small></h5>
//                                 </div>
//                                 <a href="#" className="btn btn-primary">Send invite</a>
//                             </li>
//                             <li>
//                                 <div className="connection-member">
//                                     <img src="assets/images/story-3.jpg"/>
//                                     <h5>Emilly Watsonr<br/><small>amaze_amilly</small></h5>
//                                 </div>
//                                 <a href="#" className="btn btn-primary">invited</a>
//                             </li>
//                             <li>
//                                 <div className="connection-member">
//                                     <img src="assets/images/story-3.jpg"/>
//                                     <h5>Emilly Watsonr<br/><small>amaze_amilly</small></h5>
//                                 </div>
//                                 <a href="#" className="btn btn-primary">Send invite</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="modal-footer">
//                     <button type="button" className="btn btn-solid" data-bs-dismiss="modal" aria-label="Close">OK</button>
//                 </div>
//                 </div>
//             </div>  
//         </div>
//       </>
//     );
// } 


const CreateBizPage = () => {
    const [BizCatagory, setBizCatagory] = useState("")
    const UpdateBizCatagory = () => {
        setBizCatagory(BizCatagory)

    }
    const [mapdata, setMapData] = useState([
        {
            link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.133469088304!2d10.344347315868879!3d55.39057698045794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdfc6c8acf0bd%3A0xc9e5ab1219682ea!2sDybdevej%2010%2C%205200%20Odense%2C%20Denmark!5e0!3m2!1sen!2sin!4v1656575287386!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            name1: "Address 1",
            name2: "Your Address will display here. ",
            icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

        }
    ])

    const [summaryData, setSummaryData] = useState([
        {
            img: <img src={Gmail} alt="email" className="ImageSection" />,
            headingInfo: "Email Address",
            headingParagraph: "Your Email Address will display here"
        },
        {
            img: <img src={Phone} alt="Contact-Number" className="ImageSection" />,
            headingInfo: "Contact Number",
            headingParagraph: "Your contact number will display here"
        },
        {
            img: <img src={Tym} alt="Timing" className="ImageSection" />,
            headingInfo: "Timing",
            headingParagraph: "Your Timing will display here"
        },
        {
            img: <img src={Tym} alt="Timing" className="ImageSection" />,
            headingInfo: "Website",
            headingParagraph: "Your website will display here"
        }
    ])
    const BizForm = () => {
        const OptionBizCatagoryData = ["Marketting Agency", "Apartment & Building ", "Visual Arts", "Beauty Salon", "Clothing Shop", "Video Game ", "Grocery", "Electronic"]
        const OptionSubCatagoryData = ["Electronic", "Grocery", "Video Game ", "Clothing Shop", "Beauty Salon", "Visual Arts", "Apartment & Building ", "Marketting Agency"]
        const TopCountryData = ["Switzerland", "Germany", "Canada", "United States", "Sweden", "Japan", "Australia"]
        return (
            <>
                <Form>
                    <FormGroup>
                        <Label
                            for="Biz-Catagory"
                        >
                            <div className="d-flex align-items-center py-1">
                                <b>Biz Catagory</b>&nbsp;<Info id='BizCatagoryId' size={15} />
                                <UncontrolledTooltip placement='right' target='BizCatagoryId'>
                                    nothing
                                </UncontrolledTooltip>
                            </div>
                        </Label>
                        <Input
                            id="Biz-Catagory"
                            name="select"
                            type="select"
                            placeholder='jss'

                        >
                            {
                                OptionBizCatagoryData.map((data, index) => (
                                    <option key={index} >
                                        <span onClick={UpdateBizCatagory} > {data}</span>
                                    </option>
                                ))
                            }

                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for="Sub-Catagory"
                        >
                            <div className="d-flex align-items-center py-1">
                                <b>Sub Catagory</b>&nbsp;<Info id='SubCatagoryId' size={15} />
                                <UncontrolledTooltip placement='right' target='SubCatagoryId'>
                                    nothing
                                </UncontrolledTooltip>
                            </div>
                        </Label>
                        <Input
                            id="Sub-Catagory"
                            name="select"
                            type="select"
                            placeholder='jss'

                        >
                            {
                                OptionSubCatagoryData.map((data, index) => (
                                    <option key={index} >
                                        {data}
                                    </option>
                                ))
                            }

                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for="BizPage-Name"
                        >
                            <div className="d-flex align-items-center py-1">
                                <b>BizPage Name</b>&nbsp;<Info id='BizPageNameId' size={15} />
                                <UncontrolledTooltip placement='right' target='BizPageNameId'>
                                    nothing
                                </UncontrolledTooltip>
                            </div>
                        </Label>
                        <Input
                            id="BizPageName"
                            name="BizPage-Name"
                            type="BizPage-Name"
                            placeholder='Enter your business page name '
                            maxLength={60}
                        />
                        <p className="input-hints">Max 60 Characters</p>
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for='Summery'
                        >
                            <div className="d-flex align-items-center py-1">
                                <b>Summery</b>&nbsp;<Info id='SummeryId' size={15} />
                                <UncontrolledTooltip placement='right' target='SummeryId'>
                                    nothing
                                </UncontrolledTooltip>
                            </div>
                        </Label>
                        <Input
                            rows="2"
                            className="form-control"
                            id="exampleText"
                            name="text"
                            type="textarea"
                            placeholder='Describe your business'
                        />
                        <p className="input-hints">Max 180 Characters</p>
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for='Biz-Address'
                        >
                            <div className="d-flex  align-items-center py-1">
                                <div >
                                    <b>Biz Address</b>&nbsp;<Info id='BizAddressId' size={15} />
                                    <UncontrolledTooltip placement='right' target='BizAddressId'>
                                        nothing
                                    </UncontrolledTooltip>
                                </div>
                                <div style={{ marginLeft: "111px" }} >
                                    {/* <img src={Map} alt="map" /> */}
                                    <p>Detact Location</p>
                                </div>

                            </div>

                        </Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="Biz-Address"
                            placeholder='Where is your biz located at?'
                        />
                        <div className='mt-3'>
                            <Input
                                id="Sub-Catagory"
                                name="select"
                                type="select"
                                placeholder='jss'

                            >
                                {
                                    TopCountryData.map((data, index) => (
                                        <option key={index} >
                                            {data}
                                        </option>
                                    ))
                                }
                            </Input>
                        </div>
                        <div className='mt-3'>
                            <Input
                                id="BizPageName"
                                name="BizPage-Name"
                                type="BizPage-Name"
                                placeholder='Enter your city name'
                            />
                        </div>
                        <div className='mt-3'>
                            <Input
                                id="BizPageName"
                                name="BizPage-Name"
                                type="BizPage-Name"
                                placeholder='Enter 6 Digit Zip Code city'
                            />
                        </div>

                    </FormGroup>
                    <FormGroup>
                        <Label
                            for='bizlog'
                        >
                            <b>Add you biz logo</b>
                        </Label>
                        <Input
                            id="exampleFile"
                            name="file"
                            type="file"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for='coverlog'
                        >
                            <b>Add your cover image</b>
                        </Label>
                        <Input
                            id="exampleFile"
                            name="file"
                            type="file"
                        />
                    </FormGroup>
                </Form>
            </>
        )
    }
    const PreviewPage = () => {
        return (
            <>

                <div className="group-details-top biz-details-top biz-cration-preview">
                    <div className="gd-top-block" style={{ background: "url(assets/images/demo-banner-1.jpg)" }}>
                    </div>
                    <div className="heading-title-blk head-title-biz">
                        <Row >
                            <Col className=" order-lg-2">
                                <div className="biz-user-pro-blk">
                                    <img src="assets/images/demo-1.jpg" />
                                    <h5>PAGE NAME</h5>
                                    <p><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Addess</p>
                                </div>
                            </Col>
                            <Col className=" order-lg-1">
                                <div className="gd-content-area-top-blk">
                                    <div className="groupmember-blk">
                                        <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Privacy group</span> • <span>Catagory</span>
                                    </div>
                                    <div className="people-likes matual-friend-sec">
                                        <ul className="matual-friend-blk">
                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt="" />
                                            </li>
                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt="" />
                                            </li>
                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt="" />
                                            </li>
                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt="" />
                                            </li>
                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt="" />
                                            </li>
                                        </ul>
                                        <h6>Visited Person</h6>
                                    </div>
                                    <div className="people-likes matual-friend-sec">
                                        <ul className="matual-friend-blk">
                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt="" />
                                            </li>
                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt="" />
                                            </li>
                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt="" />
                                            </li>
                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt="" />
                                            </li>
                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt="" />
                                            </li>
                                        </ul>
                                        <h6>Members</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col className=" order-lg-3">
                                <ul className="followlist-blk">
                                    <li>--<span>Rating</span></li>
                                    <li>--<span>Likes</span></li>
                                    <li>--<span>Posts</span></li>
                                    <li>--<span>Followers</span></li>
                                </ul>
                                <div className="create-biz-btn"><a href="#" className="btn btn-primary green-clr-btn">Create Biz Page</a></div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="profile-menu section-t-space biz-cration-menu-preview">
                    <ul>
                        <li>
                            <a href="#" className="active-disable">
                                <h6>Overview</h6>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h6>Post</h6>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h6>Review</h6>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h6>Photos</h6>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h6>About</h6>
                            </a>
                        </li>
                    </ul>
                    <ul className="right-menu d-xl-flex d-none biz-cration-menu-preview">
                        <li>
                            <a href="#">
                                <h6>Post an offer</h6>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                <h6>Setting</h6>
                            </a>
                        </li>
                    </ul>
                </div>

            </>
        )
    }
    const RowSideDataInfo = () => {
        return (
            <>
                <div className="custom-card-block">
                    <div className="custom-card-head biz-carddetail-blk">
                        <h3>Overview </h3>
                    </div>
                    <div className="map_block">
                        {
                            mapdata.map((e, index) => (
                                <ul>
                                    <li>
                                        <div className="bizabout-location" key={index} >
                                            {e.link}
                                            <div className="biz-icon-cont-blk">
                                                <div className="icon">
                                                    {e.icon}
                                                </div>
                                                <div className="details">
                                                    <h5>{e.name1}</h5>
                                                    <h6>{e.name2}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }
    const RowSecoundDataInfo = () => {
        return (
            <>
                <div className="custom-card-block">
                    <div className="card-head ">
                        <h3>Summery </h3>
                        <p>Your Summary will display here</p>
                    </div>
                    {
                        summaryData.map((e, index) => (
                            <div className='d-flex card-headInfo' key={index}>
                                <div className='image_section'>
                                    {e.img}
                                </div>
                                <div className='ml-3 heading_section'>
                                    <h4>{e.headingInfo}</h4>
                                    <p>{e.headingParagraph}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
    // MAIN_FUNCTION
    return (
        <>
            <Header />
            <div className="page-body container-fluid profile-page">
                <LeftSidebar />
                <div className="page-center">
                    <Row>
                        <Col md="4">
                            <div className="createbizpage-block">
                                <h3>Create BizPage</h3>
                                < BizForm />
                            </div>
                        </Col>
                        <Col md="8">
                            <PreviewPage />
                            <Row className='mt-3' >
                                <Col md="5" >
                                    <RowSideDataInfo />
                                </Col>
                                <Col md="7">
                                    <RowSecoundDataInfo />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <RightSidebar />
            </div>
        </>
    )
}

export default CreateBizPage