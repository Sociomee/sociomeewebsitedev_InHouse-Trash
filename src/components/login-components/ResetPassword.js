import axios from 'axios';
import React, { Component, useState, useRef } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const location = useLocation();
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
      axios.post('https://apiserver.msgmee.com/public/resetPassword', resetPassword)
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


  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 m-auto">
              <div className="login-header-section">
                <div className="logo-sec">
                  <NavLink to="/">
                    <img src="assets/images/logo.png" alt="logo" className="img-fluid" />
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
                          <label>Enter your password</label>
                          <div className="input-block">
                            <input type={passwordShown ? "text" : "password"} className="form-control" placeholder="Enter password" onChange={(e) => { setPassword({ ...password, new: e.target.value }); errorRef.current.classList.add('d-none') }} />
                            <svg onClick={() => togglePassword('new')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20 d-none" ref={eyeOpenRef}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            <svg onClick={() => toggleHidePassword('new')} viewBox="0 0 24 24" width="16" height="16" stroke="#B9B9C3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20" ref={eyeCloseRef}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <div className="input-block">
                            <input type={passwordShown2 ? "text" : "password"} className="form-control" placeholder="Confirm Password" onChange={(e) => { setPassword({ ...password, confirm: e.target.value }); errorRef.current.classList.add('d-none') }} />
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
                          <button className="btn btn-solid btn-lg dffewfwef" onClick={resetPasswordHandler} disabled={!password.new || !password.confirm ? true : false}>Continue</button>
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