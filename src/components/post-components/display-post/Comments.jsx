import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import timeAgo from "../../../functions/timeAgo";
import { addLikeOnComment } from "../../../Services/Actions/SocialFeed/addCommentOnPost";
import { loadAllUserPosts } from "../../../Services/Actions/SocialFeed/getAllUserPostsAction";
import SubComments from "./SubComments";

const Comments = ({ postId, pageSize }) => {
  // get all user posts using redux
  const { allUserPosts } = useSelector((state) => state.getAllUserPostsData);
  const [postComments, setPostComments] = useState([]);
  const user = JSON.parse(localStorage.getItem("sociomeeUser"));
  const dispatch = useDispatch();

  const commentLikeHandler = async (commentId) => {
    await dispatch(
      addLikeOnComment({
        commentId: commentId,
        reactionId: "5e8592b0-ee8e-4602-8ef0-d22ad3e2b305",
      })
    );
    dispatch(loadAllUserPosts(pageSize));
  };

  const data = {
    postId: postId,
    commentId: "",
    searchKey: "",
    pageIndex: 0,
    pageSize: 4,
  };
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_IPURL}/post/getComments`, data, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setPostComments(res.data.data.successResult);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [allUserPosts]);

  return (
    <>
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
                  <h6>{timeAgo(comment.createdAt)}</h6>
                </div>
              </div>
              <SubComments
                postId={postId}
                commentId={comment.id}
                pageSize={pageSize}
              />
            </>
          );
        })
      ) : (
        <></>
      )}
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
