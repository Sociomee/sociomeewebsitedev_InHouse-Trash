import React from 'react'
import { Link } from 'react-router-dom'
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'
import './AdPreviewScreen.css'

const AdPreviewScreen = () => {
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
                                <p className='ml-2'>Preview</p>
                            </div>
                            <div className="create-add-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>
                    <div className="create-add-main-no-backbround Configure-ad">
                        <div className="create-add">
                            <div className="create-add-one">
                                <span className='static-margin'></span><span className='static-margin'></span><span className='static-margin'></span><span className='static-margin'></span>
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Choose Your Audience</p>
                            </div>
                            <div className="create-add-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                    <div className="create-add-main-third-sp create-add-one-sp-six">
                        <div className="create-add-sp" >
                            <div className="create-add-one-sp mr-5">
                                <span className='static-margin'></span><span className='static-margin'></span><span className='static-margin'></span><span className='static-margin'></span><span className='static-margin'></span>
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Budget & Ad duration</p>
                            </div>
                            <div className="create-add-second-sp">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="step-select-main-upsd">
                    <div className="step-select-upsd">
                        <div className="step-select-one-upsd">
                            <div className="step-select-child-upsd">
                                <p>Ad Preview</p>
                            </div>
                            <div className='budget-btn-main'>
                                <Link to="/AdPreview" >
                                    <button className="budget-btn">
                                        Save as drafts
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="brand-image-main-upsd brand-image-main-upsd-new">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <h3>Targeted Audience </h3>

                                <div className="main-left">
                                    <div className="ad-heading-upsd-title-input in-between">
                                        <p>Target Gender</p>
                                        <button className='d-block btn btn-primary transparent-btn'>Edit</button>
                                    </div>
                                    <div className="preview-data">
                                        <div>
                                            <img src="/assets/images/adIcon/chevrons-right.png" alt="" />
                                            <span>All <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span>Male <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span>Female <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span>Others <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-left">
                                    <div className="ad-heading-upsd-title-input in-between">
                                        <p>Age Range</p>
                                        <button className='d-block btn btn-primary transparent-btn'>Edit</button>
                                    </div>
                                    <div className="preview-data">
                                        <div>
                                            <img src="/assets/images/adIcon/chevrons-right.png" alt="" />
                                            <span>18 years to 26 years</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="main-left">
                                    <div className="ad-heading-upsd-title-input in-between">
                                        <p>Targeted Profession</p>
                                        <button className='d-block btn btn-primary transparent-btn'>Edit</button>
                                    </div>
                                    <div className="preview-data">
                                        <div>
                                            <img src="/assets/images/adIcon/chevrons-right.png" alt="" />
                                            <span>Doctors  <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span>Engineer  <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span>Advocate  <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span>Students<span className='bg-bullet ml-2 mr-2'>●</span></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="main-left">
                                    <div className="ad-heading-upsd-title-input in-between ">
                                        <p>Targeted Interests</p>
                                        <button className='d-block btn btn-primary transparent-btn'>Edit</button>
                                    </div>
                                    <div className="preview-data">
                                        <div>
                                            <img src="/assets/images/adIcon/chevrons-right.png" alt="" />
                                            <span>Food  <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span> Singing  <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span> Music  <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span> Acting  <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span> Dancing  <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span> Football<span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span> Cricket  <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                            <span> Shooting <span className='bg-bullet ml-2 mr-2'>●</span></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="main-left">
                                    <div className="ad-heading-upsd-title-input in-between">
                                        <p>Target Locations</p>
                                        <button className='d-block btn btn-primary transparent-btn'>Edit</button>
                                    </div>
                                    <div className="preview-data">
                                        <div>
                                            <img src="/assets/images/adIcon/chevrons-right.png" alt="" />
                                            <span>Lucknow, Uttar Pradesh, Sarojini Naidu Marg, B ...</span>
                                            <span>Lucknow Airport (LKO), Amausi, Lucknow, Uttar ...</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="main-left">
                                    <h2>Billing Detail</h2>

                                    <div className="preview-data">
                                        <div>
                                            <div className="ad-heading-upsd-title-input in-between">
                                                <p>Ad Duration</p>
                                            </div>
                                            <div className="">
                                                <img src="/assets/images/adIcon/chevrons-right.png" alt="" />
                                                <div className="d-flex justify-content-between">
                                                    <span>Start Date</span>
                                                    <span>4 Feb, 2021 </span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span>End Date</span>
                                                <span>28 Feb, 2021</span>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="ad-heading-upsd-title-input in-between">
                                                <p>Amount</p>
                                            </div>
                                            <div className="">
                                                <img src="/assets/images/adIcon/chevrons-right.png" alt="" />
                                                <div className="d-flex justify-content-between">
                                                    <span>Each day</span>
                                                    <span>$20</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span>Total Amount to be paid</span>
                                                <span>$5000</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='total-paid-ad'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex justify-content-between mb-2'>
                                                <input type="checkbox" className='mr-2' name="" id="" />
                                                <h4>Choose available Balance</h4>
                                            </div>
                                            <h3>€ 200</h3>
                                        </div>
                                        <div>
                                            <h3>Add € 980 more credit to pay for your Ad</h3>
                                        </div>
                                    </div>

                                    <Link to="/AdPreview" >
                                        <button className="budget-btn btn Publish-btn">
                                            Pay € 980 and Publish Ad
                                        </button>
                                    </Link>
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className='post-panel-new section-t-space'>
                                    <h3>Preview</h3>

                                    <div className="post-wrapper col-grid-box section-b-space">
                                        <div className="post-title">
                                            <div className="profile">
                                                <div className="media">
                                                    <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                        data-name="sufiya eliza" data-img="assets/images/image (1).png">
                                                        <img src="assets/images/image (1).png"
                                                            className="img-fluid bg-img" alt="user" />
                                                    </a>
                                                    <div className="media-body">
                                                        <h5>sufiya eliza</h5>
                                                        <h6><span className="color-orange">Sponsored</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                    <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                        <ul>
                                                            <li>
                                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                            </li>
                                                            <li>
                                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                            </li>
                                                            <li>
                                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-details">
                                            <div className="recomandation-display-block">
                                                <img src="assets/images/image (2).png" />
                                                <div className="recom-btn-cont-blk new-recom-btn-cont-blk">
                                                    <h4>Food Market Zone</h4>

                                                    <a href="#" className="btn btn-outline">KNOW MORE</a>
                                                </div>
                                            </div>
                                            <div className="detail-box">
                                                <h5 className="tag">This award goes to the coworker who’s always doing the thankless work of keeping the office up to date on pop culture. </h5>
                                            </div>
                                            <div className="Why-this-ad">
                                                <p>Why this Ad?</p>
                                                <img src="/assets/images/adIcon/Share-icon.png" alt="" />
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

export default AdPreviewScreen