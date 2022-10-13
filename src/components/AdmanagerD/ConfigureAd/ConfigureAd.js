import { Link } from 'react-router-dom'
import React from 'react'
import "./conf.css"

import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const ConfigureAd = () => {
  const imageUpload = () => {
    document.getElementById('input_file').click();
  }
  return (
    <>
      <AdmanagerHeaderR />
      <div className="main-section-spss">

        <div className="sidebar-main-sp">

          <div className="desh-icon-main">
            <div className="desh-icon">
              <img src="/assets/images/adIcon/grid.png" alt="" />
              <p className='ml-2'>User Dashboard</p>
            </div>
            <div className="desh-second">
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </div>

          <div className="create-add-main-no-backbround Configure-one">
            <div className="create-add">
              <div className="create-add-one">
                <img src="/assets/images/adIcon/folder.png" alt="" />
                <p className='ml-2'>Create Ad</p>
              </div>
              <div className="create-add-second">
                <i className="fa fa-ellipsis-h"></i>
              </div>
            </div>
          </div>

          <div className="create-add-main-no-backbround Configure-ad">
            <div className="create-add">
              <div className="create-add-one">
                <span className='static-margin'></span>
                <img src="/assets/images/adIcon/folder.png" alt="" />
                <p className='ml-2'>Brand Awareness- CPV</p>
              </div>
              <div className="create-add-second">
                <i className="fa fa-ellipsis-h"></i>
              </div>
            </div>
          </div>

          <div className="create-add-main-third-sp">
            <div className="create-add-sp" >
              <div className="create-add-one-sp mr-5">
                <span className='static-margin'></span>
                <img src="/assets/images/adIcon/folder.png" alt="" />
                <p className='ml-2'>Single Image Ad </p>
              </div>
              <div className="create-add-second-sp">
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
              <p>Ad Heading <span ><img src="/assets/images/adIcon/alert-circle.png" alt="" /></span></p>
            </div>

            <div className="ad-sale-spss">
              {/* <p>50% sale at girls fashion</p> */}
              <input type="text" className='form-control p-2' placeholder='50% sale at girls fashion' />
            </div>
            <p className="max-char-spss">Max 42 Characters</p>

            <div className="ad-heading-second-spss">
              <p>Ad Sub-Heading <span ><img src="/assets/images/adIcon/alert-circle.png" alt="" /></span></p>
            </div>
            <div className="ad-sale-second-spss">
              <input type="text" className='form-control p-2' placeholder='Enter advertisement sub-heading...' />

              {/* <p>Enter advertisement sub-heading...</p> */}
            </div>
            <p className="max-char-second-spss">Max 60 Characters</p> 

            <div className="ad-heading-third-spss">
              <p>Ad Description <span ><img src="/assets/images/adIcon/alert-circle.png" alt="" /></span></p>
            </div>
            <div className="ad-sale-third-spss">
              <textarea name='message' className='form-control' rows='5' placeholder=''> </textarea>
              {/* <p>An advertisement (often shortened to advert or ad) is the promotion of a product, brand or service to a viewership in order to attract interest, engagement and sales. Advertisements come in many forms, from copy to interactive video, and have evolved to become a crucial feature of the app marketplace. An advertisement is different from other types of marketing because it is paid for, and because the creator of an advert has total control over the content and message.</p> */}
            </div>
            <p className="max-char-third-spss">Max 300 Characters</p>


            <div className="upload-main-spss">
              <p>Add Your Image</p>

              <button onClick={imageUpload}>Upload Image</button>
              <input type="file" name="" id='input_file' hidden />
              {/* <button>Upload Image</button> */}
            </div>
          </div>

          <div className="two-bumain-spss">
            <button>Cancel</button>
          </div>
          <div className="two-bumain-spsss">
            <Link to="/ConfigureAd2">

              <button className='block-btn'>Next</button>
            </Link>
          </div>

        </div>

      </div>

    </>
  )
}

export default ConfigureAd