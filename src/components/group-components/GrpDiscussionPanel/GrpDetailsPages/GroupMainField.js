import React, { useEffect, useState } from 'react'
import CreatePost from '../GrpPostCreation/CreatePost'
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { loadAllUserPosts } from '../../../../Services/Actions/SocialFeed/getAllUserPostsAction';

// Use for snakeBar
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { loadProfileByUserId } from '../../../../Services/Actions/UserProfile/getUserProfileByUserIdAction';
import { loadAllReactions } from '../../../../Services/Actions/SocialFeed/getAllReactionsAction';
import MainPost from '../../../post-components/display-post/MainPost';

const GroupMainField = () => {
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
            <div className="container-fluid section-t-space px-0 col-lg-12">
                <div className="page-content row">
                    <div className="col-lg-4">
                        <div className="gallery-section section-b-space">
                            <div className="gallery-top">
                                <div className="card-title">
                                    <h3>gallery</h3>
                                </div>
                            </div>
                            <div className="portfolio-section ratio_square">
                                <div className="container-fluid p-0">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-6 ">
                                                    <div className="overlay">
                                                        <div className="portfolio-image">
                                                            <a href="/" data-bs-toggle="modal"
                                                                data-bs-target="#imageModel">
                                                                <img src="/assets/images/event-bg.jpg" alt=""
                                                                    className="img-fluid bg-img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="overlay">
                                                        <div className="portfolio-image">
                                                            <a href="/" data-bs-toggle="modal"
                                                                data-bs-target="#imageModel">
                                                                <img src="/assets/images/event-bg.jpg" alt=""
                                                                    className="img-fluid bg-img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="overlay">
                                                        <div className="portfolio-image">
                                                            <a href="/" data-bs-toggle="modal"
                                                                data-bs-target="#imageModel">
                                                                <img src="/assets/images/event-bg.jpg" alt=""
                                                                    className="img-fluid bg-img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="overlay">
                                                        <div className="portfolio-image">
                                                            <a href="/" data-bs-toggle="modal"
                                                                data-bs-target="#imageModel">
                                                                <img src="/assets/images/event-bg.jpg" alt=""
                                                                    className="img-fluid bg-img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="col-12 pt-cls">
                                                <div className="overlay">
                                                    <div className="portfolio-image">
                                                        <a href="/" data-bs-toggle="modal"
                                                            data-bs-target="#imageModel">
                                                            <img src="/assets/images/event-bg.jpg" alt=""
                                                                className="img-fluid bg-img" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="p-1">
                                <div className="mp-releted-pro-blk mp-releted-pro-blk-new content-mp-block d-flex justify-content-between">
                                    <div className="media-body d-md-block">
                                        <div class="media media-new d-sm-flex">
                                            <div class="user-img">
                                                <img src='https://sociomee-dev.s3.ap-south-1.amazonaws.com/userProfileDp/LhXHReJcWmnBW.jpg' className="img-fluid bg-img connection-profile connection-profile-new" alt="shivam singh" />
                                                <span class="available-stats online"></span>
                                            </div>
                                            <div class="media-body d-md-block pl-2">
                                                <h4 className='m-0'>name</h4>
                                                <span>userName</span>
                                            </div>
                                        </div>
                                        <div className="invite">
                                            <p>Invite</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="create-post position-relative">
                            <div className="static-section">
                                <div>
                                    <CreatePost></CreatePost>

                                    {/* INFINITE POST */}
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
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupMainField