import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header";
import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import ProfileMenu from "./ProfileMenu";
import FriendSuggestion from "../left-right-components/FriendSuggestion";
import FriendRequest from "../left-right-components/FriendRequest";
import LikedBizPage from "../left-right-components/LikedBizPage";
import Gallery from "../left-right-components/Gallery";
import Event from "../left-right-components/Event";
import CreatePost from "../CreatePost";

// MUI Dialog box
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { loadAllPostsByUserId } from "../../Services/Actions/SocialFeed/getAllPostsByUserIdAction";
import {
  deletePost,
  undoDeletePost,
} from "../../Services/Actions/SocialFeed/getAllUserPostsAction";
import ProfileCover from "./ProfileCover";
import { loadAllReactions } from "../../Services/Actions/SocialFeed/getAllReactionsAction";
import { addLikeOnPost } from "../../Services/Actions/SocialFeed/addLikeOnPost";

// Use for snakebar
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { addCommentOnPost } from "../../Services/Actions/SocialFeed/addCommentOnPost";
import { loadProfileByUserId } from "../../Services/Actions/UserProfile/getUserProfileByUserIdAction";

import PollPost from "../post-components/display-post/PollPost";
import MediaPost from "../post-components/display-post/MediaPost";
import AlertPost from "../post-components/display-post/AlertPost";
import EventPost from "../post-components/display-post/EventPost";
import SuggestedBizPage from "../post-components/SuggestedItems/SuggestedBizPage";
import SuggestedGroup from "../post-components/SuggestedItems/SuggestedGroup";
import SuggestedAd from "../post-components/SuggestedItems/SuggestedAd";
import ThoughtPost from "../post-components/display-post/ThoughtPost";
import timeAgo from "../../functions/timeAgo";
import Comments from "../post-components/display-post/Comments";
import InfiniteScroll from "react-infinite-scroll-component";
import MultiMediaPost from "../post-components/display-post/MultiMediaPost";
import RecommendationPost from "../post-components/display-post/RecommendationPost";

const MyTimeline=()=> {
  // get all user posts by id using redux
  const { allPostsByUserId } = useSelector(
    (state) => state.getAllPostsByUserIdData
  );
  const [globalPostId, setGlobalPostId] = useState("");

  // get all reactions using redux
  const { allReactions } = useSelector((state) => state.getAllReactionsData);
  // post comment state
  const [commentData, setCommentData] = useState({
    postId: "",
    comment: "",
  });


  // infinite scroll functionality
  const [pageSize] = useState({
    pageIndex: 0,
    pageSize: 3,
  });

  const [hasMore, setHasMore] = useState(true);
  // get more data function
  const getMoreData = () => {
    if (allPostsByUserId?.rows?.length >= allPostsByUserId?.rows?.count) {
      setHasMore(false);
    }
    // call fetch user's post
    // 1 more records in .5 secs
    setTimeout(() => {
      pageSize.pageSize += 10;
      dispatch(loadAllPostsByUserId(pageSize));
    }, 500);
  };

  // MUI State
  const [pop, setPop] = useState(false);

  const [open, setOpen] = useState(false);
  const [undoSnackbar, setUndoSnackbar] = useState(false);
  const [alert, setAlert] = useState({ sev: "success", content: "" });

  // get user profile by user id
  const { userProfileByUserId } = useSelector(
    (state) => state.getUserProfileByUserIdData
  );

  // Snackbar Code
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  let dispatch = useDispatch();

  // post delete function
  const postDeleteHandler = async (id) => {
    const postId = { postId: [id] };
    await dispatch(deletePost(postId));
    dispatch(loadAllPostsByUserId(pageSize));
    setPop(false);
    setUndoSnackbar(true);
  };

  // undo post delete handler
  const undoPostHandler = async () => {
    setUndoSnackbar(false);
    console.log(globalPostId);
    await dispatch(undoDeletePost({ postId: globalPostId }));
    dispatch(loadAllPostsByUserId(pageSize));
  };

  // like handler function
  const likeHandler = (postId, reactId) => {
    let data = {
      postId: postId,
      reactionId: reactId,
    };
    let postFinder = allPostsByUserId?.rows?.find((fin) => fin.postId == postId);
    let likeFinder = postFinder.topLikes
      ? postFinder.topLikes?.find((fin) => fin.id === userProfileByUserId.id)
      : "";
    if (!likeFinder) {
      // setOpen(true);
      // setAlert({ sev: "success", content: "Like 👍" });
      dispatch(addLikeOnPost(data));
      setTimeout(() => {
        dispatch(loadAllPostsByUserId(pageSize));
      }, 500);
    } else {
      setOpen(true);
      setAlert({ sev: "error", content: "You Already Liked This Post !" });
    }
  };

  // comment submit function
  const submitComment = async(id) => {
    if (!commentData.postId === id) {
      setOpen(true);
      setAlert({
        sev: "error",
        content: "Please Fill input field before submit !",
      });
    } else if (!commentData.comment) {
      setOpen(true);
      setAlert({
        sev: "error",
        content: "Please Fill input field before submit !",
      });
    } else {
      await dispatch(addCommentOnPost(commentData));
      // setOpen(true);
      // setAlert({ sev: "success", content: "Comment Added !" });
      dispatch(loadAllPostsByUserId(pageSize));
      setCommentData({
        postId: "",
        comment: "",
      });
    }
  };

  useEffect(() => {
    dispatch(loadAllPostsByUserId(pageSize));
    dispatch(loadAllReactions());
    dispatch(loadProfileByUserId());
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setPop(false);
    setUndoSnackbar(false);
  };

  // undo snackbar
  const undoSnackbarDesign = (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-2 p-0">
                    <img
                      src="/assets/images/Icons/deleted.png"
                      className="iw-20"
                      alt="delete"
                    />
                  </div>
                  <div className="col-10 p-0">
                    <h2 className="font-weight-bold text-white">
                      Post Deleted
                    </h2>
                  </div>
                  <h6 className="text-white p-0">
                    Slide Undo to recover post within 10 sec.
                  </h6>
                </div>
              </div>
              <div className="col-4 p-2">
                <button
                  className="group-btn group-btn-new green-clr-btn"
                  onClick={undoPostHandler}
                >
                  Undo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Header></Header>
      <div className="page-body container-fluid profile-page">
        <LeftSidebar></LeftSidebar>
        <div className="page-center">
          <ProfileCover />

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
                  <InfiniteScroll
                    dataLength={allPostsByUserId?.rows?.length || 1}
                    next={getMoreData}
                    hasMore={hasMore}
                    loader={
                      <div id="load-more" className="text-center mb-3">
                        <div className="loader-icon btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon-theme iw-25 ih-25"
                          >
                            <polyline points="1 4 1 10 7 10"></polyline>
                            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                          </svg>
                        </div>
                      </div>
                    }
                    endMessage={
                      <div className="no-more-text">
                        <p>no more post</p>
                      </div>
                    }
                  >
                    {allPostsByUserId?.rows &&
                      allPostsByUserId?.rows?.map((userPosts) => {
                        return (
                          <div
                            className="post-wrapper col-grid-box mt-4"
                            key={userPosts.postId}
                          >
                            {userPosts?.postType === "suggestedBusiness" && (
                              <SuggestedBizPage bizPage={userPosts} />
                            )}
                            {userPosts?.postType === "suggestedGroups" && (
                              <SuggestedGroup groups={userPosts} />
                            )}
                            {userPosts?.postType === "suggestedAd" && (
                              <SuggestedAd ad={userPosts.adData} />
                            )}

                            {userPosts?.isPrivate === 0 && (
                              <>
                                <div className="post-title">
                                  <div className="profile">
                                    <div className="media">
                                      <a
                                        className="popover-cls user-img"
                                        data-bs-toggle="popover"
                                        data-placement="right"
                                        data-name="sufiya eliza"
                                        data-img="assets/images/my-profile.jpg"
                                      >
                                        <img
                                          src={userPosts.profileImageThumb}
                                          className="img-fluid bg-img"
                                          alt="user"
                                        />
                                      </a>
                                      <div className="media-body">
                                        <h5>{userPosts.fullName}</h5>
                                        <h6>
                                          {userPosts.postType ===
                                            "recommendation" && (
                                            <span>
                                              <span class="color-orange">
                                                Recommendation
                                              </span>
                                              &nbsp;•&nbsp;
                                            </span>
                                          )}
                                          {timeAgo(userPosts.createdAt)}
                                        </h6>
                                        {userPosts.displayLocation && (
                                          <h6 className="mt-2 d-flex align-items-center">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="#81C14B"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="iw-15 icon-left icon-font-light mr-1"
                                            >
                                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                              <circle
                                                cx="12"
                                                cy="10"
                                                r="3"
                                              ></circle>
                                            </svg>
                                            {userPosts.displayLocation}
                                          </h6>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="setting-btn ms-auto setting-dropdown no-bg">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                      <div
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="icon icon-font-color iw-14"
                                        >
                                          <circle
                                            cx="12"
                                            cy="12"
                                            r="1"
                                          ></circle>
                                          <circle
                                            cx="19"
                                            cy="12"
                                            r="1"
                                          ></circle>
                                          <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                      </div>
                                      <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                        <ul>
                                          {/* <li>
                                                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                                                </li> */}
                                          <li
                                            onClick={() => {
                                              setPop(true);
                                              setGlobalPostId(userPosts.postId);
                                            }}
                                          >
                                            <a>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon-font-light iw-16 ih-16"
                                              >
                                                <rect
                                                  x="3"
                                                  y="3"
                                                  width="18"
                                                  height="18"
                                                  rx="2"
                                                  ry="2"
                                                ></rect>
                                                <line
                                                  x1="9"
                                                  y1="9"
                                                  x2="15"
                                                  y2="15"
                                                ></line>
                                                <line
                                                  x1="15"
                                                  y1="9"
                                                  x2="9"
                                                  y2="15"
                                                ></line>
                                              </svg>
                                              delete post
                                            </a>
                                          </li>
                                          <li>
                                            <a href="">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon-font-light iw-16 ih-16"
                                              >
                                                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                <line
                                                  x1="15"
                                                  y1="9"
                                                  x2="9"
                                                  y2="15"
                                                ></line>
                                                <line
                                                  x1="9"
                                                  y1="9"
                                                  x2="15"
                                                  y2="15"
                                                ></line>
                                              </svg>
                                              unfollow sufiya
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="post-details">
                                  <div className="img-wrapper">
                                    {userPosts.mediaList &&
                                    userPosts.mediaList?.length === 1 ? (
                                      <MediaPost
                                        userPosts={userPosts}
                                        pageSize={pageSize}
                                        setOpen={setOpen}
                                        setAlert={setAlert}
                                      />
                                    ) : (
                                      <MultiMediaPost userPosts={userPosts} />
                                    )}
                                  </div>
                                  <div className="detail-box">
                                    <h3 className=" text-break">
                                      {userPosts.postType !== "alert" &&
                                        userPosts.postType !== "thought" &&
                                        userPosts.postType !== "recommendation" &&
                                        userPosts.caption}
                                    </h3>
                                    {userPosts.postType === "poll" && (
                                      <PollPost
                                        poll={userPosts}
                                        pageSize={pageSize}
                                        setOpen={setOpen}
                                        setAlert={setAlert}
                                      />
                                    )}
                                    {userPosts.postType === "alert" && (
                                      <AlertPost alert={userPosts} />
                                    )}
                                    {userPosts?.postType === "event" && (
                                      <EventPost event={userPosts} />
                                    )}
                                    {userPosts?.postType === "thought" && (
                                      <ThoughtPost thought={userPosts} />
                                    )}
                                    {userPosts?.postType ===
                                      "recommendation" && (
                                      <RecommendationPost
                                        recommendation={userPosts}
                                      />
                                    )}
                                    <p></p>
                                    <h5 className="tag text-break">
                                      {userPosts.postHashTags &&
                                        userPosts.postHashTags.map((tags) => {
                                          return (
                                            <span key={tags.id}>
                                              #{tags.name},
                                            </span>
                                          );
                                        })}
                                    </h5>
                                    {/* <div className="bookmark favorite-btn">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                                    </div> */}
                                    <div className="people-likes">
                                      <ul>
                                        {userPosts.topLikes &&
                                          userPosts.topLikes.map(
                                            (likes, ind) => {
                                              return (
                                                <li
                                                  className="popover-cls"
                                                  data-bs-toggle="popover"
                                                  data-placement="right"
                                                  data-name="sufiya eliza"
                                                  data-img="assets/images/story-2.jpg"
                                                  key={ind}
                                                >
                                                  <img
                                                    src={`https://sociomee-dev.s3.ap-south-1.amazonaws.com/${likes.profileThumb}`}
                                                    className="img-fluid bg-img"
                                                    alt=""
                                                  />
                                                </li>
                                              );
                                            }
                                          )}
                                      </ul>
                                      <h6>
                                        {userPosts.likesCount} people react this
                                        post
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="like-panel">
                                    <div className="left-emoji">
                                      <ul>
                                        {allReactions &&
                                          allReactions.map((reaction) => {
                                            return (
                                              <li key={reaction.id}>
                                                <img
                                                  src={reaction.imageURL}
                                                  alt={reaction.name}
                                                />
                                              </li>
                                            );
                                          })}
                                      </ul>
                                      <h6>{userPosts?.likesCount}</h6>
                                    </div>
                                    <div className="right-stats">
                                      <ul>
                                        <li>
                                          <h5>
                                            <i
                                              className="iw-16 ih-16"
                                              data-feather="message-square"
                                            ></i>
                                            <span>
                                              {userPosts?.commentsCount}
                                            </span>{" "}
                                            comment
                                          </h5>
                                        </li>
                                        <li>
                                          <h5>
                                            <i
                                              className="iw-16 ih-16"
                                              data-feather="share"
                                            ></i>
                                            <span>{userPosts.sharesCount}</span>
                                            share
                                          </h5>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="post-react">
                                    <ul>
                                      <li className="react-btn">
                                        <a
                                          className="react-click"
                                          onClick={() => {
                                            likeHandler(
                                              userPosts.postId,
                                              allReactions && allReactions[0].id
                                            );
                                          }}
                                        >
                                          {allReactions &&
                                            allReactions
                                              .filter(
                                                (seq) => seq.sequenceNo === 1
                                              )
                                              .map((reaction, i) => {
                                                return (
                                                  <>
                                                    <div className="post-btn-cust selected bg-white">
                                                      <img
                                                        src={reaction.imageURL}
                                                      />
                                                    </div>{" "}
                                                    {reaction.name}
                                                  </>
                                                );
                                              })}
                                        </a>
                                        <div className="react-box">
                                          <ul>
                                            {allReactions &&
                                              allReactions
                                                .filter(
                                                  (seq) => seq.sequenceNo !== 1
                                                )
                                                .map((reaction) => {
                                                  return (
                                                    <li
                                                      data-title={reaction.name}
                                                      key={reaction.id}
                                                    >
                                                      <a>
                                                        <img
                                                          src={
                                                            reaction.imageURL
                                                          }
                                                          alt={reaction.name}
                                                        />
                                                      </a>
                                                    </li>
                                                  );
                                                })}
                                          </ul>
                                        </div>
                                      </li>
                                      <li className="comment-click">
                                        <a href="#">
                                          <div className="post-btn-cust selected">
                                            <img src="assets/images/comment.png" />
                                          </div>{" "}
                                          comment
                                        </a>
                                      </li>
                                      <li
                                        data-bs-target="#shareModal"
                                        data-bs-toggle="modal"
                                      >
                                        <a href="#">
                                          <div className="post-btn-cust">
                                            <img src="assets/images/share.png" />
                                          </div>{" "}
                                          share
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="comment-section">
                                    <div className="comments d-block">
                                      <div className="main-comment">
                                        {/* Comments Section */}
                                        <Comments
                                          postId={userPosts.postId}
                                          pageSize={pageSize}
                                        />
                                      </div>
                                    </div>
                                    <div className="reply">
                                      <div className="search-input input-style input-lg icon-right">
                                        {userPosts.allowComments === 1 ? (
                                          <>
                                            <input
                                              type="text"
                                              className="form-control emojiPicker"
                                              placeholder="write a comment.."
                                              value={commentData.comment}
                                              onChange={(e) => {
                                                setCommentData({
                                                  postId: userPosts.postId,
                                                  comment: e.target.value,
                                                });
                                              }}
                                            />
                                            <a href="#">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon icon-2 iw-14 ih-14"
                                              >
                                                <circle
                                                  cx="12"
                                                  cy="12"
                                                  r="10"
                                                ></circle>
                                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                                <line
                                                  x1="9"
                                                  y1="9"
                                                  x2="9.01"
                                                  y2="9"
                                                ></line>
                                                <line
                                                  x1="15"
                                                  y1="9"
                                                  x2="15.01"
                                                  y2="9"
                                                ></line>
                                              </svg>
                                            </a>
                                            <a
                                              onClick={() => {
                                                submitComment(userPosts.postId);
                                              }}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon iw-14 ih-14"
                                              >
                                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                              </svg>
                                            </a>{" "}
                                          </>
                                        ) : null}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                  </InfiniteScroll>
                </div>
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
        open={pop}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure, you want to delete post ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={() => {
              postDeleteHandler(globalPostId);
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Stack spacing={2} sx={{ width: "100%" }} id="stack">
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={alert.sev}
            sx={{ width: "100%" }}
          >
            {alert.content}
          </Alert>
        </Snackbar>
      </Stack>

      {/* undo post snackbar */}
      <Snackbar
        sx={{ maxWidth: 400 }}
        onClose={handleClose}
        open={undoSnackbar}
        autoHideDuration={9000}
        action={undoSnackbarDesign}
      />
    </>
  );
}
export default MyTimeline
