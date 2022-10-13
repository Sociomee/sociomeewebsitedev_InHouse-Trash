import React from 'react'

const SuggestedAd = ({ ad }) => {
    return (
        <>
            <div className="post-title">
                <div className="profile">
                    <div className="media"><a className="user-img">
                        <img src={ad.user.profileImage} className="img-fluid bg-img" alt="user" />

                    </a>
                        <div className="media-body">
                            <h5>{ad.user.fullName}</h5>
                            <h6>Sponsored</h6>
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
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                        save post
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>unfollow sufiya
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post-details">
                <div className="gibrelter-ads-block">
                    <div className="detail-box">
                        <h3>{ad?.adMedias[0]?.heading}</h3>
                    </div>
                    <img className="ads-image-blk" src={ad?.adMedias[0]?.file} />
                    <div className="gibrelter-ads-btn-cont-blk">
                        <div className="gibrelter-ads-btn-cont">
                            <h4>{ad?.adType?.descriptions}</h4>
                            {/* <p>Turn any idea into tailor-made apps, website</p> */}
                        </div>
                        <a href={ad?.websiteLink} className="btn btn-primary" target='_blank'>{ad?.adMedias[0]?.adCallToActionMaster?.name}</a>
                    </div>
                    <div className="share-whythisads-blk">
                        <a href="#" className="whythisads-btn">Why this ad?</a>
                        <a href="#" className="adsshare-btn">
                            <div className="post-btn-cust">
                                <img src="assets/images/share.png" />
                            </div>Share</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuggestedAd
