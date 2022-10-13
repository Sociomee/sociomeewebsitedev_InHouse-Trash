import React, { useState } from 'react'
import { Link } from "react-router-dom"
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const TargetAudienceScreen = () => {
    let interestes = [
        "Photography",
        "Videography",
        "Watching",
        "Video Making",
        "World Tour",
        "New Movies", 
        "Reading Books",
        "Travelling ",
        "Song",
        "Games",
        "Technology",
    ]

    const [searchValue, setSearchValue] = useState("")
    return (
        <>
            <AdmanagerHeaderR />
            <div className="main-section-upsd">

                <div className="sidebar-main-sp">

                    <div className="desh-icon-main">
                        <div className="desh-icon">
                            <img src="/assets/images/adIcon/grid.png" alt="" />
                            <p className='ml-2'>User Dashboard</p>
                        </div>
                        <div className="desh-second">
                            <i className="fa fa-ellipsis-h"></i>
                        </div>
                    </div>

                    <div className="create-add-main-no-backbround Configure-one">
                        <div className="create-add">
                            <div className="create-add-one">
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Create Ad</p>
                            </div>
                            <div className="create-add-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                    <div className="create-add-main-no-backbround Configure-ad">
                        <div className="create-add">
                            <div className="create-add-one">
                                <span className='static-margin'></span>
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Brand Awareness- CPV</p>
                            </div>
                            <div className="create-add-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                    <div className="create-add-main-no-backbround Configure-ad">
                        <div className="create-add">
                            <div className="create-add-one">
                                <span className='static-margin'></span><span className='static-margin'></span>
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Full Screen Video Ad </p>
                            </div>
                            <div className="create-add-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                    <div className="create-add-main-third-sp create-add-main-third-sp-new">
                        <div className="create-add-sp" >
                            <div className="create-add-one-sp mr-5">
                                <span className='static-margin'></span><span className='static-margin'></span>
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Choose Your Audience</p>
                            </div>
                            <div className="create-add-second-sp">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="step-select-main-upsd"></div>
                <div className="step-select-upsd">
                    <div className="step-select-one-upsd">
                        <div className="step-select-child-upsd">
                            <button>4</button>
                            <p>Step 4</p>
                        </div>
                    </div>
                    <div className="step-select-second-upsd">
                        <p>Choose Your Audience</p>
                        <p>Define your target audience details</p>
                    </div>
                </div>


                <div className="brand-image-main-upsd brand-image-main-upsd-new">
                    <div className="brand-aware-text-upsd-title">
                        <p>Website ( Link) Visits- CPC  /  Single Image Ad  /  Choose your Audience</p>
                    </div>

                    <div>
                        <div className="ad-heading-upsd-title-input">
                            <p>Audience Preference </p>
                        </div>

                        <div className="Audience-Preference-input">
                            <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                Audience Preference
                            </select>
                        </div>

                        <div className="ad-heading-upsd-title-input">
                            <p>Target Gender</p>
                        </div>
                        <div className='d-flex'>
                            <div className="ad-heading-upsd-title-input d-flex">
                                <input type="checkbox" />
                                <span className='ml-1 pr-5'>All Genders</span>
                            </div>
                            <div className="ad-heading-upsd-title-input d-flex">
                                <input type="checkbox" />
                                <span className='ml-1 pr-5'>Male</span>
                            </div>
                            <div className="ad-heading-upsd-title-input d-flex">
                                <input type="checkbox" />
                                <span className='ml-1 pr-5'>Female</span>
                            </div>
                            <div className="ad-heading-upsd-title-input d-flex">
                                <input type="checkbox" />
                                <span className='ml-1 pr-5'>Others</span>
                            </div>
                        </div>

                        <div className="ad-heading-upsd-title-input">
                            <p>Target Age Range</p>
                        </div>
                        <div className="ad-heading-upsd-title-input d-flex">
                            <input type="range" className='range' />
                        </div>

                        <div className="ad-heading-upsd-title-input">
                            <p>Targeted Profession</p>
                        </div>
                        <div className="Audience-Preference-input">
                            <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                Targeted Profession
                            </select>
                        </div>

                        <div className="ad-heading-upsd-title-input">
                            <p>Targeted Interests</p>
                        </div>
                        <div className="Audience-Preference-input">
                            <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                Targeted Interests
                            </select>
                        </div>

                        <div className="ad-heading-upsd-title-input">
                            <p>Targeted Location</p>
                        </div>
                        <div className="Audience-Preference-input">
                            <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                Targeted Location
                            </select>
                        </div>

                        <div className="ad-heading-upsd-title-input d-flex">
                            {/* <div className=""> */}
                            <input type="checkbox" />
                            <p>Save this Audience Preference for future.</p>
                            {/* </div> */}
                            {/* <input type="text" className='form-control p-2' placeholder='Enter audience preference...' /> */}
                        </div>

                        <div className="two-bumain-upsd two-bumain-upsd-new">
                            <button>Cancel</button>
                        </div>
                        <div className="two-bumain-upsdr two-bumain-upsd-new">
                            < Link to="/Budget" >
                                <button className='block-btn'>Next</button>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* MODEL 1 */}
                <div className="modal fade" id="interestesModel" tabIndex="-1" role="dialog" aria-labelledby="interestesModelTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Interestes</h5>
                                <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                            </div>
                            <div className="modal-body">
                                <div className="searchfilter-blk">
                                    <div className="input-search-blk">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" className="form-control" name="search" placeholder="Find Interest..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                                    </div>
                                    <ul className="searchfiler-list">
                                        {interestes
                                            .filter(interestes => interestes.match(new RegExp(searchValue, "i")))
                                            .map(interestes => {
                                                return <li key={interestes}><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id={interestes} /><label className="form-check-label" htmlFor={interestes}>{interestes}</label></div></li>
                                            })}
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-solid">Save</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default TargetAudienceScreen