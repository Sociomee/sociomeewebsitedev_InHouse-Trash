import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUserProfile } from '../../../Services/Actions/UserProfile/getUserProfileByUserIdAction';

const ProfileBio = ({ userProfileByUserId }) => {
    const [userDetail, setUserDetail] = useState('');
    const dispatch = useDispatch();
    return (
        <>
            <div className="card-title-cont-block">
                <div className="card-title">
                    <h3>Bio</h3>
                    <div className="settings">
                        <div className="setting-btn">
                            <a data-bs-toggle="modal" data-bs-target="#bioModel" onClick={() => setUserDetail({ bio: userProfileByUserId.bio })}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <ul>
                        <li>
                            <div className="icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                            </div>
                            <div className="details">
                                <h6>{userProfileByUserId.bio || ''}</h6>
                                <p>Joined on - {userProfileByUserId.joinedAt}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="bioModel" tabIndex="-1" role="dialog" aria-labelledby="bioModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Bio</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <form className="theme-form p-2">
                                <div className="form-group">
                                    <label>Bio</label>
                                    <textarea className="form-control" placeholder="Bio" value={userDetail.bio} onChange={(e) => setUserDetail({ bio: e.target.value })}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-solid" onClick={() => dispatch(updateUserProfile(userDetail))} data-bs-dismiss="modal" >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileBio
