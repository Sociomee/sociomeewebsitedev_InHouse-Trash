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
import GroupDetail from "./components/group-components/GrpDiscussionPanel/GroupDetail";
import GdBlockedPeople from "./components/group-components/GdBlockedPeople";
import GdPostRequest from "./components/group-components/GdPostRequest";
import GdSetting from "./components/group-components/GdSetting";
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
import FullVideoScreen from "./components/AdmanagerD/AdsScreens/FullVideo/FullVideoScreen";
import ChooseAudienceScreen from "./components/AdmanagerD/AdsScreens/ChooseAudience/ChooseAudienceScreen";
import TotalBudgetScreen from "./components/AdmanagerD/AdsScreens/TotalBudget/TotalBudgetScreen";
import AdsPreviewScreen from "./components/AdmanagerD/AdsScreens/AdPreview/AdsPreviewScreen";
import AdPreviewMoreScreen from "./components/AdmanagerD/AdsScreens/AdPreviewMore/AdPreviewMoreScreen";
import LeadGenerationScreen from "./components/AdmanagerD/AdsScreens/LeadGeneration/LeadGenerationScreen";
import AdAnalysis from "./components/AdmanagerD/AdsScreens/AdAnalysis/AdAnalysis";
import CreateGroupScreen from "./components/group-components/CreateGroup/CreateGroupScreen";

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
      <Route exact path="/Ad/Display/SingelImage" element={<SingleImageAdScreen />} />
      <Route exact path="/Ad/Display/caroselImage" element={<CaroselImageAdImage />} />
      <Route exact path="/Ad/Display/Video" element={<VideoAdScreen />} />
      <Route exact path="/Ad/Display/FullScreenVideo" element={<FullVideoScreen />} />

      <Route exact path="/Ad/ChooseAudience" element={<ChooseAudienceScreen />} />
      <Route exact path="/Ad/TotalBudget" element={<TotalBudgetScreen />} />
      <Route exact path="/Ad/AdPreview" element={<AdsPreviewScreen />} />
      <Route exact path="/Ad/AdPreviewMore" element={<AdPreviewMoreScreen />} />
      <Route exact path="/Ad/LeadGeneration" element={<LeadGenerationScreen />} />
      <Route exact path="/AdAnalysis" element={<AdAnalysis />} />


      {/* GROUP ROUTES */}
      <Route exact path="/Group/create" element={<CreateGroupScreen />} />



      <Route exact path="/GoLive" element={<GoLive />} />
      <Route exact path="/GoLiveDetail" element={<GoLiveDetail />} />
      <Route exact path="/CreateGoLive" element={<CreateGoLive />} />
      <Route exact path="/CreateGoLiveDetail" element={<CreateGoLiveDetail />}
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
