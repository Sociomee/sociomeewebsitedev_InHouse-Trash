import React from 'react'
import "./video.css"
import { Link } from "react-router-dom"
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const VideoAd = () => {
  const videoUpload = () => {
    document.getElementById('input_file').click();
  }

  return (
    <>
      <AdmanagerHeaderR />
      <div className="main-section-pstt">

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
                <p className='ml-2'>Video Ad </p>
              </div>
              <div className="create-add-second-sp">
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
              <p>Add Heading <span ><img src="/assets/images/adIcon/alert-circle.png" alt="" /></span></p>
            </div>

            <div className="ad-sale-pstt">
              <input type="text" className='form-control p-2' placeholder='Ad Sub-Heading...' />

            </div>
            <p className="max-char-pstt">Max 42 Characters</p>

            <div className="ad-heading-second-pstt">
              <p>Ad Sub-Heading <span ><img src="/assets/images/adIcon/alert-circle.png" alt="" /></span></p>

            </div>
            <div className="ad-sale-second-pstt">
              <input type="text" className='form-control p-2' placeholder='Enter your ad sub-heading here...' />

            </div>
            <p className="max-char-second-pstt">Max 60 Characters</p>


            <div className="ad-heading-third-pstt">
              <p>Ad Description <span ><img src="/assets/images/adIcon/alert-circle.png" alt="" /></span></p>
            </div>
            <div className="ad-sale-third-pstt">
              <textarea name='message' className='form-control' rows='8' placeholder='Enter your description here...'> </textarea>

            </div>
            <p className="max-char-third-pstt">Max 300 Characters</p>


            <div className="upload-main-pstt">
              <p>Add your Video</p>
              <button onClick={videoUpload}>Upload video</button>
              <input type="file" name="" id='input_file' hidden />

            </div>
          </div>

          <div className="two-bumain-pstt">
            <button>Cancel</button>
          </div>
          <div className="two-bumain-psttt">
            <Link to="/FullScrVideoAd">

              <button className='block-btn'>Next</button>
            </Link>
          </div>
        </div>

      </div>

    </>
  )
}

export default VideoAd