import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import timeAgo from "../../../functions/timeAgo";
import { addLikeOnComment } from "../../../Services/Actions/SocialFeed/addCommentOnPost";

const SubComments = ({ postId, commentId }) => {
  const [postSubComments, setPostSubComments] = useState([]);
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
        { postId: postId, commentId: commentId, pageIndex: 0, pageSize: 2 },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      )
      .then((res) => {
        setPostSubComments(res.data.data.successResult);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const timeAgoCall = useCallback(
    (time) => {
      return timeAgo(time);
    },
    []
  );

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_IPURL}/post/getComments`,
        { postId: postId, commentId: commentId, pageIndex: 0, pageSize: 2 },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      )
      .then((res) => {
        setPostSubComments(res.data.data.successResult);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  return (
    <>
      <div className="sub-comment">
        {postSubComments?.count > 0 ? (
          postSubComments?.rows &&
          postSubComments?.rows.map((comment) => {
            return (
              <div className="media" key={comment.id}>
                <a
                  href="#"
                  className="user-img popover-cls"
                  data-bs-toggle="popover"
                  data-placement="right"
                  data-name="sufiya elija"
                  data-img="assets/images/story-3.jpg"
                >
                  <img
                    src={comment.profileImageThumb}
                    className="img-fluid bg-img"
                    alt={comment.fullName}
                  />
                </a>
                <div className="media-body">
                  <a href="#">
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
            );
          })
        ) : (
          <></>
        )}
      </div>
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

export default SubComments;
