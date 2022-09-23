import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSingleAdTypeOfType, loadAdType } from '../../../../Services/Actions/AdManager/getAdTypeAction';
import AdmanagerHeaderR from '../../AdmanagerHeaderR/AdmanagerHeaderR'

const AdTypeScreen = () => {
    const { singleTypeOfType } = useSelector(state => state.getTypeData)
    const dispatch = useDispatch();
    const { id } = useParams();

    // 
    const [state, setState] = useState({

    });

    // TAD YPE OF TYPES
    useEffect(() => {
        dispatch(getSingleAdTypeOfType(id))
    }, [])
    useEffect(() => {
        setState({ ...singleTypeOfType })
    }, [singleTypeOfType])

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

                    <div className="col-lg-9">
                        <div className="col-lg-12 step-ad-heading">
                            <div className="row step-section">
                                <div className="col-lg-2 ad-count">
                                    <button className="ad-count-btn">2</button>
                                    <p className="ad-count-step">Step 2</p>
                                </div>
                                <div className="col-lg-10">
                                    <p className='ad-count-heading'>Choose Ad Display Format</p>
                                    <p>Select the best format to display your Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="row ad-types-of-type-map">
                                
                                {
                                    singleTypeOfType.successResult?.map((type) => {
                                        return (
                                            <div className="col-lg-6">
                                                <Link to="" key={type.id}>
                                                    <div className="ad-type d-flex ad-types-type">
                                                        <div className='mr-3'>
                                                            <img src="/assets/images/adIcon/Frame 1105.png"
                                                            alt="ad image"
                                                             />
                                                        </div>
                                                        <div className='ad-types-type-dec'>
                                                            <p className='type mt-2'>{type.name}</p>
                                                            <p className='dec-types mt-2'>{type.note}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className="ad-btn">
                                <Link to="" className="btn-cancel">
                                    Cancel
                                </Link>
                                <Link to="/Ad/SingleImage" className='btn-next'>
                                    Next
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AdTypeScreen