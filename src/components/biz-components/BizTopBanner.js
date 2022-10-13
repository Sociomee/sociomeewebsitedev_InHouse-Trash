import React, { Component, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getSingleBizPage } from "../../Services/Actions/BizPage/bizPageAction";

export default function BizTopBanner() {
  const { id } = useParams();
  const [bizPage, setBizPage] = useState("");

  const { singleBizPage } = useSelector((state) => state.bizPageData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleBizPage(id));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setBizPage(singleBizPage?.successResult);
  }, [singleBizPage]);

  console.log(bizPage);

  return (
    <>
      <div className="group-details-top biz-details-top">
        <div
          className="gd-top-block"
          style={{
            background: `url(${
              process.env.REACT_APP_IMAGEURL +
                bizPage?.bpResponse?.bpCoverImages[0]?.coverUrl ||
              "assets/images/bizcover.jpg"
            })`,
          }}
        >
          <div className="gd-top-btns">
            <a href="/" className="grey-btn">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="iw-13 ih-13"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>{" "}
              Invite People
            </a>
            <a href="/" className="grey-btn">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="iw-13 ih-13"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>{" "}
              Edit{" "}
            </a>
          </div>
        </div>
        <div className="heading-title-blk head-title-biz">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-12 order-lg-2">
              <div className="biz-user-pro-blk">
                <img
                  src={
                    process.env.REACT_APP_IMAGEURL + bizPage?.bpResponse?.logo
                  }
                />
                <h5>{bizPage?.bpResponse?.name}</h5>
                <p>
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="iw-10 ih-10"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {bizPage?.bpResponse?.bpLocations?.map((location) => {
                    return `${location.city},`;
                  })}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 order-lg-1">
              <div className="gd-content-area-top-blk">
                <div className="groupmember-blk">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="iw-10 ih-10"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>{" "}
                    Public Group
                  </span>{" "}
                  • <span>{bizPage?.bpResponse?.bpCategory?.name}</span>
                </div>
                <div className="people-likes matual-friend-sec">
                  <ul className="matual-friend-blk">
                    {bizPage?.bpResponse?.bpVisitors?.map((visitors) => {
                      return (
                        <li className="popover-cls" data-bs-toggle="popover">
                          <img
                            src={visitors?.user?.profileImage}
                            className="img-fluid bg-img"
                            alt=""
                          />
                        </li>
                      );
                    })}
                  </ul>
                  <h6>
                    +{bizPage?.bpResponse?.bpVisitors?.length} Visited today
                  </h6>
                </div>
                <div className="people-likes matual-friend-sec">
                  <ul className="matual-friend-blk">
                    <li
                      className="popover-cls"
                      data-bs-toggle="popover"
                      data-placement="right"
                      data-name="sufiya eliza"
                      data-img="assets/images/story-2.jpg"
                    >
                      <img
                        src="/assets/images/story-2.jpg"
                        className="img-fluid bg-img"
                        alt=""
                      />
                    </li>
                    <li
                      className="popover-cls"
                      data-bs-toggle="popover"
                      data-placement="right"
                      data-name="sufiya eliza"
                      data-img="assets/images/story-3.jpg"
                    >
                      <img
                        src="/assets/images/story-3.jpg"
                        className="img-fluid bg-img"
                        alt=""
                      />
                    </li>
                    <li
                      className="popover-cls"
                      data-bs-toggle="popover"
                      data-placement="right"
                      data-name="sufiya eliza"
                      data-img="assets/images/story-4.jpg"
                    >
                      <img
                        src="/assets/images/story-4.jpg"
                        className="img-fluid bg-img"
                        alt=""
                      />
                    </li>
                    <li
                      className="popover-cls"
                      data-bs-toggle="popover"
                      data-placement="right"
                      data-name="sufiya eliza"
                      data-img="assets/images/story-3.jpg"
                    >
                      <img
                        src="/assets/images/story-3.jpg"
                        className="img-fluid bg-img"
                        alt=""
                      />
                    </li>
                    <li
                      className="popover-cls"
                      data-bs-toggle="popover"
                      data-placement="right"
                      data-name="sufiya eliza"
                      data-img="assets/images/story-4.jpg"
                    >
                      <img
                        src="/assets/images/story-4.jpg"
                        className="img-fluid bg-img"
                        alt=""
                      />
                    </li>
                  </ul>
                  <h6>+12k members</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 order-lg-3">
              <ul className="followlist-blk">
                <li>
                  {bizPage?.bpResponse?.averageRating || 0}
                  <span>Rating</span>
                </li>
                <li>
                  42k<span>Likes</span>
                </li>
                <li>
                  52<span>Posts</span>
                </li>
                <li>
                  {bizPage?.followerCount}
                  <span>Followers</span>
                </li>
                <li>
                  502<span>Follow</span>
                </li>
              </ul>
              <div className="create-biz-btn">
                <NavLink
                  to="/CreateBiz"
                  className="btn btn-primary green-clr-btn"
                >
                  Create BizPage
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
