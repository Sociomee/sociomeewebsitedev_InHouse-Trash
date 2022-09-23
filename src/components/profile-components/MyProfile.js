import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { addInterests, loadAllInterests } from '../../Services/Actions/UserProfile/getAllInterestsAction';
import { loadProfileByUserId, updateUserProfile } from '../../Services/Actions/UserProfile/getUserProfileByUserIdAction';
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import MyPorfileSports from './MyProfileComponents/MyPorfileSports';
import MyProfileGroup from './MyProfileComponents/MyProfileGroup';
import MyProfileHobbies from './MyProfileComponents/MyProfileHobbies';
import ProfileBio from './MyProfileComponents/ProfileBio';
import ProfileContactDetail from './MyProfileComponents/ProfileContactDetail';
import ProfileDetail from './MyProfileComponents/ProfileDetail';
import ProfileProfession from './MyProfileComponents/ProfileProfession';
import ProfileCover from './ProfileCover';
import ProfileMenu from './ProfileMenu';

export default function MyProfile() {

    var movieSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
    var musicSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
    var bookSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
    var groupSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
    var bizSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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

    const [searchValue, setSearchValue] = useState("")
    const [userInterests, setUserInterests] = useState();
    const user = JSON.parse(localStorage.getItem('sociomeeUser'))
    const [userDetail, setUserDetail] = useState('');


    // get user profile by user id 
    const { userProfileByUserId } = useSelector(state => state.getUserProfileByUserIdData);

    // get all interest
    const { allInterests } = useSelector(state => state.getAllInterestsData);

    let dispatch = useDispatch();

    const interestsHandler = (interest) => {
        const exists = userInterests.find(inter => inter.id === interest.id);
        if (exists) {
            setUserInterests(userInterests?.filter(int => int.id !== interest.id))
        }
        else {
            setUserInterests([...userInterests, interest])
        }
    }

    const submitInterests = () => {
        const interest = userInterests.map((val) => val.id)
        dispatch(addInterests(interest))
    }

    useEffect(() => {
        dispatch(loadProfileByUserId());
        dispatch(loadAllInterests());
    }, [])

    useEffect(() => {
        let tempInt = (userProfileByUserId.interests?.map(inter => allInterests.rows?.filter(intFil => intFil.id === inter.interestId)))
        setUserInterests(tempInt?.map(tem => tem && tem[0]))
    }, [allInterests])


    return (
        <>
            <Header></Header>
            <div className="page-body container-fluid profile-page">
                <LeftSidebar></LeftSidebar>
                <div className="page-center">

                    <ProfileCover />
                    <ProfileMenu></ProfileMenu>

                    <div className="container-fluid section-t-space px-0">
                        <div className="row">
                            <div className="content-left col-4 res-full-width order-1">
                                <div className="profile-about">
                                    <div className="card-main-title">
                                        <h3>about</h3>
                                    </div>

                                    {/* User Profession */}
                                    <ProfileProfession userProfileByUserId={userProfileByUserId} />

                                    <div className="card-title-cont-block">
                                        <div className="card-title">
                                            <h3>Education</h3>
                                            <div className="settings">
                                                <div className="setting-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#educationModel">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about-content">
                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" stroke="#81C14B" fill="none" className="iw-18 ih-18"><path d="M5.66667 14.6668V8.41683L9 6.56516M9 9.66683L16.5 5.50016L9 1.3335L1.5 5.50016L9 9.66683ZM9 9.66683L14.1333 6.81516C14.8088 8.53024 15.0005 10.3978 14.6875 12.2143C12.5738 12.4195 10.581 13.2948 9 14.7127C7.41921 13.295 5.42674 12.4197 3.31333 12.2143C3.00017 10.3978 3.19186 8.53018 3.8675 6.81516L9 9.66683Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                    </div>
                                                    <div className="details">
                                                        <h5>Studied at Symbiosis University</h5>
                                                        <h6>Batch 2010 to 2014<br />Gurgaon, Delhi NCR<br /><small>Gong.io enables revenue teams to realize their fullest potential by unveiling customer reality. </small></h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* User Detail */}
                                    <ProfileDetail userProfileByUserId={userProfileByUserId} />
                                    {/* User Bio */}
                                    <ProfileBio userProfileByUserId={userProfileByUserId} />
                                    {/* User contact detail */}
                                    <ProfileContactDetail userProfileByUserId={userProfileByUserId} />
                                </div>
                            </div>
                            <div className="content-center col-xl-8">
                                <div className="about-profile section-b-space">

                                    <MyProfileHobbies userProfileByUserId={userProfileByUserId}></MyProfileHobbies>

                                    <div className="about-profile-box-blk">
                                        <div className="card-title">
                                            <h3>My Interestes</h3>
                                            <div className="settings">
                                                <div className="setting-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#interestesModel">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-box">
                                            <ul className="aboutlist-blk interest-list-blk">
                                                {
                                                    userProfileByUserId.interests && userProfileByUserId.interests.map((inter) => {
                                                        return <li key={inter.id}>
                                                            <img src={`https://sociomee-dev.s3.ap-south-1.amazonaws.com/${inter.iconUrl}`} className='icon' height='20' width='20' />&nbsp;{inter.name}</li>
                                                    })
                                                }

                                            </ul>
                                        </div>
                                    </div>

                                    <MyPorfileSports></MyPorfileSports>

                                    <div className="about-profile-box-blk">
                                        <div className="card-title">
                                            <h3>Movies</h3>
                                            <div className="settings">
                                                <div className="setting-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-box">
                                            <Slider {...movieSettings} className="default-space">
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/movie-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Singham</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/movie-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Singham</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/movie-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Singham</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/movie-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Singham</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/movie-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Singham</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/movie-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Singham</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="about-profile-box-blk">
                                        <div className="card-title">
                                            <h3>Music</h3>
                                            <div className="settings">
                                                <div className="setting-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-box">
                                            <Slider {...musicSettings} className="default-space">
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/music-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>A. R. Rahman</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/music-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>A. R. Rahman</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/music-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>A. R. Rahman</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/music-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>A. R. Rahman</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/music-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>A. R. Rahman</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/music-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>A. R. Rahman</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="about-profile-box-blk">
                                        <div className="card-title">
                                            <h3>Book</h3>
                                            <div className="settings">
                                                <div className="setting-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-box">
                                            <Slider {...bookSettings} className="default-space">
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/book-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Wings of Fire</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/book-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Wings of Fire</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/book-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Wings of Fire</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/book-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Wings of Fire</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/book-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Wings of Fire</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/book-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Wings of Fire</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>

                                    <MyProfileGroup></MyProfileGroup>
                                    <div className="about-profile-box-blk">
                                        <div className="card-title">
                                            <h3>Biz Page</h3>
                                            <div className="settings">
                                                <div className="setting-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-box">
                                            <Slider {...bizSettings} className="default-space">
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Havells</h6>
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Havells</h6>
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Havells</h6>
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Havells</h6>
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Havells</h6>
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="profile-slide-box">
                                                        <div className="adaptive-overlay"></div>
                                                        <div className="story-bg">
                                                            <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img" />
                                                        </div>
                                                        <div className="story-content">
                                                            <h6>Havells</h6>
                                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RightSidebar></RightSidebar>
            </div>

            {/* Models */}


            <div className="modal fade" id="educationModel" tabIndex="-1" role="dialog" aria-labelledby="educationModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add Education</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="ed-model-block">
                                <form className="theme-form">
                                    <div className="form-group">
                                        <label>Institution name</label>
                                        <input type="text" className="form-control" placeholder="Institution name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Batch Year</label>
                                        <input type="text" className="form-control" placeholder="Eg. 2010 to 2014" />
                                    </div>
                                    <div className="form-group">
                                        <label>University Address</label>
                                        <input type="text" className="form-control" placeholder="University Address" />
                                    </div>
                                    <div className="form-group">
                                        <label>Comments</label>
                                        <textarea className="form-control" placeholder="Comments"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-solid">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="interestesModel" tabIndex="-1" role="dialog" aria-labelledby="interestesModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Interestes</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="searchfilter-blk m-2">
                                <div className="input-search-blk">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <input type="text" className="form-control" name="search" placeholder="Find Interest..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                                </div>
                                <ul className="searchfiler-list">
                                    {allInterests?.rows
                                        ?.filter(interestes => interestes.name.match(new RegExp(searchValue, "i")))
                                        .map(interestes => {
                                            return <li key={interestes.id} >
                                                <div className="form-check checkbox_animated"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id={interestes.name}
                                                        onClick={() => interestsHandler(interestes)}
                                                        checked={userInterests?.some((int) => int?.id === interestes?.id)}
                                                    />
                                                    <label className="form-check-label" htmlFor={interestes.name}>{interestes.name}</label></div></li>
                                        })}
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-solid" onClick={submitInterests} data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
// export default MyProfile