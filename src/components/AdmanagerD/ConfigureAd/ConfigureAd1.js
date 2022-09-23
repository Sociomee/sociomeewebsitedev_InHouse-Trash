import React from 'react'
import "./conf1.css"
import {Link} from "react-router-dom"
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const ConfigureAd1 = () => {
  return (
   <>
   <AdmanagerHeaderR/>
    <div className="main-section-sphh">

        <div className="sidebar-main-sphh">

            <div className="desh-icon-main-sphh">
                <div className="desh-icon-sphh">
                    <i className="fa fa-dashboard"></i>
                    <p>User Dashboard</p>
                </div>
                <div className="desh-second-sphh">
                    <i className="fa fa-ellipsis-h"></i>
                </div>
            </div>


            <div className="create-add-main-sphh">
                <div className="create-add-sphh">
                    <div className="create-add-one-sphh">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Create Ad</p>
                    </div>
                    <div className="create-add-second-sphh">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-second-sphh">
                <div className="create-add-sphh">
                    <div className="create-add-one-sphh">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Single Image Ad</p>
                    </div>
                    <div className="create-add-second-sphh">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-third-sphh">
                <div className="create-add-sphh">
                    <div className="create-add-one-sphh">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Brand Awareness- CPV</p>
                    </div>
                    <div className="create-add-second-sphh">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

        </div>


        <div className="step-select-main-sphh"></div>
           <div className="step-select-sphh">
            <div className="step-select-one-sphh">
                <div className="step-select-child-sphh">
                    <button>3</button>
                    <p>Step 3</p>
                </div>
            </div>
            <div className="step-select-second-sphh">
                <p>Configure Your Ad</p>
                <p>Set-up your ad campaign with an image and description</p>
            </div>
           </div>


         <div className="brand-image-main-sphh">
          <div className="brand-aware-text-sphh">
            <p>Brand Awareness- CPV / Single Image Ad</p>
          </div>
         
          <div>
          <div className="ad-heading-sphh">
            <p>Ad Heading</p>
          </div>

          <div className="ad-sale-sphh">
          <input type="text" className='form-control p-2' placeholder='50% sale at girls fashion' />

            {/* <p>50% sale at girls fashion</p> */}
          </div>
          <p className="max-char-sphh">Max 42 Characters</p>

          <div className="ad-heading-second-sphh">
            <p>Ad Sub-Heading</p>
          </div>
          <div className="ad-sale-second-sphh">
            {/* <p>Enter advertisement sub-heading...</p> */}
          <input type="text" className='form-control p-2' placeholder='Enter advertisement sub-heading...' />

          
          </div>
          <p className="max-char-second-sphh">Max 60 Characters</p>

          <div className="ad-heading-third-sphh">
            <p>Ad Description</p>
          </div>
          <div className="ad-sale-third-sphh">
            <textarea name='message' className='form-control' rows="5" placeholder=''> </textarea>
            {/* <p>An advertisement (often shortened to advert or ad) is the promotion of a product, brand or service to a viewership in order to attract interest, engagement and sales. Advertisements come in many forms, from copy to interactive video, and have evolved to become a crucial feature of the app marketplace. An advertisement is different from other types of marketing because it is paid for, and because the creator of an advert has total control over the content and message.</p> */}
          </div>
          <p className="max-char-third-sphh">Max 300 Characters</p>


          <div className="upload-main-sphh">
            <p>Add Your Image</p>
            
          </div>
        </div>

          <div className="two-bumain-sphh">
            <button>Cancel</button>
           </div>
             <div className="two-bumain-sphhh">
          
            <Link to="/ConfigureAd2">

            <button>Next</button>
            </Link>
           </div>
         </div>

    
           


    </div>
   
   </>
  )
}

export default ConfigureAd1