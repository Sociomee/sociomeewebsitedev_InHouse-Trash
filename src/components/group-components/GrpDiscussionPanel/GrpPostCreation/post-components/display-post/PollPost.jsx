import React from "react";

const PollPost = ({ poll, selectPollOption }) => {
  return (
    <>
      {/* <label>Poll</label> */}
      <div className="form-check">
        <p>Total Participant: {poll?.totalVotesOnPoll}</p>
        <div className="poll-homeoption-blk">
          {poll.pollOptions &&
            poll.pollOptions
              .sort((a, b) => a.sequence - b.sequence)
              .map((pollOpt) => {
                return (
                  <div className="poll-radio-blk" key={pollOpt.pollOptionId}>
                    <input
                      className="radio_animated"
                      type="radio"
                      name={poll.postType}
                      id="radio1"
                      onChange={() =>
                        selectPollOption(poll.postId, pollOpt.pollOptionId)
                      }
                    />
                    <label htmlFor="option1">{pollOpt.optionText}</label>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default PollPost;
