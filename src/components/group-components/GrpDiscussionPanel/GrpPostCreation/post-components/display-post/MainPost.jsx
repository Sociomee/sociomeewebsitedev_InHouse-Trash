import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecommendationPost from "../display-post/RecommendationPost";
import AlertPost from "../display-post/AlertPost";
import EventPost from "../display-post/EventPost";
import MediaPost from "../display-post/MediaPost";
import MultiMediaPost from "../display-post/MultiMediaPost";
import PodcastPost from "../display-post/PodcastPost";
import PollPost from "../display-post/PollPost";
import ThoughtPost from "../display-post/ThoughtPost";
import Comments from "../display-post/Comments";

import SuggestedAd from "../SuggestedItems/SuggestedAd";
import SuggestedBizPage from "../SuggestedItems/SuggestedBizPage";
import SuggestedGroup from "../SuggestedItems/SuggestedGroup";
import timeAgo from "../../../functions/timeAgo";
import { setPostSaved } from "../../../Services/Actions/SocialFeed/postSavedAction";
import { addLikeOnPost } from "../../../Services/Actions/SocialFeed/addLikeOnPost";
import axios from "axios";
import { addAnswerOnPollPost } from "../../../Services/Actions/SocialFeed/addAnswerOnPollPostAction";

const MainPost = ({
  userPosts,
  setOpen,
  setAlert,
  setModal,
  setReportPostBody,
  reportPostBody,
  setPop,
  setGlobalPostId,
  type,
}) => {
  // get all reactions using redux
  const { allReactions } = useSelector((state) => state.getAllReactionsData);

  //   set userPost in this state
  const [fetchedPost, setFetchedPost] = useState([]);

  // get user profile by user id
  const { userProfileByUserId } = useSelector(
    (state) => state.getUserProfileByUserIdData
  );

  let dispatch = useDispatch();

  const likeHandler = async (postId, reactId) => {
    let likeFinder = fetchedPost?.topLikes?.find(
      (fin) => fin.id === userProfileByUserId.id
    );
    if (!likeFinder) {
      let data = {
        postId: postId,
        reactionId: reactId,
      };
      await dispatch(addLikeOnPost(data));
      await axios
        .post(
          `${process.env.REACT_APP_IPURL}/post/getPostById`,
          { postId: postId },
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("sociomeeUser"))?.token
              }`,
            },
          }
        )
        .then((res) => {
          console.log(res.data.data);
          setFetchedPost(res.data.data.successResult[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setOpen(true);
      setAlert({ sev: "error", content: "You Already Liked This Post !" });
    }
  };

  // submit poll's answer
  const selectPollOption = async (postId, pollOptionId) => {
    await dispatch(
      addAnswerOnPollPost({ postId: postId, pollOptionId: pollOptionId })
    );
    await axios
      .post(
        `${process.env.REACT_APP_IPURL}/post/getPostById`,
        { postId: postId },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("sociomeeUser"))?.token
            }`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setFetchedPost(res.data.data.successResult[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // save post
  const savePostHandler = (postId) => {
    console.log(postId);
    dispatch(setPostSaved({ postId: postId, isSaved: true }));
    setOpen(true);
    setAlert({ sev: "success", content: "Post Saved ✔️" });
  };

  useLayoutEffect(() => {
    setFetchedPost(userPosts ? userPosts : []);
  }, [userPosts]);

  return (
    <div className="post-wrapper col-grid-box mt-4" key={fetchedPost?.postId}>
      {fetchedPost?.postType === "suggestedBusiness" && (
        <SuggestedBizPage bizPage={fetchedPost} />
      )}
      {fetchedPost?.postType === "suggestedGroups" && (
        <SuggestedGroup groups={fetchedPost} />
      )}
      {fetchedPost?.postType === "suggestedAd" && (
        <SuggestedAd ad={fetchedPost?.adData} />
      )}

      {fetchedPost?.isPrivate === 0 && (
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
                    src={fetchedPost?.profileImageThumb}
                    className="img-fluid bg-img"
                    alt="user"
                  />
                </a>
                <div className="media-body">
                  <h5>{fetchedPost?.fullName}</h5>
                  <h6>
                    {fetchedPost?.postType === "recommendation" && (
                      <span>
                        <span class="color-orange">Recommendation</span>
                        &nbsp;•&nbsp;
                      </span>
                    )}
                    {timeAgo(fetchedPost?.createdAt)}
                  </h6>
                  {fetchedPost?.displayLocation && (
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
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {fetchedPost?.displayLocation}
                    </h6>
                  )}
                </div>
              </div>
            </div>
            {
              (type = "profile" ? (
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
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
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
                              <line x1="9" y1="9" x2="15" y2="15"></line>
                              <line x1="15" y1="9" x2="9" y2="15"></line>
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
                              <line x1="15" y1="9" x2="9" y2="15"></line>
                              <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                            unfollow sufiya
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
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
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </div>
                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                      <ul>
                        <li
                          onClick={() => savePostHandler(fetchedPost?.postId)}
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
                              <line x1="9" y1="9" x2="15" y2="15"></line>
                              <line x1="15" y1="9" x2="9" y2="15"></line>
                            </svg>
                            hide post
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setModal(true);
                            setReportPostBody({
                              ...reportPostBody,
                              postId: fetchedPost?.postId,
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
                              <line x1="15" y1="9" x2="9" y2="15"></line>
                              <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                            Report this post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="post-details">
            <div className="img-wrapper">
              {fetchedPost?.mediaList &&
              fetchedPost?.mediaList?.length === 1 ? (
                <MediaPost userPosts={fetchedPost} />
              ) : (
                <MultiMediaPost userPosts={fetchedPost} />
              )}
            </div>
            <div className="detail-box">
              <h3 className=" text-break">
                {fetchedPost?.postType !== "alert" &&
                  fetchedPost?.postType !== "thought" &&
                  fetchedPost?.postType !== "podcast" &&
                  fetchedPost?.postType !== "recommendation" &&
                  fetchedPost?.caption}
              </h3>
              {fetchedPost?.postType === "poll" && (
                <PollPost
                  poll={fetchedPost}
                  selectPollOption={selectPollOption}
                />
              )}
              {fetchedPost?.postType === "alert" && (
                <AlertPost alert={fetchedPost} />
              )}
              {fetchedPost?.postType === "event" && (
                <EventPost event={fetchedPost} />
              )}
              {fetchedPost?.postType === "thought" && (
                <ThoughtPost thought={fetchedPost} />
              )}
              {fetchedPost?.postType === "podcast" && (
                <PodcastPost podcast={fetchedPost} />
              )}
              {fetchedPost?.postType === "recommendation" && (
                <RecommendationPost recommendation={fetchedPost} />
              )}
              <p></p>
              <h5 className="tag text-break">
                {fetchedPost?.postHashTags &&
                  fetchedPost?.postHashTags.map((tags, i) => {
                    return <span key={tags.id || i}>#{tags.name},</span>;
                  })}
              </h5>
              {/* <div className="bookmark favourite-btn">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                      </div> */}
              <div className="people-likes">
                <ul>
                  {fetchedPost?.topLikes &&
                    fetchedPost?.topLikes.map((likes, ind) => {
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
                    })}
                </ul>
                <h6>{fetchedPost?.likesCount} people react this post</h6>
              </div>
            </div>
            <div className="like-panel">
              <div className="left-emoji">
                <ul>
                  {allReactions &&
                    allReactions.map((reaction) => {
                      return (
                        <li key={reaction.id}>
                          <img src={reaction.imageURL} alt={reaction.name} />
                        </li>
                      );
                    })}
                </ul>
                <h6>{fetchedPost?.likesCount}</h6>
              </div>
              <div className="right-stats">
                <ul>
                  <li>
                    <h5>
                      <i
                        className="iw-16 ih-16"
                        data-feather="message-square"
                      ></i>
                      <span>{fetchedPost?.commentsCount}</span> comment
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="iw-16 ih-16" data-feather="share"></i>
                      <span>{fetchedPost?.sharesCount} </span>
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
                        fetchedPost?.postId,
                        allReactions && allReactions[0].id
                      );
                    }}
                  >
                    {allReactions &&
                      allReactions
                        .filter((seq) => seq.sequenceNo === 1)
                        .map((reaction, i) => {
                          return (
                            <React.Fragment key={i}>
                              <div className="post-btn-cust selected bg-white">
                                <img src={reaction.imageURL} />
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
                          .filter((seq) => seq.sequenceNo !== 1)
                          .map((reaction) => {
                            return (
                              <li data-title={reaction.name} key={reaction.id}>
                                <a>
                                  <img
                                    src={reaction.imageURL}
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
                <li data-bs-target="#shareModal" data-bs-toggle="modal">
                  <a>
                    <div className="post-btn-cust">
                      <img src="assets/images/share.png" alt="" />
                    </div>{" "}
                    share
                  </a>
                </li>
              </ul>
            </div>
            {/* Comments Section */}
            <div className="comment-section">
              <Comments
                postId={fetchedPost?.postId}
                allowComments={fetchedPost?.allowComments}
                setFetchedPost={setFetchedPost}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPost;
