import React from 'react'
import "./video1.css"
import {Link} from "react-router-dom"
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const VideoAd1 = () => {
  return (
    <>
    <AdmanagerHeaderR/>
      <div className="main-section-yttp">

        <div className="sidebar-main-yttp">

            <div className="desh-icon-main-yttp">
                <div className="desh-icon-yttp">
                    <i className="fa fa-dashboard"></i>
                    <p>User Dashboard</p>
                </div>
                <div className="desh-second-yttp">
                    <i className="fa fa-ellipsis-h"></i>
                </div>
            </div>


            <div className="create-add-main-yttp">
                <div className="create-add-yttp">
                    <div className="create-add-one-yttp">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Create Ad</p>
                    </div>
                    <div className="create-add-second-yttp">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-second-yttp">
                <div className="create-add-yttp">
                    <div className="create-add-one-yttp">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Video Ad</p>
                    </div>
                    <div className="create-add-second-yttp">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-third-yttp">
                <div className="create-add-yttp" >
                    <div className="create-add-one-yttp">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Brand Awareness- CPV</p>
                    </div>
                    <div className="create-add-second-yttp">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

        </div>


        <div className="step-select-main-yttp"></div>
           <div className="step-select-yttp">
            <div className="step-select-one-yttp">
                <div className="step-select-child-yttp">
                    <button>3</button>
                    <p>Step 3</p>
                </div>
            </div>
            <div className="step-select-second-yttp">
                <p>Set-up Your Ad</p>
                <p>Let’s start by selecting your objective which suits best for our goals.</p>
            </div>
           </div>


         <div className="brand-image-main-yttp">
          <div className="brand-aware-text-yttp">
            <p>Brand Awareness- CPV / Video Ad</p>
          </div>
         
          <div>
          <div className="ad-heading-yttp">
            <p>Add Heading</p>
          </div>

        

          <div className="ad-sale-yttp">
            {/* <p>50% sale at girls fashion</p> */}
            <input type="text" className='form-control p-2' placeholder='50% sale at girls fashion' />

          </div>
          <p className="max-char-yttp">Max 42 Characters</p>

          <div className="ad-heading-second-yttp">
            <p>Add Sub-Heading</p>
          </div>
          <div className="ad-sale-second-yttp">
            {/* <p>Branded Party Dress</p> */}
            <input type="text" className='form-control p-2' placeholder='Branded Party Dress' />

          </div>
          <p className="max-char-second-yttp">Max 60 Characters</p>


          <div className="ad-heading-third-yttp">
            <p>Add Description</p>
          </div>
          <div className="ad-sale-third-yttp">
            {/* <p> An advertisement (often shortened to advert or ad) is the promotion of a product, brand or service to a viewership in order to attract interest, engagement and sales. Advertisements come in many forms, from copy to interactive video, and have evolved to become a crucial feature of the app marketplace. An advertisement is different from other types of marketing because it is paid for, and because the creator of an advert has total control over the content and message.</p> */}
            <textarea name='message' className='form-control' rows='8' placeholder=''> </textarea>

          </div>
          <p className="max-char-third-yttp">Max 300 Characters</p>


          <div className="upload-main-yttp">
            <p>Add your Video</p>
            <button></button>
          </div>
        </div>

          <div className="two-bumain-yttp">
            <button>Cancel</button>
           </div>
             <div className="two-bumain-yttpr">
         < Link to = "/FullScrVideoAd" >
            
            <button>Next</button>
            </Link>
           </div>
            
         </div>

    
           


    </div>
    
    </>
  )
}

export default VideoAd1