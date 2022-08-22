import React from 'react'
import "./video.css"
import {Link} from "react-router-dom"

const VideoAd = () => {
  return (
   <>
    <div className="main-section-pstt">

        <div className="sidebar-main-pstt">

            <div className="desh-icon-main-pstt">
                <div className="desh-icon-pstt">
                    <i className="fa fa-dashboard"></i>
                    <p>User Dashboard</p>
                </div>
                <div className="desh-second-pstt">
                    <i className="fa fa-ellipsis-h"></i>
                </div>
            </div>


            <div className="create-add-main-pstt">
                <div className="create-add-pstt">
                    <div className="create-add-one-pstt">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Create Ad</p>
                    </div>
                    <div className="create-add-second-pstt">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-second-pstt">
                <div className="create-add-pstt">
                    <div className="create-add-one-pstt">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Video Ad</p>
                    </div>
                    <div className="create-add-second-pstt">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-third-pstt">
                <div className="create-add-pstt">
                    <div className="create-add-one-pstt">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Brand Awareness- CPV</p>
                    </div>
                    <div className="create-add-second-pstt">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

        </div>


        <div className="step-select-main-pstt"></div>
           <div className="step-select-pstt">
            <div className="step-select-one-pstt">
                <div className="step-select-child-pstt">
                    <button>3</button>
                    <p>Step 3</p>
                </div>
            </div>
            <div className="step-select-second-pstt">
                <p>Set-up Your Ad</p>
                <p>Let’s start by selecting your objective which suits best for our goals.</p>
            </div>
           </div>


         <div className="brand-image-main-pstt">
          <div className="brand-aware-text-pstt">
            <p>Brand Awareness- CPV / Video Ad</p>
          </div>
         
          <div>
          <div className="ad-heading-pstt">
            <p>Ad Heading</p>
          </div>

        

          <div className="ad-sale-pstt">
            <p>Enter your ad heading here...</p>
          </div>
          <p className="max-char-pstt">Max 42 Characters</p>

          <div className="ad-heading-second-pstt">
            <p>Ad Sub-Heading</p>
          </div>
          <div className="ad-sale-second-pstt">
            <p>Enter your ad sub-heading here...</p>
          </div>
          <p className="max-char-second-pstt">Max 60 Characters</p>


          <div className="ad-heading-third-pstt">
            <p>Ad Description</p>
          </div>
          <div className="ad-sale-third-pstt">
            <p>Enter your ad description here...</p>
          </div>
          <p className="max-char-third-pstt">Max 300 Characters</p>


          <div className="upload-main-pstt">
            <p>Add your Video</p>
            <button>Upload Video</button>
          </div>
        </div>

          <div className="two-bumain-pstt">
            <button>Cancel</button>
           </div>
             <div className="two-bumain-psttt">
             <Link to="/VideoAd1">
            
            <button>Next</button>
            </Link>
           </div>
           
         </div>

    
           


    </div>
   
   </>
  )
}

export default VideoAd