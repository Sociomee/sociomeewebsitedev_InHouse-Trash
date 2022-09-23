import React from 'react'; 
import ProfileBox from './left-right-components/ProfileBox';
import FriendSuggestion from './left-right-components/FriendSuggestion';
import FriendRequest from './left-right-components/FriendRequest';
import LikedBizPage from './left-right-components/LikedBizPage';
import Weather from './left-right-components/Weather';
import { useSelector } from 'react-redux';

const ContentLeft=()=> {  
  const { userFollowingRequests } = useSelector(state => state.userFollowingRequestsData)
  
  return (
    <>
    <div className="content-left">
      <ProfileBox></ProfileBox>
      <FriendSuggestion></FriendSuggestion>
      {
        userFollowingRequests?.length>0 && <FriendRequest/>
      }
      <LikedBizPage></LikedBizPage>
      <Weather></Weather>
    </div>
    </>
  );
} 

export default ContentLeft;