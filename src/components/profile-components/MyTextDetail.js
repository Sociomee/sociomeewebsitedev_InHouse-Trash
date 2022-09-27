import React,{useState} from 'react'; 
import { NavLink } from "react-router-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';


export default function MyTextDetail() { 
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
                    <div className="content-left col-5 res-full-width order-1 mb-5">
                        <div className="profile-about">
                            <div className="card-main-title">
                                <h3>about</h3>
                            </div>
                            <div className="card-title-cont-block">
                                <div className="card-title">
                                    <h3>Profession</h3>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Sr. PHP Developer</h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-title-cont-block">
                                <div className="card-title">
                                    <h3>Education</h3>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" stroke="#81C14B" fill="none" className="iw-18 ih-18"><path d="M5.66667 14.6668V8.41683L9 6.56516M9 9.66683L16.5 5.50016L9 1.3335L1.5 5.50016L9 9.66683ZM9 9.66683L14.1333 6.81516C14.8088 8.53024 15.0005 10.3978 14.6875 12.2143C12.5738 12.4195 10.581 13.2948 9 14.7127C7.41921 13.295 5.42674 12.4197 3.31333 12.2143C3.00017 10.3978 3.19186 8.53018 3.8675 6.81516L9 9.66683Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Studied at Symbiosis University</h5>
                                                <h6>Batch 2010 to 2014<br/>Gurgaon, Delhi NCR<br/><small>Gong.io enables revenue teams to realize their fullest potential by unveiling customer reality. </small></h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-title-cont-block">
                                <div className="card-title">
                                    <h3>Basic info</h3>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Name</h5>
                                                <h6>Fadishwar Nath Chakradhar</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none" className="iw-18 ih-18"><path d="M8 12H6.5V10.9047C9.05937 10.4344 11 8.19687 11 5.5C11 2.4625 8.5375 0 5.5 0C2.4625 0 0 2.4625 0 5.5C0 8.19563 1.94062 10.4344 4.5 10.8781V11.9734H3C2.72388 11.9734 2.5 12.1972 2.5 12.4734V13.4734C2.5 13.7496 2.72388 13.9734 3 13.9734H4.5V15.4734C4.5 15.7496 4.72388 15.9734 5 15.9734H6C6.27619 15.9734 6.5 15.7496 6.5 15.4734V13.9734H8C8.27619 13.9734 8.5 13.7496 8.5 13.4734V12.4734C8.5 12.225 8.275 12 8 12ZM5.5 8.5C3.84594 8.5 2.5 7.15406 2.5 5.5C2.5 3.84562 3.84594 2.5 5.5 2.5C7.15438 2.5 8.5 3.84562 8.5 5.5C8.5 7.15312 7.15312 8.5 5.5 8.5ZM19.5 0H15.9875C15.3194 0 14.9847 0.807813 15.4572 1.28031L16.3809 2.20406L15.6138 2.97125C14.6772 2.32562 13.5884 2.00094 12.4969 2.00094C12.0225 2.00094 11.5462 2.07047 11.0847 2.19256C11.5081 2.90506 11.7978 3.70381 11.9228 4.55725C12.1131 4.52025 12.3063 4.50147 12.4994 4.50147C13.2675 4.50147 14.0359 4.79388 14.6206 5.37866C15.7903 6.54834 15.7903 8.45147 14.6206 9.62241C14.0359 10.2071 13.2675 10.4996 12.4994 10.4996C11.7634 10.4996 11.0319 10.2236 10.4572 9.68678C9.95969 10.2755 9.36563 10.7837 8.68375 11.1665C9.04156 11.3508 9.31406 11.6758 9.43281 12.0671C10.3594 12.6875 11.4281 13 12.5 13C13.9075 13 15.315 12.4631 16.3906 11.3891C18.2966 9.48313 18.5072 6.52656 17.0303 4.38594L17.7975 3.61875L18.7213 4.5425C18.874 4.69528 19.0619 4.76369 19.2463 4.76369C19.6313 4.7625 20 4.4625 20 4.0125V0.5C20 0.223875 19.775 0 19.5 0Z" fill="#81C14B" strokeWidth="0.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </div>
                                            <div className="details">
                                                <h5>gender</h5>
                                                <h6>men</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="iw-18 ih-18"><path d="M16.5 11.955C16.0642 11.955 15.6283 12.0808 15.25 12.3333C14.8798 12.5801 14.4449 12.7118 14 12.7118C13.5551 12.7118 13.1202 12.5801 12.75 12.3333C12.3798 12.0865 11.9449 11.9548 11.5 11.9548C11.0551 11.9548 10.6202 12.0865 10.25 12.3333C9.87983 12.5801 9.4449 12.7118 9 12.7118C8.5551 12.7118 8.12017 12.5801 7.75 12.3333C7.37983 12.0865 6.9449 11.9548 6.5 11.9548C6.0551 11.9548 5.62017 12.0865 5.25 12.3333C4.87983 12.5801 4.4449 12.7118 4 12.7118C3.5551 12.7118 3.12017 12.5801 2.75 12.3333C2.37988 12.0865 1.9449 11.9548 1.5 11.955H16.5ZM6.5 4V5.66667V4ZM9 4V5.66667V4ZM11.5 4V5.66667V4ZM6.5 1.5H6.50833H6.5ZM9 1.5H9.00833H9ZM11.5 1.5H11.5083H11.5ZM16.5 16.5V10.6667C16.5 10.2246 16.3244 9.80072 16.0118 9.48816C15.6993 9.17559 15.2754 9 14.8333 9H3.16667C2.72464 9 2.30072 9.17559 1.98816 9.48816C1.67559 9.80072 1.5 10.2246 1.5 10.6667V16.5H16.5ZM14 9V7.33333C14 6.89131 13.8244 6.46738 13.5118 6.15482C13.1993 5.84226 12.7754 5.66667 12.3333 5.66667H5.66667C5.22464 5.66667 4.80072 5.84226 4.48816 6.15482C4.17559 6.46738 4 6.89131 4 7.33333V9H14Z" stroke="#81C14B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Birthday</h5>
                                                <h6>27th Aug, 1994</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="iw-18 ih-18"><path d="M9.62583 3.16667C8.81917 7.975 5.725 12.0083 1.5 14.1075M1.5 3.16667H11.5H1.5ZM6.5 1.5V3.16667V1.5ZM7.37333 11.0833C6.09009 9.75488 5.0629 8.2011 4.34333 6.5L7.37333 11.0833ZM9.41667 14H15.25H9.41667ZM8.16667 16.5L12.3333 8.16667L16.5 16.5H8.16667Z" stroke="#81C14B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Language</h5>
                                                <h6>English, Hindi, Gujrati</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Relationship</h5>
                                                <h6>single</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Current Residence</h5>
                                                <h6>Gurgaon, Delhi NCR, INDIA</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-title-cont-block">
                                <div className="card-title">
                                    <h3>Bio</h3>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                            </div>
                                            <div className="details">
                                                <h6>Gong.io enables revenue teams to realize their fullest potential by unveiling customer reality.  The patented Gong Revenue Intelligence Platform captures and understands every customer interaction then delivers insights at scale, empowering revenue teams to make decisions based on data instead of opinions. </h6>
                                                <p>Joined on 16 Feb 2022</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-title-cont-block">
                                <div className="card-title">
                                    <h3>Contact Detail</h3>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Mobile Number</h5>
                                                <h6>9876543210<br/>9876543210</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Email Address</h5>
                                                <h6>email@gmail.com<br/>info@Sociomee.co.uk</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-center col-xl-7">
                        <div className="post-panel">
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
                                                <h6>20 Min Ago</h6>
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
                                                    <li><a href="#">Hide from timeline</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                    <li><a href="#">Share</a></li>
                                                    <li><a href="#">Copy Link</a></li>
                                                    <li><a href="#">Turn off notification</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-details">
                                    <div className="main-post-details-block">
                                    <ReactReadMoreReadLess
                                            charLimit={300}
                                            readMoreText={"See more"}
                                            readLessText={"See less"}
                                        >
                                            Birmingham City Football Club is a professional football club in Birmingham, England. Formed in 1875 as Small Heath Alliance, it was renamed Small Heath in 1888, Birmingham in 1905, and Birmingham City in 1943. Since 2011, the first team have competed in the EFL Championship, the second tier of English football. 
                                            As Small Heath, they played in the Football Alliance before becoming founder members and first champions of the Football League Second Division. The most successful period in their history was in the 1950s and early 1960s. They achieved their highest finishing position of sixth in the First Division in the 1955–56 season and reached the 1956 FA Cup Final. Birmingham played in two Inter-Cities Fairs Cup finals, in 1960, as the first English club side to reach a major European final, and again the following year. They won the League Cup in 1963 and again in 2011. Birmingham have played in the top tier of English football for around half of their history:[8] the longest period spent outside the top division, between 1986 and 2002, included two brief spells in the third tier of English football, during which time they won the Football League Trophy twice. 
                                            St Andrew's has been their home ground since 1906. They have a long-standing and fierce rivalry with Aston Villa, their nearest neighbours, with whom they play the Second City derby. The club's nickname is Blues, after the colour of their kit, and the fans are known as Bluenoses.
                                        </ReactReadMoreReadLess>
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
                                    <div className="post-react">
                                        <ul>
                                            <li className="react-btn">
                                                <a className="react-click" href="#">
                                                    <div className="post-btn-cust selected"><img src="assets/images/like.png"/></div> react
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
                                                    <div className="post-btn-cust selected"><img src="assets/images/comment.png"/></div> comment
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
                                                        <p><span className="color-red">I recommend</span> you to go on <a href="www.ola.com">www.ola.com</a>...😍</p>
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
                                                            <p><span className="color-red">I recommend</span> you to go on <a href="www.ola.com">www.ola.com</a>...😍</p>
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
          <RightSidebar></RightSidebar>
        </div>
      </>
    );
} 