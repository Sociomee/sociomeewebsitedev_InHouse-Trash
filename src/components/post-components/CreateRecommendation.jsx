import React from 'react'

const CreateRecommendation = ({postData,setPostData,reference,userProfileByUserId}) => {
  return (
    <>
        <div
            className="search-input input-style icon-right recommendation-block"
            ref={reference}
          >
            <div className="creatpost-profile-blk">
              <img
                src={userProfileByUserId.profileImage}
                className="img-fluid"
                alt="profile"
              />
            </div>
            <textarea
              name="message"
              className="form-control enable"
              maxLength={"150"}
              cols="30"
              rows="10"
              placeholder="I am seeking recommendation for "
              spellCheck="false"
              value={postData?.caption}
              onChange={(e) =>
                setPostData({ ...postData, caption: e.target.value })
              }
            ></textarea>
            {/* <input type="text" className="form-control enable" placeholder="write something here.."/> */}
            <div className="pen-icon-creatpost" role='button'>
              <img
                src="/assets/images/pen-solid-2.png"
                className="img-fluid icon"
                alt="pen"
              />
            </div>
          </div>
    </>
  )
}

export default CreateRecommendation
