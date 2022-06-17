import React,{Component, useState, useRef} from 'react'; 
import { NavLink } from "react-router-dom";

export default function Signup() {  

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
                                        <input type="text" className="form-control" placeholder="DD-MM-YYYY"/>
                                        <p className="instruction-msg">Max 64 Characters</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Choose Gender</label>
                                        <div className="form-check">
                                          <label className="form-check-label font-weight-normal" htmlFor="radio1">
                                            <input className="form-check-input radio_animated" type="radio" name="share" id="radio1" value="allow"/>
                                            only specific friend
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label font-weight-normal" htmlFor="radio2">
                                            <input className="form-check-input radio_animated" type="radio" name="share" id="radio2" value="dont"/>
                                            all friends
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label font-weight-normal" htmlFor="radio3">
                                            <input className="form-check-input radio_animated" type="radio" name="share" id="radio3" value="off"/>
                                            hide from
                                          </label>
                                        </div>
                                    </div>
                                    <div className="btn-section">
                                        <NavLink to="/SignupInterest" className="btn btn-solid btn-lg">CONTINUE</NavLink>
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