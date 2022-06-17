import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import history from './history';
import Home from "./components/Home";
import Login from "./components/login-components/Login";
import Signup from "./components/login-components/Signup";
import Otp from "./components/login-components/Otp";
import SignupEmail from "./components/login-components/SignupEmail";
import SignupProfile from "./components/login-components/SignupProfile";
import SignupDetail from "./components/login-components/SignupDetail";
import SignupInterest from "./components/login-components/SignupInterest";
import ForgotPassword from "./components/login-components/ForgotPassword";
import ForgotPasswordOtp from "./components/login-components/ForgotPasswordOtp";
import ResetPassword from "./components/login-components/ResetPassword";
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

export class Root extends Component {
    render() {
        return (
            <Router history={history}>
                <Routes>
                    <Route exact path="/Home" element={<Home/>}/>
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path="/Signup" element={<Signup/>}/>
                    <Route exact path="/Otp" element={<Otp/>}/>
                    <Route exact path="/SignupEmail" element={<SignupEmail/>}/>
                    <Route exact path="/SignupProfile" element={<SignupProfile/>}/>
                    <Route exact path="/SignupDetail" element={<SignupDetail/>}/>
                    <Route exact path="/SignupInterest" element={<SignupInterest/>}/>
                    <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/>
                    <Route exact path="/ForgotPasswordOtp" element={<ForgotPasswordOtp/>}/>
                    <Route exact path="/ResetPassword" element={<ResetPassword/>}/>
                    <Route exact path="/MyTimeline" element={<MyTimeline/>}/>
                    <Route exact path="/MyProfile" element={<MyProfile/>}/>
                    <Route exact path="/MyMedia" element={<MyMedia/>}/>
                    <Route exact path="/MyMediaListView" element={<MyMediaListView/>}/>
                    <Route exact path="/MyShotz" element={<MyShotz/>}/>
                    <Route exact path="/MyPodcast" element={<MyPodcast/>}/>
                    <Route exact path="/MyPodcastDetails" element={<MyPodcastDetails/>}/>
                    <Route exact path="/favorites" element={<Favorites/>}/>
                    <Route exact path="/Group" element={<Group/>}/>
                    <Route exact path="/OwnedGroup" element={<OwnedGroup/>}/>
                    <Route exact path="/JoinedGroup" element={<JoinedGroup/>}/>
                    <Route exact path="/InviteGroup" element={<InviteGroup/>}/>
                    <Route exact path="/GroupJointRequest" element={<GroupJointRequest/>}/>
                    <Route exact path="/GroupDetail" element={<GroupDetail/>}/>
                    <Route exact path="/GroupMember" element={<GroupMember/>}/>
                    <Route exact path="/GdBlockedPeople" element={<GdBlockedPeople/>}/>
                    <Route exact path="/GdPostRequest" element={<GdPostRequest/>}/>
                    <Route exact path="/GdSetting" element={<GdSetting/>}/>
                    <Route exact path="/GdAbout" element={<GdAbout/>}/>
                    <Route exact path="/Biz" element={<Biz/>}/>
                    <Route exact path="/OwnedBiz" element={<OwnedBiz/>}/>
                    <Route exact path="/JoinedBiz" element={<JoinedBiz/>}/>
                    <Route exact path="/BizDetail" element={<BizDetail/>}/>
                    {/* <Route path="*" element={<NotFound/>}/> */}
                </Routes>
            </Router>
        )
    }
}
export default Root 