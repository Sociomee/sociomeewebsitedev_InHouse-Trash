import React, { Component, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';
import FriendSuggestion from '../left-right-components/FriendSuggestion';
import FriendRequest from '../left-right-components/FriendRequest';
import LikedBizPage from '../left-right-components/LikedBizPage';
import Gallery from '../left-right-components/Gallery';
import Event from '../left-right-components/Event';
import CreatePost from '../CreatePost';


// MUI Dialog box
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { loadAllPostsByUserId } from '../../Services/Actions/getAllPostsByUserIdAction';
import { deletePost } from '../../Services/Actions/getAllUserPostsAction';
import ProfileCover from './ProfileCover';


export default function MyTimeline() {

    // get all user posts by id using redux
    const { allPostsByUserId } = useSelector(state => state.getAllPostsByUserIdData)
    const [globalPostId,setGlobalPostId]=useState('');

    // load more functionality
    const [postNumber, setPostNumber] = useState(10)

    // MUI State
    const [open, setOpen] = useState(false);

    
    let dispatch = useDispatch();

    const postDeleteHandler=(id)=>{
        const postId={postId:[id]}
        dispatch(deletePost(postId))
        setOpen(false)
    }
    
    useEffect(() => {
        dispatch(loadAllPostsByUserId())
    }, [])
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header></Header>
            <div className="page-body container-fluid profile-page">
                <LeftSidebar></LeftSidebar>
                <div className="page-center">
                   <ProfileCover/>

                    <ProfileMenu></ProfileMenu>

                    <div className="container-fluid section-t-space px-0">
                        <div className="page-content">
                            <div className="content-left">
                                <FriendSuggestion></FriendSuggestion>
                                <FriendRequest></FriendRequest>
                                <LikedBizPage></LikedBizPage>
                            </div>
                            <div className="content-center">
                                <CreatePost></CreatePost>
                                <div className="overlay-bg"></div>
                                {/* <div className="post-panel infinite-loader-sec section-t-space"></div> */}
                                <div className="post-panel section-t-space">

                                    {
                                        allPostsByUserId.length !== 0 ? allPostsByUserId.slice(0, postNumber).map((userPosts) => {
                                            return (
                                                <div className="post-wrapper col-grid-box mt-4" key={userPosts.postId}>
                                                    <div className="post-title">
                                                        <div className="profile">
                                                            <div className="media">
                                                                <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="sufiya eliza" data-img="assets/images/my-profile.jpg">
                                                                    <img src={userPosts.profileImageThumb}
                                                                        className="img-fluid bg-img" alt="user" />
                                                                </a>
                                                                <div className="media-body">
                                                                    <h5>{userPosts.fullName}</h5>
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
                                                                        <li onClick={()=>{setOpen(true);setGlobalPostId(userPosts.postId)}}>
                                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>delete post</a>
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
                                                            {userPosts.mediaList ? userPosts.mediaList[0].fileType === 'video' ? <video width="320" height="240" controls>
                                                                <source src={userPosts.mediaList[0].fileURL} type="video/mp4" /></video> : <img src={userPosts.mediaList[0].fileURL} className="img-fluid"
                                                                    alt="" /> : null}

                                                        </div>
                                                        <div className="detail-box">
                                                            <h3>{userPosts.caption}</h3>
                                                            {
                                                                userPosts.postType === 'poll' ? (
                                                                    <>
                                                                        {/* <label>Poll</label> */}
                                                                        <div className="form-check">
                                                                            {
                                                                                userPosts.pollOptions && userPosts.pollOptions.sort((a, b) => a.sequence - b.sequence).map((pollOpt) => {
                                                                                    return <label className="form-check-label font-weight-normal m-4" htmlFor="radio1" key={pollOpt.pollOptionId}>
                                                                                        <input className="form-check-input radio_animated" type="radio" name={userPosts.postType} id="radio1" />
                                                                                        {pollOpt.optionText}</label>

                                                                                })
                                                                            }
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                        has been the industry's standard dummy text ever since the 1500s
                                                                    </p>
                                                                )
                                                            }
                                                            <h5 className="tag">
                                                                {
                                                                    userPosts.postHashTags && userPosts.postHashTags.map((tags) => {
                                                                        return <span key={tags.id}>#{tags.name},</span>
                                                                    })

                                                                }
                                                            </h5>
                                                            <div className="bookmark favourite-btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                            </div>
                                                            <div className="people-likes">
                                                                <ul>
                                                                    {
                                                                        userPosts.topLikes && userPosts.topLikes.map((likes) => {
                                                                            return <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                                data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
                                                                                <img src={`https://sociomee-dev.s3.ap-south-1.amazonaws.com/${likes.profileThumb}`} className="img-fluid bg-img" alt="" />
                                                                            </li>
                                                                        })
                                                                    }
                                                                </ul>
                                                                <h6>{userPosts.likesCount} people react this post</h6>
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
                                                                            <i className="iw-16 ih-16" data-feather="share"></i><span>{userPosts.sharesCount}</span>
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
                                                            <div className="comments d-block">
                                                                <div className="main-comment">
                                                                    {userPosts?.firstComment ? userPosts.firstComment.map((comments) => {
                                                                        return <div className="media" key={comments.id}>
                                                                            <a href="#" className="user-img popover-cls" data-bs-toggle="popover"
                                                                                data-placement="right" data-name="Pabelo mukrani"
                                                                                data-img="assets/images/story-2.jpg">
                                                                                <img src={comments.profileImageThumb} className="img-fluid bg-img" alt="user" />
                                                                            </a>
                                                                            <div className="media-body">
                                                                                <a href="#">
                                                                                    <h5>{comments.fullName}</h5>
                                                                                </a>
                                                                                <p>{comments.comment}
                                                                                </p>
                                                                                <ul className="comment-option">
                                                                                    <li><a href="#"><img src="assets/images/liked-icon.png" /> like ({comments.likesCount})</a></li>
                                                                                    <li><a href="#"><img src="assets/images/chat-icon.png" /> reply ({comments.replyCount})</a></li>
                                                                                </ul>
                                                                            </div>
                                                                            {/* <div className="comment-time">
                                                                                <h6>50 mins ago</h6>
                                                                            </div> */}
                                                                        </div>
                                                                    }) : null}
                                                                </div>
                                                            </div>
                                                            <div className="reply">
                                                                <div className="search-input input-style input-lg icon-right">

                                                                    {userPosts.allowComments === 1 ? <><input type="text" className="form-control emojiPicker"
                                                                        placeholder="write a comment.." />
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-2 iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                                                        </a>
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-14 ih-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                                                        </a> </> : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                            : <div id="load-more" className="text-center mb-3">
                                                <div className="no-more-text">
                                                    <h2>no post found</h2>
                                                </div>
                                            </div>
                                    }

                                </div>
                                {
                                    allPostsByUserId.length!==0 && <div id="load-more" className="text-center mb-3">
                                        <div className="loader-icon btn" onClick={() => setPostNumber(postNumber + 10)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-theme iw-25 ih-25"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                                        </div>
                                        {/* <div className="no-more-text">
                                        <p>no more post</p>
                                    </div> */}
                                    </div>
                                }

                            </div>
                            <div className="content-right">
                                <Gallery></Gallery>
                                <Event></Event>
                            </div>
                        </div>
                    </div>
                </div>
                <RightSidebar></RightSidebar>
            </div>

            {/* Models */}
            
            {/* MUI Dialog Box  */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure, you want to delete post ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={()=>{postDeleteHandler(globalPostId)}}>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
// export default MyProfile