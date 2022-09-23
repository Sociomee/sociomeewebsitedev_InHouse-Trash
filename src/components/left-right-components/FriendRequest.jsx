import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveUserFollowingRequests, getUserFollowingRequests, rejectUserFollowingRequests } from '../../Services/Actions/UserProfile/userFollowingRequestsAction';

const FriendRequest = () => {
    const { userFollowingRequests } = useSelector(state => state.userFollowingRequestsData)
    const dispatch = useDispatch();

    const approveRequestHandler = (id) => {
        console.log(id)
        dispatch(approveUserFollowingRequests(id))
    }

    const rejectRequestHandler = (id) => {
        dispatch(rejectUserFollowingRequests(id))
    }

    useEffect(() => {
        dispatch(getUserFollowingRequests())
    }, [])

    return (
        <>
            <div className="suggestion-box section-b-space">
                <div className="card-title">
                    <h3 className="fr-head">Follow Requests <small>{userFollowingRequests?.length} Request</small></h3>
                    <div className="settings">
                        <div className="setting-btn">
                            <a className="d-flex" onClick={()=>dispatch(getUserFollowingRequests())}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-theme strokeWidth-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="suggestion-content ratio_115">
                    <div className="list-content">
                        <ul className="friend-request-block">
                            {
                                userFollowingRequests && userFollowingRequests.map((request) => {
                                    return <li key={request.id}>
                                        <div className="media">
                                            <div className="img-part">
                                                <img src={request?.profileImageThumb} className="img-fluid bg-img" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4>{request?.fullName}</h4>
                                                <div className="friend-request-btn">
                                                    <a className="fr-btn confirm-btn text-white" onClick={() => approveRequestHandler(request.id)}>Confirm</a>
                                                    <a className="fr-btn reject-btn" onClick={() => rejectRequestHandler(request.id)}>Reject</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="time-hours-blk">2 h</div> */}
                                    </li>
                                })
                            }
                            {
                                userFollowingRequests.length <= 0 && <h3 className='text-center'>No Requests Found</h3>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FriendRequest