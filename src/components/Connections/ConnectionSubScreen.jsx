import React from 'react'
import ConnectionSub from './ConnectionSub';
import Followers from './Followers';
import FollowingScreen from './FollowingScreen';
import PendingRequest from './PendingRequest';
import SociomateScreen from './SociomateScreen';

const ConnectionSubScreen = () => {
    return (
        <>
            {/* PENDING REQUEST */}
            <PendingRequest></PendingRequest>
            <Followers></Followers>
            <FollowingScreen></FollowingScreen>
            <SociomateScreen></SociomateScreen>
            <ConnectionSub></ConnectionSub>
        </>
    )
}

export default ConnectionSubScreen