import React, { useState } from 'react'
import { Link } from "react-router-dom"
import AdmanagerHeaderR from '../../AdmanagerHeaderR/AdmanagerHeaderR'

import MuiAutocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';

const ChooseAudienceScreen = () => {
    const { trandingHashtags } = useSelector(state => state.TrendingHashtagData);
    const dispatch = useDispatch();
    const [tags, setTags] = useState([]);

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
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-3 ad-left">
                        <div className="desh-icon-main">
                            <div className="desh-icon">
                                <img src="/assets/images/adIcon/grid.png" alt="" />
                                <p className='ml-2'>User Dashboard</p>
                            </div>
                            <div className="desh-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div className="create-add-main">
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
                        <div className="create-add-main">
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
                    </div>

                    <div className="col-lg-9 pad-zero">
                        <div className="col-lg-12 step-ad-heading">
                            <div className="row step-section">
                                <div className="col-lg-2 ad-count">
                                    <button className="ad-count-btn">4</button>
                                    <p className="ad-count-step">Step 4</p>
                                </div>
                                <div className="col-lg-10">
                                    <p className='ad-count-heading'>Choose Your Audience</p>
                                    <p>Define your target audience details</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 pad-zero">
                            <div className="row ad-types-of-type-map ">
                                <div className="single-ad pad-zero">
                                    <div className="navigate col-lg-12">
                                        <div className="row">
                                            <div className="navigate-left col-lg-12">
                                                <p className='navigate-color'>Website ( Link) Visits- CPC  /  Single Image Ad  /  Choose your Audience</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 inputs d-flex p-0">
                                        {/* <div className="row"> */}
                                        <div className='col-lg-12 col-12'>
                                            <div className="">
                                                <p className='p-heading'>Audience Preference
                                                    <span className='pl-1'>
                                                        <img src="/assets/images/adIcon/alert-circle.png" alt="" />
                                                    </span>
                                                </p>
                                                <div className="">
                                                    <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                                        Custom
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="">
                                                <div className="ad-heading-upsd-title-input a-price-flex">
                                                    <p className='p-heading'>Target Gender</p>
                                                    <span className="a-price">
                                                        +$120
                                                    </span>
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

                                            </div>

                                            <div className="">
                                                <div className="ad-heading-upsd-title-input a-price-flex">
                                                    <p className='p-heading'>Target Age Range
                                                        <span className='pl-1'>
                                                            <img src="/assets/images/adIcon/alert-circle.png" alt="" />
                                                        </span>
                                                    </p>
                                                    <span className="a-price">
                                                        +$20
                                                    </span>
                                                </div>
                                                <div className="ad-heading-upsd-title-input d-flex">
                                                    <input type="range" className='range' />
                                                </div>
                                            </div>

                                            <div className=''>
                                                <div className="ad-heading-upsd-title-input a-price-flex">
                                                    <p className='p-heading'>Targeted Profession</p>
                                                    <span className="a-price">
                                                        +$120
                                                    </span>
                                                </div>
                                                <div className="Audience-Preference-input">
                                                    <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                                        Targeted Profession
                                                    </select>
                                                </div>
                                            </div>

                                            <div className=''>
                                                <div className="ad-heading-upsd-title-input a-price-flex">
                                                    <p className='p-heading'>Targeted Interests</p>
                                                    <span className="a-price">
                                                        +$120
                                                    </span>
                                                </div>
                                                <div className="Audience-Preference-input">
                                                    <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                                        Targeted Interests
                                                    </select>
                                                </div>
                                            </div>

                                            <div className=''>
                                                <div className="ad-heading-upsd-title-input a-price-flex">
                                                    <p className='p-heading'>Targeted Location</p>
                                                    <span className="a-price">
                                                        +$120
                                                    </span>
                                                </div>
                                                <div className="Audience-Preference-input">
                                                    <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                                        Targeted Location
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="ad-heading-upsd-title-input d-flex save-audience">
                                                <div className='d-flex'>
                                                    <input type="checkbox" />
                                                    <p className='p-heading pl-2'>Save this Audience Preference for future.</p>
                                                </div>
                                                <input type="text" className='form-control p-2' placeholder='Enter audience preference...' />
                                            </div>

                                            <div className='col-lg-12'>
                                                <div className="ad-btn">
                                                    <Link to="" className="btn-cancel">
                                                        Cancel
                                                    </Link>
                                                    <Link to="/Ad/TotalBudget" className='btn-next'>
                                                        Next
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* <MuiAutocomplete
                                                multiple
                                                id="tags-standard"
                                                options={interestes || []}
                                                getOptionLabel={(option) => option}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        variant="standard"
                                                        label="# Hashtags"
                                                        placeholder="Hashtags..."
                                                    />
                                                )}
                                                disableCloseOnSelect
                                                onChange={(e, params) => setTags(params)}
                                                disabled={tags.length >= 50 ? true : false}
                                            /> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default ChooseAudienceScreen