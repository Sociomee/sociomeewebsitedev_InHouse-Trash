import React from 'react'
import { Link } from 'react-router-dom'
import AdmanagerHeaderR from '../../AdmanagerHeaderR/AdmanagerHeaderR'

const TotalBudgetScreen = () => {
    return (
        <>
            <AdmanagerHeaderR />
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-3 ad-left">
                        <div className="desh-icon-main">
                            <div className="desh-icon">
                                <img src="/assets/images/adIcon/grid.png" alt="" />
                                <p className='ml-2'>User Dashboard</p>
                            </div>
                            <div className="desh-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div className="create-add-main">
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
                        <div className="create-add-main">
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
                    </div>

                    <div className="col-lg-9 pad-zero">
                        <div className="col-lg-12 step-ad-heading">
                            <div className="row step-section">
                                <div className="col-lg-2 ad-count">
                                    <button className="ad-count-btn">5</button>
                                    <p className="ad-count-step">Step 5</p>
                                </div>
                                <div className="col-lg-10">
                                    <p className='ad-count-heading'>Budget & Ad duration</p>
                                    <p>Assign a budget and duration for your Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 pad-zero">
                            <div className="row ad-types-of-type-map ">
                                <div className="single-ad pad-zero">
                                    <div className="navigate col-lg-12">
                                        <div className="row">
                                            <div className="navigate-left col-lg-12">
                                                <p className='navigate-color'>Website ( Link) Visits- CPC  /  Single Image Ad  /  Choose Your Audience  /  Budget & Ad duration</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 inputs d-flex p-0">
                                        {/* <div className="row"> */}
                                        <div className='col-lg-12 col-12'>
                                            <div className="">
                                                <div className="ad-heading-upsd-title-input">
                                                    <p className='p-heading'>Your daily ad budget
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <input type="text" className='form-control p-2' placeholder='50' />
                                                </div>
                                                <p className="p-max-car">Minimum daily budget is € 20/- only</p>
                                            </div>

                                            <div className="">
                                                <div className="ad-heading-upsd-title-input">
                                                    <p className='p-heading'>Choose the duration of ad</p>
                                                </div>
                                                <div className="d-flex col-lg-12">
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
                                            </div>

                                            <div className="">
                                                <div className="ad-heading-upsd-title-input total-amount">
                                                    <p className='p-heading'>Total Amount to be paid</p>
                                                    <h2>$00.00</h2>
                                                </div>
                                            </div>

                                            <div className='col-lg-12'>
                                                <div className="ad-btn">
                                                    <Link to="/Ad/AdPreview" className='btn-next'>
                                                        Preview Ad
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalBudgetScreen