import React from 'react'
import "./Display.css"
import { Link } from "react-router-dom"
import AdmanagerHeaderR from '../../AdmanagerHeaderR/AdmanagerHeaderR'

const Display = () => {
  return (
    <>
      <AdmanagerHeaderR />
      <div className="main-section-sp">

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

          <div className="create-add-main-no-backbround">
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

          <div className="create-add-main-second-sp">
            <div className="create-add-sp" >
              <div className="create-add-one-sp mr-5">
                <img src="/assets/images/adIcon/folder.png" alt="" />
                <p className='ml-2'>Brand Awareness- CPV</p>
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
            <img src="/assets/images/adIcon/Frame 1105.png" />
            <p className='ad-title mt-3 mb-2'>Single Image Ad</p>
            <p className='ad-title-dec'>Create ad using an image, that will be displayed in news feed.</p>
          </div>

          <div className="single-image-second-sp">
            <img src="/assets/images/adIcon/Frame 1106.png" />
            <p className='ad-title mt-3 mb-2'>Carousel Image Ad</p>
            <p className='ad-title-dec'>Create ad using multiple images, that will be displayed in news feed.</p>
          </div>


          <div className="single-image-third-sp">
            <img src="/assets/images/adIcon/Frame 1107.png" />
            <p className='ad-title mt-3 mb-2'>Video Ad</p>
            <p className='ad-title-dec'>Create ad using a video that will be displayed in news feed.</p>
          </div>

          <div className="single-image-fourth-sp">
            <img src="/assets/images/adIcon/Frame 1108.png" />
            <p className='ad-title mt-3 mb-2'>Full Screen Video Ad</p>
            <p className='ad-title-dec'>Create ad using a video, that will be displayed in the Story/Shotz feed.</p>
          </div>

          <div className="two-bumain-sp">

            <button>Cancel</button>
          </div>
          <div className="two-bumain-sps">

            <Link to="/ConfigureAd">

              <button className='block-btn'>Next</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Display