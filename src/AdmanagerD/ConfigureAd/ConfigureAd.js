import { Link } from 'react-router-dom'
import React from 'react'
import "./conf.css"

const ConfigureAd = () => {
  return (
    <>
    
     <div className="main-section-spss">

        <div className="sidebar-main-spss">

            <div className="desh-icon-main-spss">
                <div className="desh-icon-spss">
                    <i className="fa fa-dashboard"></i>
                    <p>User Dashboard</p>
                </div>
                <div className="desh-second-spss">
                    <i className="fa fa-ellipsis-h"></i>
                </div>
            </div>


            <div className="create-add-main-spss">
                <div className="create-add-spss">
                    <div className="create-add-one-spss">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Create Ad</p>
                    </div>
                    <div className="create-add-second-spss">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-second-spss">
                <div className="create-add-spss">
                    <div className="create-add-one-spss">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Single Image Ad</p>
                    </div>
                    <div className="create-add-second-spss">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

            <div className="create-add-main-third-spss">
                <div className="create-add-spss">
                    <div className="create-add-one-spss">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Brand Awareness- CPV</p>
                    </div>
                    <div className="create-add-second-spss">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

        </div>


        <div className="step-select-main-spss"></div>
           <div className="step-select-spss">
            <div className="step-select-one-spss">
                <div className="step-select-child-spss">
                    <button>3</button>
                    <p>Step 3</p>
                </div>
            </div>
            <div className="step-select-second-spss">
                <p>Configure Your Ad</p>
                <p>Set-up your ad campaign with an image and description</p>
            </div>
           </div>


         <div className="brand-image-main-spss">
          <div className="brand-aware-text-spss">
            <p>Brand Awareness- CPV / Single Image Ad</p>
          </div>
         
          <div>
          <div className="ad-heading-spss">
            <p>Ad Heading</p>
          </div>

          <div className="ad-sale-spss">
            <p>50% sale at girls fashion</p>
          </div>
          <p className="max-char-spss">Max 42 Characters</p>

          <div className="ad-heading-second-spss">
            <p>Ad Sub-Heading</p>
          </div>
          <div className="ad-sale-second-spss">
            <p>Enter advertisement sub-heading...</p>
          </div>
          <p className="max-char-second-spss">Max 60 Characters</p>

          <div className="ad-heading-third-spss">
            <p>Ad Description</p>
          </div>
          <div className="ad-sale-third-spss">
            <p>An advertisement (often shortened to advert or ad) is the promotion of a product, brand or service to a viewership in order to attract interest, engagement and sales. Advertisements come in many forms, from copy to interactive video, and have evolved to become a crucial feature of the app marketplace. An advertisement is different from other types of marketing because it is paid for, and because the creator of an advert has total control over the content and message.</p>
          </div>
          <p className="max-char-third-spss">Max 300 Characters</p>


          <div className="upload-main-spss">
            <p>Add Your Image</p>
            <button>Upload Image</button>
          </div>
        </div>

          <div className="two-bumain-spss">
            <button>Cancel</button>
           </div>
            <div className="two-bumain-spsss">
     <Link to="/ConfigureAd1">

            <button>Next</button>
            </Link>
           </div>
            
         </div>

    
           


    </div>
    
    </>
  )
}

export default ConfigureAd