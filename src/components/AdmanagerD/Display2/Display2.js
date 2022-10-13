import React from 'react'
import "./display.css"
import {Link} from "react-router-dom"
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const Display2 = () => {
  return (
    <>
  <AdmanagerHeaderR/>
     <div className="main-section-sp">

        <div className="sidebar-main-sp">

            <div className="desh-icon-main-sp">
                <div className="desh-icon-sp">
                    <i className="fa fa-dashboard-sp"></i>
                    <p>User Dashboard</p>
                </div>
                <div className="desh-second-sp">
                    <i className="fa fa-ellipsis-h-sp"></i>
                </div>
            </div>


            <div className="create-add-main-sp">
                <div className="create-add-sp">
                    <div className="create-add-one-sp">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Create Ad</p>
                    </div>
                    <div className="create-add-second-sp">
                        <i className="fa fa-ellipsis-h-sp"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-second-sp">
                <div className="create-add-sp" >
                    <div className="create-add-one-sp">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Brand Awareness- CPV</p>
                    </div>
                    <div className="create-add-second-sp">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

        </div>


        <div className="step-select-main-sp"></div>
           <div className="step-select-sp">
            <div className="step-select-one-sp">
                <div className="step-select-child-sp">
                    <button>2</button>
                    <p>Step 2</p>
                </div>
            </div>
            <div className="step-select-second-sp">
                <p>Choose Ad Display Format</p>
                <p>Select the best format to display your Ad</p>
            </div>
           </div>


         <div className="brand-image-main-sp">
          <div className="brand-aware-text-sp">
            <p>Brand Awareness- CPV</p>
          </div>
          <div className="single-image-main-sp">
            <p>Single Image Ad</p>
            <p>Create ad using an image, that <br/>    will be displayed in news feed.</p>
          </div>

          <div className="single-image-second-sp">
            <p>Carousel Image Ad</p>
            <p>Create ad using multiple images, <br/> that will be displayed in news feed.</p>
          </div>
          

          <div className="single-image-third-sp">
            <p>Video Ad</p>
            <p>Create ad using a video that will <br/> be displayed in news feed.</p>
          </div>

          <div className="single-image-fourth-sp">
            <p>Full Screen Video Ad</p>
            <p>Create ad using a video, that will be <br/> displayed in the Story/Shotz feed.</p>
          </div>

          <div className="two-bumain-sp">
            <button>Cancel</button>
           </div>
           <div className="two-bumain-sps">
            <Link to="/ConfigureAd">
            
            <button>Next</button>
            </Link>
           </div>
           
         </div>

    
           


    </div>
    
    </>
  )
}

export default Display2