import React from "react";

const CreateMedia = ({
  postData,
  setPostData,
  reference,
  userProfileByUserId,
  mediaPost,
  setMediaPost,
  closeMediaClick,
}) => {
  const handleChange = (e) => {
    setMediaPost([...mediaPost, ...e.target.files]);
  };
  return (
    <>
      <div className="media-create-post-block" ref={reference}>
        <div className="search-input input-style icon-right">
          <div className="creatpost-profile-blk">
            <img
              src={userProfileByUserId?.profileImage}
              className="img-fluid"
              alt="profile"
            />
          </div>
          <textarea
            name="message"
            className="form-control enable"
            cols="30"
            rows="10"
            placeholder="What’s  going on? #Hashtag... @Mention."
            spellCheck="false"
            value={postData?.caption}
            onChange={(e) => {
              setPostData({ ...postData, caption: e.target.value });
            }}
          ></textarea>
          <div className="pen-icon-creatpost" role="button">
            <img
              src="/assets/images/pen-solid-2.png"
              className="img-fluid icon"
              alt="pen"
            />
          </div>
        </div>
        <div className="images-videos-block">
          <div
            className="media-img-close-icon mt-3 "
            onClick={closeMediaClick}
            role="button"
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
              className="iw-20 ih-20"
            >
              <line x1="18" y1="6" x2="6" y2="18" stroke="#000"></line>
              <line x1="6" y1="6" x2="18" y2="18" stroke="#000"></line>
            </svg>
          </div>
          <input
            id="media-input"
            className="choose-file"
            type="file"
            onChange={handleChange}
            multiple
            accept=".jpg,.jpeg,.png"
          />
          {mediaPost.length >= 1 && (
            <div className="d-flex">
              <button className="media-img-vid-edit">
                <svg
                  viewBox="0 0 24 24"
                  width="13"
                  height="13"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-font-light  mr-1"
                >
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
                Edit all
              </button>
              <button
                className="media-img-vid-addmore"
                onClick={() => document.getElementById("media-input").click()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="addpost-option-btn mr-1"
                  width="17"
                  height="17"
                  viewBox="0 0 21 21"
                  fill="#A6A6A6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.625 1.75H4.375C2.8875 1.75 1.75 2.8875 1.75 4.375V16.625C1.75 18.1125 2.8875 19.25 4.375 19.25H16.625C18.1125 19.25 19.25 18.1125 19.25 16.625V4.375C19.25 2.8875 18.1125 1.75 16.625 1.75ZM3.5 4.375C3.5 3.85 3.85 3.5 4.375 3.5H16.625C17.15 3.5 17.5 3.85 17.5 4.375V11.025L14.6125 8.1375C14.2625 7.7875 13.7375 7.7875 13.3875 8.1375L4.1125 17.4125C3.7625 17.325 3.5 16.975 3.5 16.625V4.375ZM6.475 17.5H16.625C17.15 17.5 17.5 17.15 17.5 16.625V13.475L14 9.975L6.475 17.5ZM7.4375 9.625C8.6625 9.625 9.625 8.6625 9.625 7.4375C9.625 6.2125 8.6625 5.25 7.4375 5.25C6.2125 5.25 5.25 6.2125 5.25 7.4375C5.25 8.6625 6.2125 9.625 7.4375 9.625ZM7.875 7.4375C7.875 7.175 7.7 7 7.4375 7C7.175 7 7 7.175 7 7.4375C7 7.7 7.175 7.875 7.4375 7.875C7.7 7.875 7.875 7.7 7.875 7.4375Z"
                  ></path>
                </svg>
                Add Photo/Videos
              </button>
            </div>
          )}
          {mediaPost[0]?.type === "video/mp4" ? (
            <video width="100%" height="300" controls>
              <source
                src={
                  mediaPost[0]
                    ? `${URL.createObjectURL(mediaPost[0])}`
                    : "assets/images/image-preview.jpg"
                }
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              src={
                mediaPost[0]
                  ? `${URL.createObjectURL(mediaPost[0])}`
                  : "assets/images/image-preview.jpg"
              }
              alt=""
            />
          )}
          {mediaPost.length > 1 && (
            <div className="row mt-2">
              {mediaPost.slice(1).map((med) => {
                return (
                  <div className="col-4" key={med.lastModified}>
                    <div
                      role="button"
                      className="media-img-close-icon"
                      onClick={() => {
                        setMediaPost(
                          mediaPost.filter(
                            (media) => media.lastModified !== med.lastModified
                          )
                        );
                      }}
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
                        className="iw-20 ih-20"
                      >
                        <line
                          x1="18"
                          y1="6"
                          x2="6"
                          y2="18"
                          stroke="#000"
                        ></line>
                        <line
                          x1="6"
                          y1="6"
                          x2="18"
                          y2="18"
                          stroke="#000"
                        ></line>
                      </svg>
                    </div>
                    {med.type === "video/mp4" ? (
                      <video width="100%" height="300" controls>
                        <source
                          src={`${URL.createObjectURL(med)}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img src={`${URL.createObjectURL(med)}`} alt="" />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
       
      </div>
    </>
  );
};

export default CreateMedia;
