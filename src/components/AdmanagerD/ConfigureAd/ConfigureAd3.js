import React from 'react'
import "./conf3.css"
import { Link } from "react-router-dom"
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const ConfigureAd3 = () => {
  const imageUpload = () => {
    document.getElementById('input_file').click();
  }
  return (
    <>
    <AdmanagerHeaderR/>
      <div className="main-section-spyy">

        <div className="sidebar-main-spyy">

          <div className="desh-icon-main-spyy">
            <div className="desh-icon-spyy">
              <i className="fa fa-dashboard"></i>
              <p>User Dashboard</p>
            </div>
            <div className="desh-second-spyy">
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </div>


          <div className="create-add-main-spyy">
            <div className="create-add-spyy">
              <div className="create-add-one-spyy">
                <i className="fa fa-folder-o" aria-hidden="true"></i>
                <p>Create Ad</p>
              </div>
              <div className="create-add-second-spyy">
                <i className="fa fa-ellipsis-h"></i>
              </div>
            </div>
          </div>

          <div className="create-add-main-second-spyy">
            <div className="create-add-spyy">
              <div className="create-add-one-spyy">
                <i className="fa fa-folder-o" aria-hidden="true"></i>
                <p>Carosel Images Ad</p>
              </div>
              <div className="create-add-second-spyy">
                <i className="fa fa-ellipsis-h"></i>
              </div>
            </div>
          </div>

          <div className="create-add-main-third-spyy">
            <div className="create-add-spyy" >
              <div className="create-add-one-spyy">
                <i className="fa fa-folder-o" aria-hidden="true"></i>
                <p>Brand Awareness- CPV</p>
              </div>
              <div className="create-add-second-spyy">
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


        <div className="brand-image-main-spyy ">
          <div className="brand-aware-text-spyy">
            <p>Brand Awareness- CPV / Carosel Images ad</p>
          </div>

          <div>
            <div className="ad-heading-spyy">
              <p>Ad Heading</p>
            </div>

            <div className="media-main-spyy">
              <p>( 2/5 Media )</p>
            </div>

            <div className="ad-sale-spyy">
              {/* <p>Enter your ad heading here...</p> */}
              <input type="text" className='form-control p-2' placeholder='Enter your ad heading here...' />

            </div>
            <p className="max-char-spyy">Max 42 Characters</p>

            <div className="ad-heading-second-spyy">
              <p>Ad Sub-Heading</p>
            </div>
            <div className="ad-sale-second-spyy">
              {/* <p>Enter your ad sub-heading here...</p> */}
              <input type="text" className='form-control p-2' placeholder='Enter your ad sub-heading here..' />

            </div>
            <p className="max-char-second-spyy">Max 60 Characters</p>

            <div className="add-more-main-spyy">
              <button>+ Add More Images</button>
            </div>

            <div className="ad-heading-third-spyy">
              <p>Ad Description</p>
            </div>
            <div className="ad-sale-third-spyy">
              <textarea name='message' className='form-control ' rows='8' placeholder=''> </textarea>
              {/* <p>Enter your ad description here...</p> */}
            </div>
            <p className="max-char-third-spyy">Max 300 Characters</p>


            <div className="upload-main-spyy">
              <p>Add Your Image</p>
              {/* <button>Upload Image</button> */}
              <button onClick={imageUpload}>Upload Image</button>
              <input type="file" name="" id='input_file' hidden />
            </div>
          </div>

          <div className="two-bumain-spyy">
            <button>Cancel</button>
          </div>

          <div className="two-bumain-spyyy">

            <Link to="/VideoAd">
              <button>Next</button>
            </Link>
          </div>

        </div>





      </div>

    </>
  )
}

export default ConfigureAd3