import React from "react";
import AddInYourPost from "../../AddInYourPost";
import PostDisplayType from "../../PostDisplayType";
import DateTimePicker from "react-datetime-picker";

const CreatePollModal = ({
  postData,
  setPostData,
  userProfileByUserId,
  clickMedia,
  createPostHandler,
  tempPollOption,
  setTempPollOption,
  pollOptionCount,
  setPollOptionCount,
}) => {
  const pollDataHandler = (e) => {
    const { name, value } = e.target;
    setTempPollOption({ ...tempPollOption, [name]: value });
  };

  const optionIncrementHandler = (e) => {
    e.preventDefault();
    if (pollOptionCount.length < 10) {
      const nextData = `seq${pollOptionCount.length + 1}`;
      setPollOptionCount([...pollOptionCount, pollOptionCount.length + 1]);
      setTempPollOption({ ...tempPollOption, [nextData]: "" });
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="createPostPoll"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="createPostPollTitle"
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
                id="popupclose3"
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
                  <div className="poll-create-post-block">
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
                          <label>Poll Question</label>
                          <input
                            type="text"
                            className="form-control"
                            value={postData?.caption}
                            required
                            onChange={(e) => {
                              setPostData({
                                ...postData,
                                caption: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="poll-option-blk">
                          {pollOptionCount &&
                            pollOptionCount.map((option, i) => {
                              return (
                                <div className="form-group col-md-12" key={i}>
                                  <label>Option {option}</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    required
                                    name={`seq${option}`}
                                    value={tempPollOption[`seq${option}`]}
                                    onChange={pollDataHandler}
                                  />
                                </div>
                              );
                            })}
                          <div className="d-flex justify-content-end no-account-blk">
                            {pollOptionCount?.length < 10 && (
                              <button
                                className="button-anchor"
                                onClick={optionIncrementHandler}
                              >
                                Add More Option
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Poll Duration</label>
                          <p className="poll-duration-cont">
                            This poll will be automatically disabled after the
                            selected time duration
                          </p>
                          <div className="row">
                            <div className="col-md-12 search-input schedule-input">
                              <DateTimePicker
                                className="form-control"
                                placeholder="dd-mm-yyyy"
                                onChange={(time) => {
                                  setPostData({
                                    ...postData,
                                    pollStartTime: time,
                                  });
                                }}
                                value={postData?.pollStartTime}
                              />
                            </div>
                            <div className="col-md-12 search-input schedule-input mt-3">
                              <DateTimePicker
                                className="form-control"
                                placeholder="dd-mm-yyyy"
                                onChange={(time) => {
                                  setPostData({
                                    ...postData,
                                    pollEndTime: time,
                                  });
                                }}
                                value={postData?.pollEndTime}
                              />
                            </div>
                          </div>
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

export default CreatePollModal;
