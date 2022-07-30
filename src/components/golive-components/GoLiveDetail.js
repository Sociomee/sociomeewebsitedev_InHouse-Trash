import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";

export class GoLiveDetail extends Component {  

  render() {
    return (
      <>
        <div className="golive-video-section">
          <video id="myVideo" controls="controls" controlsList="nodownload">
            <source src="assets/images/video/golive-video.mp4" type="video/mp4"/>
          </video>
        </div>
      </>
    );
  }
} 
export default GoLiveDetail 