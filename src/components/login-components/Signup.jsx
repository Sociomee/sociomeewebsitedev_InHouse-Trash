import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios';
import LoginLanguage from './LoginLanguage';

const Signup = () => {
    const [user, setUser] = useState({
        isEmail: false,
        countryId: "",
        languagId: "",
        email: "",
        mobile: "",
        type: "signup"
    });
    const errorRef = useRef(null);
    const [userData, setUserData] = useState({ code: "", mobile: "" });
    const [phoneCode, setPhoneCode] = useState([])
    const [error, setError] = useState('');
    const [language, setLanguage] = useState([])

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneFormat = /^[6-9]\d{9}$/;
        if (!userData.code) { errorRef.current.classList.remove('d-none'); setError('Please Select Phone Code') }
        else if (!userData.mobile) { errorRef.current.classList.remove('d-none'); setError('Please Enter Phone Number !') }
        else if (userData.mobile.length > 10 || userData.mobile.length < 10 || !userData.mobile.toString().match(phoneFormat)) { errorRef.current.classList.remove('d-none'); setError('Please Enter Valid Phone Number ! ') }
        else {
            setUser({ ...user, mobile: `${userData.code} ${userData.mobile}` })
            user.mobile = `${userData.code} ${userData.mobile}`;
            axios.post('https://apiserver.msgmee.com/public/sendOtp', user)
                .then((res) => {
                    if (res.data.data?.successResult) {
                        navigate("/Otp", { state: user })
                    }
                    else {
                        errorRef.current.classList.remove('d-none'); setError(res.data.data?.errorResult)
                    }
                })
                .catch((err) => {
                    console.log(err)

                })
        }
    }

    // Get all phone code
    useEffect(() => {
        axios.post('https://apiserver.msgmee.com/public/getAllCountry/')
            .then((res) => { setPhoneCode(res.data.data.successResult.rows) })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    // Get all language code
    useEffect(() => {
        axios.post('https://apiserver.msgmee.com/public/getAllAppLanguages/')
            .then((res) => { setLanguage(res.data.data.successResult.rows) })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const countryCodeHandler = (e) => {
        userData.code = e.target.value;
        if (userData.code) {
            // filter country by phone code
            const filterCode = phoneCode.filter((curr) => { return `+${curr.teleCode}` === userData.code })
            user.countryId = filterCode[0].id;
        }
    }
    useEffect(() => {
        axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=c1016d597c494a02aa190877148a5688')
            .then(res => {
                setUserData({ ...userData, code: res.data.calling_code });
                // filter country by phone code
                const filterCode = phoneCode.find((curr) => { return `+${curr.teleCode}` === res.data.calling_code })
                user.countryId = filterCode?.id;
            })
            .catch(err => {
                console.log(err)
            })
    }, [phoneCode])

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
                                <div>
                                    <div className="login-title">
                                        <h2>Welcome</h2>
                                    </div>
                                    <div className="login-discription">
                                        <h4>Please Sign up to your account.</h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label>Enter your Mobile Number</label>
                                                    <div className="input-block">
                                                        <div className="phone-with-code">
                                                            <select className="form-select" value={userData.code} onChange={countryCodeHandler}>
                                                                <option value="">Code</option>
                                                                {
                                                                    phoneCode.map((cur) => {
                                                                        return <option value={`+${cur?.teleCode}`} key={cur?.teleCode}>+{`${cur?.teleCode}`}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <input type="number" className="form-control" placeholder="Enter Mobile Number" name="mobile" onChange={(e) => { setUserData({ ...userData, mobile: e.target.value }); errorRef.current.classList.add('d-none') }} onKeyPress={(e) => { e.target.value.length >= 10 && e.preventDefault(); }} />
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                        </div>
                                                    </div>
                                                    <p className="error-input-msg text-center d-none" ref={errorRef}>{error}</p>
                                                </div>
                                                <p className="notimsg-blk">When you will click on continue,  you will receive a verification code on the mobile number that you have entered.</p>
                                                <div className="btn-section">
                                                    <button className={"btn btn-solid btn-lg"} disabled={userData.mobile.length !== 10 ? true : false}>CONTINUE</button>

                                                </div>
                                                <div className="connect-with">
                                                    <div className="no-account-blk">
                                                        <p>Already have an account? <Link className="" to="/">Login</Link></p>
                                                    </div>
                                                    <div className="privacy-usernoti-blk"><a href="#">Privacy Policy</a> • <a href="#">User Notice</a></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <LoginLanguage setUser={user}></LoginLanguage>
                </div>
            </section>
        </>
    )
}

export default Signup
