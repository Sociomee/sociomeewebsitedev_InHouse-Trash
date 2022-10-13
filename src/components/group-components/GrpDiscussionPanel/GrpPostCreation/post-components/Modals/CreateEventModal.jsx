import React from "react";
import { useSelector } from "react-redux";
import AddInYourPost from "../../AddInYourPost";
import PostDisplayType from "../../PostDisplayType";
import DateTimePicker from "react-datetime-picker";

const CreateEventModal = ({
  postData,
  setPostData,
  userProfileByUserId,
  createPostHandler,
  clickMedia,
  tempPollOption,
}) => {
  // get all event category
  const { eventCategory } = useSelector((state) => state.getEventCategoryData);
  
  const handleChange = (e) => {
    setPostData({ ...postData, eventCoverImageURL: e.target.files[0] });
  };

  return (
    <>
      <div
        className="modal fade"
        id="createPostEvent"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="createPostEventTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered create-post-model-block"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div
                data-bs-dismiss="modal"
                aria-label="Close"
                className="popupclose-button"
                id="popupclose"
                role='button'
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
              </div>
              <div className="create-post">
                <div className="static-section">
                  <div className="card-title create-port-title">
                    <PostDisplayType
                      postData={postData}
                      setPostData={setPostData}
                    />
                  </div>
                  <div className="event-create-post-block">
                    <div className="user-profile-cp">
                      <img
                        src={userProfileByUserId.profileImage}
                        className="img-fluid"
                        alt="profile"
                      />
                      <h4>{userProfileByUserId.fullName}</h4>
                    </div>
                    <form className="theme-form form-sm">
                      <div className="row  g-3">
                        <div className="form-group col-12">
                          <label>Event Category</label>
                          <select
                            id="inputState"
                            className="form-control"
                            value={postData?.eventCategoryId}
                            onChange={(e) =>
                              setPostData({
                                ...postData,
                                eventCategoryId: e.target.value,
                              })
                            }
                          >
                            <option value="">Select...</option>
                            {eventCategory &&
                              eventCategory.map((event) => {
                                return (
                                  <option value={event.id} key={event.id}>
                                    {event.name}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Event Title*</label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={"64"}
                            required
                            value={postData?.caption}
                            onChange={(e) =>
                              setPostData({
                                ...postData,
                                caption: e.target.value,
                              })
                            }
                          />
                          <p className="input-hints">Max 64 Characters</p>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Upload Event Cover Photo</label>
                          <div className="upload-image-blk">
                            <input
                              type="file"
                              onChange={(e) => handleChange(e, "event")}
                            />
                            {/* Event Cover Image */}
                            {postData?.eventCoverImageURL && (
                              <img
                                src={
                                  postData?.eventCoverImageURL &&
                                  URL.createObjectURL(
                                    postData?.eventCoverImageURL
                                  )
                                }
                                className="event-img-prev"
                                alt="event cover"
                              />
                            )}
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Description</label>
                          <textarea
                            rows="3"
                            className="form-control"
                            value={postData?.eventDescription}
                            onChange={(e) =>
                              setPostData({
                                ...postData,
                                eventDescription: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Event Start Date</label>
                          <DateTimePicker
                            className="form-control"
                            placeholder="dd-mm-yyyy"
                            onChange={(val) =>
                              setPostData({ ...postData, eventStartTime: val })
                            }
                            value={postData?.eventStartTime}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Event End Date</label>
                          <DateTimePicker
                            className="form-control"
                            placeholder="dd-mm-yyyy"
                            onChange={(val) =>
                              setPostData({ ...postData, eventEndTime: val })
                            }
                            value={postData?.eventEndTime}
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <label>Address or Link to event</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            value={postData?.eventAddress}
                            onChange={(e) =>
                              setPostData({
                                ...postData,
                                eventAddress: e.target.value,
                              })
                            }
                          />
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

export default CreateEventModal;
