import React from 'react'
import { Link } from 'react-router-dom'
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const BudgetScreen = () => {
    return ( 
        <>
            <AdmanagerHeaderR />
            <div className="main-section-upsd">

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

                    <div className="create-add-main-no-backbround Configure-ad">
                        <div className="create-add">
                            <div className="create-add-one">
                                <span className='static-margin'></span><span className='static-margin'></span>
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Full Screen Video Ad </p>
                            </div>
                            <div className="create-add-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>
                    <div className="create-add-main-no-backbround Configure-ad">
                        <div className="create-add">
                            <div className="create-add-one">
                                <span className='static-margin'></span><span className='static-margin'></span><span className='static-margin'></span>
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Choose Your Audience</p>
                            </div>
                            <div className="create-add-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                    <div className="create-add-main-third-sp create-add-one-sp-five">
                        <div className="create-add-sp" >
                            <div className="create-add-one-sp mr-5">
                            <span className='static-margin'></span><span className='static-margin'></span><span className='static-margin'></span><span className='static-margin'></span>
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Budget & Ad duration</p>
                            </div>
                            <div className="create-add-second-sp">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="step-select-main-upsd"></div>
                <div className="step-select-upsd">
                    <div className="step-select-one-upsd">
                        <div className="step-select-child-upsd">
                            <button>4</button>
                            <p>Step 4</p>
                        </div>
                    </div>
                    <div className="step-select-second-upsd">
                        <p>Choose Your Audience</p>
                        <p>Define your target audience details</p>
                    </div>
                </div>


                <div className="brand-image-main-upsd brand-image-main-upsd-new">
                    <div className="brand-aware-text-upsd-title">
                        <p>Website ( Link) Visits- CPC  /  Single Image Ad  /  Choose Your Audience  /  Budget & Ad duration</p>
                    </div>

                    <div>
                        <div className="ad-heading-upsd-title-input">
                            <p>Your daily ad budget</p>
                        </div>
                        <div className="ad-sale-second-spss-input-new">
                            <input type="text" className='form-control p-2' placeholder='Enter advertisement sub-heading...' />
                        </div>

                        <div className="ad-heading-upsd-title-input">
                            <p>Choose the duration of ad </p>
                        </div>
                        <div className="ad-sale-second-spss-input-new d-flex col-lg-12">
                            {/* <div className='d-flex"'> */}
                            <div className="col-lg-4">
                                <p>Starting Date</p>
                                <input type="date" className='form-control p-2' />
                            </div>
                            <div className="col-lg-4">
                                <p>To</p>
                                <input type="date" className='form-control p-2' />
                            </div>
                            {/* </div> */}
                            <div className="total-budget total-budget-time d-flex col-lg-4">
                                <p>Ad Duration</p>
                                <p>15 Days</p>
                            </div>
                        </div>

                        <div className="ad-heading-upsd-title-input total-budget">
                            <p>Total Amount to be paid</p>
                            <h2>
                                $2,550.00
                            </h2>
                        </div>

                        <div className='budget-btn-main'>
                            < Link to="/AdPreview" >
                                <button className="budget-btn">
                                    Preview Ad
                                </button>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default BudgetScreen