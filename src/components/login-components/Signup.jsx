import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
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
    const [userData, setUserData] = useState({ code: "", mobile: "" });
    const [phoneCode, setPhoneCode] = useState([])
    const [language, setLanguage] = useState([])

    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: 'success', content: '' });

    let navigate = useNavigate();

    //  Snackbar Alert Function
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userData.code) { setOpen(true); setAlert({ sev: "error", content: "Please Select Phone Code !", }); }
        else if (!userData.mobile) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Phone Number !", }); }
        else if (userData.mobile.length > 10 || userData.mobile.length < 10) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Valid Phone Number !", }); }
        else if (!user.languagId) { setOpen(true); setAlert({ sev: "error", content: "Please Select Language !", }); }
        else {
            setUser({ ...user, mobile: `${userData.code} ${userData.mobile}` })
            user.mobile = `${userData.code} ${userData.mobile}`;
            axios.post('https://apiserver.msgmee.com/public/sendOtp', user)
                .then((res) => {
                    if (res.data.data?.successResult) {
                        setOpen(true);
                        setAlert({ sev: "success", content: `${res.data.data?.successResult} !`, });
                    }
                    else {

                        setOpen(true);
                        setAlert({ sev: "error", content: `${res.data.data?.errorResult} !`, });

                    }
                })
                .catch((err) => {
                    console.log(err)
                    setOpen(true);
                    setAlert({ sev: "error", content: `${err} !`, });
                })
        }
    }

    // Cancel Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        if (alert.sev === 'success') navigate("/Otp", { state: user })
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
    // Get all language code
    useEffect(() => {
        axios.post('https://apiserver.msgmee.com/public/getAllAppLanguages/')
            .then((res) => { setLanguage(res.data.data.successResult.rows) })
            .catch((err) => {
                setOpen(true);
                setAlert({ sev: "error", content: `${err} !`, });
            })
    }, [])


    const countryCodeHandler = (e) => {
        userData.code = e.target.value;
        if (userData.code) {
            // filter country by phone code
            const filterCode = phoneCode.filter((curr) => { return `+${curr.teleCode}` === userData.code })
            // console.log(filterCode[0].id)
            user.countryId = filterCode[0].id;
        }
    }

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
                                                            <select className="form-select" onChange={countryCodeHandler}>
                                                                <option value="">Code</option>
                                                                {
                                                                    phoneCode.map((cur) => {
                                                                        return <option value={`+${cur?.teleCode}`} key={cur?.teleCode}>+{`${cur?.teleCode}`}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <input type="number" className="form-control" placeholder="Enter Mobile Number" name="mobile" onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} />
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                        </div>
                                                    </div>
                                                    <p className="error-input-msg d-none">**Caption text, description, error notification**</p>
                                                </div>
                                                <p className="notimsg-blk">When you will click on continue,  you will receive a verification code on the mobile number that you have entered.</p>
                                                <div className="btn-section">
                                                    <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                                                        <button className={"btn btn-solid btn-lg"} disabled={!userData.mobile.length===10 ? true : false}>CONTINUE</button>
                                                        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                                                            <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                                                                {alert.content}
                                                            </Alert>
                                                        </Snackbar>
                                                    </Stack>
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
