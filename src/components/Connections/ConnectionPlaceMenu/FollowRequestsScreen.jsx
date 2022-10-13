import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { blockUser } from '../../../Services/Actions/Common/userBlockUnblockAction';
import { getUserFollowingRequests } from '../../../Services/Actions/UserProfile/userFollowingRequestsAction';
import Header from '../../Header';
import LeftSidebar from '../../LeftSidebar';
import RightSidebar from '../../RightSidebar';
import ConnectionPlaceMenu from './ConnectionPlaceMenu';

const FollowRequestsScreen = () => {
    const { userFollowingRequests } = useSelector(state => state.userFollowingRequestsData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserFollowingRequests())
    }, [])

    // BLOCK USER
    const handleBlock = (id) => {
        dispatch(blockUser(id));
    };
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
                                    <NavLink to="/" className="mp-sell-btn">Setting</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <ConnectionPlaceMenu />
                    <div className="mppage-heading">
                        <div className="group-custom-block">
                            <div className="heading-podcast-blk">
                                <h3>Pending Request</h3>
                                <NavLink to="/FollowRequests" className="single-ancor-blk">See All →</NavLink>
                            </div>
                            <div className="row">
                                {
                                    userFollowingRequests && userFollowingRequests.map((request) => {
                                        return <div className="col-lg-6 col-12">
                                            <div className="mp-releted-pro-blk mp-releted-pro-blk-new content-mp-block d-flex justify-content-between">
                                                <div className="media-body d-md-block">
                                                    <div class="media media-new d-sm-flex">
                                                        <div class="user-img">
                                                            <img src={request.profileImage || 'https://sociomee-dev.s3.ap-south-1.amazonaws.com/userProfileDp/LhXHReJcWmnBW.jpg'} className="img-fluid bg-img connection-profile connection-profile-new" alt="shivam singh" />
                                                            <span class="available-stats online"></span>
                                                        </div>
                                                        <div class="media-body d-md-block pl-2">
                                                            <h4 className='m-0'>{request.fullName || 'name'}</h4>
                                                            <span>{request.userName || 'userName'}</span>
                                                        </div>
                                                    </div>
                                                    <div className="people-likes matual-friend-sec">
                                                        <ul className="matual-friend-blk">
                                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                data-name="sufiya eliza" data-img="/assets/images/story-2.jpg">
                                                                <img src="/assets/images/story-2.jpg" className="img-fluid bg-img" alt="" />
                                                            </li>
                                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                data-name="sufiya eliza" data-img="/assets/images/story-3.jpg">
                                                                <img src="/assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
                                                            </li>
                                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                data-name="sufiya eliza" data-img="/assets/images/story-4.jpg">
                                                                <img src="/assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
                                                            </li>
                                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                data-name="sufiya eliza" data-img="/assets/images/story-3.jpg">
                                                                <img src="/assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
                                                            </li>
                                                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                data-name="sufiya eliza" data-img="/assets/images/story-4.jpg">
                                                                <img src="/assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
                                                            </li>
                                                        </ul>
                                                        <h6><span className="green">75 Mutual</span> followers</h6>
                                                    </div>
                                                </div>
                                                <div className="media-body-new people-likes matual-friend-sec">
                                                    <div>
                                                        <button className='conn-btn'>
                                                            <img src="/assets/images/icons/Frame 2560.svg" className="img-fluid bg-img" alt="" />
                                                        </button>
                                                        <button className='conn-btn'>
                                                            <img src="/assets/images/icons/Frame 2551.svg" className="img-fluid bg-img" alt="" />
                                                        </button>
                                                        <button className="gallery-img-sublink gallery-img-sublink-new request-group-dots">
                                                            <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal drop-menu-gal-new">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#" className='orange-text' onClick={() => {
                                                                            handleBlock(request.id);
                                                                        }}>
                                                                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16 "><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>
                                                                            </svg>
                                                                            Block User</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className='red-text'><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>Report User</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </button>
                                                        <p className="gallery-img-sublink">
                                                            <a href="/" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                                                <ul>
                                                                    <li>
                                                                        <a href="/"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </p>
                                                    </div>
                                                    <h6>1 day ago</h6>
                                                </div>

                                            </div>
                                        </div>
                                    })
                                }
                                {
                                    userFollowingRequests.length <= 0 && <h3 className='text-center'>No Requests Found</h3>
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

export default FollowRequestsScreen