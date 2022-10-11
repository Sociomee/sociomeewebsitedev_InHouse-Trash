import { useState } from 'react'
import Header from '../../Header'
import LeftSidebar from '../../LeftSidebar'
import RightSidebar from '../../RightSidebar'
import BizTopBanner from '../../biz-components/BizTopBanner'
import BizDetailMenu from '../../biz-components/BizDetailMenu'
import { Card, CardTitle, Col, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label, Row, UncontrolledButtonDropdown } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
import Club from '../../biz-components/Img/Club.png'

const PostBiz = () => {
    const [mapdata, setMapData] = useState([
        {
            link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.133469088304!2d10.344347315868879!3d55.39057698045794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdfc6c8acf0bd%3A0xc9e5ab1219682ea!2sDybdevej%2010%2C%205200%20Odense%2C%20Denmark!5e0!3m2!1sen!2sin!4v1656575287386!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            name2: "Dybdevej 10, 5200 Odense, Denmark",
            icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

        },
        {
            link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.133469088304!2d10.344347315868879!3d55.39057698045794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdfc6c8acf0bd%3A0xc9e5ab1219682ea!2sDybdevej%2010%2C%205200%20Odense%2C%20Denmark!5e0!3m2!1sen!2sin!4v1656575287386!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            name2: "Dybdevej 10, 5200 Odense, New York",
            icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

        }

    ])
    const [time, setTime] = useState([
        {
            name: "Timing",
            update: "Open now",
            time: "9:00AM - 6:00PM",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

        }
    ])
    const [website, setWebsite] = useState([
        {
            name: "Website",
            link1: "www.behance.net",
            link2: "www.gihub.net",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

        },
        {
            name: "Email",
            link1: "digital@gmail.com",
            link2: "info@sociomee.com",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

        }

    ])
    const [Contact, setContact] = useState([
        {
            name: "Contact",
            mob: "8818844881",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
        }

    ])

    const RowFirstSideData = () => {
        return (
            <>
                <div className="custom-card-block">
                    <div className="custom-card-head biz-carddetail-blk">
                        <h4>Overview</h4>
                    </div>
                    <div className="biz-about-cont">
                        {
                            mapdata.map((e, index) => (
                                <ul>
                                    <li>
                                        <div className="bizabout-location" key={index} >
                                            {e.link}
                                            <div className="biz-icon-cont-blk">
                                                <div className="icon">
                                                    {e.icon}
                                                </div>
                                                <div className="details">
                                                    <h6>{e.name2}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                        {
                            time.map((tym, index) => (
                                <ul>
                                    <li>
                                        <div className="biz-icon-cont-blk" key={index}>
                                            <div className="icon">
                                                {tym.icon1}
                                            </div>
                                            <div className="details">
                                                <div className='me-auto'>
                                                    <h5>{tym.name}</h5>
                                                    <h6><span className="green">{tym.update}</span> {tym.time}</h6>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                        {
                            website.map((web, index) => (
                                <ul>
                                    <li>
                                        <div className="biz-icon-cont-blk" key={index}>
                                            <div className="icon">
                                                {web.icon1}
                                            </div>
                                            <div className="details">
                                                <div className='me-auto'>
                                                    <h5>{web.name}</h5>
                                                    <h6><Link to={"www.behance.net"}>{web.link1}</Link> <br /> <Link to={"www.gihub.net"}>{web.link2}</Link></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                        {
                            Contact.map((info, index) => (
                                <ul>
                                    <li>
                                        <div className="biz-icon-cont-blk" key={index}>
                                            <div className="icon" >
                                                {info.icon1}
                                            </div>
                                            <div className="details">

                                                <div className='me-auto'>
                                                    <h5>{info.name}</h5>
                                                    <h6>{info.mob}</h6>
                                                </div>



                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))}
                    </div>

                </div>
            </>
        )
    }
    const RowSecondSideData = () => {
        return (
            <>
                <div className="create-post">
                    <div className="static-section">
                        <div className="card-title create-port-title">
                            <div className="createpost-blk">
                                <h3>create post</h3>
                            </div>
                            <div className="settings more-settings-blk">
                                <div className="setting-btn ms-2 setting-dropdown no-bg">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <div role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false" className="morebtn-cust"> More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="search-input input-style icon-right" >
                            <div className="creatpost-profile-blk">
                                <img
                                    src={Club}
                                    className="img-fluid"
                                    alt="profile"
                                />
                            </div>
                            <textarea
                                name="message"
                                className="form-control enable"
                                cols="30"
                                rows="10"
                                placeholder="What’s  going on? #Hashtag... @Mention."
                                spellCheck="false"

                            ></textarea>

                            {/* <input type="text" className="form-control enable" placeholder="write something here.."/> */}
                            <div className="pen-icon-creatpost" role='button'>
                                <img
                                    src={Club}
                                    className="img-fluid icon"
                                    alt="pen"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-panel section-t-space">
                    <div className="post-wrapper col-grid-box section-b-space">
                        <div className="post-title">
                            <div className="profile">
                                <div className="media">
                                    <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/my-profile.jpg">
                                        <img src={Club}
                                            className="img-fluid bg-img" alt="user" />
                                    </a>
                                    <div className="media-body">
                                        <h5>The Director Club</h5>
                                        <h6>30 mins ago</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="setting-btn ms-auto setting-dropdown no-bg">
                                <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                    <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                        <ul>
                                            <li>
                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                            </li>
                                            <li>
                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                            </li>
                                            <li>
                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-details">
                            <div className="img-wrapper">
                                {/* <img src="assets/images/post-9.jpg" className="img-fluid"
                                    alt="" /> */}
                                <MediaInfo />
                            </div>
                            <div className="detail-box">
                                <h3>Celebration new album song launched</h3>
                                <h5 className="tag"><span>#Musiccelebration,</span> #music, #party, #music
                                </h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <div className="bookmark favourite-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="people-likes">
                                    <ul>
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
                                    <h6>+12 people react this post</h6>
                                </div>
                            </div>
                            <div className="like-panel">
                                <div className="left-emoji">
                                    <ul>
                                        <li>
                                            <img src="assets/svg/emoji/040.svg" alt="smile" />
                                        </li>
                                        <li>
                                            <img src="assets/svg/emoji/113.svg" alt="heart" />
                                        </li>
                                        <li>
                                            <img src="assets/svg/emoji/027.svg" alt="cry" />
                                        </li>
                                        <li>
                                            <img src="assets/svg/emoji/033.svg" alt="angry" />
                                        </li>
                                    </ul>
                                    <h6>+75</h6>
                                </div>
                                <div className="right-stats">
                                    <ul>
                                        <li>
                                            <h5>
                                                <i className="iw-16 ih-16" data-feather="message-square"></i>
                                                <span>4565</span> comment
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <i className="iw-16 ih-16" data-feather="share"></i><span>985</span>
                                                share
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="post-react">
                                <ul>
                                    <li className="react-btn">
                                        <a className="react-click" href="#">
                                            <div className="post-btn-cust selected"><img src="assets/images/like.png" /></div> react
                                        </a>
                                        <div className="react-box">
                                            <ul>
                                                <li data-title="smile">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/040.svg" alt="smile" />
                                                    </a>
                                                </li>
                                                <li data-title="love">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/113.svg" alt="heart" />
                                                    </a>
                                                </li>
                                                <li data-title="cry">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/027.svg" alt="cry" />
                                                    </a>
                                                </li>
                                                <li data-title="wow">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/052.svg" alt="angry" />
                                                    </a>
                                                </li>
                                                <li data-title="angry">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/039.svg" alt="angry" />
                                                    </a>
                                                </li>
                                                <li data-title="haha">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/042.svg" alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="comment-click">
                                        <a href="#">
                                            <div className="post-btn-cust selected"><img src="assets/images/comment.png" /></div> comment
                                        </a>
                                    </li>
                                    <li data-bs-target="#shareModal" data-bs-toggle="modal">
                                        <a href="#">
                                            <div className="post-btn-cust"><img src="assets/images/share.png" /></div> share
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="comment-section">
                                <div className="reply">
                                    <div className="search-input input-style input-lg icon-right">
                                        <input type="text" className="form-control emojiPicker"
                                            placeholder="write a comment.." />
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-2 iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                        </a>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-14 ih-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
    const MediaInfo = () => {
        return (
            <>

                <div class="row">
                    <div class="col-lg-8 col-md-8 mb-8 mb-lg-0">
                        <img
                            src="assets/images/post-9.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="assets/images/post-9.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />
                        <img
                            src="assets/images/post-9.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="assets/images/post-9.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />
                        <img
                            src="assets/images/post-9.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </div>
                </div>

            </>
        )
    }
    return (
        <>
            <Header />
            <div className="page-body container-fluid profile-page">
                <LeftSidebar />
                <div className="page-center">
                    <div className="content-center w-100">
                        <div className="gdpost-about-blk">
                            <BizTopBanner />
                            <BizDetailMenu />
                            <Row className='mt-3'>
                                <Col md={4}>
                                    <RowFirstSideData />
                                </Col>
                                <Col md={8}>
                                    <RowSecondSideData />
                                </Col>
                            </Row>

                        </div>
                    </div>

                </div>
                <RightSidebar />
            </div>
        </>
    )
}

export default PostBiz