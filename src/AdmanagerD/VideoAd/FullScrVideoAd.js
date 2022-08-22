import React from 'react'
import "./video2.css"
import {Link} from "react-router-dom"

const FullScrVideoAd = () => {
  return (
   <>
    <div className="main-section-upsd">

        <div className="sidebar-main-upsd">

            <div className="desh-icon-main-upsd">
                <div className="desh-icon-upsd">
                    <i className="fa fa-dashboard"></i>
                    <p>User Dashboard</p>
                </div>
                <div className="desh-second-upsd">
                    <i className="fa fa-ellipsis-h"></i>
                </div>
            </div>


            <div className="create-add-main-upsd">
                <div className="create-add-upsd">
                    <div className="create-add-one-upsd">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Create Ad</p>
                    </div>
                    <div className="create-add-second-upsd">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-second-upsd">
                <div className="create-add-upsd">
                    <div className="create-add-one-upsd">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Full Screen Video Ad</p>
                    </div>
                    <div className="create-add-second-upsd">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-third-upsd">
                <div className="create-add-upsd">
                    <div className="create-add-one-upsd">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Brand Awareness- CPV</p>
                    </div>
                    <div className="create-add-second-upsd">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

        </div>


        <div className="step-select-main-upsd"></div>
           <div className="step-select-upsd">
            <div className="step-select-one-upsd">
                <div className="step-select-child-upsd">
                    <button>3</button>
                    <p>Step 3</p>
                </div>
            </div>
            <div className="step-select-second-upsd">
                <p>Set-up Your Ad</p>
                <p>Let’s start by selecting your objective which suits best for our goals.</p>
            </div>
           </div>


         <div className="brand-image-main-upsd">
          <div className="brand-aware-text-upsd">
            <p>Brand Awareness- CPV / Full Screen Video Ad</p>
          </div>
         
          <div>
          <div className="ad-heading-upsd">
            <p>Add Heading</p>
          </div>

        

          <div className="ad-sale-upsd">
            <p>Enter your ad heading here...</p>
          </div>
          <p className="max-char-upsd">Max 42 Characters</p>

          <div className="ad-heading-second-upsd">
            <p>Add Sub-Heading</p>
          </div>
          <div className="ad-sale-second-upsd">
            <p>Enter your ad sub-heading here...</p>
          </div>
          <p className="max-char-second-upsd">Max 60 Characters</p>


          <div className="ad-heading-third-upsd">
            <p>Add Description</p>
          </div>
          <div className="ad-sale-third-upsd">
            <p>Enter your ad description here...</p>
          </div>
          <p className="max-char-third-upsd">Max 300 Characters</p>


          <div className="upload-main-upsd">
            <p>Add your Video</p>
            <button>Upload Video</button>
          </div>
        </div>

          <div className="two-bumain-upsd">
            <button>Cancel</button>
           </div>
            <div className="two-bumain-upsdr">
          < Link to = "/FullScrVideoAd1" >
            
            <button>Next</button>
            </Link>
           </div>
          
         </div>

    
           


    </div>
   
   
   </>
  )
}

export default FullScrVideoAd