import axios from 'axios';
import React, {  useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate, useNavigationType } from "react-router-dom";

const REGEX=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;


const ResetPassword=()=> {
  const location = useLocation();
  const navType = useNavigationType();
  const [password, setPassword] = useState({ new: '', confirm: '' })
  const eyeOpenRef = useRef(null);
  const eyeCloseRef = useRef(null);
  const eyeOpenRef2 = useRef(null);
  const eyeCloseRef2 = useRef(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const errorRef = useRef(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [resetPassword, setResetPassword] = useState({
    loginId: '',
    password: "",
    logoutAll: false
  })

  const resetPasswordHandler = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!password.new) { errorRef.current.classList.remove('d-none'); setError('Please Enter New Password') }
    else if (!password.confirm) { errorRef.current.classList.remove('d-none'); setError('Please Enter Confirm Password') }
    else if (password.confirm !== password.new) { errorRef.current.classList.remove('d-none'); setError('Password and Confirm Password does not match') }
    else if (!password.new.match(passwordRegex)) {
      errorRef.current.classList.remove('d-none');
      setError('Enter password of minimum 8 character with atleast one lowercase, uppercase, number and special character')
    }
    else {
      resetPassword.loginId = location.state.mobile.slice(4);
      resetPassword.password = password.new;
      console.log(resetPassword)
      axios.post(`${process.env.REACT_APP_IPURL}/public/resetPassword`, resetPassword)
        .then(res => {
          if (res.data?.success) {
            navigate('/')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  const togglePassword = (identifier) => {
    if (identifier === 'new') {
      setPasswordShown(!passwordShown);
      eyeOpenRef.current.classList.add("d-none");
      eyeCloseRef.current.classList.remove("d-none");
    }
    else {
      setPasswordShown2(!passwordShown2);
      eyeOpenRef2.current.classList.add("d-none");
      eyeCloseRef2.current.classList.remove("d-none");
    }
  };
  const toggleHidePassword = (identifier) => {
    if (identifier === 'new') {
      setPasswordShown(!passwordShown);
      eyeOpenRef.current.classList.remove("d-none");
      eyeCloseRef.current.classList.add("d-none");
    }
    else {
      setPasswordShown2(!passwordShown2);
      eyeOpenRef2.current.classList.remove("d-none");
      eyeCloseRef2.current.classList.add("d-none");
    }
  };


  useEffect(()=>{
    !location.state && navigate('/ForgotPassword')
  },[])

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
                <div className="logo-sec">
                  <NavLink to="/">
                    <img src="/assets/images/logo.png" alt="logo" className="img-fluid" />
                  </NavLink>
                </div>
              </div>
              <div className="login-form">
                <div className="signup-progress-bar">
                  <div className="su-progress active"></div>
                  <div className="su-progress active"></div>
                  <div className="su-progress active"></div>
                </div>
                <div>
                  <div className="login-title">
                    <h2>Reset Password</h2>
                  </div>
                  <div className="login-discription">
                    <h4>Enter password of minimum 8 character with atleast one lowercase, uppercase, number and special character</h4>
                  </div>
                  <div className="form-sec">
                    <div>
                      <form className="theme-form">
                        <div className="form-group">
                          {/* <label>Enter your password</label> */}
                          <div className="input-block">
                            <input type={passwordShown ? "text" : "password"} className={`form-control ${error && 'border-danger'}`}  placeholder="Enter password" value={password.new} onChange={(e) => { setPassword({ ...password, new: e.target.value.replace(REGEX, '') });setError(''); errorRef.current.classList.add('d-none') }} maxLength={25}/>
                            <svg onClick={() => togglePassword('new')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20 d-none" ref={eyeOpenRef}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            <svg onClick={() => toggleHidePassword('new')} viewBox="0 0 24 24" width="16" height="16" stroke="#B9B9C3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20" ref={eyeCloseRef}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                          </div>
                        </div>
                        <div className="form-group">
                          {/* <label>Confirm Password</label> */}
                          <div className="input-block">
                            <input type={passwordShown2 ? "text" : "password"} className={`form-control ${error && 'border-danger'}`} placeholder="Confirm Password" value={password.confirm} onChange={(e) => { setPassword({ ...password, confirm: e.target.value.replace(REGEX, '') });setError(''); errorRef.current.classList.add('d-none') }} maxLength={25}/>
                            <svg onClick={() => togglePassword('confirm')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20 d-none" ref={eyeOpenRef2}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            <svg onClick={() => toggleHidePassword('confirm')} viewBox="0 0 24 24" width="16" height="16" stroke="#B9B9C3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20" ref={eyeCloseRef2}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                          </div>
                          <p className="error-input-msg text-center d-none" ref={errorRef}>{error}</p>
                        </div>
                        <div className="bottom-sec">
                          <div className="form-check checkbox_animated">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={() => setResetPassword({ ...resetPassword, logoutAll: !resetPassword.logoutAll })} />
                            <label className="form-check-label" htmlFor="exampleCheck1">Log me out of all other devices</label>
                          </div>
                        </div>
                        <div className="btn-section">
                          <button className="btn btn-solid btn-lg dffewfwef without-input-fill" onClick={resetPasswordHandler} disabled={!password.new || !password.confirm ? true : false}>Continue</button>
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
  );
} 
export default ResetPassword