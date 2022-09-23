import React from 'react'

const CreateText = ({postData,setPostData,userProfileByUserId,reference}) => {
  return (
    <>
       <div className="search-input input-style icon-right" ref={reference}>
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
              maxLength={'5000'}
            ></textarea>
            
            {/* <input type="text" className="form-control enable" placeholder="write something here.."/> */}
            <div className="pen-icon-creatpost" role='button'>
              <img
                src={userProfileByUserId.profileImage}
                className="img-fluid icon"
                alt="pen"
              />
            </div>
          </div>
    </>
  )
}

export default CreateText
