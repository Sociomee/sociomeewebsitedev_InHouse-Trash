import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadAllUserFollowing } from '../../../Services/Actions/Common/getUserFollowingAction';
import Header from '../../Header';
import LeftSidebar from '../../LeftSidebar';
import RightSidebar from '../../RightSidebar';
import ConnectionPlaceMenu from './ConnectionPlaceMenu';

const FollowingScreen = () => {
    const { getUserFollowing } = useSelector(state => state.GetUserFollowingData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllUserFollowing())
    }, [])
    return (
        <>
            <Header></Header>
            <div className="page-body container-fluid profile-page">
                <LeftSidebar></LeftSidebar>
                <div className="page-center">
                    {/* <MarketplaceMenu></MarketplaceMenu> */}
                    <div className="mp-head-blk mp-head-blk-new col-lg-12 d-flex">
                        <h2 className="col-lg-6 p-0">Connection</h2>

                        <div className="col-lg-6">
                            <ul className="mp-right-btns">
                                <li>
                                    <div className="search-box-mp">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-16 icon-light"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" className="form-control search-type" placeholder="find friends..." />
                                    </div>
                                </li>
                                <li>
                                    <a href="/" className="mp-filter-btn" data-bs-toggle="modal" data-bs-target="#mpfiltermodel">
                                        <img src="/assets/images/icons/sliders.png" alt="slider" className='ml-2' />
                                        Filter
                                    </a>
                                </li>
                                <li>
                                    <NavLink to="/MpSell" className="mp-sell-btn">Setting</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <ConnectionPlaceMenu />

                    {/* MAIN */}
                    <div className="mppage-heading">
                        <div className="group-custom-block">
                            <div className="heading-podcast-blk">
                                <h3>Following</h3>
                                <NavLink to="/" className="single-ancor-blk">See All →</NavLink>
                            </div>
                            <div className="row">
                                {
                                    getUserFollowing && getUserFollowing.rows?.map((request) => {
                                        return <div className="col-lg-4 col-12 p-1">
                                            <div className="mp-releted-pro-blk mp-releted-pro-blk-new content-mp-block d-flex justify-content-between">
                                                <div className="media-body d-md-block col-lg-12">
                                                    <div class="media media-new d-sm-flex">
                                                        <div class="user-img">
                                                            <img src={request.profileImage || 'https://sociomee-dev.s3.ap-south-1.amazonaws.com/userProfileDp/LhXHReJcWmnBW.jpg'} className="img-fluid bg-img connection-profile connection-profile-new" alt="shivam singh" />
                                                            <span class="available-stats online"></span>
                                                        </div>
                                                        <div class="media-body d-md-block pl-2">
                                                            <h4 className='m-0'>{request.fullName?.slice(0, 15) || 'name'}</h4>
                                                            <span>@{request.userName || 'userName'}</span>
                                                            <p>Professional Guitarist</p>
                                                        </div>
                                                        <div className='mr-4'>
                                                            <p className='red-text'>Unfollow</p>
                                                        </div> 
                                                        <button className="gallery-img-sublink gallery-img-sublink-new request-group-dots">
                                                            <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
                                                                </svg>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal drop-menu-gal-new-follower">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#" className=''><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16 "><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>Unfollow</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className='orange-text'><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16 "><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>Block User</a>
                                                                    </li> 
                                                                    <li>
                                                                        <a href="#" className='red-text'><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>Report User</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                                {
                                    getUserFollowing.length <= 0 && <h3 className='text-center'>No Followers Found</h3>
                                }
                            </div>
                        </div>
                    </div>

                </div>

                <RightSidebar></RightSidebar>
            </div>
        </>
    )
}

export default FollowingScreen