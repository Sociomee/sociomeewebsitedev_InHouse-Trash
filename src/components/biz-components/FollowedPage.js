import { Pagination, Rating, Stack } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import Header from '../Header'
import LeftSidebar from '../LeftSidebar'
import RightSidebar from '../RightSidebar'
import BizMenuTab from './Components/BizMenuTab'

const FollowedPage = () => {

    const CardDataInfo = () => {
        const AvatarProfile = [
            {
                img: "assets/images/story-2.jpg"

            },
            {
                img: "assets/images/story-3.jpg"

            },
            {
                img: "assets/images/story-4.jpg"

            },
            {
                img: "assets/images/story-3.jpg"
            },
            {
                img: "assets/images/story-4.jpg"

            }
        ]
        const dropdownData = ["Hide from Timeline", "Copy", "Edit Post", "Delete", "Share"]
        return (
            <>
                <div className="group-slide-box">
                    <div className="gallery-img-sublink">
                        <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
                        <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                            <ul>
                                {dropdownData.map((data) => (
                                    <li>
                                        <Link to="#">{data}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-1.jpg" className="img-fluid group-img" /><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg" /></div></NavLink>
                    <div className="group-content">
                        <h4 className='CardTextHeading'>Traditional Wedding </h4>
                        <h5>Music Equipment</h5>
                        <div className='d-flex justify-content-center'>
                            <Stack spacing={1}>
                                <Rating name="read-only" defaultValue={2.5} readOnly />
                            </Stack>
                        </div>
                        <div className="people-likes matual-friend-sec">
                            <ul className="matual-friend-blk">
                                {
                                    AvatarProfile.map((e) => (
                                        <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                            data-name="sufiya eliza" data-img={e.img}>
                                            <img src={e.img} className="img-fluid bg-img" alt="" />
                                        </li>
                                    ))
                                }
                            </ul>
                            <h6>+79k Followers</h6>
                        </div>
                        <div className="group-buttons-blk">
                            <Link to="#" className="group-btn green-clr-btn">Followed</Link>
                            <Link to="#" className="group-btn">invite</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const FollowedPageData = () => {
        return (
            <>
                <Row>
                    <Col xl="3" lg="4" md="6" sm="6" >
                        <CardDataInfo />
                    </Col>
                    <Col xl="3" lg="4" md="6" sm="6" >
                        <CardDataInfo />
                    </Col>
                    <Col xl="3" lg="4" md="6" sm="6" >
                        <CardDataInfo />
                    </Col>
                    <Col xl="3" lg="4" md="6" sm="6" >
                        <CardDataInfo />
                    </Col>
                </Row>
            </>
        )
    }
   
    
    // main_Return_fUnction
    return (
        <>
            <Header />
            <div className="page-body container-fluid profile-page">
                <LeftSidebar />
                <div className="page-center">
                    <div className="group-heading"><h2>Biz Page</h2></div>
                    <BizMenuTab />
                    <div className="container-fluid section-t-space px-0">
                        <div className="group-single-list-block">
                            <FollowedPageData />
                            <FollowedPageData />
                        </div>

                    </div>
                    <div className='d-flex justify-content-center'>
                        CustomPagination
                    </div>
                </div>
                <RightSidebar />
            </div>
        </>
    )
}

export default FollowedPage