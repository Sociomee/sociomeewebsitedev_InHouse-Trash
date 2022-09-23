import React from 'react'

const MultiMediaPost = ({ userPosts }) => {
    return (
        <>{
            userPosts.mediaList?.length > 2 ? (
                <div className="gallery-section">
                    <div className="portfolio-section ratio_square">
                        <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col-8 pt-cls">
                                    <div className="overlay">
                                        <div className="portfolio-image">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel">
                                                {
                                                    userPosts.mediaList?.[0].fileType === 'video' ? (
                                                        <video width="100%" height="300" controls>
                                                            <source src={userPosts.mediaList?.[0].fileURL} type="video/mp4" />
                                                        </video>
                                                    ) : (
                                                        <img src={userPosts.mediaList?.[0].fileURL} className="img-fluid bg-img"
                                                            alt={userPosts.mediaList?.[0].caption} />
                                                    )

                                                }
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 row m-0">
                                    {
                                        userPosts.mediaList && userPosts.mediaList?.slice(1, 3)?.map((media, i) => {
                                            return (
                                                <div className="col-12 pt-cls p-0" key={media.mediaId}>
                                                    <div className="overlay image-plus">
                                                        <div className="portfolio-image">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel">
                                                                {
                                                                    media.fileType === 'video' ? (
                                                                        <video width="100%" height="300" controls>
                                                                            <source src={media.fileURL} type="video/mp4" />
                                                                        </video>
                                                                    ) : (
                                                                        <img src={media.fileURL} className="img-fluid bg-img"
                                                                            alt="" />
                                                                    )
                                                                }
                                                                {
                                                                    (i === 1) && (userPosts.mediaList.length > 3 && <span>+{userPosts.mediaList.length - 2}</span>)
                                                                }
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div class="double-img-block">
                    {
                        userPosts.mediaList && userPosts.mediaList.map((media) => {
                            return (<>
                                {
                                    media.fileType === 'video' ? (
                                        <video width="100%" height="300" controls>
                                            <source src={media.fileURL} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img src={media.fileURL}  alt={media.caption} />
                                    )
                                }
                            </>)
                        })
                    }
                </div>
            )
        }

        </>
    )
}

export default MultiMediaPost
