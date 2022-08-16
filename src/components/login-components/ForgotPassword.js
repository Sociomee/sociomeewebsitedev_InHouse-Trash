import React,{Component, useState, useRef} from 'react'; 
import { NavLink } from "react-router-dom";
import LoginLanguage from './LoginLanguage';

export default function ForgotPassword() {  

  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 m-auto">
                <div className="login-header-section">
                  <div className="logo-sec">
                    <NavLink to="/">
                      <img src="assets/images/logo.png" alt="logo" className="img-fluid"/>
                    </NavLink>
                  </div>
                </div>
                <div className="login-form">
                    <div>
                        <div className="login-title">
                            <h2>Forgot Password</h2>
                        </div>
                        {/* <div className="login-discription">
                            <h4>Please SignUp to your account.</h4>
                        </div> */}
                        <div className="form-sec">
                            <div>
                                <form className="theme-form">
                                    <div className="form-group">
                                        <label>Enter your Mobile Number</label>
                                        <div className="input-block">
                                          <div className="phone-with-code">
                                            <select className="form-select">
                                              <option value="+91" style={{backgroundImage: "url(assets/images/Blog.png)"}}>+91</option>
                                              <option value="+92">+92</option>
                                              <option value="+01">+01</option>
                                              <option value="+93">+93</option>
                                              <option value="+54">+54</option>
                                              <option value="+501">+501</option>
                                            </select>
                                            <input type="text" className="form-control" placeholder="Enter Mobile Number"/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                          </div>
                                        </div>
                                        <p className="error-input-msg">**Caption text, description, error notification**</p>
                                    </div>
                                    <p className="notimsg-blk">When you will click on continue,  you will receive a verification code on the mobile number that you have entered.</p>
                                    <div className="btn-section">
                                        <NavLink to="/ForgotPasswordOtp" className="btn btn-solid btn-lg">Send OTP</NavLink>
                                    </div>
                                </form>
                                <div className="connect-with">
                                    <div className="no-account-blk"><p>Already have an account? <NavLink to="/">Login</NavLink></p></div>
                                    <div className="privacy-usernoti-blk"><a href="#">Privacy Policy</a> • <a href="#">User Notice</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <LoginLanguage></LoginLanguage>
        </div>
    </section>
    </>
  );
} 