import React, { useState } from 'react'

const ProfileContactDetail = ({ userProfileByUserId }) => {
    const [userDetail, setUserDetail] = useState('');
    return (
        <>
            <div className="card-title-cont-block">
                <div className="card-title">
                    <h3>Contact Detail</h3>
                    <div className="settings">
                        <div className="setting-btn">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#contactInfoModel" onClick={() => setUserDetail({ mobile: userProfileByUserId.mobile, email: userProfileByUserId.email })}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <ul>
                        <li>
                            <div className="icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="details">
                                <h5>Mobile Number</h5>
                                <h6>{userProfileByUserId.mobile || ''}</h6>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="details">
                                <h5>Email Address</h5>
                                <h6>{userProfileByUserId.email || ''}</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="contactInfoModel" tabIndex="-1" role="dialog" aria-labelledby="contactInfoModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Contact Info</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="ed-model-block p-2">
                                <form className="theme-form">
                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input type="text" className="form-control" placeholder="Mobile Number" value={userDetail?.mobile} />
                                    </div>
                                    <div className="form-group">
                                        <label>Secondary Number</label>
                                        <input type="text" className="form-control" placeholder="Secondary Number" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id</label>
                                        <input type="text" className="form-control" placeholder="Email Id" value={userDetail?.email} />
                                    </div>
                                    <div className="form-group">
                                        <label>Secondary Email Id</label>
                                        <input type="text" className="form-control" placeholder="Secondary Email Id" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-solid">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileContactDetail
