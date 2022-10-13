import React, { useState } from "react";
import AdmanagerHeaderR from "../../AdmanagerHeaderR/AdmanagerHeaderR";
import Demographic from "./Sections/Demographic";
import "./analysis.css";
import AnalysisSidebar from "./AnalysisSidebar";
import Platform from "./Sections/Platform";

const AdAnalysis = () => {
  // toggle section state
  const [chartToggle, setChartToggle] = useState(false);

  return (
    <>
      {/* Header */}
      <AdmanagerHeaderR />

      <div className="col-lg-12">
        <div className="row">
          {/* Left Sidebar */}
          <AnalysisSidebar />
          <div className="col-lg-9">
            <div className="background">
              <div className="main-panel">
                <h1 className="heading">
                  Nerolac Paints - New Home New Colors
                </h1>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="panel">
                        <div className="d-flex justify-content-between mb-3">
                          <h2>Budget And Time</h2>
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
                        </div>
                        <div className="panel-content">
                          <div className="d-flex justify-content-between mb-4">
                            <h3>Daily Budget</h3>
                            <h2>$ 50</h2>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <h3>Overall Budget</h3>
                            <h3>$ 500</h3>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <h3>Start Date</h3>
                            <h3>23-Mar-22</h3>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <h3>End Date</h3>
                            <h3>23-Mar-22</h3>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <h3>Duration</h3>
                            <h3>90 Days</h3>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                          <button className="ad-button">View Details</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="panel">
                        <div className="d-flex justify-content-between mb-3">
                          <h2>Analytics</h2>
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
                        </div>

                        <div className="panel-content">
                          <div className="d-flex justify-content-between mb-4">
                            <h3>Avg Reach</h3>
                            <h3>889</h3>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <h3>Avg Impression</h3>
                            <h3>889</h3>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <h3>Avg Lead</h3>
                            <h3>564</h3>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                          <button className="ad-button">View Details</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="panel">
                        <div className="d-flex justify-content-between mb-3">
                          <h2>Recent Activities</h2>
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
                        </div>
                        <div className="panel-content">
                          <div className="d-flex justify-content-between mb-4">
                            <h3>Avg Likes</h3>
                            <h2>500</h2>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <h3>Avg Comment</h3>
                            <h3>500</h3>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <h3>Avg Shares</h3>
                            <h3>230</h3>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <h3>Avg Bookmarks</h3>
                            <h3>122</h3>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <h3>Duration</h3>
                            <h3>90 Days</h3>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                          <button className="ad-button">View Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="panel">
              <div className="container">
                {/* chart tab */}
                {chartToggle ? (
                  <Platform setChartToggle={setChartToggle} />
                ) : (
                  <Demographic setChartToggle={setChartToggle} />
                )}
              </div>
            </div>

            <div className="panel">
              <div className="container">
                <div className="row pt-3 pb-3 border-bottom">
                  <div className="col-6 col-lg-10">
                    <div className="row">
                      <div className="col-6 col-lg-4 p-0 d-flex align-items-center">
                        <h3 className="font-weight-bold">
                          Ad preview and comments
                        </h3>
                      </div>
                      <div className="col-6 col-lg-3 p-0">
                        <select className="form-control">
                          <option>Share</option>
                          <option>Monthly</option>
                          <option>Yearly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="row">
                      <div className="col-6 p-0 d-flex align-items-center">
                        <h3 className="font-weight-bold">1 of 1 Ad</h3>
                      </div>
                      <div className="col-6 p-0">
                        <div className="d-flex justify-content-between">
                          <button className="next tab-button-active p-2">
                            <img
                              className="iw-20 ih-20"
                              src="/assets/images/prev.png"
                              alt=""
                            />
                          </button>
                          <button className="next tab-button-active p-2">
                            <img
                              className="iw-20 ih-20"
                              src="/assets/images/next.png"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row pt-3 pb-3 border-bottom">
                  <div className="col-6 col-lg-10">
                    <div className="row">
                      <div className="col-6 col-lg-4 p-0 d-flex align-items-center">
                        <select className="form-control">
                          <option>Mobile News Feed</option>
                          <option>Monthly</option>
                          <option>Yearly</option>
                        </select>
                      </div>
                      <div className="col-6 col-lg-3 p-0"></div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="row">
                      <div className="col-6 p-0 d-flex align-items-center">
                        <h3 className="font-weight-bold">1 of 23 </h3>
                      </div>
                      <div className="col-6 p-0">
                        <div className="d-flex justify-content-between">
                          <button className="next tab-button-active p-2">
                            <img
                              className="iw-20 ih-20"
                              src="/assets/images/prev.png"
                              alt=""
                            />
                          </button>
                          <button className="next tab-button-active p-2">
                            <img
                              className="iw-20 ih-20"
                              src="/assets/images/next.png"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row pt-3 pb-3">
                  <div className="col-6">
                    <h3>This is an example</h3>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <button className="tab-button-active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrows-diagonal-minimize-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 10h-4v-4" /> <path d="M20 4l-6 6" />
                        <path d="M6 14h4v4" /> <path d="M10 14l-6 6" />
                      </svg>
                      <h6>Advance Preview</h6>
                    </button>
                  </div>
                </div>

                <div className="row pt-3 pb-3">
                  <div className="col-12 col-lg-8 d-lg-flex justify-content-end">
                    <div className="post-panel section-t-space w-50">
                      <div className="post-wrapper col-grid-box section-b-space">
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
                                  src="/assets/images/my-profile.jpg"
                                  className="img-fluid bg-img"
                                  alt="user"
                                />
                              </a>
                              <div className="media-body">
                                <h5>sufiya eliza</h5>
                                <h6>Sponsored</h6>
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
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="icon icon-font-color iw-14"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </div>
                              <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                <ul>
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
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
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
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
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
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
                          <div className="sponsor-slides-blk">
                            <img src="/assets/images/group-img-8.jpg" />
                            <div className="sponsor-cont-btn-blk">
                              <div className="sponsor-cont-blk">
                                <h4>Build your personal blog post</h4>
                                <p>From on Sociomee</p>
                              </div>
                              <div className="sponsor-btn-blk">
                                <a href="#" className="btn btn-primary">
                                  Get Quote
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="detail-box">
                            <h5 className="tag">
                              <span>#birthday</span> <span>#celebration</span>
                            </h5>
                            <h5 className="tag">
                              Happy brirthday <span>@DwyaneJhonson</span>
                            </h5>
                            <p>
                              Hi this is my cool dad. Today was his birthday and
                              I gifted him this amazing mobile and headphone...
                              <a href="#">more</a>
                            </p>
                            <div className="bookmark favourite-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="iw-14 ih-14"
                              >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                              </svg>
                            </div>
                            <div className="people-likes">
                              <ul>
                                <li
                                  className="popover-cls"
                                  data-bs-toggle="popover"
                                  data-placement="right"
                                  data-name="sufiya eliza"
                                  data-img="assets/images/story-2.jpg"
                                >
                                  <img
                                    src="assets/images/story-2.jpg"
                                    className="img-fluid bg-img"
                                    alt=""
                                  />
                                </li>
                                <li
                                  className="popover-cls"
                                  data-bs-toggle="popover"
                                  data-placement="right"
                                  data-name="sufiya eliza"
                                  data-img="assets/images/story-3.jpg"
                                >
                                  <img
                                    src="assets/images/story-3.jpg"
                                    className="img-fluid bg-img"
                                    alt=""
                                  />
                                </li>
                                <li
                                  className="popover-cls"
                                  data-bs-toggle="popover"
                                  data-placement="right"
                                  data-name="sufiya eliza"
                                  data-img="assets/images/story-4.jpg"
                                >
                                  <img
                                    src="assets/images/story-4.jpg"
                                    className="img-fluid bg-img"
                                    alt=""
                                  />
                                </li>
                              </ul>
                              <h6>+12 people react this post</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center ">
                  <img src="/assets/images/message-square.png" alt=""/>
                    <h3 className="font-weight-normal text-center">
                      Comment not supported
                    </h3>
                    <p className="text-center">
                      Comment preview are not supported for dynamic asd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12"></div>

          {/* <div className="col-lg-12">
            <div className="ad-btn">
              <Link to="" className="btn-cancel">
                Cancel
              </Link>
              <Link to="/Ad/SingleImage" className="btn-next">
                Next
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AdAnalysis;
