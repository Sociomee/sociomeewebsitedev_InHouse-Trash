import React from 'react'
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import './style.css';

const GroupSuggesion = () => {
    var ownedGroupSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3 
                }
            }
        ]
    };

    return (
        <>
            <div className="group-custom-block group-custom-block-hashtag">
                <div className="heading-podcast-blk heading-podcast-blk-new d-flex">
                    <h3>Suggested for You</h3>
                    <p>Groups you might be interested in.</p>
                </div>
                <Slider {...ownedGroupSettings} className="default-space">
                    <div>
                        <div className="group-slide-box">
                            <NavLink to="/GroupDetail"><img src="/assets/images/group-img-1.jpg" className="img-fluid group-img" /></NavLink>
                            <div className="group-content">
                                <h4>Action Dhamaka</h4>
                                <div className="groupmember-blk">
                                    <span>78.9k members</span> • <span>10 Posts</span>
                                </div>
                                <div className="group-buttons-blk">
                                    <a href="#" className="group-btn group-btn-new green-clr-btn">Join Group</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="group-slide-box">
                           
                            <NavLink to="/GroupDetail"><img src="/assets/images/group-img-1.jpg" className="img-fluid group-img" /></NavLink>
                            <div className="group-content">
                                <h4>Action Dhamaka 2</h4>
                                <div className="groupmember-blk">
                                    <span>78.9k members</span> • <span>10 Posts</span>
                                </div>
                                <div className="group-buttons-blk">
                                    <a href="#" className="group-btn group-btn-new green-clr-btn">Join Group</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default GroupSuggesion