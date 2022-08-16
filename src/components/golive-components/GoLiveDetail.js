import React,{Component, useRef } from 'react'; 
import { NavLink } from "react-router-dom";

function GoLiveDetail() {  
  const videoRef = useRef(null);
  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
    } else if (control === "pause") {
      videoRef.current.pause();
    }
  };
  return (
    <>
      <div className="golive-video-section">
        <video id="myVideo" className="video" ref={videoRef}>
          <source src="assets/images/video/golive-video.mp4" type="video/mp4"/>
        </video>
        
        <div className="controlsContainer">
          <div className="controls">
            <img className="controlsIcon" alt="" src="assets/images/skip-back.svg" />
            <img
              onClick={() => videoHandler("play")}
              className="controlsIcon--small"
              alt=""
              src="assets/images/play.svg"
            />
            <img className="controlsIcon" alt="" src="assets/images/skip-forward.svg" />
          </div>
        </div>
        <div className="timecontrols">
          <p className="controlsTime">1:02</p>
          <div className="time_progressbarContainer">
            <div style={{ width: "40%" }} className="time_progressBar"></div>
          </div>
          <p className="controlsTime">2:05</p>
        </div>

        <div className="liveandclose-block">
          <div className="live-comment-view-block">
            <div className="livestatus-con">Live</div>
            <div className="gl-view-cont"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 8k Watching</div>
            <h4>#Entertainment</h4>
          </div>
          <div className="golive-close-details-blk">
            <a href="#" className="share-details-golive-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>
            <div className="golive-3dot-blk">
              <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
              <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-golive">
                <ul>
                    <li>
                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Turn off Notification</a>
                    </li>
                    <li>
                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                    </li>
                    <li>
                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                    </li>
                    <li>
                        <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Report</a>
                    </li>
                </ul>
              </div>
            </div>
            <NavLink to="/GoLive" className="close-golive-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></NavLink>
          </div>
        </div>
      </div>
    </>
  );
} 
export default GoLiveDetail 