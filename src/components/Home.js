import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAllUserPosts } from "../Services/Actions/SocialFeed/getAllUserPostsAction";
import { loadAllReactions } from "../Services/Actions/SocialFeed/getAllReactionsAction";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import CreatePost from "./CreatePost";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import Models from "./Models";
import RightSidebar from "./RightSidebar";
import StorySlider from "./StorySlider";
import SuggestedBizPage from "./post-components/SuggestedItems/SuggestedBizPage";
import SuggestedGroup from "./post-components/SuggestedItems/SuggestedGroup";
import SuggestedAd from "./post-components/SuggestedItems/SuggestedAd";

// Use for snakebar
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

import { addCommentOnPost } from "../Services/Actions/SocialFeed/addCommentOnPost";
import { loadProfileByUserId } from "../Services/Actions/UserProfile/getUserProfileByUserIdAction";
import { addLikeOnPost } from "../Services/Actions/SocialFeed/addLikeOnPost";
import { setPostSaved } from "../Services/Actions/SocialFeed/postSavedAction";
// import react infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";
import PollPost from "./post-components/display-post/PollPost";
import MediaPost from "./post-components/display-post/MediaPost";
import AlertPost from "./post-components/display-post/AlertPost";
import EventPost from "./post-components/display-post/EventPost";
import ThoughtPost from "./post-components/display-post/ThoughtPost";
import Comments from "./post-components/display-post/Comments";
import timeAgo from "../functions/timeAgo";
import ReportPostModal from "./post-components/Modals/ReportPostModal";
import MultiMediaPost from "./post-components/display-post/MultiMediaPost";
import PodcastPost from "./post-components/display-post/PodcastPost";
import RecommendationPost from "./post-components/display-post/RecommendationPost";

export default function Home({ user }) {
  // Snackbar Code
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ sev: "success", content: "" });
  // mui dialog box for confirmation
  const [modal, setModal] = useState(false);
  // used for blank comment field
  const commentRef = useRef(null);

  // report post's data
  const [reportPostBody, setReportPostBody] = useState({
    postId: "",
    comment: "",
  });

  // get all user posts using redux
  const { allUserPosts } = useSelector((state) => state.getAllUserPostsData);
  // get all reactions using redux
  const { allReactions } = useSelector((state) => state.getAllReactionsData);

  // infinite scroll functionality
  const [pageSize] = useState({
    pageIndex: 0,
    pageSize: 3,
  });

  const [hasMore, setHasMore] = useState(true);
  // get more data function
  const getMoreData = () => {
    if (allUserPosts?.rows?.length >= allUserPosts?.rows?.count) {
      setHasMore(false);
    }
    // call fetch user's post
    // 1 more records in .5 secs
    setTimeout(() => {
      pageSize.pageSize += 10;
      dispatch(loadAllUserPosts(pageSize));
    }, 500);
  };

  // post comment state
  const [commentData, setCommentData] = useState({
    postId: "",
    comment: "",
  });

  // comment submit function
  const submitComment = (id) => {
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
      dispatch(addCommentOnPost(commentData));
      setCommentData({
        postId: "",
        comment: "",
      });
      // setOpen(true);
      // setAlert({ sev: "success", content: "Comment Added !" });
        commentRef.current.value = "";
        dispatch(loadAllUserPosts(pageSize));
    }
  };

  let dispatch = useDispatch();

  // get user profile by user id
  const { userProfileByUserId } = useSelector(
    (state) => state.getUserProfileByUserIdData
  );

  const likeHandler =async (postId, reactId) => {
    let data = {
      postId: postId,
      reactionId: reactId,
    };
    let postFinder = allUserPosts.rows.find((fin) => fin.postId == postId);
    let likeFinder = postFinder.topLikes
      ? postFinder.topLikes.find((fin) => fin.id === userProfileByUserId.id)
      : "";
    if (!likeFinder) {
      // setOpen(true);
      // setAlert({ sev: "success", content: "Like 👍" });
      await dispatch(addLikeOnPost(data));
      dispatch(loadAllUserPosts(pageSize));
    } else {
      setOpen(true);
      setAlert({ sev: "error", content: "You Already Liked This Post !" });
    }
  };

  // save post
  const savePostHandler = (postId) => {
    console.log(postId);
    dispatch(setPostSaved({ postId: postId, isSaved: true }));
    setOpen(true);
    setAlert({ sev: "success", content: "Post Saved ✔️" });
  };

  // Cancel Snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    dispatch(loadAllUserPosts(pageSize));
    dispatch(loadAllReactions());
    dispatch(loadProfileByUserId());
  }, []);

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
                    {allUserPosts?.rows &&
                      allUserPosts?.rows.map((userPosts) => {
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
                                          <li
                                            onClick={() =>
                                              savePostHandler(userPosts.postId)
                                            }
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
                                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                              </svg>
                                              save post
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
                                              hide post
                                            </a>
                                          </li>
                                          <li
                                            onClick={() => {
                                              setModal(true);
                                              setReportPostBody({
                                                ...reportPostBody,
                                                postId: userPosts.postId,
                                              });
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
                                              Report this post
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
                                        userPosts.postType !== "podcast" &&
                                        userPosts.postType !==
                                          "recommendation" &&
                                        userPosts.caption}
                                    </h3>
                                    {userPosts?.postType === "poll" && (
                                      <PollPost
                                        poll={userPosts}
                                        pageSize={pageSize}
                                        setOpen={setOpen}
                                        setAlert={setAlert}
                                      />
                                    )}
                                    {userPosts?.postType === "alert" && (
                                      <AlertPost alert={userPosts} />
                                    )}
                                    {userPosts?.postType === "event" && (
                                      <EventPost event={userPosts} />
                                    )}
                                    {userPosts?.postType === "thought" && (
                                      <ThoughtPost thought={userPosts} />
                                    )}
                                    {userPosts?.postType === "podcast" && (
                                      <PodcastPost podcast={userPosts} />
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
                                        userPosts.postHashTags.map(
                                          (tags, i) => {
                                            return (
                                              <span key={tags.id || i}>
                                                #{tags.name},
                                              </span>
                                            );
                                          }
                                        )}
                                    </h5>
                                    {/* <div className="bookmark favourite-btn">
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
                                                  data-img="/assets/images/story-2.jpg"
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
                                            <span>
                                              {userPosts.sharesCount}{" "}
                                            </span>
                                            Share
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
                                                  <React.Fragment key={i}>
                                                    <div className="post-btn-cust selected bg-white">
                                                      <img
                                                        src={reaction.imageURL}
                                                      />
                                                    </div>{" "}
                                                    {reaction.name}
                                                  </React.Fragment>
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
                                        <a>
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
                                        <a>
                                          <div className="post-btn-cust">
                                            <img src="assets/images/share.png" alt=''/>
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
                                              ref={commentRef}
                                              onChange={(e) => {
                                                setCommentData({
                                                  postId: userPosts.postId,
                                                  comment: e.target.value,
                                                });
                                              }}
                                              onKeyPress={(e) =>
                                                e.key === "Enter" &&
                                                submitComment(userPosts.postId)
                                              }
                                            />
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
              <ContentRight></ContentRight>
            </div>
          </div>
        </div>
        <RightSidebar></RightSidebar>
      </div>
      <Models></Models>
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

      <ReportPostModal
        modal={modal}
        setModal={setModal}
        reportPostBody={reportPostBody}
        setReportPostBody={setReportPostBody}
        setOpen={setOpen}
        setAlert={setAlert}
      />
    </>
  );
}
// export default Home
