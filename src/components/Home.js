import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAllUserPosts } from "../Services/Actions/SocialFeed/getAllUserPostsAction";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import CreatePost from "./CreatePost";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import Models from "./Models";
import RightSidebar from "./RightSidebar";
import StorySlider from "./StorySlider";
// Use for snakeBar
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

// import react infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";
import MainPost from "./post-components/display-post/MainPost";
import ReportPostModal from "./post-components/Modals/ReportPostModal";
import { loadProfileByUserId } from "../Services/Actions/UserProfile/getUserProfileByUserIdAction";
import { loadAllReactions } from "../Services/Actions/SocialFeed/getAllReactionsAction";

export default function Home({ user }) {
  // Snackbar Code 
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ sev: "success", content: "" });
  // mui dialog box for confirmation
  const [modal, setModal] = useState(false);

  // report post's data
  const [reportPostBody, setReportPostBody] = useState({
    postId: "",
    comment: "",
  });

  // get all user posts using redux
  const { allUserPosts } = useSelector((state) => state.getAllUserPostsData);

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

  let dispatch = useDispatch();

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
                          <MainPost
                            userPosts={userPosts}
                            key={userPosts.postId}
                            setOpen={setOpen}
                            setAlert={setAlert}
                            setModal={setModal}
                            setReportPostBody={setReportPostBody}
                            reportPostBody={reportPostBody}
                            type={'home'}
                          />
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
