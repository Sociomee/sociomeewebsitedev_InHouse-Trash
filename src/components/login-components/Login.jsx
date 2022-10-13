import axios from 'axios'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate, useNavigationType } from 'react-router-dom'

import LoginLanguage from './LoginLanguage';
// Use for emoji restriction
const REGEX=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

const Login = () => {
    const errorRef = useRef(null);
    const errorRef2 = useRef(null);
    const phoneField = useRef(null)
    const passwordField = useRef(null)
  const navType = useNavigationType();
    const [error, setError] = useState('');
    const [user, setUser] = useState({ phone: "", password: "" })
    const [language, setLanguage] = useState({ languagId: '' });
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
    const onChangeHandler = () => {
    
        errorRef.current.classList.add("d-none");
        errorRef2.current.classList.add("d-none");
        phoneField.current.classList.remove("border-danger");
        passwordField.current.classList.remove("border-danger");

    }
    const onSubmit = (e) => {
        e.preventDefault();
        // if (!user.phone_code) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Phone Code !", }); }
        // else 
        if (!user.password) {
            errorRef2.current.classList.remove("d-none");
            passwordField.current.classList.add("border border-danger");
            setError('Please Enter Password')
        }
        else {
            user.phone.length > 10 ? loginBody.type = 'email' : loginBody.type = 'mobile'
            loginBody.loginId = user.phone;
            loginBody.password = user.password;
            axios.post(`${process.env.REACT_APP_IPURL}/public/login/`, loginBody)
                .then((res) => {
                    console.log(res.data.data)
                    if (res.data.data.errorResult) {
                        if (res.data.data.errorResult === 'incorrectEmail') {
                            errorRef.current.classList.remove("d-none");
                            phoneField.current.classList.add("border-danger");
                            setError(res.data.data.errorResult)
                        }
                        if (res.data.data.errorResult === 'incorrectMobile') {
                            errorRef.current.classList.remove("d-none");
                            phoneField.current.classList.add("border-danger");
                            setError(res.data.data.errorResult)
                        }
                        if (res.data.data.errorResult === 'incorrectPassword') {
                            errorRef2.current.classList.remove("d-none");
                            passwordField.current.classList.add("border-danger");
                            setError(res.data.data.errorResult)
                        }
                    }
                    else {
                        setOpen(true);
                        setAlert({ sev: "success", content: 'Login Successfully', });
                        localStorage.setItem('sociomeeUser', JSON.stringify(res.data.data.successResult))
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
        axios.post(`${process.env.REACT_APP_IPURL}/public/getAllCountry/`)
            .then((res) => { setPhoneCode(res.data.data.successResult.rows) })
            .catch((err) => {
                setOpen(true);
                setAlert({ sev: "error", content: `${err} !`, });
            })
    }, [])

    useEffect(() => {
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
                                                    {/* <label>Enter your Mobile Number</label> */}
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
                                                            
                                                        <input type="text" className={`form-control pr-5`} placeholder="Enter Mobile Number/Email" name="phone" value={user.phone} onChange={(ev)=>{onChangeHandler();setUser({...user,phone:ev.target.value.replace(/[^0-9a-zA-Z!@#$%^&*.]/gi, '')})}} ref={phoneField} onKeyPress={(e) => { e.target.value.length >= 40 && e.preventDefault() }} maxLength={40}/>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                        {/* </div> */}
                                                    </div>
                                                    <p className="error-input-msg d-none" ref={errorRef}>
                                                        <svg style={{ color: "red" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"
                                                            className="bi bi-exclamation-circle-fill mr-1" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="red"></path> </svg>
                                                        {error === 'incorrectMobile' ? 'Mobile number does not register with us.' : error === 'incorrectPassword' ? 'Wrong password entered' : error === 'incorrectEmail' ? "It's look like you're not connected with us" : error}
                                                    </p>
                                                </div>
                                                <div className="form-group">
                                                    {/* <label>Enter your password</label> */}
                                                    <div className="input-block">
                                                        <input type={!style ? 'password' : 'text'} className="form-control pr-5" placeholder="Enter your password" name="password" value={user.password} onChange={(ev)=>{onChangeHandler();setUser({...user,password:ev.target.value.replace(REGEX, '')})}} ref={passwordField} onKeyPress={(e) => { e.target.value.length >= 25 && e.preventDefault() }} />

                                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="#B9B9C3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={!style ? 'input-icon iw-20 ih-20' : 'input-icon iw-20 ih-20 d-none'} onClick={() => setStyle(true)}>
                                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                                            <line x1="1" y1="1" x2="23" y2="23"></line>
                                                        </svg>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={!style ? 'input-icon iw-20 ih-20 d-none' : 'input-icon iw-20 ih-20'} onClick={() => setStyle(false)}>
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                    </div>
                                                    <p className="error-input-msg d-none" ref={errorRef2}>
                                                        <svg style={{ color: "red" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"
                                                            className="bi bi-exclamation-circle-fill mr-1" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="red"></path> </svg>
                                                        {error==='incorrectPassword' ? 'Password Incorrect' : error}</p>
                                                </div>
                                                <div className="bottom-sec">
                                                    <div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="exampleCheck1" /><label className="" htmlFor="exampleCheck1" >Remember me</label></div>
                                                    <NavLink to="/ForgotPassword" className="ms-auto forget-password">forgot password?</NavLink>
                                                </div>
                                                <div className="btn-section">
                                                    <button className="btn btn-solid btn-lg without-input-fill" onClick={onSubmit} disabled={user.phone.length >= 10 && user.password ? false : true}>login</button>
                                                </div>
                                            </form>
                                            <div className="connect-with">
                                                {/* <h6><span>OR Connect With</span></h6>
                                                <ul className="social-login-blk">
                                                    <li><Link to="/"><img src="/assets/images/google-icon.png" alt="Google Store" /> Continue with Google</Link></li>
                                                    <li><Link to="/"><img src="/assets/images/apple-icon.png" alt="App Store" /> Continue with Google</Link></li>
                                                </ul> */}
                                                <div className="no-account-blk">
                                                    <p>Don't have an account? <Link className="" to="/Signup">Get Started</Link></p>
                                                </div>
                                                <div className="privacy-usernoti-blk"><a href="/">Privacy Policy</a> • <a href="/">User Notice</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <LoginLanguage setUser={language} />
                </div>
            </section>
        </>
    )
}

export default Login
