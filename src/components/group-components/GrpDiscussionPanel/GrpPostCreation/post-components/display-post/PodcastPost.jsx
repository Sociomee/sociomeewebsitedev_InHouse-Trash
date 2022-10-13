import React from "react";

const PodcastPost = ({ podcast }) => {
  return (
    <>
      <div className="podcast-display-block">
        <img
          className="podicon-cen-blk"
          src="/assets/images/hpod-icon.png"
          alt=""
        />
        <div className="podmain-imgblk">
          <img src="/assets/images/h-podcast-1.jpg" alt="" />
        </div>
        <div className="podcont-blk">
          <h4 className='text-white'>{podcast?.caption} </h4>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="iw-20 ih-20"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </div>
      </div>
      <div className="podcast-display-blk">
        <audio controls="" controlsList="nodownload noplaybackrate">
          <source src="/assets/images/audio/audio-file.mp3" type="audio/mpeg" />
        </audio>
        <p>
          Ask CDC San Quintin State Prison 2008. We installed Pure dispensers
          throughout the prison to combat diseases…and it was a Roaring Success
          (as in Roaring Drunk) I mean we had Long lines of prisoners fist
          fighting to use them.
        </p>
      </div>
    </>
  );
};

export default PodcastPost;
