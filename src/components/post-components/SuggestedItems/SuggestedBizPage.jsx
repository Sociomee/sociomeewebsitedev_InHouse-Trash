import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const SuggestedBizPage = ({bizPage}) => {
    var bizPageSettings = {
        dots: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        centerMode: true,
        centerPadding: '80px',
        responsive: [{
            breakpoint: 1800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '100px'
            }
        }, {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '60px'
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '60px'
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '60px'
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '60px'
            }
        }
        ]
    };
    return (
        <>
                <div className="post-details">
                    <div className="img-wrapper">
                        <div className="slider-section bizslider-sec">
                            <div className="home-frd-sl-blk">
                                <h3>Suggested BizPages</h3>
                                <div className="setting-btn ms-auto setting-dropdown no-bg">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </div>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>Hide</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>Report</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Slider {...bizPageSettings} className="ratio_landscape default-space no-arrow">
                                {
                                    bizPage?.suggestedBusiness && bizPage?.suggestedBusiness?.map((page)=>{
                                        return  <div key={page?.id}>
                                        <Link to={`/BizDetail/${page?.id}`}>
                                    <div className="bizpage-block">
                                        <img src={page.logoUrl} alt=''/>
                                        <h4>{page.name}</h4>
                                        <div className="people-likes matual-friend-sec">
                                            <ul className="matual-friend-blk">
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
                                                    <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt="" />
                                                </li>
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                                    <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
                                                </li>
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                                    <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
                                                </li>
                                            </ul>
                                            <h6>+12 Likes</h6>
                                        </div>
                                    </div>
                                        </Link>
                                </div>
                                    })
                                }
                            </Slider>
                            <a href="#" className="visit-button-text">Visit All Pages <i className="ti-angle-double-right"></i></a>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SuggestedBizPage
