import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdmanagerHeaderR from '../../AdmanagerHeaderR/AdmanagerHeaderR'
import PreviewMoreSection from './Sections/PreviewMoreSection';
import PreviewsSection from './Sections/PreviewsSection';

const AdsPreviewScreen = () => {
  // toggle section state
  const [morePreview, setMorePreview] = useState(false);

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
                  <p className='ad-count-heading'>Ad Preview</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 pad-zero">
              <h3 className='p-heading'></h3>
              {/* <h3 className='p-heading' onClick={error}>Preview</h3> */}

              <div className="row ad-types-of-type-map preview-main">
                <div className="col-lg-5 preview-left pad-zero">
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

                      <Link to="/Ad/AdPreviewMore" >
                        <button className="budget-btn btn Publish-btn">
                          Pay € 980 and Publish Ad
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>



                {/* POST */}
                {morePreview ? (
                  <PreviewMoreSection setMorePreview={setMorePreview} />
                ) : (
                  // POST MORE PREVIEW
                  <PreviewsSection setMorePreview={setMorePreview} />
                )}

              </div>



            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AdsPreviewScreen