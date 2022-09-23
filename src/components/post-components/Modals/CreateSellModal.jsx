import React from "react";
import AddInYourPost from "../../AddInYourPost";
import PostDisplayType from "../../PostDisplayType";

const CreateSellModal = ({
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
        id="createPostSell"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="createPostSellTitle"
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
                  <div className="event-create-post-block">
                    <div className="user-profile-cp">
                      <img
                        src="assets/images/my-profile.jpg"
                        className="img-fluid"
                        alt="profile"
                      />
                      <h4>Kelin jasen</h4>
                    </div>
                    <form className="theme-form form-sm">
                      <div className="row  g-3">
                        <div className="form-group col-12">
                          <label>Product Category</label>
                          <select id="inputState" className="form-control">
                            <option>Electronic</option>
                            <option>Furniture</option>
                            <option>Toy & Baby</option>
                            <option>Grocery</option>
                            <option>Fashin</option>
                            <option>Appliances</option>
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Product Title*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your product title..."
                            required
                          />
                          <p className="input-hints">Max 84 Characters</p>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Upload Product Image</label>
                          <div className="upload-image-blk">
                            <input type="file" />
                            {/* <img src={mediaPost} className="event-img-prev" /> */}
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Price</label>
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
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Product Description</label>
                          <textarea
                            rows="3"
                            className="form-control"
                            placeholder="Enter product description here..."
                          ></textarea>
                          <p className="input-hints">Max 600 Characters</p>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Product Location</label>
                          <div className="icon-input-block">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your product Location..."
                              required
                            />
                            <span className="form-iconbox-blk">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                className="iw-18 ih-18"
                              >
                                <path
                                  d="M9.875 2.34316V2.55471L10.0836 2.58972C12.8052 3.04635 14.955 5.19502 15.4085 7.9161L15.4433 8.125H15.6551H16.875C17.3592 8.125 17.75 8.51581 17.75 9C17.75 9.48419 17.3592 9.875 16.875 9.875H15.6551H15.4433L15.4085 10.0839C14.9549 12.8051 12.8051 14.9549 10.0839 15.4085L9.875 15.4433V15.6551V16.875C9.875 17.3592 9.48419 17.75 9 17.75C8.51581 17.75 8.125 17.3592 8.125 16.875V15.6551V15.4433L7.9161 15.4085C5.19502 14.955 3.04635 12.8052 2.58972 10.0836L2.55471 9.875H2.34316H1.125C0.641708 9.875 0.25 9.48404 0.25 9C0.25 8.51596 0.641708 8.125 1.125 8.125H2.34316H2.55471L2.58972 7.91637C3.04633 5.19496 5.19496 3.04633 7.91637 2.58972L8.125 2.55471V2.34316V1.125C8.125 0.641708 8.51596 0.25 9 0.25C9.48404 0.25 9.875 0.641708 9.875 1.125V2.34316ZM6.4375 9C6.4375 7.58416 7.58416 6.4375 9 6.4375C10.4158 6.4375 11.5625 7.58416 11.5625 9C11.5625 10.4158 10.4158 11.5625 9 11.5625C7.58416 11.5625 6.4375 10.4158 6.4375 9ZM4.25 9C4.25 11.6236 6.37638 13.75 9 13.75C11.6236 13.75 13.75 11.6236 13.75 9C13.75 6.37638 11.6236 4.25 9 4.25C6.37638 4.25 4.25 6.37638 4.25 9Z"
                                  fill="#B9B9B9"
                                  stroke="white"
                                  strokeWidth="0.5"
                                />
                              </svg>
                            </span>
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

export default CreateSellModal;
