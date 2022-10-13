import React, { useRef, useState, useEffect } from "react";

// Use for snakebar
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadProfileByUserId } from "../../../../Services/Actions/UserProfile/getUserProfileByUserIdAction";
import { loadArticleCategory } from "../../../../Services/Actions/SocialFeed/getArticleCategoryAction";
import { loadEventCategory } from "../../../../Services/Actions/SocialFeed/getEventCategoryAction";
import { loadColors } from "../../../../Services/Actions/SocialFeed/getColorsAction";
import {
  loadAlertLevel,
  loadAlertRange,
} from "../../../../Services/Actions/SocialFeed/getAlertDataAction";
import AddInYourPost from "./AddInYourPost";
import PostDisplayType from "./PostDisplayType";
import CreateEventModal from "./post-components/Modals/CreateEventModal";
import CreateArticleModal from "./post-components/Modals/CreateArticleModal";
import CreatePollModal from "./post-components/Modals/CreatePollModal";
import CreatePodcastModal from "./post-components/Modals/CreatePodcastModal";
import CreateSellModal from "./post-components/Modals/CreateSellModal";
import CreateAlert from "./post-components/CreateAlert";
import CreateThought from "./post-components/CreateThought";
import CreateRecommendation from "./post-components/CreateRecommendation";
import CreateText from "./post-components/CreateText";
import CreateMedia from "./post-components/CreateMedia";
import Loader from "./Loader/Loader";
import { addPost } from "../../../../Services/Actions/SocialFeed/getAllUserPostsAction";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CreatePost() {
  const [postData, setPostData] = useState({
    postType: "text",
    caption: "",
    displayLocation: "",
    schedule: "",
    isScheduled: "",
    feelingId: "",
    feelingCategoryId: "",
    allowComments: 1,

    mentionIds: null,
    hashTags: [],
    taggedUserIds: null,

    locationLAT: "",
    locationLONG: "",
    location1: "",
    location2: "",
    location3: "",
    thoughtForeColor: "#fff",
    thoughtBackColor: "",
  });
  // Media File Preview of media post
  const [mediaPost, setMediaPost] = useState([]);

  const [tempPollOption, setTempPollOption] = useState({
    seq1: "",
    seq2: "",
  });

  // Snackbar Code
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ sev: "success", content: "" });

  // loading
  const [loading, setLoading] = useState(false);

  const [pollOptionCount, setPollOptionCount] = useState([1, 2]);

  // get user profile by user id
  const { userProfileByUserId } = useSelector(
    (state) => state.getUserProfileByUserIdData
  );

  let dispatch = useDispatch();

  //   Create Post BG
  const bgNoneRef = useRef(null);
  const bgRef = useRef(null);

  // Create Media Post
  const mediaRef = useRef(null);
  const gradientMainBlockRef = useRef(null);

  // Create Recommendation Post
  const RecommendationRef = useRef(null);

  // Create Alert Post
  const alertRef = useRef(null);

  // Show Color Plate
  const colorListRef = useRef(null);
  const colorToggleRef = useRef(null);
  const openGradientRef = useRef(null);

  // Create Thought Post
  const clickGradient = (e, colorCode) => {
    bgRef.current.classList.add("d-block");
    bgNoneRef.current.classList.add("d-none");
    mediaRef.current.classList.remove("d-block");
    alertRef.current.classList.remove("d-block");
    RecommendationRef.current.classList.remove("d-block");
    gradientMainBlockRef.current.classList.remove("d-none");
    setPostData({
      ...postData,
      postType: "thought",
      thoughtForeColor: "#fff",
      thoughtBackColor: colorCode,
    });
  };
  const closeBgClick = (e) => {
    bgRef.current.classList.remove("d-block");
    bgNoneRef.current.classList.remove("d-none");
  };

  const clickMedia = (e) => {
    mediaRef.current.classList.add("d-block");
    bgNoneRef.current.classList.add("d-none");
    bgRef.current.classList.remove("d-block");
    gradientMainBlockRef.current.classList.add("d-none");
    alertRef.current.classList.remove("d-block");
    RecommendationRef.current.classList.remove("d-block");
  };
  const closeMediaClick = (e) => {
    mediaRef.current.classList.remove("d-block");
    bgNoneRef.current.classList.remove("d-none");
    gradientMainBlockRef.current.classList.remove("d-none");
    setMediaPost("");
  };

  const clickRecommendation = (e) => {
    RecommendationRef.current.classList.add("d-block");
    setPostData({ ...postData, postType: "recommendation" });
    bgNoneRef.current.classList.add("d-none");
    bgRef.current.classList.remove("d-block");
    mediaRef.current.classList.remove("d-block");
    alertRef.current.classList.remove("d-block");
    //gradient Button
    gradientMainBlockRef.current.classList.add("d-none");
    openGradientRef.current.classList.remove("d-none");
    colorListRef.current.classList.remove("d-block");
    colorToggleRef.current.classList.remove("d-block");
    colorListRef.current.classList.add("d-none");
    colorToggleRef.current.classList.add("d-none");
  };

  const clickAlert = (e) => {
    alertRef.current.classList.add("d-block");
    bgNoneRef.current.classList.add("d-none");
    bgRef.current.classList.remove("d-block");
    mediaRef.current.classList.remove("d-block");
    RecommendationRef.current.classList.remove("d-block");
    //gradient Button
    gradientMainBlockRef.current.classList.add("d-none");
    openGradientRef.current.classList.remove("d-none");
    colorListRef.current.classList.remove("d-block");
    colorToggleRef.current.classList.remove("d-block");
    colorListRef.current.classList.add("d-none");
    colorToggleRef.current.classList.add("d-none");
    setPostData({ postType: "alert" });
    dispatch(loadAlertLevel());
    dispatch(loadAlertRange());
  };

  const clickColorShow = (e) => {
    colorListRef.current.classList.add("d-block");
    colorToggleRef.current.classList.add("d-block");
    openGradientRef.current.classList.add("d-none");
    colorListRef.current.classList.remove("d-none");
    colorToggleRef.current.classList.remove("d-none");
    dispatch(loadColors());
  };
  const clickColorHide = (e) => {
    openGradientRef.current.classList.remove("d-none");
    colorListRef.current.classList.remove("d-block");
    colorToggleRef.current.classList.remove("d-block");
    colorListRef.current.classList.add("d-none");
    colorToggleRef.current.classList.add("d-none");
  };

  //Event Popup Function
  const eventPopup = () => {
    dispatch(loadEventCategory());
    setPostData({ postType: "event" });
  };
  //article Popup Function
  const articlePopup = () => {
    dispatch(loadArticleCategory());
    setPostData({ postType: "article" });
  };
  //Poll Popup Function
  const pollPopup = () => {
    setPostData({ ...postData, postType: "poll" });
  };

  // create post functionality
  const createPostHandler = (e) => {
    e.preventDefault();
    console.log(postData);
    if (!postData.caption) {
      setOpen(true);
      setAlert({ sev: "error", content: "Please Enter Caption !" });
    } else {
      axios
        .get(
          "https://api.ipgeolocation.io/ipgeo?apiKey=c1016d597c494a02aa190877148a5688"
        )
        .then((res) => {
          postData.locationLAT = res.data.latitude;
          postData.locationLONG = res.data.longitude;
          postData.location1 = res.data.country_name;
          postData.location2 = res.data.state_prov;
          postData.location3 = res.data.city;
          console.log(res.data);
          if (mediaPost.length > 0) {
            postData.postType = "media";
            console.log(mediaPost);
            if (mediaPost.length <= 5) {
              setLoading(true)
              const formData = new FormData();
              mediaPost.map((imgObj) => {
                return formData.append("files", imgObj);
              });
              formData.append("uploadFor", "postMedia");
              axios
                .post(
                  `${process.env.REACT_APP_IPURL}/admin/UploadFile`,
                  formData,
                  {
                    headers: {
                      Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("sociomeeUser"))?.token
                      }`,
                    },
                  }
                )
                .then((res) => {
                  console.log(res.data);
                  if (res.data.success) {
                    postData.mediaList = [];
                    res.data.data.successResult.forEach((img, i) => {
                      postData.mediaList.push({
                        fileType: mediaPost[i].type.slice(0, 5),
                        fileURL: img,
                        caption: "Caption",
                        sequence: i,
                      });
                    });

                    dispatch(addPost(postData));
                    setLoading(false)
                    setPostData({
                      postType: "text",
                      caption: "",
                      displayLocation: "",
                      schedule: "",
                      isScheduled: "",
                      feelingId: "",
                      feelingCategoryId: "",
                      allowComments: 0,

                      mentionIds: null,
                      hashTags: [],
                      taggedUserIds: null,

                      locationLAT: "",
                      locationLONG: "",
                      location1: "",
                      location2: "",
                      location3: "",
                    });
                    setMediaPost("");
                    // setOpen(true);
                    // setAlert({
                    //   sev: "success",
                    //   content: "Post Add Successfully !",
                    // });
                  } else {
                    setOpen(true);
                    setAlert({
                      sev: "error",
                      content: `${res.data.data.errorResult}`,
                    });
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              setOpen(true);
              setAlert({
                sev: "error",
                content:
                  "Max Image Upload Limit Exceed: Allowed Limit 5 Images !",
              });
            }
          } else if (postData.postType === "poll") {
            if (tempPollOption.seq1 === "" && tempPollOption.seq2 === "") {
              setOpen(true);
              setAlert({
                sev: "error",
                content: "Please Enter Poll Options !",
              });
            } else if (!postData?.pollStartTime || !postData?.pollEndTime) {
              setOpen(true);
              setAlert({
                sev: "error",
                content: "Please Select Start & End Time !",
              });
            } else {
              const polOpt = [];
              for (let key in tempPollOption) {
                if (tempPollOption[key] !== "") {
                  polOpt.push({
                    optionText: tempPollOption[key],
                    sequence: +key.slice(3),
                  });
                }
              }
              postData.pollOptions = polOpt;
              postData.allowComments = 0;
              dispatch(addPost(postData));
              // pollRef.current.classList.remove("d-block");
              // bgNoneRef.current.classList.remove("d-none");

              setPostData({
                postType: "text",
                caption: "",
                displayLocation: "",
                schedule: "",
                isScheduled: "",
                feelingId: "",
                feelingCategoryId: "",
                allowComments: 0,
                pollOptions: [],

                mentionIds: null,
                hashTags: [],
                taggedUserIds: null,

                locationLAT: "",
                locationLONG: "",
                location1: "",
                location2: "",
                location3: "",
              });
              setTempPollOption({
                seq1: "",
                seq2: "",
              });
              setPollOptionCount([1, 2]);
              document.getElementById("popupclose3").click();
              // setOpen(true);
              // setAlert({ sev: "success", content: "Post Add Successfully !" });
            }
          } else if (postData.postType === "event") {
            if (
              postData.caption === "" ||
              postData?.eventCategoryId === "" ||
              postData?.eventCoverImageURL === "" ||
              postData.eventStartTime === "" ||
              postData.eventEndTime === "" ||
              !postData?.eventDescription ||
              postData.eventDescription === "" ||
              !postData?.eventAddress ||
              postData.eventAddress === ""
            ) {
              setOpen(true);
              setAlert({ sev: "error", content: "Please Fill All Data !" });
            } else {
              const formData = new FormData();
              formData.append("files", postData.eventCoverImageURL);
              formData.append("uploadFor", "postMedia");
              axios
                .post(
                  `${process.env.REACT_APP_IPURL}/admin/UploadFile`,
                  formData,
                  {
                    headers: {
                      Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("sociomeeUser"))?.token
                      }`,
                    },
                  }
                )
                .then((res) => {
                  postData.eventCoverImageURL = res.data.data.successResult[0];
                  dispatch(addPost(postData));
                  // eventRef.current.classList.remove("d-block");
                  // bgNoneRef.current.classList.remove("d-none");
                  document.getElementById("popupclose").click();
                  setPostData({
                    postType: "text",
                    caption: "",
                    displayLocation: "",
                    schedule: "",
                    isScheduled: "",
                    feelingId: "",
                    feelingCategoryId: "",
                    allowComments: 0,
                    pollOptions: [],

                    mentionIds: null,
                    hashTags: [],
                    taggedUserIds: null,

                    locationLAT: "",
                    locationLONG: "",
                    location1: "",
                    location2: "",
                    location3: "",
                    eventCategoryId: "",
                    eventDescription: "",
                    eventAddress: "",
                  });
                  // setOpen(true);
                  // setAlert({
                  //   sev: "success",
                  //   content: "Post Add Successfully !",
                  // });
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          } else if (postData.postType === "alert") {
            if (!postData?.alertLevelId || !postData?.alertRangeMeter) {
              setOpen(true);
              setAlert({ sev: "error", content: "Please Fill All Data !" });
            } else {
              postData.hashTags=['threat_alert'];
              dispatch(addPost(postData));
              alertRef.current.classList.remove("d-block");
              bgNoneRef.current.classList.remove("d-none");
              setPostData({
                postType: "text",
                caption: "",
                displayLocation: "",
                schedule: "",
                isScheduled: "",
                feelingId: "",
                feelingCategoryId: "",
                allowComments: 0,
                pollOptions: [],

                mentionIds: null,
                hashTags: [],
                taggedUserIds: null,

                locationLAT: "",
                locationLONG: "",
                location1: "",
                location2: "",
                location3: "",
                alertRangeMeter: "",
                alertLevelId: "",
              });
              // setOpen(true);
              // setAlert({ sev: "success", content: "Post Add Successfully !" });
            }
          } else if (postData.postType === "thought") {
            if (!postData?.caption) {
              setOpen(true);
              setAlert({ sev: "error", content: "Please Fill Caption !" });
            } else {
              postData.hashTags=['#thought_of_the_day'];
              dispatch(addPost(postData));
              bgRef.current.classList.remove("d-block");
              bgNoneRef.current.classList.remove("d-none");
              setPostData({
                postType: "text",
                caption: "",
                displayLocation: "",
                schedule: "",
                isScheduled: "",
                feelingId: "",
                feelingCategoryId: "",
                allowComments: 0,
                pollOptions: [],

                mentionIds: null,
                hashTags: [],
                taggedUserIds: null,

                locationLAT: "",
                locationLONG: "",
                location1: "",
                location2: "",
                location3: "",
                alertRangeMeter: "",
                alertLevelId: "",
              });
              // setOpen(true);
              // setAlert({ sev: "success", content: "Post Add Successfully !" });
            }
          } else {
            dispatch(addPost(postData));
            setPostData({
              postType: "text",
              caption: "",
              displayLocation: "",
              schedule: "",
              isScheduled: "",
              feelingId: "",
              feelingCategoryId: "",
              allowComments: 0,

              mentionIds: null,
              hashTags: [],
              taggedUserIds: null,

              locationLAT: "",
              locationLONG: "",
              location1: "",
              location2: "",
              location3: "",
            });
            // setOpen(true);
            // setAlert({ sev: "success", content: "Post Add Successfully !" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Cancel Snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    dispatch(loadProfileByUserId());
    // eslint-disable-next-line
  }, []);

  return (
    <> 
      <div className="create-post position-relative">
        <div className="static-section">
          <div className="card-title create-port-title"> 
            <PostDisplayType postData={postData} setPostData={setPostData} />

            <div className="golive-more-blk">
              <div className="create-btn-livetrad">
                <a className="btntrad">
                  <img src="/assets/images/hotspot_pulse-1.svg" alt="" />
                  Go Live
                </a>
              </div>
              <div className="settings more-settings-blk">
                <div className="setting-btn ms-2 setting-dropdown no-bg">
                  <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                    <a
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="morebtn-cust"
                    >
                      {" "}
                      More
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
                        className="iw-14"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right custom-dropdown more-post-type-dropdown">
                      <ul>
                        <li>
                          <a onClick={clickMedia}>
                            <img src="/assets/images/Media.png" alt="" /> Media
                          </a>
                        </li>
                        <li>
                          <a onClick={(e) => clickGradient(e, "#9acd32")}>
                            <img src="/assets/images/Thought.png" alt="" />{" "}
                            Thought
                          </a>
                        </li>
                        <li>
                          <a>
                            <img src="/assets/images/Go_live.png" alt="" /> Go
                            Live
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#createPostEvent"
                            onClick={eventPopup}
                          >
                            <img src="assets/images/Event.png" alt="" /> Event
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#createPostPodcast"
                          >
                            <img src="assets/images/Audio.png" alt="" /> Podcast
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#createPostArticle"
                            onClick={articlePopup}
                          >
                            <img src="assets/images/Blog.png" alt="" /> Articles
                          </a>
                        </li>
                        <li>
                          <a onClick={clickRecommendation}>
                            <img
                              src="/assets/images/Recommendation.png"
                              alt=""
                            />{" "}
                            Recommendation
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#createPostPoll"
                            onClick={pollPopup}
                          >
                            <img src="/assets/images/Poll.png" alt="" /> Poll
                          </a>
                        </li>
                        <li>
                          <a onClick={clickAlert}>
                            <img src="/assets/images/Threat.png" alt="" /> Alert
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#createPostSell"
                          >
                            <img src="assets/images/Sell.png" alt="" /> Sell
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <CreateText
            postData={postData}
            setPostData={setPostData}
            userProfileByUserId={userProfileByUserId}
            reference={bgNoneRef}
          />

          {/* Media Section */}
          <CreateMedia
            postData={postData}
            setPostData={setPostData}
            userProfileByUserId={userProfileByUserId}
            reference={mediaRef}
            mediaPost={mediaPost}
            setMediaPost={setMediaPost}
            closeMediaClick={closeMediaClick}
          />

          {/* Recommendation Section */}
          <CreateRecommendation
            postData={postData}
            setPostData={setPostData}
            userProfileByUserId={userProfileByUserId}
            reference={RecommendationRef}
          />

          {/* Alert Section */}
          <CreateAlert
            postData={postData}
            setPostData={setPostData}
            userProfileByUserId={userProfileByUserId}
            reference={alertRef}
          />

          {/* Thought Section */}
          <CreateThought
            postData={postData}
            setPostData={setPostData}
            bgReference={bgRef}
            closeBgClick={closeBgClick}
            clickColorShow={clickColorShow}
            clickGradient={clickGradient}
            gradientReference={gradientMainBlockRef}
            OpenGradientReference={openGradientRef}
            clickColorHide={clickColorHide}
            colorToggleRef={colorToggleRef}
            colorListReference={colorListRef}
          />
        </div>

        <AddInYourPost
          createPostHandler={createPostHandler}
          postData={postData}
          setPostData={setPostData}
          clickMedia={clickMedia}
          pollOptions={tempPollOption}
        />
        {loading && <Loader loading={loading} />}
      </div>

      {/* Event Model Block */}
      <CreateEventModal
        postData={postData}
        setPostData={setPostData}
        userProfileByUserId={userProfileByUserId}
        createPostHandler={createPostHandler}
        clickMedia={clickMedia}
        tempPollOption={tempPollOption}
      />

      {/*Article Model Block  */}
      <CreateArticleModal
        postData={postData}
        setPostData={setPostData}
        userProfileByUserId={userProfileByUserId}
        createPostHandler={createPostHandler}
        clickMedia={clickMedia}
        tempPollOption={tempPollOption}
      />

      {/* Poll Model Block */}
      <CreatePollModal
        postData={postData}
        setPostData={setPostData}
        userProfileByUserId={userProfileByUserId}
        createPostHandler={createPostHandler}
        clickMedia={clickMedia}
        tempPollOption={tempPollOption}
        setTempPollOption={setTempPollOption}
        pollOptionCount={pollOptionCount}
        setPollOptionCount={setPollOptionCount}
      />

      {/* Podcast Model Block */}
      <CreatePodcastModal
        postData={postData}
        setPostData={setPostData}
        userProfileByUserId={userProfileByUserId}
        createPostHandler={createPostHandler}
        clickMedia={clickMedia}
        tempPollOption={tempPollOption}
      />
      {/* Sell Model Post */}
      <CreateSellModal
        postData={postData}
        setPostData={setPostData}
        userProfileByUserId={userProfileByUserId}
        createPostHandler={createPostHandler}
        clickMedia={clickMedia}
        tempPollOption={tempPollOption}
      />

      <Stack spacing={2} sx={{ width: "100%" }} id="stack">
        {/* Snackbar */}
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
    </>
  );
}
