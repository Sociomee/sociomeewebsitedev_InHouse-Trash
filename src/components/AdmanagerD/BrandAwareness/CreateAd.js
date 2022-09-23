import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { loadAdType } from '../../../Services/Actions/AdManager/getAdTypeAction'
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'
import "./brand.css"
import "../style.css"

const CreateAd = () => {
    const { adType } = useSelector(state => state.getTypeData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAdType())
    }, [])

    return (
        <>
            <AdmanagerHeaderR />
            <div className="main-section">

                <div className="sidebar-main">

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


                <div className="step-select-main"></div>
                <div className="step-select">
                    <div className="step-select-one">
                        <div className="step-select-child">
                            <button>1</button>
                            <p>Step 1</p>
                        </div>
                    </div>
                    <div className="step-select-second">
                        <p>Select your advertisement goal</p>
                        <p>To generate high-quality leads & acquire new customers.</p>


                        {/* <div className="container"> */}
                        <div className="col-lg-12 brand-main brand-main-new"> 
                            <div className="row">
                                {
                                    adType.map((type) => {
                                        return <div className="brand-main">
                                            <div className="brand-first">
                                                <input type="radio" />
                                            </div>
                                            <div className="brand-second">
                                                <p className='type'>{type.adTypes}</p>
                                                <p className='dec'>{type.descriptions}</p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>




                <div>
                    <div className="two-bumain">
                        <button>Cancel</button>
                    </div>
                    <div className="two-bumains">
                        <Link to="/Display">

                            <button>Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAd