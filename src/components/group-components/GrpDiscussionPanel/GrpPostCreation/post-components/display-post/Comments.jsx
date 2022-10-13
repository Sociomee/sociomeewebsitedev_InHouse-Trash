import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import timeAgo from "../../../functions/timeAgo";
import {
  addCommentOnPost,
  addLikeOnComment,
} from "../../../Services/Actions/SocialFeed/addCommentOnPost";
import SubComments from "./SubComments";

const Comments = ({ postId, allowComments, setFetchedPost }) => {
  const [postComments, setPostComments] = useState([]);
  const [isCommentAdd, setIsCommentAdd] = useState(false);
  const [error, setError] = useState(false);
  // post comment ref
  const commentRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("sociomeeUser"));
  const dispatch = useDispatch();

  const commentLikeHandler = async (commentId) => {
    await dispatch(
      addLikeOnComment({
        commentId: commentId,
        reactionId: "5e8592b0-ee8e-4602-8ef0-d22ad3e2b305",
      })
    );
    axios
      .post(
        `${process.env.REACT_APP_IPURL}/post/getComments`,
        { postId: postId, pageSize: 4, pageIndex: 0 },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      )
      .then((res) => {
        setPostComments(res.data.data.successResult);
        setIsCommentAdd(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // comment submit function
  const submitComment = async (id) => {
    setError(false);
    const comment = commentRef.current.value;
    if (!comment) {
      setError(true);
    } else {
      await dispatch(addCommentOnPost({ postId: id, comment: comment }));
      await axios
        .post(
          `${process.env.REACT_APP_IPURL}/post/getComments`,
          { postId: id, pageSize: 4, pageIndex: 0 },
          {
            headers: { Authorization: `Bearer ${user?.token}` },
          }
        )
        .then((response) => {
          setIsCommentAdd(true);
          commentRef.current.value = "";
          axios
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
              setFetchedPost(res.data.data.successResult[0]);
              setPostComments(response.data.data.successResult);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const timeAgoCall = useCallback(
    (time) => {
      return timeAgo(time);
    },
    [isCommentAdd]
  );

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_IPURL}/post/getComments`,
        { postId: postId, pageIndex: 0, pageSize: 4 },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      )
      .then((res) => {
        setPostComments(res.data.data.successResult);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  return (
    <>
      <div className={`comments ${allowComments !== 1 ? "d-none" : "d-block"}`}>
        <div className="main-comment">
          {postComments?.count > 0 ? (
            postComments?.rows &&
            postComments?.rows.map((comment) => {
              return (
                <>
                  <div className="media mt-2" key={comment.id}>
                    <a
                      className="user-img popover-cls"
                      data-bs-toggle="popover"
                      data-placement="right"
                      data-name="Pabelo mukrani"
                      data-img="assets/images/story-2.jpg"
                    >
                      <img
                        src={comment.profileImageThumb}
                        className="img-fluid bg-img"
                        alt="user"
                      />
                    </a>
                    <div className="media-body">
                      <a>
                        <h5>{comment.fullName}</h5>
                      </a>
                      <p>{comment.comment}</p>
                      <ul className="comment-option">
                        <li onClick={() => commentLikeHandler(comment.id)}>
                          <a>
                            <img src="/assets/images/liked-icon.png" /> like (
                            {comment.likesCount})
                          </a>
                        </li>
                        <li>
                          <a>
                            <img src="/assets/images/chat-icon.png" /> reply (
                            {comment.replyCount})
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="comment-time">
                      <h6>{timeAgoCall(comment.createdAt)}</h6>
                    </div>
                  </div>
                  <SubComments postId={postId} commentId={comment.id} />
                </>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      {allowComments === 1 ? (
        <>
          <div className="reply">
            <div className="search-input input-style input-lg icon-right">
              {/* <span class="poll-radio-blk" id="basic-addon1">@</span> */}
              <input
                type="text"
                className={`form-control emojiPicker ${
                  error && "border border-danger"
                }`}
                ref={commentRef}
                placeholder="write a comment.."
                // value={commentData.comment}

                onKeyPress={(e) => e.key === "Enter" && submitComment(postId)}
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </a>
              <a
                onClick={() => {
                  submitComment(postId);
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
              </a>
            </div>
          </div>
        </>
      ) : null}
      {/* if comments length is greater than 4 then display load more option */}
      {/* {
                postComments?.count >= 4 && <button className="loader button-anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15 ih-15">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                    </svg>
                    load more replies
                </button>
            } */}
    </>
  );
};

export default Comments;
