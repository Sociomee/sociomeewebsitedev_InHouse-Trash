import React, { useEffect } from 'react'
import AdManagerHeader from './AdManagerHeader'
import AdManagerMenu from './AdManagerMenu'
import AdManagerSearch from './AdManagerSearch'
import AdsTopComponents from './AdsTopComponents'
import AdSidebar from './AdSidebar'
import AdManagerTable from './AdManagerTable'
import { useDispatch, useSelector } from 'react-redux'
import { loadAdsByStatus } from '../../Services/Actions/AdManager/getAdsByStatusAction'

const AdDrafted = () => {
    const dispatch = useDispatch();
    const { allAdsByStatus } = useSelector(state => state.getAllAdByStatusData)
    console.log(allAdsByStatus)

    useEffect(() => {
        dispatch(loadAdsByStatus())
    }, [])

    let i = 1;

    return (
        <>
            <div className='d-flex'>
                <AdSidebar></AdSidebar>
                <div>

                    <AdManagerHeader></AdManagerHeader>

                    <AdsTopComponents></AdsTopComponents>

                    <AdManagerSearch></AdManagerSearch>

                    <AdManagerMenu></AdManagerMenu>

                    <table className="table">
                        <thead>
                            <tr className='ad-tr-bg'>
                                <th scope="col"><input type="checkbox" /></th>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Off/On</th>
                                <th scope="col">Ad Name</th>
                                <th scope="col">Ad ID</th>
                                <th scope="col">Ad Type</th>
                                <th scope="col">Total Impressions</th>
                                <th scope="col">Total Reach</th>
                                <th scope="col">Click</th>
                                <th scope="col">View</th>
                                <th scope="col">Lead</th>
                                <th scope="col">Total Amount spent</th>
                                <th scope="col">Daily Budget </th>
                                <th scope="col">Over all Budget</th>
                                <th scope="col">Start Date & Time </th>
                                <th scope="col">Ending Date & Time </th>
                                {/* <th scope="col">Last significant edit</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allAdsByStatus?.length !== 0 ? allAdsByStatus
                                    .map((allDrafted) => {
                                        return (
                                            <tr key={allDrafted.id}>
                                                <th><input type="checkbox" /></th>
                                                <th scope="row">{i++}</th>
                                                <td>
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>
                                                <td className='img-con'>
                                                    <img src={allDrafted.adMedias[0].file} className="img-fluid max-width" alt="no image" />
                                                    <div className='ml-2'>
                                                        <p>New Traffic Ad - Kickstarter</p>
                                                        <div className='table-link'>
                                                            <span><a href="/">
                                                                <img src="/assets/images/adIcon/Group.png" alt="" />
                                                                View Charts</a></span>
                                                            <span><a href="/">
                                                                <img src="/assets/images/adIcon/Mask.png" alt="" />
                                                                Duplicate</a></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{allDrafted.adId}</td>
                                                <td>{allDrafted.adType.adTypes} ({allDrafted.adType.adMasterTypes.name})</td>
                                                <td>---</td>
                                                <td>---</td>
                                                <td>---</td>
                                                <td>---</td>
                                                <td>---</td>
                                                <td>---</td>
                                                <td>₹500</td>
                                                <td>₹9597</td>
                                                <td>08-03-2022 11:09 AM</td>
                                                <td>08-03-2022 11:09 AM</td>
                                            </tr>
                                        )
                                    })
                                    : <div id="load-more" className="text-center mb-3">
                                        <div className="no-more-text text-center">
                                            <h2>No Drafted Ads Found</h2>
                                        </div>
                                    </div>
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default AdDrafted