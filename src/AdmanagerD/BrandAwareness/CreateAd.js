import React from 'react'
import {Link} from "react-router-dom"
import "./brand.css"

const CreateAd = () => {
   
  return (
   <>
     <div className="main-section">

        <div className="sidebar-main">

            <div className="desh-icon-main">
                <div className="desh-icon">
                    <i className="fa fa-dashboard"></i>
                    <p>User Dashboard</p>
                </div>
                <div className="desh-second">
                    <i className="fa fa-ellipsis-h"></i>
                </div>
            </div>

            <div className="create-add-main">
                <div className="create-add">
                    <div className="create-add-one">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <p>Create Ad</p>
                    </div>
                    <div className="create-add-second">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>

        </div>


        <div className="step-select-main"></div>
           <div className="step-select">
            <div className="step-select-one">
                <div className="step-select-child">
                    <button>1</button>
                    <p>Step 1</p>
                </div>
            </div>
            <div className="step-select-second">
                <p>Select your advertisement goal</p>
                <p>To generate high-quality leads & acquire new customers.</p>
            </div>
           </div>


           <div className="brand-main">
            <div className="brand-first">
                <input type="radio"/>
            </div>
            <div className="brand-second">
                <p>Brand Awareness- CPV</p>
                <p>Increase views of your products, services or company</p>
            </div>
           </div>
           
           <div className="brand-main-second">
            <div className="brand-first">
                <input type="radio"/>
            </div>
            <div className="brand-second">
                <p>Website ( Link) Visits- CPC</p>
                <p>Drive traffic to your websites</p>
            </div>
           </div>


           <div className="brand-main-third">
            <div className="brand-first">
                <input type="radio"/>
            </div>
            <div className="brand-second">
                <p>Post Engagement- CPV</p>
                <p>Increase user engagement of your posts</p>
            </div>
           </div>

           <div className="brand-main-fourth">
            <div className="brand-first">
                <input type="radio"/>
            </div>
            <div className="brand-second">
                <p>Video Views- CPV</p>
                <p>Share your video with more customers</p>
            </div>
           </div>

           <div className="brand-main-fivth">
            <div className="brand-first">
                <input type="radio"/>
            </div>
            <div className="brand-second">
                <p>Lead Generation- CPL</p>
                <p>Get more leads for your business</p>
            </div>
           </div>

    
           <div className="two-bumain">
            <button>Cancel</button>
           </div>
            <div className="two-bumains">
          <Link to="/Display">

            <button>Next</button>
            </Link>
           </div>
              
           
          


    </div>
   </>
  )
}

export default CreateAd