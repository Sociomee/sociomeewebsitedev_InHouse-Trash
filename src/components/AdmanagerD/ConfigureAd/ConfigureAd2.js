import React from 'react'
import { Link } from "react-router-dom"
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'
import "./conf2.css"

const ConfigureAd2 = () => {
  const imageUpload = () => {
    document.getElementById('input_file').click();
  }
  return (
    <>
      <AdmanagerHeaderR />
      <div className="main-section-spyy ">

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
                <p className='ml-2'>Carosel Images Ad </p>
              </div>
              <div className="create-add-second-sp">
                <i className="fa fa-ellipsis-h"></i>
              </div>
            </div>
          </div>

        </div>

        <div className="step-select-main-spyy"></div>
        <div className="step-select-spyy">
          <div className="step-select-one-spyy">
            <div className="step-select-child-spyy">
              <button>3</button>
              <p>Step 3</p>
            </div>
          </div>
          <div className="step-select-second-spyy">
            <p>Configure Your Ad</p>
            <p>Set-up your ad campaign with an image and description</p>
          </div>
        </div>


        <div className="brand-image-main-spyy">
          <div className="brand-aware-text-spyy">
            <p>Brand Awareness- CPV / Carosel Images ad</p>
          </div>

          <div>
            <div className="ad-heading-spyy">
              <p>Ad Heading <span ><img src="/assets/images/adIcon/alert-circle.png" alt="" /></span></p>
            </div>

            <div className="media-main-spyy">
              <p>( 1/5 Media )</p>
            </div>

            <div className="ad-sale-spyy">
              <input type="text" className='form-control p-2' placeholder='Enter your ad heading here..' />


            </div>
            <p className="max-char-spyy">Max 42 Characters</p>

            <div className="ad-heading-second-spyy">
              <p>Ad Sub-Heading <span><img src="/assets/images/adIcon/alert-circle.png" alt="" /></span></p>
            </div>
            <div className="ad-sale-second-spyy">
              <input type="text" className='form-control p-2' placeholder='Enter your ad sub-heading here' />

            </div>
            <p className="max-char-second-spyy">Max 60 Characters</p>

            <div className="add-more-main-spyy">
              <button>+ Add More Images</button>
            </div>

            <div className="ad-heading-third-spyy">
              <p>Ad Description <span><img src="/assets/images/adIcon/alert-circle.png" alt="" /></span></p>
            </div>
            <div className="ad-sale-third-spyy">
              <textarea name='message' className='form-control' rows='8' placeholder='Enter your ad description here...'> </textarea>

            </div>
            <p className="max-char-third-spyy">Max 300 Characters</p>


            <div className="upload-main-spyy">
              <p>Add Your Image</p>
              <button onClick={imageUpload}>Upload Image</button>
              <input type="file" name="" id='input_file' hidden />
            </div>
          </div>

          <div className="two-bumain-spyy">
            <button>Cancel</button>
          </div>
          <div className="two-bumain-spyyy">
            <Link to="/VideoAd">
              <button className='block-btn'>Next</button>
            </Link>
          </div>

        </div>





      </div>


    </>
  )
}

export default ConfigureAd2