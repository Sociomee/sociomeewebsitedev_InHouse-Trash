import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import history from "./history";
import Home from "./components/Home";
import Login from "./components/login-components/Login";
import Signup from "./components/login-components/Signup";
import Otp from "./components/login-components/Otp";
import SignupEmail from "./components/login-components/SignupEmail";
import SignupProfile from "./components/login-components/SignupProfile";
import SignupDetail from "./components/login-components/SignupDetail";
import SignupInterest from "./components/login-components/SignupInterest";
import MyTimeline from "./components/profile-components/MyTimeline";
import MyProfile from "./components/profile-components/MyProfile";
import MyMedia from "./components/profile-components/MyMedia";
import MyMediaListView from "./components/profile-components/MyMediaListView";
import MyShotz from "./components/profile-components/MyShotz";
import MyPodcast from "./components/profile-components/MyPodcast";
import MyPodcastDetails from "./components/profile-components/MyPodcastDetails";
import Group from "./components/group-components/Group";
import OwnedGroup from "./components/group-components/OwnedGroup";
import JoinedGroup from "./components/group-components/JoinedGroup";
import InviteGroup from "./components/group-components/InviteGroup";
import GroupJointRequest from "./components/group-components/GroupJointRequest";
import GroupDetail from "./components/group-components/GroupDetail";
import GroupMember from "./components/group-components/GroupMember";
import GdBlockedPeople from "./components/group-components/GdBlockedPeople";
import GdPostRequest from "./components/group-components/GdPostRequest";
import GdSetting from "./components/group-components/GdSetting";
import GdAbout from "./components/group-components/GdAbout";
import Biz from "./components/biz-components/Biz";
import OwnedBiz from "./components/biz-components/OwnedBiz";
import JoinedBiz from "./components/biz-components/JoinedBiz";
import BizDetail from "./components/biz-components/BizDetail";
import Favorites from "./components/Favorites";
import ForgotPassword from "./components/login-components/ForgotPassword";
import ForgotPasswordOtp from "./components/login-components/ForgotPasswordOtp";
import ResetPassword from "./components/login-components/ResetPassword";
import AdManager from "./components/ad-manager-components/AdManager";
import AdPausd from "./components/ad-manager-components/AdPausd";
import AdDrafted from "./components/ad-manager-components/AdDrafted";
import AdApprovalPending from "./components/ad-manager-components/AdApprovalPending";
import AdCompleted from "./components/ad-manager-components/AdCompleted";
import AdTransactionSummary from "./components/ad-manager-components/AdTransactionSummary";
import AdAllTransactionSummary from "./components/ad-manager-components/AdAllTransactionSummary";

import Marketplace from "./components/marketplace-components/Marketplace";
import MpPending from "./components/marketplace-components/MpPending";
import MpSale from "./components/marketplace-components/MpSale";
import MpSold from "./components/marketplace-components/MpSold";
import MpDetail from "./components/marketplace-components/MpDetail";
import Tops from "./components/top-trending-components/Tops";
import Trending from "./components/top-trending-components/Trending";
import CreateBiz from "./components/biz-components/CreateBiz";
import CreateBizPage from "./components/biz-components/CreateBizPage";

import Display from "./components/AdmanagerD/BrandAwareness/Display/Display";
import Display2 from "./components/AdmanagerD/Display2/Display2";
import ConfigureAd from "./components/AdmanagerD/ConfigureAd/ConfigureAd";
import ConfigureAd1 from "./components/AdmanagerD/ConfigureAd/ConfigureAd1";
import ConfigureAd2 from "./components/AdmanagerD/ConfigureAd/ConfigureAd2";
import ConfigureAd3 from "./components/AdmanagerD/ConfigureAd/ConfigureAd3";
import VideoAd from "./components/AdmanagerD/VideoAd/VideoAd";
import VideoAd1 from "./components/AdmanagerD/VideoAd/VideoAd1";
import FullScrVideoAd from "./components/AdmanagerD/VideoAd/FullScrVideoAd";
import FullScrVideoAd1 from "./components/AdmanagerD/VideoAd/FullScrVideoAd1";
import CreateAd from "./components/AdmanagerD/BrandAwareness/CreateAd";
import TargetAudienceScreen from "./components/AdmanagerD/TargetAudience/TargetAudienceScreen";
import BudgetScreen from "./components/AdmanagerD/Budget/BudgetScreen";
import AdPreviewScreen from "./components/AdmanagerD/AdPreview/AdPreviewScreen";
import AdPreviewScreenTwo from "./components/AdmanagerD/AdPreview/AdPreviewScreenTwo";

import GoLive from "./components/golive-components/GoLive";
import GoLiveDetail from "./components/golive-components/GoLiveDetail";
import CreateGoLive from "./components/golive-components/CreateGoLive";
import CreateGoLiveDetail from "./components/golive-components/CreateGoLiveDetail";

import Connection from "./components/Connections/Connection";
import FollowRequestsScreen from "./components/Connections/ConnectionPlaceMenu/FollowRequestsScreen";
import FollowingScreen from "./components/Connections/ConnectionPlaceMenu/FollowingScreen";
import FollowersScreen from "./components/Connections/ConnectionPlaceMenu/FollowersScreen";
import ConnectionMenuScreen from "./components/Connections/ConnectionPlaceMenu/ConnectionMenuScreen";
import CreateAdScreen from "./components/AdmanagerD/AdsScreens/CreateAd/CreateAdScreen";
import AdTypeScreen from "./components/AdmanagerD/AdsScreens/AdType/AdTypeScreen";
import SingleImageAdScreen from "./components/AdmanagerD/AdsScreens/SingleImageAd/SingleImageAdScreen";
import InDevelopment from "./components/InDevelopment";
import CaroselImageAdImage from "./components/AdmanagerD/AdsScreens/CaroselImageAd/CaroselImageAdImage";
import VideoAdScreen from "./components/AdmanagerD/AdsScreens/VideoAd/VideoAdScreen";

const Root = () => {
  return (
    // <Router history={history}>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Signup" element={<Signup />} />
      <Route exact path="/Otp" element={<Otp />} />
      <Route exact path="/SignupEmail" element={<SignupEmail />} />
      <Route exact path="/SignupProfile" element={<SignupProfile />} />
      <Route exact path="/SignupDetail" element={<SignupDetail />} />
      <Route exact path="/SignupInterest" element={<SignupInterest />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/MyTimeline" element={<MyTimeline />} />
      <Route exact path="/MyProfile" element={<MyProfile />} />
      <Route exact path="/MyMedia" element={<MyMedia />} />
      <Route exact path="/MyMediaListView" element={<MyMediaListView />} />
      <Route exact path="/MyShotz" element={<MyShotz />} />
      <Route exact path="/MyPodcast" element={<MyPodcast />} />
      <Route exact path="/MyPodcastDetails" element={<MyPodcastDetails />} />
      <Route exact path="/favorites" element={<Favorites />} />
      <Route exact path="/Group" element={<Group />} />
      <Route exact path="/OwnedGroup" element={<OwnedGroup />} />
      <Route exact path="/JoinedGroup" element={<JoinedGroup />} />
      <Route exact path="/InviteGroup" element={<InviteGroup />} />
      <Route exact path="/GroupJointRequest" element={<GroupJointRequest />} />

      <Route exact path="/GroupDetail/group/:id" element={<GroupDetail />} />
      <Route exact path="/GdAbout/group/:id" element={<GdAbout />} />
      <Route exact path="/GroupMember/group/:id" element={<GroupMember />} />

      <Route exact path="/GdBlockedPeople" element={<GdBlockedPeople />} />
      <Route exact path="/GdPostRequest" element={<GdPostRequest />} />
      <Route exact path="/GdSetting" element={<GdSetting />} />
      <Route exact path="/Biz" element={<Biz />} />
      <Route exact path="/OwnedBiz" element={<OwnedBiz />} />
      <Route exact path="/JoinedBiz" element={<JoinedBiz />} />
      <Route exact path="/BizDetail/:id" element={<BizDetail />} />
      <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
      <Route exact path="/ForgotPasswordOtp" element={<ForgotPasswordOtp />} />
      <Route exact path="/ResetPassword" element={<ResetPassword />} />
      <Route exact path="/AdManager" element={<AdManager />} />
      <Route exact path="/AdPausd" element={<AdPausd />} />
      <Route exact path="/AdDrafted" element={<AdDrafted />} />
      <Route exact path="/AdApprovalPending" element={<AdApprovalPending />} />
      <Route exact path="/AdCompleted" element={<AdCompleted />} />
      <Route
        exact
        path="/TransactionSummary"
        element={<AdTransactionSummary />}
      />
      <Route
        exact
        path="/AllTransactionSummary"
        element={<AdAllTransactionSummary />}
      />

      <Route exact path="/Marketplace" element={<Marketplace />} />
      <Route exact path="/MpPending" element={<MpPending />} />
      <Route exact path="/MpSale" element={<MpSale />} />
      <Route exact path="/MpSold" element={<MpSold />} />
      <Route exact path="/MpDetail" element={<MpDetail />} />
      <Route exact path="/Tops" element={<Tops />} />
      <Route exact path="/Trending" element={<Trending />} />
      <Route exact path="/CreateBiz" element={<CreateBiz />} />
      <Route exact path="/CreateBizPage" element={<CreateBizPage />} />

      {/* AD */}
      <Route exact path="/CreateAd" element={<CreateAdScreen />} />
      <Route exact path="/Ad/Display/:id" element={<AdTypeScreen />} />
      <Route exact path="/Ad/SingleImage" element={<SingleImageAdScreen />} />
      <Route exact path="/Ad/CaroselAd" element={<CaroselImageAdImage />} />
      <Route exact path="/Ad/VideoAd" element={<VideoAdScreen />} />

      <Route exact path="/Display2" element={<Display />} />
      <Route exact path="/ConfigureAd" element={<ConfigureAd />} />
      <Route exact path="/ConfigureAd1" element={<ConfigureAd1 />} />
      <Route exact path="/ConfigureAd2" element={<ConfigureAd2 />} />
      <Route exact path="/ConfigureAd3" element={<ConfigureAd3 />} />
      <Route exact path="/VideoAd" element={<VideoAd />} />
      <Route exact path="/VideoAd1" element={<VideoAd1 />} />
      <Route exact path="/FullScrVideoAd" element={<FullScrVideoAd />} />
      <Route exact path="/FullScrVideoAd1" element={<FullScrVideoAd1 />} />
      <Route exact path="/TargetAudience" element={<TargetAudienceScreen />} />
      <Route exact path="/Budget" element={<BudgetScreen />} />
      <Route exact path="/AdPreview" element={<AdPreviewScreen />} />
      <Route exact path="/AdPreviewTwo" element={<AdPreviewScreenTwo />} />

      <Route exact path="/GoLive" element={<GoLive />} />
      <Route exact path="/GoLiveDetail" element={<GoLiveDetail />} />
      <Route exact path="/CreateGoLive" element={<CreateGoLive />} />
      <Route
        exact
        path="/CreateGoLiveDetail"
        element={<CreateGoLiveDetail />}
      />

      <Route exact path="/Connection" element={<Connection />} />
      <Route exact path="/FollowRequests" element={<FollowRequestsScreen />} />
      <Route exact path="/FollowingScreen" element={<FollowingScreen />} />
      <Route exact path="/FollowersScreen" element={<FollowersScreen />} />
      <Route
        exact
        path="/ConnectionMenuScreen"
        element={<ConnectionMenuScreen />}
      />

      <Route exact path="/in-development" element={<InDevelopment />} />
      {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
    // </Router>
  );
};
export default Root;
