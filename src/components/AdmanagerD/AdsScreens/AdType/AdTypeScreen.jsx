import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getSingleAdTypeOfType, loadAdType } from '../../../../Services/Actions/AdManager/getAdTypeAction';
import AdmanagerHeaderR from '../../AdmanagerHeaderR/AdmanagerHeaderR'

const AdTypeScreen = () => {
    const { adType } = useSelector((state) => state.getTypeData);
    const { singleTypeOfType } = useSelector(state => state.getTypeData)
    const [singleTypeId,setSingleTypeId]=useState({id:'',format:''})
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const adTypeData=useMemo(()=>{
        return adType.find(ad=>ad.id===id)
    },[adType])
    
    // 
    const [state, setState] = useState({});

    const submitHandler =(e)=>{
        e.preventDefault();
        if (!singleTypeId.id) {
          alert("Please Select Sub Type");
        } else {
          navigate(`/Ad/Display/${singleTypeId.format}`,{state:{typeId:adTypeData.id,subTypeId:singleTypeId.id}});
        }
    }

    useEffect(() => {
        setState({ ...singleTypeOfType })
    }, [singleTypeOfType])
    
    // TAD YPE OF TYPES
    useLayoutEffect(() => {
        dispatch(getSingleAdTypeOfType(id))
        dispatch(loadAdType());
    }, [id])
    
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

                        <div className="desh-icon-main pl-2">
                            <div className="desh-icon">
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Create Ad</p>
                            </div>
                            <div className="desh-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>

                        <div className="create-add-main">
                            <div className="create-add">
                                <div className="create-add-one">
                                    <img src="/assets/images/adIcon/folder.png" alt="" />
                                    <p className='ml-2'>{adTypeData?.adTypes} - ({adTypeData?.adMastrerType.name})</p>
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
                                    <button className="ad-count-btn">2</button>
                                    <p className="ad-count-step">Step 2</p>
                                </div>
                                <div className="col-lg-10">
                                    <p className='ad-count-heading'>Choose Ad Display Format</p>
                                    <p>Select the best format to display your Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 pad-zero">
                            <div className="row ad-types-of-type-map pad-zero">
                                
                                {
                                    singleTypeOfType.successResult?.map(({id,name,file,note,adFormat}) => {
                                        return (
                                            <div className={'col-lg-6 pad-zero'} key={id}>
                                                <div>
                                                    <div className={`ad-type d-flex ad-types-type border ${singleTypeId.id===id && 'border-success'}`} onClick={()=>setSingleTypeId({id:id,format:adFormat})} role='button'>
                                                        <div className='mr-3'>
                                                            <img src={file}
                                                            alt="ad"
                                                            className='ch-150'
                                                             />
                                                        </div>
                                                        <div className='ad-types-type-dec'>
                                                            <p className='type mt-2'>{name}</p>
                                                            <p className='dec-types mt-2 pad-zero'>{note}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className="ad-btn">
                                <Link to="/Ad/LeadGeneration" className="btn-cancel">
                                    Cancel
                                </Link>
                                <button className='btn-next without-input-fill ml-2' disabled={!singleTypeId.id?true:false} onClick={submitHandler}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdTypeScreen