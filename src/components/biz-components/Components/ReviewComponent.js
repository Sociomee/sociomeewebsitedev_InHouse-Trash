import React from 'react'
import Headers from '../../Header'
import LeftSidebar from '../../LeftSidebar'
import BizTopBanne from '../../biz-components/BizTopBanner'
import BizDetailMenu from '../../biz-components/BizDetailMenu'

const ReviewComponent = () => {
    return (
        <>
            <Headers />
            <div className="page-body container-fluid profile-page">
                <LeftSidebar />
                <div className="page-center">
                    <BizTopBanne />
                    <BizDetailMenu />
                </div>
            </div>

        </>
    )
}

export default ReviewComponent