import React from "react";
import { useSelector } from "react-redux";

const CreateAlert = ({
  postData,
  setPostData,
  userProfileByUserId,
  reference,
}) => {
  // get all alert range
  const { alertRange } = useSelector((state) => state.getAlertData);
  // get all alert level
  const { alertLevel } = useSelector((state) => state.getAlertData);

  return (
    <>
      <div className="alert-create-post-block" ref={reference}>
        <div className="user-profile-cp">
          <img
            src={userProfileByUserId.profileImage}
            className="img-fluid"
            alt="profile"
          />
          <h4>{userProfileByUserId.fullName}</h4>
        </div>
        <div className="custom-fixed-height-blk">
          <form className="theme-form form-sm">
            <div className="row  g-3">
              <div className="form-group col-md-12">
                <h4 className="create-alert-head">#creatalert</h4>
                {/* <label>Description</label> */}
                <div className="create-alert-textarea">
                  <textarea
                    rows="5"
                    className="form-control"
                    maxLength={"320"}
                    value={postData?.caption}
                    placeholder="Define the threat..."
                    onChange={(e) =>
                      setPostData({ ...postData, caption: e.target.value })
                    }
                  ></textarea>
                  <p className="input-hints">Max 320 Characters</p>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label>
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    stroke="#FF822E"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>{" "}
                  Alert Level
                </label>
                <select
                  id="inputState"
                  className="form-control"
                  value={postData?.alertLevelId}
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      alertLevelId: e.target.value,
                    })
                  }
                >
                  <option value="">Select...</option>
                  {alertLevel &&
                    alertLevel.map((lev) => {
                      return (
                        <option value={lev.id} key={lev.id}>
                          {lev.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    stroke="#16C31E"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Post Alert within
                </label>
                <select
                  id="inputState"
                  className="form-control"
                  value={postData?.alertRangeMeter}
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      alertRangeMeter: e.target.value,
                    })
                  }
                >
                  <option value="">Select...</option>
                  {alertRange &&
                    alertRange.map((ran, i) => {
                      return (
                        <option
                          value={ran.distance}
                          key={i}
                        >{`${ran.distance} ${ran.unit}`}</option>
                      );
                    })}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAlert;
