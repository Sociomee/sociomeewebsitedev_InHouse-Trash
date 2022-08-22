import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';

const SignupDetail = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const [detail, setDetail] = useState({ dob: "", gender: "" });

    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: 'success', content: '' });

    let navigate = useNavigate();


    //  Snackbar Alert Function
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    // Detail Input Handler
    const detailHandler = (ev) => {
        let { name, value } = ev.target;
        setDetail({ ...detail, [name]: value })

    }
    //Detail Submit Function
    const detailSubmit = (e) => {
        e.preventDefault();
        if (!detail.dob) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Date of birth" }); }
        else if (!detail.gender) { setOpen(true); setAlert({ sev: "error", content: "Please Select Gender" }); }
        else {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` }
            };
            axios.post('https://apiserver.msgmee.com/user/update', detail, config)
                .then((respo) => {
                    console.log(respo.data.data?.successResult)
                    if (respo.data.data?.successResult === "Updated User") {
                        setOpen(true);
                        setAlert({ sev: "success", content: "Updated Successfully" });
                    }
                    else {
                        setOpen(true);
                        setAlert({ sev: "error", content: "Something Went Wrong" });
                    }
                })
                .catch((err) => {
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
        if (alert.sev === 'success') { navigate('/SignupInterest') }
    };



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
                                        <h2>Enter DOB & Gender</h2>
                                    </div>
                                    <div className="login-discription">
                                        <h4>Please enter your details below.</h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    <label>Enter DOB</label>
                                                    <input type="date" className="form-control" placeholder="DD-MM-YYYY" name="dob" value={detail.dob} onChange={detailHandler} />
                                                    {/* <p className="instruction-msg">Max 64 Characters</p> */}
                                                </div>

                                                <div class="form-group">
                                                    <h3 class="choose-gender-blk">Choose Gender</h3>
                                                    <div class="form-check custom-form-check-login">
                                                        <label class="form-check-label font-weight-normal" for="male">
                                                            <p>Male</p>
                                                            <input class="form-check-input radio_animated" type="radio" name="gender" id="male" value="male" onChange={detailHandler} />
                                                        </label>
                                                    </div>
                                                    <div class="form-check custom-form-check-login">
                                                        <label class="form-check-label font-weight-normal" for="female">
                                                            <p>Female</p>
                                                            <input class="form-check-input radio_animated" type="radio" name="gender" id="female" value="female" onChange={detailHandler} />
                                                        </label>
                                                    </div>
                                                    <div class="form-check custom-form-check-login">
                                                        <label class="form-check-label font-weight-normal" for="special">
                                                            <p>I am Special</p>
                                                            <input class="form-check-input radio_animated" type="radio" name="gender" id="special" value="special" onChange={detailHandler} />
                                                        </label>
                                                    </div>
                                                    <div class="specialgender" aria-hidden="true">
                                                        <h3>How should we address you</h3><div class="form-check custom-form-check-login">
                                                            <label class="form-check-label font-weight-normal" for="he">
                                                                <p>He</p>
                                                                <input class="form-check-input radio_animated" type="radio" name="gender-special" id="he" value="he" /></label></div><div class="form-check custom-form-check-login">
                                                            <label class="form-check-label font-weight-normal" for="she">
                                                                <p>Se</p>
                                                                <input class="form-check-input radio_animated" type="radio" name="gender-special" id="she" value="she" />
                                                            </label>
                                                        </div>
                                                        <div class="form-check custom-form-check-login">
                                                            <label class="form-check-label font-weight-normal" for="notspecify">
                                                                <p>Rather not specify</p>
                                                                <input class="form-check-input radio_animated" type="radio" name="gender-special" id="notspecify" value="notspecify" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btn-section">
                                                    <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                                                        <button className="btn btn-solid btn-lg" onClick={detailSubmit}>CONTINUE</button>
                                                        {/* Snackbar */}
                                                        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                                                            <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                                                                {alert.content}
                                                            </Alert>
                                                        </Snackbar>
                                                    </Stack>
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
