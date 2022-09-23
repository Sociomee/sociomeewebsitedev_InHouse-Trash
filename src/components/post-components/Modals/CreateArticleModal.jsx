import React from "react";
import { useSelector } from "react-redux";
import AddInYourPost from "../../AddInYourPost";
import PostDisplayType from "../../PostDisplayType";

const CreateArticleModal = ({
  postData,
  setPostData,
  userProfileByUserId,
  createPostHandler,
  clickMedia,
  tempPollOption,
}) => {
  // get all article category
  const { articleCategory } = useSelector(
    (state) => state.getArticleCategoryData
  );

  return (
    <>
      <div
        className="modal fade"
        id="createPostArticle"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="createPostArticleTitle"
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
                id="popupclose2"
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
                        src={userProfileByUserId.profileImage}
                        className="img-fluid"
                        alt="profile"
                      />
                      <h4>{userProfileByUserId.fullName}</h4>
                    </div>
                    <form className="theme-form form-sm">
                      <div className="row  g-3">
                        <div className="form-group col-12">
                          <label>Article Catagory</label>
                          <select id="inputState" className="form-control">
                            <option value="">Select...</option>
                            {articleCategory &&
                              articleCategory.map((art) => {
                                return (
                                  <option value={art.id} key={art.id}>
                                    {art.name}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Article Title*</label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={"16"}
                            required
                          />
                          <p className="input-hints">
                            Min 3 and Max 16 Characters
                          </p>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Upload banner Image</label>
                          <div className="upload-image-blk">
                            <input type="file" />
                            {/* <img src={mediaPost} className="event-img-prev" /> */}
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Description</label>
                          <textarea
                            rows="3"
                            className="form-control"
                          ></textarea>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Add tags</label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={"16"}
                          />
                          <p className="input-hints">
                            Min 3 and Max 16 Characters
                          </p>
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

export default CreateArticleModal;
