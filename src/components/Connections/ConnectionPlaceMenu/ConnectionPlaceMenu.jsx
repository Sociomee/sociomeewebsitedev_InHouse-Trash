import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { loadAllUserConnection } from '../../../Services/Actions/Common/getUserConnectionAction';
import { loadProfileByUserId } from '../../../Services/Actions/UserProfile/getUserProfileByUserIdAction';
import '../Style.css'

const ConnectionPlaceMenu = () => {
    // get user profile by user id 
    const { userProfileByUserId } = useSelector(state => state.getUserProfileByUserIdData);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProfileByUserId());
    }, [])

    // GET FOLLOWING DATA
    const { getUserConnection } = useSelector(state => state.GetUserConnectionData)
    useEffect(() => {
        dispatch(loadAllUserConnection())
    }, [])

    return (
        <>
            <div className="marketplace-menu">
                <div className="row">
                    <div className="col-col-12">
                        <ul className="mp-left-menu">
                            <li>
                                <NavLink to="/Connection">All</NavLink>
                            </li>
                            <li>
                                <NavLink to="/FollowRequests">Follow Request ({ })</NavLink>
                            </li>
                            <li>
                                <NavLink to="/FollowingScreen">Following ({userProfileByUserId.followingCount})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/FollowersScreen">Followers ({userProfileByUserId.followersCount})</NavLink>
                            </li>
                            <li>
                                <a to="#">SocioMates (100)</a>
                            </li>
                            <li className='dropdown'>
                                <NavLink to="/ConnectionMenuScreen" className="dropbtn" >
                                    Categries
                                    <i class="fa fa-caret-down" aria-hidden="true" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                </NavLink>

                                <div className="dropdown-content-new">
                                    {
                                        getUserConnection.rows?.map((request) => {
                                            // return <NavLink to={`/ConnectionMenuScreen/${request.id}`}>
                                            //     {request.name?.slice(0, 15) || 'name'} (0)
                                            // </NavLink>
                                            return <a href="#">
                                                {request.name?.slice(0, 15) || 'name'} (0)
                                            </a>
                                        })
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ConnectionPlaceMenu