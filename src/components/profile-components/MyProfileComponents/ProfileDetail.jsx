import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../../Services/Actions/UserProfile/getUserProfileByUserIdAction';

const ProfileDetail = ({ userProfileByUserId }) => {
    const [userDetail, setUserDetail] = useState('');
    const dispatch = useDispatch();

    const updateProfile = () => {
        dispatch(updateUserProfile(userDetail))
    }

    return (
        <>
            <div className="card-title-cont-block">
                <div className="card-title">
                    <h3>Basic info</h3>
                    <div className="settings">
                        <div className="setting-btn">
                            <a data-bs-toggle="modal" data-bs-target="#basicModel" onClick={() => setUserDetail({ fullName: userProfileByUserId.fullName, gender: userProfileByUserId.gender, dob: userProfileByUserId.dob, homeAddress: userProfileByUserId.homeAddress })}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <ul>
                        <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </div>
                            <div className="details">
                                <h5>Name</h5>
                                <h6>{userProfileByUserId.fullName}</h6>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none" className="iw-18 ih-18"><path d="M8 12H6.5V10.9047C9.05937 10.4344 11 8.19687 11 5.5C11 2.4625 8.5375 0 5.5 0C2.4625 0 0 2.4625 0 5.5C0 8.19563 1.94062 10.4344 4.5 10.8781V11.9734H3C2.72388 11.9734 2.5 12.1972 2.5 12.4734V13.4734C2.5 13.7496 2.72388 13.9734 3 13.9734H4.5V15.4734C4.5 15.7496 4.72388 15.9734 5 15.9734H6C6.27619 15.9734 6.5 15.7496 6.5 15.4734V13.9734H8C8.27619 13.9734 8.5 13.7496 8.5 13.4734V12.4734C8.5 12.225 8.275 12 8 12ZM5.5 8.5C3.84594 8.5 2.5 7.15406 2.5 5.5C2.5 3.84562 3.84594 2.5 5.5 2.5C7.15438 2.5 8.5 3.84562 8.5 5.5C8.5 7.15312 7.15312 8.5 5.5 8.5ZM19.5 0H15.9875C15.3194 0 14.9847 0.807813 15.4572 1.28031L16.3809 2.20406L15.6138 2.97125C14.6772 2.32562 13.5884 2.00094 12.4969 2.00094C12.0225 2.00094 11.5462 2.07047 11.0847 2.19256C11.5081 2.90506 11.7978 3.70381 11.9228 4.55725C12.1131 4.52025 12.3063 4.50147 12.4994 4.50147C13.2675 4.50147 14.0359 4.79388 14.6206 5.37866C15.7903 6.54834 15.7903 8.45147 14.6206 9.62241C14.0359 10.2071 13.2675 10.4996 12.4994 10.4996C11.7634 10.4996 11.0319 10.2236 10.4572 9.68678C9.95969 10.2755 9.36563 10.7837 8.68375 11.1665C9.04156 11.3508 9.31406 11.6758 9.43281 12.0671C10.3594 12.6875 11.4281 13 12.5 13C13.9075 13 15.315 12.4631 16.3906 11.3891C18.2966 9.48313 18.5072 6.52656 17.0303 4.38594L17.7975 3.61875L18.7213 4.5425C18.874 4.69528 19.0619 4.76369 19.2463 4.76369C19.6313 4.7625 20 4.4625 20 4.0125V0.5C20 0.223875 19.775 0 19.5 0Z" fill="#81C14B" strokeWidth="0.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <div className="details">
                                <h5>gender</h5>
                                <h6>{userProfileByUserId.gender}</h6>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="iw-18 ih-18"><path d="M16.5 11.955C16.0642 11.955 15.6283 12.0808 15.25 12.3333C14.8798 12.5801 14.4449 12.7118 14 12.7118C13.5551 12.7118 13.1202 12.5801 12.75 12.3333C12.3798 12.0865 11.9449 11.9548 11.5 11.9548C11.0551 11.9548 10.6202 12.0865 10.25 12.3333C9.87983 12.5801 9.4449 12.7118 9 12.7118C8.5551 12.7118 8.12017 12.5801 7.75 12.3333C7.37983 12.0865 6.9449 11.9548 6.5 11.9548C6.0551 11.9548 5.62017 12.0865 5.25 12.3333C4.87983 12.5801 4.4449 12.7118 4 12.7118C3.5551 12.7118 3.12017 12.5801 2.75 12.3333C2.37988 12.0865 1.9449 11.9548 1.5 11.955H16.5ZM6.5 4V5.66667V4ZM9 4V5.66667V4ZM11.5 4V5.66667V4ZM6.5 1.5H6.50833H6.5ZM9 1.5H9.00833H9ZM11.5 1.5H11.5083H11.5ZM16.5 16.5V10.6667C16.5 10.2246 16.3244 9.80072 16.0118 9.48816C15.6993 9.17559 15.2754 9 14.8333 9H3.16667C2.72464 9 2.30072 9.17559 1.98816 9.48816C1.67559 9.80072 1.5 10.2246 1.5 10.6667V16.5H16.5ZM14 9V7.33333C14 6.89131 13.8244 6.46738 13.5118 6.15482C13.1993 5.84226 12.7754 5.66667 12.3333 5.66667H5.66667C5.22464 5.66667 4.80072 5.84226 4.48816 6.15482C4.17559 6.46738 4 6.89131 4 7.33333V9H14Z" stroke="#81C14B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <div className="details">
                                <h5>Birthday</h5>
                                <h6>{userProfileByUserId.dob}</h6>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="iw-18 ih-18"><path d="M9.62583 3.16667C8.81917 7.975 5.725 12.0083 1.5 14.1075M1.5 3.16667H11.5H1.5ZM6.5 1.5V3.16667V1.5ZM7.37333 11.0833C6.09009 9.75488 5.0629 8.2011 4.34333 6.5L7.37333 11.0833ZM9.41667 14H15.25H9.41667ZM8.16667 16.5L12.3333 8.16667L16.5 16.5H8.16667Z" stroke="#81C14B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <div className="details">
                                <h5>Language</h5>
                                <h6>English, Hindi, Gujrati</h6>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </div>
                            <div className="details">
                                <h5>Relationship</h5>
                                <h6>single</h6>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="details">
                                <h5>Current Residence</h5>
                                <h6>{userProfileByUserId.homeAddress || ''}</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="modal fade" id="basicModel" tabIndex="-1" role="dialog" aria-labelledby="basicModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Basic Info</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="ed-model-block p-2">
                                <form className="theme-form">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="Name" value={userDetail.fullName} onChange={(e) => { setUserDetail({ ...userDetail, fullName: e.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <select id="inputState" className="form-control" value={userDetail.gender} onChange={(e) => { setUserDetail({ ...userDetail, gender: e.target.value }) }}>
                                            <option>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Birthday</label>
                                        <input type="date" className="form-control" placeholder="DD-MM-YYYY" name="dob" value={userDetail.dob} onChange={(e) => { setUserDetail({ ...userDetail, dob: e.target.value }) }} />

                                    </div>
                                    <div className="form-group">
                                        <label>Language</label>
                                        <select id="inputState" className="form-control">
                                            <option>Select Language</option>
                                            <option>English</option>
                                            <option>Hindi</option>
                                            <option>Dutch</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Relationship</label>
                                        <select id="inputState" className="form-control">
                                            <option>Select Relationship</option>
                                            <option>Single</option>
                                            <option>In Relationship</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Current Residence</label>
                                        <textarea type="text" className="form-control" placeholder="Current Residence" rows="5" value={userDetail.homeAddress} onChange={(e) => { setUserDetail({ ...userDetail, homeAddress: e.target.value }) }}></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-solid" onClick={updateProfile} data-bs-dismiss="modal" >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDetail
