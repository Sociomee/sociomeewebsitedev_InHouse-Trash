import React, { Component, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useRoutes } from "react-router-dom";
import Slider from "react-slick";
import { loadAllUserPosts } from '../Services/Actions/getAllUserPostsAction';
import { loadAllReactions } from '../Services/Actions/getAllReactionsAction';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import CreatePost from './CreatePost';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import Models from './Models';
import RightSidebar from './RightSidebar';
import StorySlider from './StorySlider';


// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
// mui dailog box
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { addCommentOnPost } from '../Services/Actions/addCommentOnPost';
import { loadProfileByUserId } from '../Services/Actions/UserProfile/getUserProfileByUserIdAction';
import { addLikeOnPost } from '../Services/Actions/addLikeOnPost';
import { addAnswerOnPollPost } from '../Services/Actions/addAnswerOnPollPostAction';
import { setPostSaved } from '../Services/Actions/postSavedAction';
// import react infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";
import PollPost from './post-components/PollPost';
import MediaPost from './post-components/MediaPost';



export default function Home({ user }) {

    var friendSettings = {
        dots: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
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
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                centerPadding: '20px',
                dots: false
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                centerPadding: '30px',
                dots: false
            }
        }
        ]
    };
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
    var podcastSettings = {
        dots: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        centerMode: true,
        centerPadding: '80px',
        responsive: [{
            breakpoint: 1800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '60px'
            }
        }, {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '40px'
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


    // Snackbar Code
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: 'success', content: '' });
    // mui dialog box for confirmation
    const [modal, setModal] = useState(false);

    // report post's data
    const [reportPostBody, setReportPostBody] = useState({ postId: "", comment: "" });


    // get all user posts using redux
    const { allUserPosts } = useSelector(state => state.getAllUserPostsData)
    // get all reactions using redux
    const { allReactions } = useSelector(state => state.getAllReactionsData)

    // infinite scroll functionality
    const [pageSize, setPageSize] = useState({
        pageIndex: 0,
        pageSize: 3
    })

    const [hasMore, setHasMore] = useState(true);
    // get more data function
    const getMoreData = () => {
        if (allUserPosts?.rows?.length >= allUserPosts?.rows?.count) {
            setHasMore(false);
        }
        // call fetch user's post
        // 1 more records in .5 secs
        setTimeout(() => {
            pageSize.pageSize += pageSize.pageSize;
            dispatch(loadAllUserPosts(pageSize));
        }, 500);
    }

    // post comment state
    const [commentData, setCommentData] = useState({
        postId: '', comment: ''
    })

    // comment submit function
    const submitComment = (id) => {
        if (!commentData.postId === id) { setOpen(true); setAlert({ sev: "error", content: "Please Fill input field before submit !", }); }
        else if (!commentData.comment) { setOpen(true); setAlert({ sev: "error", content: "Please Fill input field before submit !", }); }
        else {
            dispatch(addCommentOnPost(commentData))
            setCommentData({
                postId: '', comment: ''
            })
            setOpen(true);
            setAlert({ sev: "success", content: "Comment Added !", });
            setTimeout(() => {
                dispatch(loadAllUserPosts(pageSize))
            }, 1000)
        }
    }

    let dispatch = useDispatch();

    // get user profile by user id 
    const { userProfileByUserId } = useSelector(state => state.getUserProfileByUserIdData);


    const likeHandler = (postId, reactId) => {
        let data = {
            postId: postId, reactionId: reactId
        }
        let postFinder = allUserPosts.rows.find(fin => fin.postId == postId);
        let likeFinder = postFinder.topLikes ? postFinder.topLikes.find(fin => fin.id === userProfileByUserId.id) : ""
        if (!likeFinder) {
            setOpen(true)
            setAlert({ sev: "success", content: "Like 👍", })
            dispatch(addLikeOnPost(data))
            setTimeout(() => {
                dispatch(loadAllUserPosts(pageSize))
            }, 500)

        }
        else {
            setOpen(true);
            setAlert({ sev: "error", content: "You Already Liked This Post !", })
        }
    }

    // save post 
    const savePostHandler = (postId) => {
        console.log(postId)
        dispatch(setPostSaved({ postId: postId, isSaved: true }))
        setOpen(true);
        setAlert({ sev: "success", content: "Post Saved ✔️", });
    }

    // post report function
    const postReportHandler = () => {
        if (!reportPostBody.comment) {
            setOpen(true);
            setAlert({ sev: "error", content: "Please Enter Reason !", });
        }
        else {
            console.log(reportPostBody)
        }
    }

    // Cancel Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };



    useEffect(() => {
        dispatch(loadAllUserPosts(pageSize))
        dispatch(loadAllReactions())
        dispatch(loadProfileByUserId());
    }, [])


    return (
        <>
            <Header></Header>
            <div className="page-body container-fluid newsfeed-style1">
                <LeftSidebar></LeftSidebar>
                <div className="page-center">
                    <StorySlider></StorySlider>
                    <div className="container-fluid section-t-space px-0">
                        <div className="page-content">
                            <ContentLeft></ContentLeft>
                            <div className="content-center">
                                <CreatePost></CreatePost>
                                <div className="overlay-bg"></div>
                                {/* <div className="post-panel infinite-loader-sec section-t-space"></div> */}
                                <div className="post-panel section-t-space">
                                    <InfiniteScroll
                                        dataLength={allUserPosts?.rows?.length || 1}
                                        next={getMoreData}
                                        hasMore={hasMore}
                                        loader={<div id="load-more" className="text-center mb-3">
                                            <div className="loader-icon btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-theme iw-25 ih-25"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                                            </div>
                                        </div>}
                                        endMessage={
                                            <div className="no-more-text">
                                                <p>no more post</p>
                                            </div>
                                        }
                                    >
                                        {
                                            allUserPosts?.rows && allUserPosts?.rows.filter(post => post.isPrivate === 0).map((userPosts) => {
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
                                                                        <h6>{new Date(userPosts.createdAt).toDateString()}</h6>
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
                                                                            <li onClick={() => savePostHandler(userPosts.postId)}>
                                                                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                                            </li>
                                                                            <li onClick={() => { setModal(true); setReportPostBody({ ...reportPostBody, postId: userPosts.postId }) }}>
                                                                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>Report this post</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="post-details">
                                                            <div className="img-wrapper">
                                                                {
                                                                    userPosts.mediaList && (
                                                                        <MediaPost userPosts={userPosts} pageSize={pageSize} setOpen={setOpen} setAlert={setAlert}/>
                                                                    )
                                                                }

                                                            </div>
                                                            <div className="detail-box">
                                                                <h3>{userPosts.caption}</h3>
                                                                {
                                                                    userPosts.postType === 'poll' ? (
                                                                        <PollPost userPosts={userPosts} />
                                                                    ) : (
                                                                        <p></p>
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
                                                                            userPosts.topLikes && userPosts.topLikes.map((likes, ind) => {
                                                                                return <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                                    data-name="sufiya eliza" data-img="assets/images/story-2.jpg" key={ind}>
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
                                                                        {
                                                                            allReactions && allReactions.map((reaction) => {
                                                                                return <li key={reaction.id}>
                                                                                    <img src={reaction.imageURL} alt={reaction.name} />
                                                                                </li>
                                                                            })
                                                                        }
                                                                    </ul>
                                                                    <h6>{userPosts?.likesCount}</h6>
                                                                </div>
                                                                <div className="right-stats">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>
                                                                                <i className="iw-16 ih-16" data-feather="message-square"></i>
                                                                                <span>{userPosts?.commentsCount}</span> comment
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
                                                                        <a className="react-click" onClick={() => { likeHandler(userPosts.postId, allReactions && allReactions[0].id) }}>
                                                                            {allReactions && allReactions.filter(seq => seq.sequenceNo === 1).map((reaction, i) => {
                                                                                return <><div className="post-btn-cust selected bg-white" ><img src={reaction.imageURL} /></div> {reaction.name}</>
                                                                            })}

                                                                        </a>
                                                                        <div className="react-box">
                                                                            <ul>
                                                                                {allReactions && allReactions.filter(seq => seq.sequenceNo !== 1).map((reaction) => {
                                                                                    return <li data-title={reaction.name} key={reaction.id}>
                                                                                        <a>
                                                                                            <img src={reaction.imageURL} alt={reaction.name} />
                                                                                        </a>
                                                                                    </li>
                                                                                })}

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
                                                                            placeholder="write a comment.." value={commentData.comment} onChange={(e) => { setCommentData({ postId: userPosts.postId, comment: e.target.value }) }} />
                                                                            <a href="#">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-2 iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                                                            </a>
                                                                            <a onClick={() => { submitComment(userPosts.postId) }}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-14 ih-14"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" /></svg>
                                                                            </a> </> : null}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </InfiniteScroll>


                                </div>
                            </div>
                            <ContentRight></ContentRight>
                        </div>
                    </div>
                </div>
                <RightSidebar></RightSidebar>
            </div>
            <Models></Models>
            <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                        {alert.content}
                    </Alert>
                </Snackbar>
            </Stack>

            {/* Mui Modal box content */}
            <Dialog open={modal} onClose={false} fullWidth={true}
                maxWidth={'sm'}>
                <DialogTitle>Report Post</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Enter Reason for Reporting
                    </DialogContentText>
                    <TextField
                        autoFocus
                        color="success"
                        margin="dense"
                        id="name"
                        label="Reason"
                        type="text"
                        fullWidth
                        // variant="filled"
                        multiline
                        rows={4}
                        value={reportPostBody.comment}
                        onChange={(e) => setReportPostBody({ ...reportPostBody, comment: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setModal(false)}>Cancel</Button>
                    <Button onClick={postReportHandler}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
// export default Home 