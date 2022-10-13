import React from "react";
import PlatformChart from "../PlatformChart";

const Platform = ({setChartToggle}) => {
  return (
    <>
      <div className="row mx-auto">
        <div className="col-lg-8 border-right">
          <div className="profile-menu section-t-space p-0 shadow-none">
            <ul>
              <li>
                <button className="tab-button" onClick={()=>setChartToggle(false)}>
                  <img src="/assets/images/Icons/users.png" alt="" />
                  <h6>Demographics</h6>
                </button>
              </li>
              <li>
                <button className="tab-button-active" onClick={()=>setChartToggle(true)}>
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
                    className="iw-14 ih-14"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <h6>Platform</h6>
                </button>
              </li>
            </ul>
          </div>
          <div className="row p-2">
            <div className="col-lg-7">
              <div>
                <h2>Palcement per platform</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-6">
                  <select className="form-control">
                    <option>Reach</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <div className="col-6">
                  <select className="form-control">
                    <option>Result</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <PlatformChart />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mb-4 section-t-space">
            <h2 className="mb-3">Device Type</h2>
            <h3 className="mb-3">Mobile & Desktop</h3>
            <select className="p-2 w-100">
              <option value="Mobile & Desktop">Mobile & Desktop</option>
            </select>
          </div>
          <div>
            <h3 className="mb-3">About Placement results</h3>
            <p>
              Ad delivery is optomise to allocate your budget to the placement
              likely to platform best with your audiance, best on your targating
              and bid amount.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;
