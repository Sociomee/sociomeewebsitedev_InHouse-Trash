import React from "react";
import DemographicChart from "./DemographicChart";

const Demographic = ({setChartToggle}) => {
  return (
    <>
      <div className="row mx-auto">
        <div className="profile-menu section-t-space p-0 shadow-none">
          <ul>
            <li>
              <button className="tab-button-active" onClick={()=>setChartToggle(false)}>
                <img src="/assets/images/Icons/users.png" alt="" />
                <h6>Demographics</h6>
              </button>
            </li>
            <li> 
              <button className="tab-button" onClick={()=>setChartToggle(true)}>
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
          <ul className="right-menu d-xl-flex">
            <li>
              <select className="form-control">
                <option>All</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </li>
            <li>
              <select className="form-control">
                <option>Result</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-lg-4">
          <div>
            <h2>Age and Gender Distribution</h2>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex justify-content-center">
            <div>
              <div className="bg-primary ih-15 iw-15"></div>
            </div>
            <div className="ml-2">
              <h5>Men</h5>
              <p>Men 100% (1) Cost per result ₹536.12</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="d-flex justify-content-center">
            <div>
              <div className="bg-success ih-15 iw-15"></div>
            </div>
            <div className="ml-2">
              <h5>Women</h5>
              <p>Women 0% (1) Cost per result ₹0.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <DemographicChart />
      </div>
    </>
  );
};

export default Demographic;
