import React from 'react'

const MediaPost = ({ userPosts }) => {
    return (
        <>
            {
                userPosts.mediaList[0].fileType === 'video' ? (
                    <video width="100%" height="300" controls>
                        <source src={userPosts.mediaList[0].fileURL} type="video/mp4" />
                    </video>
                ) : (
                    <img src={userPosts.mediaList[0].fileURL} className="img-fluid"
                        alt="" />
                )

            }
        </>
    )
}

export default MediaPost
