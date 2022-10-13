import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useNavigationType } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

import {addMonths} from '../../date_utils'

const SignupDetail = () => {
    const location=useLocation()
    const navType = useNavigationType();

    const user = JSON.parse(localStorage.getItem('sociomeeUser'))
    const [detail, setDetail] = useState({ dob: "", gender: "", "addressBy": "" });
    const errorRef = useRef(null);
    const [error, setError] = useState('');

    const [flag, setFlag] = useState(false);

    // date picker state
    const [startDay, setStartDay] = useState(new Date("January 01, 2007 01:15:00"));
    const [startMonth, setStartMonth] = useState(startDay);
    const [startYear, setStartYear] = useState(startMonth);
    const [finalDate] = useState({ day: '', month: '', year: '' })

    let navigate = useNavigate();


    // Detail Input Handler
    const detailHandler = (ev) => {
        let { name, value } = ev.target;
        setDetail({ ...detail, [name]: value })
        errorRef.current.classList.add('d-none');
        setError('')
    }
    //Detail Submit Function
    const detailSubmit = (e) => {
        e.preventDefault();
        const selectedYear=startYear.getFullYear()
        const currentYear=new Date().getFullYear()
        const finalYear=currentYear-selectedYear;
        (startDay.getDate() < 10) ? finalDate.day = `0${startDay.getDate()}` : finalDate.day = startDay.getDate();
        ((startDay.getMonth() + 1) < 10) ? finalDate.month = `0${startDay.getMonth() + 1}` : finalDate.month = startDay.getMonth() + 1;
        detail.dob = `${startYear.getFullYear()}-${finalDate.month}-${finalDate.day}`;
        console.log(detail);
        if (!detail.dob) { errorRef.current.classList.remove('d-none'); setError('Please Enter Date of Birth') }
        else if (finalYear<13) { errorRef.current.classList.remove('d-none'); setError('Minimum Age is 13') }
        else if (!detail.gender || detail.gender === 'special') { errorRef.current.classList.remove('d-none'); setError('Please Select Gender') }
        else {
            const config = {
                headers: { Authorization: `Bearer ${user?.token}` }
            };
            axios.post(`${process.env.REACT_APP_IPURL}/user/update`, detail, config)
                .then((respo) => {
                    console.log(respo.data.data)
                    if (respo.data.data?.successResult === "Updated User") {
                        navigate('/SignupInterest',{state:{verified:true}})
                    }
                    else {
                        errorRef.current.classList.remove('d-none'); setError(respo.data.data?.errorResult)
                    }
                })
                .catch((err) => {
                    console.log(err)
                    errorRef.current.classList.remove('d-none'); setError(err.response.data?.errorResult)
                })
        }

    }


    useEffect(() => {
        if (detail.gender) {
            if (detail.gender === 'other' && !detail.addressBy) {
                setFlag(false)
            }
            else {
                setFlag(true)
            }
        }
    }, [detail])

    
  useEffect(() => {
    if (!location.state) {
      navigate("/Signup");
    }
  });

  useLayoutEffect(() => {
    if (navType !== "PUSH") {
      navigate(1);
    }
  }, [navType]);



    return (
        <>
            <section className="login-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 m-auto">
                            <div className="login-header-section">
                                <div className="logo-sec"><Link className="" to="/"><img src="/assets/images/logo.png" alt="logo" className="img-fluid" /></Link></div>
                            </div>
                            <div className="login-form">
                                <div className="signup-progress-bar">
                                    <div className="su-progress active"></div>
                                    <div className="su-progress active"></div>
                                    <div className="su-progress active"></div>
                                    <div className="su-progress active"></div>
                                    <div className="su-progress"></div>
                                </div>
                                <div>
                                    <div className="login-title">
                                        <h2>Enter DOB</h2>
                                    </div>
                                    <div className="login-discription">
                                        <h4>Please enter your details below.</h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    <div className="row dob-cust-blk">
                                                        <div className="col-4">
                                                            <DatePicker
                                                                renderCustomHeader={({

                                                                }) => (
                                                                    <h4 className="">{startMonth.toLocaleString('default', { month: 'long' })}</h4>
                                                                )}
                                                                selected={startDay}
                                                                onChange={(date) => { setStartDay(date); setStartMonth(date) }}
                                                                showDayMonthYearPicker
                                                                dateFormat="d"
                                                                className='form-control'
                                                            />
                                                            <label>Date</label>
                                                        </div>
                                                        <div className="col-4">
                                                            <DatePicker
                                                                renderCustomHeader={({

                                                                }) => (
                                                                    <h4 className="">{startMonth.toLocaleString('default', { month: 'long' })}</h4>
                                                                )}
                                                                selected={startMonth}
                                                                onChange={(date) => { setStartMonth(date); setStartYear(date); setStartDay(date) }}
                                                                showMonthYearPicker
                                                                dateFormat="MMM"
                                                                className='form-control'
                                                            />
                                                            <label>Month</label>
                                                        </div>
                                                        <div className="col-4">
                                                            <DatePicker
                                                                selected={startYear}
                                                                onChange={(date) => { setStartYear(date); setStartMonth(date); setStartYear(date) }}
                                                                showYearPicker
                                                                yearItemNumber={9}
                                                                dateFormat="yyyy"
                                                                className='form-control'
                                                                minDate={new Date('January 01, 1910 01:15:00')}
                                                                maxDate={addMonths(new Date(new Date().setFullYear(new Date().getFullYear() - 13)), 1)}
                                                                showDisabledMonthNavigation
                                                            />
                                                            <label>Year</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <div className="form-group">
                                                    <label>Enter DOB</label>
                                                    <input type="date" className="form-control" placeholder="DD-MM-YYYY" name="dob" value={detail.dob} onChange={detailHandler} />
                                                    <p className="instruction-msg">Max 64 Characters</p>
                                                </div> */}

                                                <div className="form-group">
                                                    <h3 className="choose-gender-blk">Choose Gender</h3>
                                                    <div className="form-check custom-form-check-login">
                                                        <label className="form-check-label font-weight-normal" htmlFor="male">
                                                            <p>Male</p>
                                                            <input className="form-check-input radio_animated"
                                                                type="radio"
                                                                name="gender"
                                                                id="male"
                                                                value="male"
                                                                onChange={detailHandler} />
                                                        </label>
                                                    </div>
                                                    <div className="form-check custom-form-check-login">
                                                        <label className="form-check-label font-weight-normal" htmlFor="female">
                                                            <p>Female</p>
                                                            <input className="form-check-input radio_animated"
                                                                type="radio"
                                                                name="gender"
                                                                id="female"
                                                                value="female"
                                                                onChange={detailHandler} />
                                                        </label>
                                                    </div>
                                                    <div className="form-check custom-form-check-login">
                                                        <label className="form-check-label font-weight-normal" htmlFor="special">
                                                            <p>I am Special</p>
                                                            <input className="form-check-input radio_animated"
                                                                type="radio"
                                                                name="gender"
                                                                id="special"
                                                                value="other"
                                                                onChange={detailHandler} />
                                                        </label>
                                                    </div>
                                                    {
                                                        detail.gender === 'other' && (
                                                            <div className="specialgender">
                                                                <h3>How should we address you</h3>
                                                                <div className="form-check custom-form-check-login">
                                                                    <label className="form-check-label font-weight-normal" htmlFor="he">
                                                                        <p>He</p>
                                                                        <input className="form-check-input radio_animated" type="radio" name="addressBy" id="he" value="he" onChange={detailHandler} />
                                                                    </label>
                                                                </div>
                                                                <div className="form-check custom-form-check-login">
                                                                    <label className="form-check-label font-weight-normal" htmlFor="she">
                                                                        <p>She</p>
                                                                        <input className="form-check-input radio_animated" type="radio" name="addressBy" id="she" value="she" onChange={detailHandler} />
                                                                    </label>
                                                                </div>
                                                                <div className="form-check custom-form-check-login">
                                                                    <label className="form-check-label font-weight-normal" htmlFor="notspecify">
                                                                        <p>Rather not specify</p>
                                                                        <input className="form-check-input radio_animated" type="radio" name="addressBy" id="notspecify" value="none" onChange={detailHandler} />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                </div>
                                                <p className="error-input-msg text-center d-none" ref={errorRef}>{error}</p>
                                                <div className="btn-section">
                                                    <button className="btn btn-solid btn-lg without-input-fill" onClick={detailSubmit} disabled={!flag}>CONTINUE</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignupDetail
