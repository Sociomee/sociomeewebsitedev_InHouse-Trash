import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileCover from './ProfileCover';
import ProfileMenu from './ProfileMenu';

export default function MyPodcastDetails() {  

    return (
      <>
        <Header></Header>
        <div className="page-body container-fluid profile-page">
          <LeftSidebar></LeftSidebar>
          <div className="page-center">
           <ProfileCover/>

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
                            <h3>Analylics</h3>
                            <ul className="pc-analitics-blk">
                              <li><span>Total Listener</span> <b>6453</b></li>
                              <li><span>Total Likes</span> <b>1434</b></li>
                              <li><span>Total Comments</span> <b>843</b></li>
                              <li><span>Total Share</span> <b>231</b></li>
                              <li><span>Price</span> <b className="green">Free</b></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-12">
                          <div className="card-custom-blk">
                            <h3>Description</h3>
                            <p>Rock music is a broad genre of popular music that originated as "rock and roll" in the United States in the late 1940s and early 1950s, developing into a range of different styles in the mid-1960s and later, particularly in the United States and the United Kingdom.[3] It has its roots in 1940s and 1950s rock and roll, a style that drew directly from the blues and rhythm and blues genres of African-American music and from country music. </p>
                          </div>
                          <div className="card-custom-blk">
                            <h3>All Episods  (5)</h3>
                            <div className="podcast-episode-blockmain">
                              <div className="podcast-episode-blk">
                                <div className="episode-img-blk">
                                  <img src="assets/images/pd-episode-1.jpg"/>
                                </div>
                                <div className="episode-cont-blk">
                                  <h4>Episode#1 - Arkiv Samtal</h4>
                                  <p>12 Apr 2021  ●  5 min</p>
                                </div>
                                <div className="episode-more-btn-blk">
                                  <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-23 ih-23"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                </div>
                              </div>
                              <div className="podcast-episode-blk">
                                <div className="episode-img-blk">
                                  <img src="assets/images/pd-episode-1.jpg"/>
                                </div>
                                <div className="episode-cont-blk">
                                  <h4>Episode#1 - Arkiv Samtal</h4>
                                  <p>12 Apr 2021  ●  5 min</p>
                                </div>
                                <div className="episode-more-btn-blk">
                                  <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-23 ih-23"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                </div>
                              </div>
                              <div className="podcast-episode-blk">
                                <div className="episode-img-blk">
                                  <img src="assets/images/pd-episode-1.jpg"/>
                                </div>
                                <div className="episode-cont-blk">
                                  <h4>Episode#1 - Arkiv Samtal</h4>
                                  <p>12 Apr 2021  ●  5 min</p>
                                </div>
                                <div className="episode-more-btn-blk">
                                  <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-23 ih-23"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                </div>
                              </div>
                              <div className="podcast-episode-blk">
                                <div className="episode-img-blk">
                                  <img src="assets/images/pd-episode-1.jpg"/>
                                </div>
                                <div className="episode-cont-blk">
                                  <h4>Episode#1 - Arkiv Samtal</h4>
                                  <p>12 Apr 2021  ●  5 min</p>
                                </div>
                                <div className="episode-more-btn-blk">
                                  <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-23 ih-23"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                </div>
                              </div>
                              <div className="podcast-episode-blk">
                                <div className="episode-img-blk">
                                  <img src="assets/images/pd-episode-1.jpg"/>
                                </div>
                                <div className="episode-cont-blk">
                                  <h4>Episode#1 - Arkiv Samtal</h4>
                                  <p>12 Apr 2021  ●  5 min</p>
                                </div>
                                <div className="episode-more-btn-blk">
                                  <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-23 ih-23"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
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
// export default MyProfile