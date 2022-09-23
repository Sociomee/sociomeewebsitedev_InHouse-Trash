import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../../../Services/Actions/UserProfile/getUserProfileByUserIdAction';
import { loadAllProfessions } from '../../../Services/Actions/UserProfile/getUsersSubModulesAction';

const ProfileProfession = ({ userProfileByUserId }) => {
    // get all interest
    const { allProfessions } = useSelector(state => state.getUserSubModulesData);
    const [searchValue, setSearchValue] = useState("")
    const [profession, setProfession] = useState();

    const dispatch = useDispatch();

    const addProfession = () => {
        const data = { professionId: profession }
        console.log(data)
        dispatch(updateUserProfile(data))
    }

    useEffect(() => {
        dispatch(loadAllProfessions())
    }, [])

    return (
        <>
            <div className="card-title-cont-block">
                <div className="card-title">
                    <h3>Profession</h3>
                    <div className="settings">
                        <div className="setting-btn">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#professionModel" onClick={() => setProfession(userProfileByUserId.professionId)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <ul>
                        <li>
                            <div className="icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            </div>
                            <div className="details">
                                <h5>{userProfileByUserId.professionName || ''}</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modal */}

            <div className="modal fade" id="professionModel" tabIndex="-1" role="dialog" aria-labelledby="professionModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add Profession</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="searchfilter-blk p-2">
                                <div className="input-search-blk">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <input type="text" className="form-control" name="search" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                                </div>
                                <ul className="searchfiler-list">
                                    {allProfessions?.rows
                                        ?.filter(pro => pro.name.match(new RegExp(searchValue, "i")))
                                        .map(pro => {
                                            return <li key={pro.id} >
                                                <div className="form-check checkbox_animated"
                                                >
                                                    <input
                                                        type="radio"
                                                        className="radio_animated"
                                                        id={pro.name}
                                                        checked={pro.id===profession}
                                                        onChange={() => setProfession(pro.id)}
                                                    />
                                                    <label className="form-check-label" htmlFor={pro.name}>{pro.name}</label>
                                                </div>
                                            </li>
                                        })}

                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-solid" onClick={addProfession} data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileProfession
