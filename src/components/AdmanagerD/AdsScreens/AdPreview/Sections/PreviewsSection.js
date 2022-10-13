import React from 'react'

const PreviewsSection = ({setMorePreview}) => {
    return (
        <>
            <div className="col-lg-5 preview-right">

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
                            <div className='d-flex head-less-preview'>
                                <img src="/assets/images/adIcon/Mask1.png" alt="" />
                                <p className='ml-1' onClick={()=>setMorePreview(true)}>More Preview</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='post-panel-new'>
                    <div className="post-wrapper col-grid-box">
                        <div className="post-title">
                            <div className="profile">
                                <div className="media d-flex mb-1">
                                    <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="/assets/images/image (1).png">
                                        <img src="/assets/images/image (1).png"
                                            className="img-fluid bg-img" alt="user" />
                                    </a>
                                    <div className="media-body ml-2">
                                        <h5 className='p-heading'>Food Market Zone</h5>
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
                                <img src="/assets/images/image (2).png" />
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
        </>
    )
}

export default PreviewsSection