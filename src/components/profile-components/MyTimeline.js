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

// Use for snakeBar
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

import InfiniteScroll from "react-infinite-scroll-component";
import MainPost from "../post-components/display-post/MainPost";

  // Snackbar Code
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const MyTimeline = () => {
  // get all user posts by id using redux
  const { allPostsByUserId } = useSelector(
    (state) => state.getAllPostsByUserIdData
  );

  const [globalPostId,setGlobalPostId]=useState('')

  const { userFollowingRequests } = useSelector(state => state.userFollowingRequestsData)
 
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

  useEffect(() => {
    dispatch(loadAllPostsByUserId(pageSize));
    dispatch(loadAllReactions())
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
                {userFollowingRequests?.length > 0 && <FriendRequest />}
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
                          <MainPost
                            userPosts={userPosts}
                            key={userPosts.postId}
                            setOpen={setOpen}
                            setAlert={setAlert}
                            setPop={setPop}
                            setGlobalPostId={setGlobalPostId}
                            type={'timeline'}
                          />
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
};
export default MyTimeline;
