import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Gallery = () => {
  const [userMedia, setUserMedia] = useState([]);
  const user = JSON.parse(localStorage.getItem('sociomeeUser')); 
  const {allPostsByUserId}=useSelector(state=>state.getAllPostsByUserIdData)

  const allMediaForGallery = useMemo(() => {
    const media = userMedia?.rows
      ?.filter((post) => post.postType === "media")
      ?.slice(0, 9)
      ?.map((media) => media?.mediaList && [...media.mediaList]);
    return media?.flat();
  }, [userMedia]);

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_IPURL}/post/getAllPosts`,
        {},
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      )
      .then((res) => {
        setUserMedia(res.data.data.successResult);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [allPostsByUserId]);

  return (
    <>
      <div className="gallery-section section-b-space">
        <div className="gallery-top">
          <div className="card-title">
            <h3>gallery</h3>
            <h5>{allMediaForGallery?.length} photos</h5>
            <div className="settings">
              <div className="setting-btn">
                <a href="#">
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
                    className="icon icon-dark strokeWidth-3 iw-11 ih-11"
                  >
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                  </svg>
                </a>
              </div>
              <div className="setting-btn ms-2 setting-dropdown">
                <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                  <a
                    href="#"
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
                      className="icon-dark strokeWidth-3 icon iw-11 ih-11"
                    >
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  </a>
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon-font-light iw-16 ih-16"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>{" "}
                          edit profile
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
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          view profile
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-section ratio_square">
          <div className="container-fluid p-0">
            <div className="row">
              {allMediaForGallery &&
                allMediaForGallery?.slice(0, 9)?.map((media) => {
                  return (
                    <div className="col-4" key={media?.mediaId}>
                      <div className="overlay">
                        <div className="portfolio-image">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#imageModel"
                          >
                            {media?.fileType === "video" ? (
                              <video width="100%" height="100" controls>
                                <source src={media?.fileURL} type="video/mp4" />
                              </video>
                            ) : (
                              <img
                                src={media?.fileURL}
                                className="img-fluid bg-img"
                                alt={media?.caption}
                              />
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
