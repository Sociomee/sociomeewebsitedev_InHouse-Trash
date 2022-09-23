import React, {  useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { addSports, loadAllSports } from '../../../Services/Actions/UserProfile/getAllUserSportsAction';
import { loadProfileByUserId, loadSportsByUserId } from '../../../Services/Actions/UserProfile/getUserProfileByUserIdAction';

const MyPorfileSports = () => {
    var sportSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    };
    let dispatch = useDispatch();
    const [userSports, setUserSports] = useState([]);
    const [searchValue, setSearchValue] = useState("")

    // get user profile by user id 
    const { userProfileByUserId } = useSelector(state => state.getUserProfileByUserIdData);
    // get all sports
    const { allSports } = useSelector(state => state.getAllSportsData);

    const sportsHandler = (sport) => {
        const exists = userSports.find(sp => sp.id === sport.id);
        if (exists) {
            setUserSports(userSports?.filter(int => int.id !== sport.id))
        }
        else {
            setUserSports([...userSports, sport])
        }
    }

    const submitSports = () => {
        const sport = {
            addSport: true,
            deleteSport: false,
            sportsId: userSports.map((val) => val.id)
        }
        dispatch(addSports(sport))

    }

    useEffect(() => {
        dispatch(loadProfileByUserId());
        dispatch(loadAllSports());
    }, [])

    useEffect(() => {
        let tempInt = (userProfileByUserId.sport?.map(sport => allSports.rows?.filter(intFil => intFil.id === sport.sports_id)))
        setUserSports(tempInt?.map(tem => tem && tem[0]))
    }, [allSports])

    // SPORT VIA USER ID
    const { userSportsByUserId } = useSelector(state => state.getUserProfileByUserIdData);
    useEffect(() => {
        dispatch(loadSportsByUserId());
    }, [])
    return (
        <>
            <div className="about-profile-box-blk">
                <div className="card-title">
                    <h3>Sports</h3>
                    <div className="settings">
                        <div className="setting-btn">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#sportsModel">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-block-box">
                    <Slider {...sportSettings} className="default-space">
                        {
                            userSportsByUserId.length !== 0 ? userSportsByUserId.map((sport) => {
                                return (<div>
                                    <div className="profile-slide-box" key={sport.id}>
                                        <div className="adaptive-overlay"></div>
                                        <div className="story-bg">
                                            <img src={sport.sportImgURL} className="img-fluid bg-img" />
                                        </div>
                                        <div className="story-content">
                                            <h6>{sport.name}</h6>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                                : <div id="load-more" className="text-center mb-3">
                                    <div className="no-more-text">
                                        <h2>No Data Found</h2>
                                    </div>
                                </div>
                        }
                    </Slider>
                </div>
            </div>


            <div className="modal fade" id="sportsModel" tabIndex="-1" role="dialog" aria-labelledby="sportsModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Sports</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="searchfilter-blk p-2">
                                <div className="input-search-blk">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <input type="text" className="form-control" name="search" placeholder="Find Sport..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                                </div>
                                <ul className="searchfiler-list">
                                    {allSports?.rows
                                        ?.filter(sports => sports.name.match(new RegExp(searchValue, "i")))
                                        .map(sports => {
                                            return <li key={sports.id} >
                                                <div className="form-check checkbox_animated"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id={sports.name}
                                                        onClick={() => sportsHandler(sports)}
                                                        checked={userSports?.some((int) => int?.id === sports?.id)}
                                                    /><label className="form-check-label" htmlFor={sports.name}>{sports.name}</label></div></li>
                                        })}
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-solid" onClick={submitSports} data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPorfileSports