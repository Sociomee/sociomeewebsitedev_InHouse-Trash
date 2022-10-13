import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdmanagerHeaderR from '../../AdmanagerHeaderR/AdmanagerHeaderR'

const AdPreviewMoreScreen = () => {
    const [accord, setAccord] = useState(1);
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

                    <div className="col-lg-9">
                        <div className="col-lg-12 step-ad-heading">
                            <div className="row step-section">
                                <div className="col-lg-2 ad-count">
                                    <p className='ad-count-heading'>Ad Preview</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 p-0">
                            <div className="row ad-types-of-type-map preview-main">

                                {/* EDIT FEEDS */}
                                <div className="col-lg-5 preview-left">
                                    <h3 className='p-heading'>Targeted Audience </h3>
                                    <div className="preview-left-end">
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
                                    </div>

                                    <h3 className='p-heading mt-3'>Billing Detail</h3>
                                    <div className="preview-left-end">
                                        <div className="main-left">

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
                                </div>

                                {/* FEEDS AND PREVIEW */}
                                <div className="col-lg-7">
                                    {/* PREVIEW HEADER*/}
                                    <div className='col-lg-12'>
                                        <div className="row preview-heading-head">
                                            <div className='col-lg-6'>
                                                <div className="d-flex">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <h5 className='p-heading ml-2'>Preview on</h5>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 full-flex'>
                                                <div className='d-flex head-preview'>
                                                    <img src="/assets/images/adIcon/Mask1.png" alt="" />
                                                    <p className='ml-1'>More Preview</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FEEDS AND PREVIEW */}
                                    <div className="row">
                                        <div className="col-lg-6 preview-right">
                                            <div className="media-body preview-logo">
                                                <img src="/assets/images/adIcon/preview-logo.png" alt="" />
                                            </div>

                                            <div className='bg-white' style={{ display: accord === 1 ? 'block' : 'none' }}>
                                                <h3 className='p-heading pl-1'>Feeds</h3>
                                                <div className='post-panel-new'>
                                                    <div className="post-wrapper col-grid-box">
                                                        <div className="post-title d-flex">
                                                            <div className="profile">
                                                                <div className="media d-flex mb-1">
                                                                    <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                        data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                        <img src="/assets/images/image (1).png"
                                                                            className="img-fluid bg-img" alt="user" />
                                                                    </a>
                                                                    <div className="media-body ml-2">
                                                                        <h5 className='p-heading'>Food Market Zone</h5>
                                                                        <h6><span className="color-grey">Sponsored</span></h6>
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
                                                                <img src="/assets/images/image (2).png" />
                                                                <div className="recom-btn-cont-blk new-recom-btn-cont-blk">
                                                                    <h4>Food Market Zone 1</h4>

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

                                            <div className='bg-white' style={{ display: accord === 2 ? 'block' : 'none' }}>
                                                <h3 className='p-heading pl-1'>Podcast</h3>
                                                <div className='post-panel-new'>
                                                    <div className="post-wrapper col-grid-box">
                                                        <div className="post-title d-flex">
                                                            <div className="profile">
                                                                <div className="media d-flex mb-1">
                                                                    <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                        data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                        <img src="/assets/images/image (1).png"
                                                                            className="img-fluid bg-img" alt="user" />
                                                                    </a>
                                                                    <div className="media-body ml-2">
                                                                        <h5 className='p-heading'>Food Market Zone</h5>
                                                                        <h6><span className="color-grey">Sponsored</span></h6>
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
                                                        <div className="mt-4 preview-img-view ml-2 ">
                                                            <h6 className='p-heading'>Related Products</h6>
                                                            <h6><span>View all</span></h6>
                                                        </div>
                                                        <div className="post-details-new col-lg-12">
                                                            <div className="row">
                                                                <div className="recomandation-display-block col-lg-6 p-1">
                                                                    <div className="preview-img">
                                                                        <img src="/assets/images/image (2).png" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="detail-box">
                                                                            <h4 className="preview-heading">This award goes...</h4>
                                                                        </div>
                                                                        <div className="preview-detail-small">
                                                                            <p className='preview-small'>Sponsored</p>
                                                                            <p className='preview-small preview-know'>Know more</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="recomandation-display-block col-lg-6 p-1">
                                                                    <div className="preview-fake-img">

                                                                    </div>
                                                                    <div className="fake-line mt-2">
                                                                        <div className="fake-heading"></div>
                                                                        <div className="fake-know-main mt-2">
                                                                            <div className="fake-p"></div>
                                                                            <div className="fake-know"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='bg-white' style={{ display: accord === 3 ? 'block' : 'none' }}>
                                                <h3 className='p-heading'>Groups</h3>
                                                <div className='post-panel-new'>
                                                    <div className="post-wrapper col-grid-box">
                                                        <div className="post-title d-flex">
                                                            <div className="profile">
                                                                <div className="media d-flex mb-1">
                                                                    <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                        data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                        <img src="/assets/images/image (1).png"
                                                                            className="img-fluid bg-img" alt="user" />
                                                                    </a>
                                                                    <div className="media-body ml-2">
                                                                        <h5 className='p-heading'>Food Market Zone</h5>
                                                                        <h6><span className="color-grey">Sponsored</span></h6>
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
                                                        <div className="mt-4 preview-img-view ml-2 ">
                                                            <h6 className='p-heading'>Suggested Groups</h6>
                                                        </div>
                                                        <div className="post-details col-lg-12">
                                                            <div className="row">
                                                                <div className="recomandation-display-block col-lg-10 p-1">
                                                                    <div className="preview-main-border">
                                                                        <div className="preview-grp-img">
                                                                            <img src="/assets/images/image (2).png" />
                                                                        </div>
                                                                        <div>
                                                                            <div className="detail-box">
                                                                                <h4 className="preview-heading">This award goes...</h4>
                                                                            </div>
                                                                            <div className="preview-detail-small">
                                                                                <p className='preview-small'>Sponsored</p>
                                                                                <p className='preview-small preview-know'>Know more</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="recomandation-display-block col-lg-2 p-1">
                                                                    <div className="preview-main-border">
                                                                        <div className="preview-fake-img">

                                                                        </div>
                                                                        <div className="fake-line mt-2">
                                                                            <div className="fake-heading"></div>
                                                                            <div className="fake-know-main mt-2">
                                                                                <div className="fake-p"></div>
                                                                                <div className="fake-know"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="preview-more">
                                                            visit all groups
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='bg-white' style={{ display: accord === 4 ? 'block' : 'none' }}>
                                                <h3 className='p-heading'>bizPages</h3>
                                                <div className='post-panel-new'>
                                                    <div className="post-wrapper col-grid-box">
                                                        <div className="post-title d-flex">
                                                            <div className="profile">
                                                                <div className="media d-flex mb-1">
                                                                    <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                        data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                        <img src="/assets/images/image (1).png"
                                                                            className="img-fluid bg-img" alt="user" />
                                                                    </a>
                                                                    <div className="media-body ml-2">
                                                                        <h5 className='p-heading'>Food Market Zone</h5>
                                                                        <h6><span className="color-grey">Sponsored</span></h6>
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
                                                        <div className="mt-4 preview-img-view ml-2 ">
                                                            <h6 className='p-heading'>Suggested Bizpages</h6>
                                                        </div>
                                                        <div className="post-details col-lg-12">
                                                            <div className="row">
                                                                <div className="recomandation-display-block col-lg-10 p-1">
                                                                    <div className="preview-main-border">
                                                                        <div className="preview-grp-img">
                                                                            <img src="/assets/images/image (2).png" />
                                                                        </div>
                                                                        <div>
                                                                            <div className="detail-box">
                                                                                <h4 className="preview-heading">This award goes...</h4>
                                                                            </div>
                                                                            <div className="preview-detail-small">
                                                                                <p className='preview-small'>Sponsored</p>
                                                                                <p className='preview-small preview-know'>Know more</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="recomandation-display-block col-lg-2 p-1">
                                                                    <div className="preview-main-border">
                                                                        <div className="preview-fake-img">

                                                                        </div>
                                                                        <div className="fake-line mt-2">
                                                                            <div className="fake-heading"></div>
                                                                            <div className="fake-know-main mt-2">
                                                                                <div className="fake-p"></div>
                                                                                <div className="fake-know"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="preview-more">
                                                            visit all Bizpages
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='bg-white' style={{ display: accord === 5 ? 'block' : 'none' }}>
                                                <h3 className='p-heading'>MarketPlace</h3>
                                                <div className='post-panel-new'>
                                                    <div className="post-wrapper col-grid-box">
                                                        <div className="post-title d-flex">
                                                            <div className="profile">
                                                                <div className="media d-flex mb-1">
                                                                    <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                        data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                        <img src="/assets/images/image (1).png"
                                                                            className="img-fluid bg-img" alt="user" />
                                                                    </a>
                                                                    <div className="media-body ml-2">
                                                                        <h5 className='p-heading'>Food Market Zone</h5>
                                                                        <h6><span className="color-grey">Sponsored</span></h6>
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
                                                        <div className="mt-4 preview-img-view ml-2 ">
                                                            <h6 className='p-heading'>Suggested Bizpages</h6>
                                                        </div>
                                                        <div className="post-details col-lg-12">
                                                            <div className="row">
                                                                <div className="recomandation-display-block col-lg-5 p-1">
                                                                    <div className="preview-grp-post">
                                                                        <img src="/assets/images/adIcon/preview-ad.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="recomandation-display-block col-lg-5 p-1">
                                                                    <div className="preview-grp-post">
                                                                        <img src="/assets/images/image (2).png" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="detail-box">
                                                                            <h4 className="preview-heading">This award goes...</h4>
                                                                        </div>
                                                                        <div className="preview-detail-small">
                                                                            <p className='preview-small'>Sponsored</p>
                                                                            <p className='preview-small preview-know'>Know more</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="recomandation-display-block col-lg-2 p-1">
                                                                    <div className="preview-grp-post">
                                                                        <img src="/assets/images/adIcon/preview-ad.png" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='bg-white' style={{ display: accord === 6 ? 'block' : 'none' }}>
                                                <h3 className='p-heading'>Events</h3>
                                                <div className='post-panel-new'>
                                                    <div className="post-wrapper col-grid-box">
                                                        <div className="post-title d-flex">
                                                            <div className="profile">
                                                                <div className="media d-flex mb-1">
                                                                    <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                        data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                        <img src="/assets/images/image (1).png"
                                                                            className="img-fluid bg-img" alt="user" />
                                                                    </a>
                                                                    <div className="media-body ml-2">
                                                                        <h5 className='p-heading'>Food Market Zone</h5>
                                                                        <h6><span className="color-grey">Sponsored</span></h6>
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
                                                        <div className="mt-4 preview-img-view ml-2 ">
                                                            <h6 className='p-heading'>My Hosting Events</h6>
                                                            <h6><span>View all</span></h6>
                                                        </div>
                                                        <div className="post-details col-lg-12">
                                                            <div className="row">
                                                                <div className="recomandation-display-block col-lg-7 p-1">
                                                                    <div className="preview-event">
                                                                        <img src="/assets/images/image (2).png" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="detail-box">
                                                                            <h5 className="preview-heading">Sponsored</h5>
                                                                        </div>
                                                                        <div className="detail-box mb-4">
                                                                            <h4 className="preview-heading">Cannes Film Fastival</h4>
                                                                        </div>
                                                                        <div className="preview-detail-small preview-event-know-more">
                                                                            <p className='preview-small'>Sponsored</p>
                                                                            <p className='preview-small preview-know'>Know more</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="recomandation-display-block col-lg-5 p-1">
                                                                    <div className="preview-main-border">
                                                                        <div className="preview-fake-img">

                                                                        </div>
                                                                        <div className="fake-line mt-2">
                                                                            <div className="fake-heading"></div>
                                                                            <div className="fake-know-main mt-2">
                                                                                <div className="fake-p"></div>
                                                                                <div className="fake-know"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="preview-event-know-more">
                                                                            <div className="fake-heading"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-lg-6 preview-right p-0">
                                            <div className="col-lg-12 p-0">
                                                <div className="row">

                                                    <div className="col-lg-6 small-padding-fake" onClick={() => { setAccord(1) }}>
                                                        <h3 className='p-heading'>Feeds</h3>
                                                        <div className='small-bg-main'>
                                                            <div className='post-panel-new'>
                                                                <div className="post-wrapper col-grid-box">
                                                                    <div className="post-title d-flex">
                                                                        <div className="profile">
                                                                            <div className="media d-flex mb-1">
                                                                                <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                                    data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                                    <img src="/assets/images/image (1).png"
                                                                                        className="img-fluid bg-img" alt="user" />
                                                                                </a>
                                                                                <div className="media-body ml-2">
                                                                                    <h5 className='small-p-heading'>Food Market Zone</h5>
                                                                                    <h6><span className="color-grey">Sponsored</span></h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                                                <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="post-details">
                                                                        <div className="recomandation-display-block">
                                                                            <img src="/assets/images/image (2).png" />
                                                                            <div className="small-recom-btn-cont-blk new-recom-btn-cont-blk">
                                                                                <h4>Food Market Zone</h4>

                                                                                <a href="#" className="btn btn-outline">KNOW MORE</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="detail-box">
                                                                            <h5 className="small-tag">This award goes to the coworker who’s always doing the thankless work of keeping the office up to date on pop culture. </h5>
                                                                        </div>
                                                                        <div className="small-Why-this-ad">
                                                                            <p>Why this Ad?</p>
                                                                            <img src="/assets/images/adIcon/Share-icon.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 small-padding-fake" onClick={() => { setAccord(2) }}>
                                                        <h3 className='p-heading'>Podcast</h3>
                                                        <div className='small-bg-main'>
                                                            <div className='post-panel-new'>
                                                                <div className="post-wrapper col-grid-box">
                                                                    <div className="post-title d-flex">
                                                                        <div className="profile">
                                                                            <div className="media d-flex mb-1">
                                                                                <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                                    data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                                    <img src="/assets/images/image (1).png"
                                                                                        className="img-fluid bg-img" alt="user" />
                                                                                </a>
                                                                                <div className="media-body ml-2">
                                                                                    <h5 className='small-p-heading'>Food Market Zone</h5>
                                                                                    <h6><span className="color-grey">Sponsored</span></h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                                                <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-4 preview-img-view ml-2 ">
                                                                        <h6 className='small-p-heading'>Related Products</h6>
                                                                        <h6><span>View all</span></h6>
                                                                    </div>
                                                                    <div className="post-details col-lg-12">
                                                                        <div className="row">
                                                                            <div className="recomandation-display-block col-lg-6 p-1">
                                                                                <div className="small-preview-img">
                                                                                    <img src="/assets/images/image (2).png" />
                                                                                </div>
                                                                                <div>
                                                                                    <div className="detail-box">
                                                                                        <h4 className="small-preview-heading">This award goes...</h4>
                                                                                    </div>
                                                                                    <div className="preview-detail-small">
                                                                                        <p className='small-preview-small'>Sponsored</p>
                                                                                        <p className='small-preview-small preview-know'>Know more</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="recomandation-display-block col-lg-6 p-1">
                                                                                <div className="small-preview-fake-img">

                                                                                </div>
                                                                                <div className="fake-line mt-2">
                                                                                    <div className="fake-heading"></div>
                                                                                    <div className="fake-know-main mt-2">
                                                                                        <div className="fake-p"></div>
                                                                                        <div className="fake-know"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 small-padding-fake" onClick={() => { setAccord(3) }}>
                                                        <h3 className='p-heading'>Groups</h3>
                                                        <div className='small-bg-main'>
                                                            <div className='post-panel-new'>
                                                                <div className="post-wrapper col-grid-box">
                                                                    <div className="post-title d-flex">
                                                                        <div className="profile">
                                                                            <div className="media d-flex mb-1">
                                                                                <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                                    data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                                    <img src="/assets/images/image (1).png"
                                                                                        className="img-fluid bg-img" alt="user" />
                                                                                </a>
                                                                                <div className="media-body ml-2">
                                                                                    <h5 className='small-p-heading'>Food Market Zone</h5>
                                                                                    <h6><span className="color-grey">Sponsored</span></h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                                                <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-2 preview-img-view ml-2 ">
                                                                        <h6 className='small-p-heading'>Suggested Groups</h6>
                                                                    </div>
                                                                    <div className="post-details col-lg-12">
                                                                        <div className="row">
                                                                            <div className="recomandation-display-block col-lg-10 p-1">
                                                                                <div className="small-preview-main-border">
                                                                                    <div className="small-preview-grp-img">
                                                                                        <img src="/assets/images/image (2).png" />
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="detail-box">
                                                                                            <h4 className="small-preview-heading">This award goes...</h4>
                                                                                        </div>
                                                                                        <div className="preview-detail-small">
                                                                                            <p className='small-preview-small'>Sponsored</p>
                                                                                            <p className='small-preview-small preview-know'>Know more</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="recomandation-display-block col-lg-2 p-1">
                                                                                <div className="small-preview-main-border">
                                                                                    <div className="small-preview-fake-img">

                                                                                    </div>
                                                                                    <div className="fake-line mt-2">
                                                                                        <div className="fake-heading"></div>
                                                                                        <div className="fake-know-main mt-2">
                                                                                            <div className="fake-p"></div>
                                                                                            <div className="fake-know"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="small-preview-more">
                                                                        visit all groups
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 small-padding-fake" onClick={() => { setAccord(4) }}>
                                                        <h3 className='p-heading'>BizPages</h3>
                                                        <div className='small-bg-main'>
                                                            <div className='post-panel-new'>
                                                                <div className="post-wrapper col-grid-box">
                                                                    <div className="post-title d-flex">
                                                                        <div className="profile">
                                                                            <div className="media d-flex mb-1">
                                                                                <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                                    data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                                    <img src="/assets/images/image (1).png"
                                                                                        className="img-fluid bg-img" alt="user" />
                                                                                </a>
                                                                                <div className="media-body ml-2">
                                                                                    <h5 className='small-p-heading'>Food Market Zone</h5>
                                                                                    <h6><span className="color-grey">Sponsored</span></h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                                                <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-2 preview-img-view ml-2 ">
                                                                        <h6 className='small-p-heading'>Suggested Groups</h6>
                                                                    </div>
                                                                    <div className="post-details col-lg-12">
                                                                        <div className="row">
                                                                            <div className="recomandation-display-block col-lg-10 p-1">
                                                                                <div className="small-preview-main-border">
                                                                                    <div className="small-preview-grp-img">
                                                                                        <img src="/assets/images/image (2).png" />
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="detail-box">
                                                                                            <h4 className="small-preview-heading">This award goes...</h4>
                                                                                        </div>
                                                                                        <div className="preview-detail-small">
                                                                                            <p className='small-preview-small'>Sponsored</p>
                                                                                            <p className='small-preview-small preview-know'>Know more</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="recomandation-display-block col-lg-2 p-1">
                                                                                <div className="small-preview-main-border">
                                                                                    <div className="small-preview-fake-img">

                                                                                    </div>
                                                                                    <div className="fake-line mt-2">
                                                                                        <div className="fake-heading"></div>
                                                                                        <div className="fake-know-main mt-2">
                                                                                            <div className="fake-p"></div>
                                                                                            <div className="fake-know"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="small-preview-more">
                                                                        Visit all Bizpages
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 small-padding-fake" onClick={() => { setAccord(5) }}>
                                                        <h3 className='p-heading'>MarketPlace</h3>
                                                        <div className='small-bg-main'>
                                                            <div className='post-panel-new'>
                                                                <div className="post-wrapper col-grid-box">
                                                                    <div className="post-title d-flex">
                                                                        <div className="profile">
                                                                            <div className="media d-flex mb-1">
                                                                                <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                                    data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                                    <img src="/assets/images/image (1).png"
                                                                                        className="img-fluid bg-img" alt="user" />
                                                                                </a>
                                                                                <div className="media-body ml-2">
                                                                                    <h5 className='small-p-heading'>Food Market Zone</h5>
                                                                                    <h6><span className="color-grey">Sponsored</span></h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-2 preview-img-view ml-2 ">
                                                                        <h6 className='small-p-heading'>Suggested Bizpages</h6>
                                                                    </div>
                                                                    <div className="post-details col-lg-12">
                                                                        <div className="row">
                                                                            <div className="recomandation-display-block col-lg-5 p-1">
                                                                                <div className="small-preview-grp-post">
                                                                                    <img src="/assets/images/adIcon/preview-ad.png" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="recomandation-display-block col-lg-5 p-1">
                                                                                <div className="small-preview-grp-post">
                                                                                    <img src="/assets/images/image (2).png" />
                                                                                </div>
                                                                                <div>
                                                                                    <div className="detail-box">
                                                                                        <h4 className="small-preview-heading">This award goes...</h4>
                                                                                    </div>
                                                                                    <div className="preview-detail-small">
                                                                                        <p className='small-preview-small'>Sponsored</p>
                                                                                        <p className='small-preview-small preview-know'>Know more</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="recomandation-display-block col-lg-2 p-1">
                                                                                <div className="small-preview-grp-post">
                                                                                    <img src="/assets/images/adIcon/preview-ad.png" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 small-padding-fake" onClick={() => { setAccord(6) }}>
                                                        <h3 className='p-heading'>Events</h3>
                                                        <div className='small-bg-main'>
                                                            <div className='post-panel-new'>
                                                                <div className="post-wrapper col-grid-box">
                                                                    <div className="post-title d-flex">
                                                                        <div className="profile">
                                                                            <div className="media d-flex mb-1">
                                                                                <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                                    data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                                                                    <img src="/assets/images/image (1).png"
                                                                                        className="img-fluid bg-img" alt="user" />
                                                                                </a>
                                                                                <div className="media-body ml-2">
                                                                                    <h5 className='small-p-heading'>Food Market Zone</h5>
                                                                                    <h6><span className="color-grey">Sponsored</span></h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-4 preview-img-view ml-2 ">
                                                                        <h6 className='small-p-heading'>My Hosting Events</h6>
                                                                        <h6><span>View all</span></h6>
                                                                    </div>
                                                                    <div className="post-details col-lg-12">
                                                                        <div className="row">
                                                                            <div className="recomandation-display-block col-lg-7 p-1">
                                                                                <div className="small-preview-event">
                                                                                    <img src="/assets/images/image (2).png" />
                                                                                </div>
                                                                                <div>
                                                                                    <div className="detail-box">
                                                                                        <h5 className="small-preview-heading">Sponsored</h5>
                                                                                    </div>
                                                                                    <div className="detail-box mb-4">
                                                                                        <h4 className="small-preview-heading">Cannes Film Fastival</h4>
                                                                                    </div>
                                                                                    <div className="preview-detail-small preview-event-know-more">
                                                                                        <p className='small-preview-small'>Sponsored</p>
                                                                                        <p className='small-preview-small preview-know'>Know more</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="recomandation-display-block col-lg-5 p-1">
                                                                                <div className="smalls-preview-main-border">
                                                                                    <div className="smalls-preview-fake-img">

                                                                                    </div>
                                                                                    <div className="fake-line mt-2">
                                                                                        <div className="fake-heading"></div>
                                                                                        <div className="fake-know-main mt-2">
                                                                                            <div className="fake-p"></div>
                                                                                            <div className="fake-know"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="preview-event-know-more">
                                                                                        <div className="fake-heading"></div>
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

export default AdPreviewMoreScreen