import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useNavigationType } from 'react-router-dom'

import axios from 'axios';

const Otp = () => {
    const location = useLocation();
    const [user, setUser] = useState(location.state);
    const [verifyOtp, setVerifyOtp] = useState({ sentTo: "", type: "", otp: "" })
    const [otp, setOtp] = useState(new Array(6).fill(""));
    let lastFour = user?.mobile.substr(user.mobile.length - 4);
    const errorRef = useRef(null);
    const [error, setError] = useState('');
    const [resendOtpLimit, setResendOtpLimit] = useState({ times: 0 })
    const [flag, setFlag] = useState(false)
    let navigate = useNavigate();
    const navType = useNavigationType();


    // This function is used to handle six digit code 
    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value.replace(/[^0-9]/gi, '') : d))]);
        errorRef.current.classList.add('d-none')
    };

    const complete = otp.join("");

    const numberFilter = (e) => {
        // var ASCIICode = (e.which) ? e.which : e.keyCode
        // if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        //     e.preventDefault();
        // if (e.target.value.length === 1) {
        //     e.preventDefault();
        // }
        if(e.key==='Enter'){
            otpSubmit(e);
        }
    }

    const otpSubmit = (e) => {
        e.preventDefault();
        if (complete === "" || complete === null || complete.length < 6) {
            errorRef.current.classList.remove('d-none');
            setError('Invalid OTP')
        }
        else {
            verifyOtp.sentTo = user.mobile; verifyOtp.type = user.type; verifyOtp.otp = complete;
            setUser({ ...user, sentTo: user.mobile, type: user.type, otp: complete })
            axios.post(`${process.env.REACT_APP_IPURL}/public/verifyOtp/`, verifyOtp)
                .then((res) => {
                    if (res.data.data?.successResult) {
                        navigate("/SignupEmail", { state: user })
                        setFlag(true)
                    }
                    else {
                        errorRef.current.classList.remove('d-none')
                        setError('Invalid OTP')

                    }
                })
                .catch((err) => {
                    errorRef.current.classList.remove('d-none')
                    setError(err)

                })

        }
    }

    const inputfocus = (elmnt) => {
        console.log()
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {
                elmnt.target.form.elements[next].focus()
            }
        }
        else {
            const next = elmnt.target.tabIndex;
            if (next < 6 && elmnt.target.value) {
                elmnt.target.form.elements[next].focus()
            }
        }
    }

    // resend otp functionality
    const resendOtp = () => {
        setOtp([...otp.map(v => "")])
        errorRef.current.classList.add('d-none')
        user && axios.post(`${process.env.REACT_APP_IPURL}/public/sendOtp`, user)
            .then((res) => {
                if (res.data.data?.successResult) {
                    document.getElementById('timer-div').style.display = 'block';
                    document.getElementById('resendotp').style.display = 'none';
                    resendOtpLimit.times += 1;
                    if (resendOtpLimit.times === 2) {
                        document.getElementById('resendotp').style.display = 'none';
                        timerFunc();
                    }
                }
                else {
                    errorRef.current.classList.remove('d-none'); setError(res.data.data?.errorResult)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const timerFunc = () => {
        let startTimer = 20;
        document.getElementById('resendotp').style.display = 'none';
        let resendTimer = setInterval(function () {
            if (startTimer <= 0) {
                clearInterval(resendTimer);
                document.getElementById('timer').innerHTML = '00:00';
                document.getElementById('resendotp').style.display = 'block';
                document.getElementById('timer-div').style.display = 'none';
                console.log(resendOtpLimit.times)
                if (resendOtpLimit.times === 2) {
                    document.getElementById('resendotp').style.display = 'none';
                    document.getElementById('timer-div').style.display = 'none';
                }

            }
            else {
                document.getElementById('timer').innerHTML = `00:${startTimer ? startTimer : '00'}`;
            }
            startTimer -= 1;
            // eslint-disable-next-line react-hooks/exhaustive-deps

            if (flag) {
                clearInterval(resendTimer);
            }
        }, 1000);
    }



    useEffect(() => {
            timerFunc();
    }, [location])

    
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
        <div>
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
                                    <div className="su-progress"></div>
                                    <div className="su-progress"></div>
                                    <div className="su-progress"></div>
                                    <div className="su-progress"></div>
                                </div>
                                <div>
                                    <div className="login-title">
                                        <h2>Enter OTP</h2>
                                    </div>
                                    <div className="login-discription">
                                        <h4>An OTP has been sent to your phone number ending with
                                            <br />XXX XXX {lastFour}</h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    <div className="otpContainer">
                                                        {otp.map((data, index) => {

                                                            return (<input
                                                                name="otp"
                                                                type="text"
                                                                placeholder="-"
                                                                autoComplete="off"
                                                                className={`otpInput form-control ${otp.join("").length === 6 && 'border border-success'} ${error && 'border-danger'}`}
                                                                tabIndex={index + 1}
                                                                maxLength="1"
                                                                key={index}
                                                                value={data}
                                                                onChange={e => {handleOtpChange(e.target, index);setError('')}}
                                                                // onFocus={e => e.target.select()}
                                                                onKeyUp={e => inputfocus(e)}
                                                                onKeyPress={numberFilter} />)

                                                        })}
                                                    </div>
                                                    <p className="error-input-msg text-center d-none" ref={errorRef}>{error}</p>
                                                    {/* <div className="otp-time-count" id=''>00:20 sec</div> */}
                                                    <div className="otp-time-count" id='timer-div'><span id="timer"></span> sec</div>
                                                </div>
                                                <div className="resendotp-blk" id="resendotp">Didn't receive OTP yet? <Link to='#' className={'color-blue'} onClick={resendOtp}>Resend</Link></div>
                                                <div className="btn-section">
                                                    <button className="btn btn-solid btn-lg without-input-fill" onClick={otpSubmit} disabled={otp.join("").length === 6 ? false : true}>CONTINUE</button>
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
        </div>
    )
}

export default Otp
