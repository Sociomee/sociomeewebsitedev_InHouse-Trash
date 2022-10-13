import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadProfileByUserId } from '../../Services/Actions/UserProfile/getUserProfileByUserIdAction';
import './profileComponents.css'

const ProfileCover = () => {

  // get user profile by user id 
  const { userProfileByUserId } = useSelector(state => state.getUserProfileByUserIdData);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProfileByUserId());
  }, [])


  return (
    <>

      <div className="profile-cover">
        <img src={userProfileByUserId.coverImage || "assets/images/user-cover-bg.jpg"} className="img-fluid bg-img" alt="cover" />
        <div className="profile-box d-lg-block d-none">
          <div className="profile-content">
            <a href="/" className="image-section">
              <div className="profile-img">
                <div>
                  <img src={userProfileByUserId.profileImage} className="img-fluid bg-img" alt="profile" />
                </div>
                <span className="stats">
                  <img src="/assets/images/profile-icon.png" className="img-fluid" alt="verified" />
                </span>
              </div>
            </a>
            <div className="profile-detail">
              <a href="/"><h2>{userProfileByUserId.fullName}</h2></a>
              <h5>Student</h5>
              <div className="description">
                <p>{userProfileByUserId.addressBy}</p>
              </div>
              <div className="counter-stats">
                <ul id="counter">
                  <li>
                    <h3 className="counter-value" data-count="546">{userProfileByUserId.followingCount}</h3>
                    <h5>Following</h5>
                  </li>
                  <li>
                    <h3 className="counter-value" data-count="26335">{userProfileByUserId.totalPostCount}</h3>
                    <h5>Posts</h5>
                  </li>
                  <li>
                    <h3 className="counter-value" data-count="6845">{userProfileByUserId.followersCount}</h3>
                    <h5>Followers</h5>
                  </li>
                </ul>
              </div>
              <div className="profile-cover profile-cover-new">
                <a href="/" className="btn btn-solid btn-group btn-grp-new">
                  {/* Edit profile */}
                  <ul>
                    <li className="choose-file">
                      <a href="">
                        Edit Profile
                      </a>
                      <input type="file" />
                    </li>
                  </ul>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
          <a className="btn-white btn-cover" href="/" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            edit cover
          </a>
          <div className="dropdown-menu dropdown-menu-right custom-dropdown">
            <ul>
              <li>
                <a href="/" data-bs-toggle="modal" data-bs-target="#choosePhoto"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>choose photo</a>
              </li>
              <li className="choose-file">
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>upload photo</a>
                <input type="file" />
              </li>
              <li>
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>remove photo</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-lg-none d-block">
        <div className="profile-box">
          <div className="profile-content">
            <div className="image-section">
              <div className="profile-img">
                <div>
                  <img src="/assets/images/my-profile.jpg" className="img-fluid bg-img" alt="profile" />
                </div>
                <span className="stats">
                  <img src="/assets/images/verified-1.png" className="img-fluid" alt="verified" />
                </span>
              </div>
            </div>
            <div className="profile-detail">
              <a href="/"><h2>kelin jasen <span>❤🌹</span></h2></a>
              <h5>Student</h5>
              <div className="description">
                <p>Kelin-Jasen123<span>Lives in Milan, Italy</span></p>
              </div>
              <div className="counter-stats">
                <ul id="counter">
                  <li>
                    <h3 className="counter-value" data-count="546">546</h3>
                    <h5>following</h5>
                  </li>
                  <li>
                    <h3 className="counter-value" data-count="26335">845</h3>
                    <h5>likes</h5>
                  </li>
                  <li>
                    <h3 className="counter-value" data-count="6845">965</h3>
                    <h5>followers</h5>
                  </li>
                </ul>
              </div>
              <a href="/" className="btn btn-solid">Edit profile</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCover
