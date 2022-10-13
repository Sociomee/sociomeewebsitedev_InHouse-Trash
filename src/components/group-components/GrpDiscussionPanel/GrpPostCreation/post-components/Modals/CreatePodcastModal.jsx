import React from "react";
import AddInYourPost from "../../AddInYourPost";
import PostDisplayType from "../../PostDisplayType";

const CreatePodcastModal = ({
  postData,
  setPostData,
  userProfileByUserId,
  createPostHandler,
  clickMedia,
  tempPollOption,
}) => {
  return (
    <>
      <div
        div
        className="modal fade"
        id="createPostPodcast"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="createPostPodcastTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered create-post-model-block"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <a
                data-bs-dismiss="modal"
                aria-label="Close"
                className="popupclose-button"
                id="popupclose"
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
                  className="icon-dark close-btn"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </a>
              <div className="create-post">
                <div className="static-section">
                  <div className="card-title create-port-title">
                    <PostDisplayType
                      postData={postData}
                      setPostData={setPostData}
                    />
                  </div>
                  <div className="article-create-post-block">
                    <div className="user-profile-cp">
                      <img
                        src={userProfileByUserId?.profileImage}
                        className="img-fluid"
                        alt="profile"
                      />
                      <h4>{userProfileByUserId?.fullName}</h4>
                    </div>
                    <form className="theme-form form-sm">
                      <div className="row  g-3">
                        <div className="form-group col-12">
                          <label>Podcast Type</label>
                          <select id="inputState" className="form-control">
                            <option>Live Podcast</option>
                            <option>Upload Recorded Poadcast</option>
                            <option>Create New Poadcast Series</option>
                          </select>
                        </div>
                        <div className="form-group col-12">
                          <label>Podcast Category</label>
                          <select id="inputState" className="form-control">
                            <option>Education</option>
                            <option>Politics & Crupption</option>
                            <option>Food</option>
                            <option>Science</option>
                            <option>Geogrophy</option>
                            <option>Social Work & Management</option>
                            <option>
                              Internationa Economy Management system
                            </option>
                            <option>Sports</option>
                            <option>Tour & Travels</option>
                            <option>Party</option>
                            <option>Art & Craft</option>
                            <option>Journey</option>
                            <option>Birds & Aminals</option>
                            <option>Business</option>
                            <option>Software Development</option>
                            <option>Infrastructure Development</option>
                            <option>Astrology</option>
                            <option>Medical & Health</option>
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Podcast Title</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                          <p className="input-hints">Max 120 Characters</p>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Upload podcast cover Image</label>
                          <div className="upload-image-blk">
                            <input type="file" />
                            {/* <img src={mediaPost} className="event-img-prev" /> */}
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Upload Voice</label>
                          <div className="upload-image-blk">
                            <input type="file" />
                            <div className="audio-preview-blk">
                              <audio
                                controls
                                controlsList="nodownload noplaybackrate"
                              >
                                <source
                                  src="assets/images/audio/audio-file.mp3"
                                  type="audio/mpeg"
                                />
                              </audio>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Paid (Optional)</label>
                          <div className="row">
                            <div className="col-3">
                              <select id="inputState" className="form-control">
                                <option>$</option>
                                <option>€</option>
                                <option>₹</option>
                                <option>£</option>
                                <option>¥</option>
                                <option>J$</option>
                                <option>₩</option>
                                <option>₮</option>
                                <option>ƒ</option>
                              </select>
                            </div>
                            <div className="col-9">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter amount..."
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <label>About Podcast</label>
                          <textarea
                            rows="3"
                            className="form-control"
                            maxLength={"1200"}
                          ></textarea>
                          <p className="input-hints">Max 1200 Characters</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <AddInYourPost
                  createPostHandler={createPostHandler}
                  postData={postData}
                  setPostData={setPostData}
                  clickMedia={clickMedia}
                  pollOptions={tempPollOption}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePodcastModal;
