import React, { useEffect, useRef, useState } from 'react';
import DateTimePicker from "react-datetime-picker";
import { useDispatch, useSelector } from 'react-redux';
import { loadAllTrendingHashtag } from '../Services/Actions/Common/trandingHashtagAction';
import Autocomplete from "react-google-autocomplete";

import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AddInYourPost=({ createPostHandler, postData, setPostData, clickMedia, pollOptions })=>{
    const [value, onChange] = useState('');
    // Model nav menu
    //   Create Post button 
    const navRef = useRef(null);
    const inputRef = useRef(null);
    const searchTag = useRef(null);
    const [flag, setFlag] = useState(false);
    const [toggle, setToggle] = useState(false);

    const [optionActive, setOptionActive] = useState('');
    const [tags, setTags] = useState([]);
    const [location, setLocation] = useState('');

    // infinite scroll functionality
    const [pageSize] = useState({
        pageIndex: 0,
        pageSize: ""
    })


    const { trandingHashtags } = useSelector(state => state.TrendingHashtagData);
    const dispatch = useDispatch();

    const onhashtagClick = (e) => {
        navRef.current.classList.add("hashtag");
        navRef.current.classList.remove("place");
        navRef.current.classList.remove("friends");
        navRef.current.classList.remove("schedule");
        navRef.current.classList.remove("comment");
        setOptionActive('hashtag');
    };
    const onplaceClick = (e) => {
        navRef.current.classList.add("place");
        navRef.current.classList.remove("hashtag");
        navRef.current.classList.remove("friends");
        navRef.current.classList.remove("schedule");
        navRef.current.classList.remove("comment");
        setOptionActive('place');
    };
    const onfriendClick = (e) => {
        navRef.current.classList.add("friends");
        navRef.current.classList.remove("hashtag");
        navRef.current.classList.remove("place");
        navRef.current.classList.remove("schedule");
        navRef.current.classList.remove("comment");
        setOptionActive('friends');
    };

    const onscheduleClick = (e) => {
        navRef.current.classList.add("schedule");
        navRef.current.classList.remove("friends");
        navRef.current.classList.remove("hashtag");
        navRef.current.classList.remove("place");
        navRef.current.classList.remove("comment");
        setOptionActive('schedule');
    };

    const oncommentClick = (e) => {
        navRef.current.classList.add("comment");
        navRef.current.classList.remove("schedule");
        navRef.current.classList.remove("friends");
        navRef.current.classList.remove("hashtag");
        navRef.current.classList.remove("place");
        setOptionActive('comment');

    };
    const oncloseClick = (e) => {
        navRef.current.classList.remove("place");
        navRef.current.classList.remove("friends");
        navRef.current.classList.remove("hashtag");
        navRef.current.classList.remove("schedule");
        navRef.current.classList.remove("comment");
        setOptionActive('');

    };

    const handleSubmit = (e) => {
        postData.hashTags = tags && tags.map(({ name }) => name);
        tags.length>0 && document.getElementsByClassName('MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-clearIndicator css-1glvl0p-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator')[0]?.click();
        setTags([]);
        postData.displayLocation = location;
        inputRef.current.value = '';
        postData.schedule = (value && value.toISOString());
        postData.isScheduled = (value && 1);
        onChange('');
        createPostHandler(e)
    }


    // This function checks data is filled or not
    useEffect(() => {
        if (postData?.postType === 'text') {
            if (postData?.caption) setFlag(true)
            else setFlag(false)
        }
        if (postData?.postType === 'media') {
            if (postData?.caption) setFlag(true)
            else setFlag(false)
        }
        if (postData?.postType === 'recommendation') {
            if (postData?.caption) setFlag(true)
            else setFlag(false)
        }
        if (postData?.postType === 'alert') {
            if (postData?.caption && postData?.alertLevelId && postData?.alertRangeMeter) setFlag(true)
            else setFlag(false)
        }
        if (postData?.postType === 'event') {
            if (postData?.caption && postData?.eventCategoryId && postData?.eventDescription && postData?.eventAddress) setFlag(true)
            else setFlag(false)
        }
        if (postData?.postType === 'thought') {
            if (postData?.caption) setFlag(true)
            else setFlag(false)
        }

    }, [postData])

    useEffect(() => {
        if (postData?.postType === 'poll') {
            if (postData?.caption && pollOptions?.seq1 && pollOptions?.seq2) setFlag(true)
            else setFlag(false)
        }
    }, [postData, pollOptions])

    // gets trending hashtags
    useEffect(() => {
        dispatch(loadAllTrendingHashtag(pageSize))
    }, [])

    // useEffect(()=>{
    //     pageSize.searchKey = postData.hashTags[0];
    //         dispatch(loadAllTrendingHashtag(pageSize));
    // },[postData.hashTags])

    return (
        <>

            <div className="create-btn-cust-option">
                <h4>Add to your post</h4>
                <ul className="create-btn-list tooltip-sec">
                    <li >
                        {/* <input className="choose-file" type="file"/> */}
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={clickMedia} className="addpost-option-btn" width="21" height="21" viewBox="0 0 21 21" fill="#A6A6A6"><path fillRule="evenodd" clipRule="evenodd" d="M16.625 1.75H4.375C2.8875 1.75 1.75 2.8875 1.75 4.375V16.625C1.75 18.1125 2.8875 19.25 4.375 19.25H16.625C18.1125 19.25 19.25 18.1125 19.25 16.625V4.375C19.25 2.8875 18.1125 1.75 16.625 1.75ZM3.5 4.375C3.5 3.85 3.85 3.5 4.375 3.5H16.625C17.15 3.5 17.5 3.85 17.5 4.375V11.025L14.6125 8.1375C14.2625 7.7875 13.7375 7.7875 13.3875 8.1375L4.1125 17.4125C3.7625 17.325 3.5 16.975 3.5 16.625V4.375ZM6.475 17.5H16.625C17.15 17.5 17.5 17.15 17.5 16.625V13.475L14 9.975L6.475 17.5ZM7.4375 9.625C8.6625 9.625 9.625 8.6625 9.625 7.4375C9.625 6.2125 8.6625 5.25 7.4375 5.25C6.2125 5.25 5.25 6.2125 5.25 7.4375C5.25 8.6625 6.2125 9.625 7.4375 9.625ZM7.875 7.4375C7.875 7.175 7.7 7 7.4375 7C7.175 7 7 7.175 7 7.4375C7 7.7 7.175 7.875 7.4375 7.875C7.7 7.875 7.875 7.7 7.875 7.4375Z" /></svg>
                        <div className="tooltip-cls">
                            <span>Media</span>
                        </div>
                    </li>
                    <li id="hashtag-btn" >
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={onhashtagClick} className="addpost-option-btn" width="16" height="16" viewBox="0 0 16 16" fill={optionActive === 'hashtag' ? "#81C14B" : "#A6A6A6"} ><path d="M15.8754 8.77081C15.6635 8.1214 14.956 7.77619 14.3032 7.9881L12.7514 8.50421L11.7158 5.42804L13.2675 4.91193C13.9204 4.70001 14.2622 3.99591 14.0537 3.34308C13.8417 2.69367 13.1342 2.34845 12.4814 2.56036L10.9296 3.07648L10.393 1.47003C10.1811 0.820618 9.47358 0.475403 8.82075 0.687317C8.16792 0.899231 7.82612 1.60333 8.03461 2.25617L8.57124 3.86261L5.37885 4.92902L4.84223 3.32257C4.63032 2.67316 3.9228 2.32794 3.26997 2.53986C2.61714 2.75177 2.27534 3.45587 2.48383 4.1087L3.02046 5.71515L1.47212 6.22785C0.819284 6.43976 0.477487 7.14386 0.685983 7.79669C0.856881 8.2923 1.33881 8.61701 1.83442 8.63751C2.06684 8.67169 2.24458 8.58283 3.80659 8.06329L4.84223 11.1395L3.29047 11.6556C2.64106 11.8675 2.29585 12.575 2.50434 13.2244C2.67524 13.72 3.15717 14.0447 3.65278 14.0652C3.8852 14.0994 4.06294 14.0106 5.62495 13.491L6.16157 15.0975C6.36323 15.6751 7.00581 16.0887 7.73383 15.8802C8.38667 15.6683 8.72846 14.9642 8.51997 14.3113L7.98335 12.7049L11.1826 11.6351L11.7192 13.2415C11.9208 13.8192 12.5634 14.2327 13.2915 14.0242C13.9443 13.8123 14.2861 13.1082 14.0776 12.4554L13.541 10.8489L15.0927 10.3328C15.7421 10.1277 16.0873 9.42023 15.8754 8.77081ZM7.19038 10.3841L6.15473 7.30109L9.35053 6.23126L10.3862 9.31427L7.19038 10.3841Z" /></svg>
                        <div className="tooltip-cls">
                            <span>Hashtag</span>
                        </div>
                    </li>
                    <li id="checkin-btn" >
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={onplaceClick} className="addpost-option-btn" width="13" height="21" viewBox="0 0 13 21" fill={optionActive === 'place' ? "#81C14B" : "#A6A6A6"}><path d="M6.5 0C2.90643 0 0 3.28666 0 7.35036C0 11.7291 4.10429 17.7669 5.79429 20.0665C6.16571 20.5705 6.84357 20.5705 7.215 20.0665C8.89571 17.7669 13 11.7291 13 7.35036C13 3.28666 10.0936 0 6.5 0ZM6.5 9.97548C5.88432 9.97548 5.29385 9.69891 4.8585 9.2066C4.42315 8.71429 4.17857 8.04658 4.17857 7.35036C4.17857 6.65413 4.42315 5.98642 4.8585 5.49411C5.29385 5.0018 5.88432 4.72523 6.5 4.72523C7.11568 4.72523 7.70615 5.0018 8.1415 5.49411C8.57685 5.98642 8.82143 6.65413 8.82143 7.35036C8.82143 8.04658 8.57685 8.71429 8.1415 9.2066C7.70615 9.69891 7.11568 9.97548 6.5 9.97548Z" /></svg>
                        <div className="tooltip-cls">
                            <span>Check In</span>
                        </div>
                    </li>
                    <li id="friends-btn" >
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={onfriendClick} className="addpost-option-btn" width="25" height="21" viewBox="0 0 25 21" fill={optionActive === 'friends' ? "#81C14B" : "#A6A6A6"}><path d="M24.634 14.5714L21.1065 10.9695C20.6377 10.4903 20.001 10.2227 19.3369 10.2227H16.2391C15.5476 10.2227 14.989 10.7938 14.989 11.5006V14.6632C14.989 15.3421 15.2507 15.989 15.7195 16.4682L19.247 20.0701C19.7353 20.5692 20.5283 20.5692 21.0167 20.0701L24.6301 16.3763C25.1223 15.8772 25.1223 15.0705 24.634 14.5714ZM17.493 13.7328C16.9735 13.7328 16.5555 13.3055 16.5555 12.7744C16.5555 12.2433 16.9735 11.816 17.493 11.816C18.0126 11.816 18.4306 12.2433 18.4306 12.7744C18.4306 13.3015 18.0126 13.7328 17.493 13.7328ZM8.75043 10.2187C11.5123 10.2187 13.7507 7.9306 13.7507 5.10737C13.7507 2.28813 11.5123 0 8.75043 0C5.98857 0 3.75018 2.28813 3.75018 5.11136C3.75018 7.9306 5.98857 10.2187 8.75043 10.2187ZM13.7429 14.6592V11.7402C13.2663 11.5964 12.7702 11.4926 12.2506 11.4926H11.5982C10.731 11.8999 9.7661 12.1315 8.75043 12.1315C7.73475 12.1315 6.77377 11.8999 5.90263 11.4926H5.25026C2.35168 11.4966 0 13.9005 0 16.8635V18.5247C0 19.5829 0.839885 20.4415 1.87509 20.4415H15.6258C16.2313 20.4415 16.7625 20.142 17.1063 19.6867L14.8406 17.3706C14.1335 16.6479 13.7429 15.6855 13.7429 14.6592Z" /></svg>
                        <div className="tooltip-cls">
                            <span>People Tag</span>
                        </div>
                    </li>
                    <li id="schedule-btn" >
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={onscheduleClick} className="addpost-option-btn" width="24" height="24" viewBox="0 0 24 24" fill={optionActive === 'schedule' ? "#81C14B" : "#A6A6A6"}><path d="M20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442Z" /><path d="M12 8V12L15 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#A6A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8V12L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                        <div className="tooltip-cls">
                            <span>Schedule Your Post</span>
                        </div>
                    </li>
                    <li id="comment-btn" >
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={oncommentClick} className="addpost-option-btn" width="24" height="24" viewBox="0 0 24 24" fill={optionActive === 'comment' ? "#81C14B" : "#A6A6A6"}><path d="M12 20.9999C16.97 20.9999 21 16.9702 21 12C21 7.02974 16.97 3 12 3C7.03 3 3 7.02974 3 12C3 13.7707 3.512 15.4222 4.395 16.815L3 20.9999L7.745 19.9323C9.07479 20.6408 10.5286 21.0056 12 20.9999Z" /><line x1="7" y1="9" x2="17" y2="9" stroke="white" strokeLinecap="round" /><line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeLinecap="round" /><line x1="7" y1="15" x2="17" y2="15" stroke="white" strokeLinecap="round" /></svg>
                        <div className="tooltip-cls">
                            <span>Allow Comments</span>
                        </div>
                    </li>
                </ul>
            </div>

            {optionActive !== '' && <hr />}

            <div className="options-input" ref={navRef} id="additional-input">

                <div className="search-input hashtag-input" >
                    {/* {
                        !toggle ? <a id="icon-close" onClick={() => { setToggle(true); searchTag.current.classList.add("show") }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="iw-22 icon-font-light icon-close bi bi-search">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </a> : <a id="icon-close" onClick={() => { setToggle(false); searchTag.current.classList.remove("show") }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="iw-15 icon-font-light icon-close"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </a>
                    } */}
                    <h4 className='mb-3'>Trending #tags</h4>
                    <MuiAutocomplete
                        multiple
                        id="tags-standard"
                        options={trandingHashtags?.rows || []}
                        getOptionLabel={(option) => option.name}
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
                        disabled={tags.length>=50 ? true : false}
                    />


                </div>
                <div className="search-input place-input">
                    <h4 className='mb-3'>Search for Location</h4>
                    <Autocomplete
                        className="form-control"
                        apiKey={'AIzaSyBjNd5-n0m0NtT1qA4iKmgM3ahD2Podpas'}
                        options={{
                            fields: ["name"],
                            strictBounds: false,
                            types: [],
                        }}
                        onPlaceSelected={(place) => {
                            setLocation(place.name)
                        }}
                        ref={inputRef}
                    />

                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15 icon-left icon-font-light"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </a>
                </div>
                <div className="search-input friend-input">
                    <h4 className='mb-3'>Tag People</h4>

                    <input type="text" className="form-control" list="friends"
                        placeholder="search your friends..." />
                    <datalist id="friends">
                        <option value="Paige Turner" />
                        <option value="Bob Frapples" />
                        <option value="Josephin water" />
                        <option value="Petey Cruiser" />
                        <option value="Anna Sthesia" />
                        <option value="Paul Molive" />
                        <option value="Anna Mull" />
                    </datalist>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15 icon-left icon-font-light"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                    </a>
                </div>
                <div className="search-input schedule-input" >
                    <h4 className='mb-3'>Select Date & time to schedule your post </h4>

                    {/* <input type="text" className="form-control" placeholder="Schedule your post..."/> */}
                    <div className='row'>
                        <div className="col-6 d-flex align-items-center">
                            <h4>Pick a date & time</h4>
                        </div>
                        <div className="col-6">
                            <DateTimePicker onChange={onChange} value={value} minDate={new Date()} format="dd/MM/y h:mm:ss a" />
                        </div>
                    </div>
                </div>
                <div className="search-input comment-input" >
                    {/* <input type="text" className="form-control" placeholder="Allow Comments..."/> */}
                    <div className="allowcomment-box">
                        <h4>Allow Comments</h4>
                        <div className="toggle-sec">
                            <div className="button toggle-btn">
                                <input type="checkbox" className="checkbox" value={postData?.allowComments} onChange={() => { postData.allowComments === 1 ? setPostData({ ...postData, allowComments: 0 }) : setPostData({ ...postData, allowComments: 1 }) }} />
                                <div className="knobs">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <a href="/">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-15 icon-left icon-font-light"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a> */}
                </div>
                {/* <div className="search-input feeling-input">
                <input type="text" className="form-control enable" list="feelings" placeholder="How Are You Feeling?"/>
                <datalist id="feelings">
                    <option value="Happy"/>
                    <option value="Sad"/>
                    <option value="Angry"/>
                    <option value="Worried"/>
                    <option value="Shy"/>
                    <option value="Excited"/>
                    <option value="Surprised"/>
                    <option value="Silly"/>
                    <option value="Embarrassed"/>
                </datalist>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile iw-15 icon-left icon-font-light"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                </a>
            </div> */}
            </div>

            <div id="post-btn" className="post-btn">
                <button className={'btn btn-solid'} onClick={(e) => handleSubmit(e)} disabled={!flag}>post</button>
            </div>

        </>
    );
} 
export default AddInYourPost;