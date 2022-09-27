import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';
import Models from '../Models';


export default function MyArticleDetail() {  

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
                            <div className="myarticle-block">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="recent-post-block">
                                            <h3>Recently Post Article</h3>
                                            <ul>
                                                <li>
                                                    <a href="#" className="recently-post-list">
                                                        <img src="assets/images/post-6.jpg"/>
                                                        <div className="recently-post-list-cont">
                                                            <h4>Which came first, the chicken or the egg?</h4>
                                                            <p>Education</p>
                                                            <div className="article-img-cont">
                                                                <span><img src="assets/images/i-eye.svg"/> 105</span>
                                                                <span><img src="assets/images/i-like.svg"/> 95</span>
                                                                <span><img src="assets/images/i-chat.svg"/>85</span>
                                                                <span><img src="assets/images/i-share.svg"/>54</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="recently-post-list">
                                                        <img src="assets/images/post-6.jpg"/>
                                                        <div className="recently-post-list-cont">
                                                            <h4>Which came first, the chicken or the egg?</h4>
                                                            <p>Education</p>
                                                            <div className="article-img-cont">
                                                                <span><img src="assets/images/i-eye.svg"/> 105</span>
                                                                <span><img src="assets/images/i-like.svg"/> 95</span>
                                                                <span><img src="assets/images/i-chat.svg"/>85</span>
                                                                <span><img src="assets/images/i-share.svg"/>54</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="recently-post-list">
                                                        <img src="assets/images/post-6.jpg"/>
                                                        <div className="recently-post-list-cont">
                                                            <h4>Which came first, the chicken or the egg?</h4>
                                                            <p>Education</p>
                                                            <div className="article-img-cont">
                                                                <span><img src="assets/images/i-eye.svg"/> 105</span>
                                                                <span><img src="assets/images/i-like.svg"/> 95</span>
                                                                <span><img src="assets/images/i-chat.svg"/>85</span>
                                                                <span><img src="assets/images/i-share.svg"/>54</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="recently-post-list">
                                                        <img src="assets/images/post-6.jpg"/>
                                                        <div className="recently-post-list-cont">
                                                            <h4>Which came first, the chicken or the egg?</h4>
                                                            <p>Education</p>
                                                            <div className="article-img-cont">
                                                                <span><img src="assets/images/i-eye.svg"/> 105</span>
                                                                <span><img src="assets/images/i-like.svg"/> 95</span>
                                                                <span><img src="assets/images/i-chat.svg"/>85</span>
                                                                <span><img src="assets/images/i-share.svg"/>54</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="recently-post-list">
                                                        <img src="assets/images/post-6.jpg"/>
                                                        <div className="recently-post-list-cont">
                                                            <h4>Which came first, the chicken or the egg?</h4>
                                                            <p>Education</p>
                                                            <div className="article-img-cont">
                                                                <span><img src="assets/images/i-eye.svg"/> 105</span>
                                                                <span><img src="assets/images/i-like.svg"/> 95</span>
                                                                <span><img src="assets/images/i-chat.svg"/>85</span>
                                                                <span><img src="assets/images/i-share.svg"/>54</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="recently-post-list">
                                                        <img src="assets/images/post-6.jpg"/>
                                                        <div className="recently-post-list-cont">
                                                            <h4>Which came first, the chicken or the egg?</h4>
                                                            <p>Education</p>
                                                            <div className="article-img-cont">
                                                                <span><img src="assets/images/i-eye.svg"/> 105</span>
                                                                <span><img src="assets/images/i-like.svg"/> 95</span>
                                                                <span><img src="assets/images/i-chat.svg"/>85</span>
                                                                <span><img src="assets/images/i-share.svg"/>54</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="recently-post-list">
                                                        <img src="assets/images/post-6.jpg"/>
                                                        <div className="recently-post-list-cont">
                                                            <h4>Which came first, the chicken or the egg?</h4>
                                                            <p>Education</p>
                                                            <div className="article-img-cont">
                                                                <span><img src="assets/images/i-eye.svg"/> 105</span>
                                                                <span><img src="assets/images/i-like.svg"/> 95</span>
                                                                <span><img src="assets/images/i-chat.svg"/>85</span>
                                                                <span><img src="assets/images/i-share.svg"/>54</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="article-details-block post-panel">
                                            <div className="post-wrapper col-grid-box section-b-space">
                                                <div className="post-details">
                                                    <div className="article-detail-cont-blk">
                                                        <div className="article-img-blk">
                                                            <img src="assets/images/post-6.jpg"/>
                                                            <div className="article-img-cont">
                                                                <span><img src="assets/images/i-like.svg"/> 95</span>
                                                                <span><img src="assets/images/i-chat.svg"/>85</span>
                                                                <span><img src="assets/images/i-share.svg"/>54</span>
                                                            </div>
                                                        </div>
                                                        <div className="article-cont-blk">
                                                            <div className="catdate-blk">
                                                                <p>01 July, 2022 <spam> • </spam> Sports</p>
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
                                                                            <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
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
                                                            <h3>Liverpool Win Champ ions liverpool Win Champ ions</h3>
                                                            <p>Eggs come from chickens and chickens come from eggs: that’s the basis of this ancient riddle. But eggs – which are just female sex cells – evolved more than a billion years ago, whereas chickens have been around for just 10,000 years. So the riddle is easily solved…or is it?</p>
                                                            <p>Taken at face value, there is no doubt that the egg came before the chicken. We tend to think of eggs as the shelled orbs laid by birds from which their chicks hatch – unless we eat them first. But all sexually reproducing species make eggs (the specialised female sex cells). That’s 99.99 per cent of all eukaryotic life – meaning organisms that have cells with a nucleus, so all animals and plants, and everything but the simplest life forms.</p>
                                                            <p>We don’t know for sure when sex evolved but it could have been as much as 2 billion years ago, and certainly more than 1 billion. Even the specialised sort of eggs laid by birds, with their tough outer membrane, evolved more than 300 million years ago.</p>
                                                            <p>As for chickens, they came into being much later. They are domesticated animals, so evolved as the result of humans purposefully selecting the least aggressive wild birds and letting them breed. This seems to have happened in several places independently, starting around 10,000 years ago.</p>
                                                            <p>The wild ancestor of chickens is generally agreed to be a tropical bird still living in the forests of Southeast Asia called the red junglefowl –  with other junglefowl species possibly adding to the genetic mix. From these origins, humans have carried chickens around the world over the past two millennia or more.</p>
                                                            <p>So, eggs dramatically predate chickens. But to be fair to the spirit of the riddle, we should also consider whether a chicken’s egg predates a chicken. As humans consistently chose the tamest red junglefowls and bred them together, the genetic makeup of the resulting birds will have shifted. At some stage during this domestication process the red junglefowl (Gallus gallus) evolved into a new subspecies, Gallus gallus domesticus, AKA the chicken.</p>
                                                            <p>In practice, it is impossible to pinpoint the moment when this happened. But in theory, at some point two junglefowl bred and their offspring was genetically different enough from the species of its parents to be classified as a chicken. This chicken would have developed within a junglefowl egg and only produced the very first chicken’s egg on reaching maturity. Looked at this way, the chicken came first.</p>
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
                                                        <a href="#" class="loader load-more-comment-block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="iw-15 ih-15"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg> load more comments</a>
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
        <Models></Models>
      </>
    );
} 
// export default MyProfile