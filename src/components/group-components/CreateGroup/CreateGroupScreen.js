import React, { useState } from 'react'
import Slider from 'react-slick'
import Header from '../../Header'
import LeftSidebar from '../../LeftSidebar'
import RightSidebar from '../../RightSidebar'
import GroupMenu from '../GroupMenu'

const CreateGroupScreen = () => {
    // Temp Images Variable
    const [tempCoverImage, setTempCoverImage] = useState('');
    const [tempLogo, setTempLogo] = useState('');

    var FriendSuggestsettings = {
        dots: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        centerMode: true,
        centerPadding: '30px',
        responsive: [{
            breakpoint: 1800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        }, {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        }
        ]
    };
    return (
        <>
            <Header></Header>
            <div className="page-body container-fluid profile-page">
                <LeftSidebar></LeftSidebar>
                <div className="page-center">
                    <div className="container-fluid section-t-space px-0">
                        <div className="col-lg-12 p-0">
                            <div className="row">
                                <div className="col-lg-3 group-main-block p-0">
                                    <div className="content-left">
                                        <div className="suggestion-box section-b-space">
                                            <div className="card-title">
                                                <h3>Create Group</h3>
                                            </div>
                                            <div className="suggestion-content ratio_115 no-arrow frz-sug-slider-sec  biz-cration-fsslide-preview">
                                                <div className="form-group">
                                                    <label>Group Category</label>
                                                    <select id="inputState" className="form-control" name="isPrivate">
                                                        <option value='0'>Select Group Category</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Group Name</label>
                                                    <input type="text" className="form-control" placeholder='Name the group' />
                                                </div>
                                                <div className="form-group">
                                                    <label>Description </label>
                                                    <textarea className="form-control" name="" id="" cols="15" rows="5"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label>Group Privacy</label>
                                                    <div className='grp-privacy mb-2'>
                                                        <input type="radio" />
                                                        <div className="ml-2">
                                                            <h4 className='mb-1 grp-privacy-h'>Public</h4>
                                                            <p className='grp-privacy-p'>Anyone can see your group post and members</p>
                                                        </div>
                                                    </div>
                                                    <div className='grp-privacy mt-2'>
                                                        <input type="radio" />
                                                        <div className="ml-2">
                                                            <h4 className='mb-1 grp-privacy-h'>Private</h4>
                                                            <p className='mb-1 grp-privacy-p'>Anyone can see your group post and members</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Upload</label>
                                                    <p>Add your cover Image</p>
                                                    <input type="file" class="form-control" required=""></input>
                                                </div>
                                                <div className="form-group">
                                                    <div className="group-buttons-blk">
                                                        <a href="#" className="group-btn green-clr-btn new-create-right">Create Group</a>
                                                        <a href="#" className="group-btn new-create-right">Cancel</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 group-main-block p-0">
                                    <div className="col-md-12">
                                        <div className="group-details-top biz-details-top biz-cration-preview">
                                            <div className="grp-preview">
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="biz-user-pro-blk-new">
                                                                <h5>Preview</h5>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="group-buttons-blk">
                                                                <a href="#" className="group-btn green-clr-btn new-create-right">Create Group</a>
                                                                <a href="#" className="group-btn new-create-right">Cancel</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gd-top-block grp-create-bg" style={{ background: "url(/assets/images/grp/rdxv.png)" }} >
                                            </div>
                                            <div className="heading-title-blk head-title-biz">
                                                <div className="row align-items-center">
                                                    <div className="grp-preview">
                                                        <div className="col-lg-12">
                                                            <div className="row">
                                                                <div className="col-lg-10">
                                                                    <div className="biz-user-pro-blk-new">
                                                                        <h5>Group Name</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <div className="group-buttons-blk">
                                                                        <p className="">--</p>
                                                                        <p className="">--</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-8 col-lg-8 col-12 order-lg-1">
                                                        <div className="gd-content-area-top-blk">
                                                            <div className="groupmember-blk">
                                                                <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Privacy group</span> • <span>Catagory</span>
                                                            </div>
                                                            <div>
                                                                <p>
                                                                    Using his Minions, 11-year-old Gru prepares to become a supervillain, which causes a confrontation with an evil group.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-4 col-12 order-lg-3">
                                                        <div className="create-biz-btn">
                                                            <button className="btn btn-primary green-clr-btn">Invite</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="profile-menu section-t-space biz-cration-menu-preview">
                                            <ul>
                                                <li>
                                                    <a href="/" className="active-disable">
                                                        <h6>Discussion</h6>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <h6>Members</h6>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <h6>About</h6>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul className="right-menu d-xl-flex d-none biz-cration-menu-preview">
                                                <li>
                                                    <a href="/">
                                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                                        <h6>Setting</h6>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="container-fluid section-t-space px-0 col-lg-12">
                                            <div className="page-content row">
                                                <div className="col-lg-5">
                                                    <div className="gallery-section section-b-space">
                                                        <div className="gallery-top">
                                                            <div className="card-title">
                                                                <h3>gallery</h3>
                                                            </div>
                                                        </div>
                                                        <div className="portfolio-section ratio_square">
                                                            <div className="container-fluid p-0">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="row">
                                                                            <div className="col-6 ">
                                                                                <div className="overlay">
                                                                                    <div className="portfolio-image">
                                                                                        <a href="/" data-bs-toggle="modal"
                                                                                            data-bs-target="#imageModel">
                                                                                            <img src="/assets/images/event-bg.jpg" alt=""
                                                                                                className="img-fluid bg-img" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="overlay">
                                                                                    <div className="portfolio-image">
                                                                                        <a href="/" data-bs-toggle="modal"
                                                                                            data-bs-target="#imageModel">
                                                                                            <img src="/assets/images/event-bg.jpg" alt=""
                                                                                                className="img-fluid bg-img" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="overlay">
                                                                                    <div className="portfolio-image">
                                                                                        <a href="/" data-bs-toggle="modal"
                                                                                            data-bs-target="#imageModel">
                                                                                            <img src="/assets/images/event-bg.jpg" alt=""
                                                                                                className="img-fluid bg-img" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="overlay">
                                                                                    <div className="portfolio-image">
                                                                                        <a href="/" data-bs-toggle="modal"
                                                                                            data-bs-target="#imageModel">
                                                                                            <img src="/assets/images/event-bg.jpg" alt=""
                                                                                                className="img-fluid bg-img" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="col-12 pt-cls">
                                                                            <div className="overlay">
                                                                                <div className="portfolio-image">
                                                                                    <a href="/" data-bs-toggle="modal"
                                                                                        data-bs-target="#imageModel">
                                                                                        <img src="/assets/images/event-bg.jpg" alt=""
                                                                                            className="img-fluid bg-img" />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="p-1">
                                                            <div className="mp-releted-pro-blk mp-releted-pro-blk-new content-mp-block d-flex justify-content-between">
                                                                <div className="media-body d-md-block">
                                                                    <div class="media media-new d-sm-flex">
                                                                        <div class="user-img">
                                                                            <img src='https://sociomee-dev.s3.ap-south-1.amazonaws.com/userProfileDp/LhXHReJcWmnBW.jpg' className="img-fluid bg-img connection-profile connection-profile-new" alt="shivam singh" />
                                                                            <span class="available-stats online"></span>
                                                                        </div>
                                                                        <div class="media-body d-md-block pl-2">
                                                                            <h4 className='m-0'>name</h4>
                                                                            <span>userName</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="invite">
                                                                        <p>Invite</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7">
                                                    <div className="suggestion-box section-b-space">
                                                        <div className="card-title">
                                                            <h3>friend suggestion</h3>
                                                        </div>
                                                        <div className="suggestion-content ratio_115 no-arrow frz-sug-slider-sec  biz-cration-fsslide-preview">
                                                            <div className='grp-privacy mb-2'>
                                                                <img src="" alt="" />
                                                                <div className="ml-2">
                                                                    <h4 className='mb-1 grp-privacy-h'>Group privacy</h4>
                                                                    <p className='grp-privacy-p'>Public</p>
                                                                </div>
                                                            </div>
                                                            <div className='grp-privacy mb-2'>
                                                                <img src="" alt="" />
                                                                <div className="ml-2">
                                                                    <h4 className='mb-1 grp-privacy-h'>Group Category</h4>
                                                                    <p className='grp-privacy-p'>Category Name</p>
                                                                </div>
                                                            </div>
                                                            <div className='grp-privacy mb-2'>
                                                                <img src="" alt="" />
                                                                <div className="ml-2">
                                                                    <h4 className='mb-1 grp-privacy-h'>Email</h4>
                                                                    <p className='grp-privacy-p'>buzzfeed@gmail.com</p>
                                                                </div>
                                                            </div>
                                                            <div className='grp-privacy mb-2'>
                                                                <img src="" alt="" />
                                                                <div className="ml-2">
                                                                    <h4 className='mb-1 grp-privacy-h'>Contact</h4>
                                                                    <p className='grp-privacy-p'>+91 8769531246</p>
                                                                </div>
                                                            </div>
                                                            <div className='grp-privacy mb-2'>
                                                                <img src="" alt="" />
                                                                <div className="ml-2">
                                                                    <h4 className='mb-1 grp-privacy-h'>History</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RightSidebar></RightSidebar>
            </div>
        </>
    )
}

export default CreateGroupScreen