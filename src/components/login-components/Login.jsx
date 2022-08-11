import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import { useContext } from 'react';
import UserContext from '../../Context/userContext';
import LoginLanguage from './LoginLanguage';

const Login = () => {
    // global current user data store 
    const [userProfile, setUserProfile] = useContext(UserContext)
    const errorRef = useRef(null);
    const [error, setError] = useState('');
    const [user, setUser] = useState({ phone: "", password: "" })
    const [style, setStyle] = useState(false);
    const [phoneCode, setPhoneCode] = useState([])
    let navigate = useNavigate();
    const [loginBody, setLoginBody] = useState(
        {
            "loginId": "+91",
            "password": "",
            "type": "mobile",
            "platform": "ios",
            "ipAddress": "192.168.1.1",
            "deviceId": "15df65sd4f85sd1f4sd6",
            "deviceInfo": {
                "desc": "i love this devce"
            },
            "locationLAT": 12.0325,
            "locationLONG": 51.23652,
            "loginMode": "password"
        }
    );
    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: 'success', content: '' });
    const onChangeHandler = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
        errorRef.current.classList.add("d-none");
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // if (!user.phone_code) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Phone Code !", }); }
        // else 
        if (!user.phone) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Phone !", }); }
        else if (user.phone.length > 10 || user.phone.length < 10) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Valid Phone !", }); }
        else if (!user.password) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Password!", }); }
        else {
            loginBody.loginId = user.phone;
            loginBody.password = user.password;
            axios.post('https://apiserver.msgmee.com/public/login/', loginBody)
                .then((res) => {
                    console.log(res.data.data)
                    if (res.data.data.errorResult) {
                        errorRef.current.classList.remove("d-none");
                        setError(res.data.data.errorResult)
                    }
                    else {
                        setOpen(true);
                        setAlert({ sev: "success", content: 'Login Successfully', });
                        setUserProfile(res.data.data.successResult)
                        localStorage.setItem('user', JSON.stringify(res.data.data.successResult))
                        navigate('/Home')
                        // window.location.reload(false);
                    }
                })
                .catch((err) => {
                    errorRef.current.classList.remove("d-none");
                    setError(err)
                })
        }

    }

    // Cancel Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    // Get all phone code
    useEffect(() => {
        axios.post('https://apiserver.msgmee.com/public/getAllCountry/')
            .then((res) => { setPhoneCode(res.data.data.successResult.rows) })
            .catch((err) => {
                setOpen(true);
                setAlert({ sev: "error", content: `${err} !`, });
            })
    }, [])


    return (
        <>
            <section className="login-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 m-auto">
                            <div className="login-header-section">
                                <div className="logo-sec"><Link aria-current="page" className="active" to="/"><img src="/assets/images/logo.png" alt="logo" className="img-fluid" /></Link></div>
                            </div>
                            <div className="login-form">
                                <div>
                                    <div className="login-title">
                                        <h2>Welcome</h2>
                                    </div>
                                    <div className="login-discription">
                                        <h4>Please Login to your account.</h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    <label>Enter your Mobile Number</label>
                                                    <div className="input-block">
                                                        {/* <div className="phone-with-code"> */}
                                                        {/* <select className="form-select" value={user.phone_code} name="phone_code" onChange={onChangeHandler}>
                                                                <option value="">Code</option>
                                                                {
                                                                    phoneCode.map((cur) => {
                                                                        return <option value={`+${cur?.teleCode}`} key={cur?.teleCode}>{`${cur?.teleCode}`}</option>
                                                                    })
                                                                }
                                                            </select> */}
                                                        <input type="number" className="form-control" placeholder="Enter Mobile Number" name="phone" value={user.phone} onChange={onChangeHandler} onKeyPress={(e) => { e.target.value.length >= 10 && e.preventDefault(); }} />

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                        {/* </div> */}
                                                    </div>
                                                    <p className="error-input-msg d-none" ref={errorRef}>*{error === 'incorrectMobile' ? 'Mobile number does not register with us.' : error === 'incorrectPassword' ? 'Wrong password entered' : error}</p>
                                                </div>
                                                <div className="form-group">
                                                    <label>Enter your password</label>
                                                    <div className="input-block">
                                                        <input type={!style ? 'password' : 'text'} className="form-control" placeholder="Enter your password" name="password" value={user.password} onChange={onChangeHandler} />

                                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="#B9B9C3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={!style ? 'input-icon iw-20 ih-20' : 'input-icon iw-20 ih-20 d-none'} onClick={() => setStyle(true)}>
                                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                                            <line x1="1" y1="1" x2="23" y2="23"></line>
                                                        </svg>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={!style ? 'input-icon iw-20 ih-20 d-none' : 'input-icon iw-20 ih-20'} onClick={() => setStyle(false)}>
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>

                                                    </div>
                                                </div>
                                                <div className="bottom-sec">
                                                    <div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="exampleCheck1" /><label className="text-lowercase" htmlFor="exampleCheck1" >Remember me</label></div>
                                                    <NavLink to="/ForgotPassword" className="ms-auto forget-password">forgot password?</NavLink>
                                                </div>
                                                <div className="btn-section">

                                                    <button className="btn btn-solid btn-lg dffewfwef" onClick={onSubmit} disabled={user.phone.length === 10 ? false : true}>login</button>

                                                </div>
                                            </form>
                                            <div className="connect-with">
                                                {/* <h6><span>OR Connect With</span></h6>
                                                <ul className="social-login-blk">
                                                    <li><Link to="/"><img src="assets/images/google-icon.png" alt="Google Store" /> Continue with Google</Link></li>
                                                    <li><Link to="/"><img src="assets/images/apple-icon.png" alt="App Store" /> Continue with Google</Link></li>
                                                </ul> */}
                                                <div className="no-account-blk">
                                                    <p>Don't have an account? <Link className="" to="/Signup">Get Started</Link></p>
                                                </div>
                                                <div className="privacy-usernoti-blk"><a href="#">Privacy Policy</a> • <a href="#">User Notice</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <LoginLanguage></LoginLanguage> */}
                </div>
            </section>
        </>
    )
}

export default Login
