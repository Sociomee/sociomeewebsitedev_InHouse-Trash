import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { loadAdType } from '../../../../Services/Actions/AdManager/getAdTypeAction'
import AdmanagerHeaderR from '../../AdmanagerHeaderR/AdmanagerHeaderR'
import '../../style.css'

const CreateAdScreen = () => {
    const { adType } = useSelector(state => state.getTypeData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAdType())
    }, [])

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
                    </div>
                    <div className="col-lg-9">
                        <div className="col-lg-12 step-ad-heading">
                            <div className="row step-section">
                                <div className="col-lg-2 ad-count">
                                    <button className="ad-count-btn">1</button>
                                    <p className="ad-count-step">Step 1</p>
                                </div>
                                <div className="col-lg-10">
                                    <p className='ad-count-heading'>Select your advertisement goal</p>
                                    <p>To generate high-quality leads & acquire new customers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="row">
                                {
                                    adType.map((type) => {
                                        return <Link to={`/Ad/Display/${type.id}`} >
                                            <div className="col-lg-12">
                                                <div className="ad-type d-flex">
                                                    <div className='mr-3'>
                                                        <input type="radio" className='ad-cont-input mr-2' />
                                                    </div>
                                                    <div>
                                                        <p className='type'>{type.adTypes}</p>
                                                        <p className='dec'>{type.descriptions}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    })
                                }
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className="ad-btn">
                                <Link to="" className="btn-cancel">
                                    Cancel
                                </Link>
                                <Link to="" className='btn-next'>
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

export default CreateAdScreen