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
                            <h2>Choose your Interests</h2>
                        </div>
                        <div className="login-discription">
                            <h4>Please select <b>at least 3 interests</b> for a better in-app experience</h4>
                        </div>
                        <div className="form-sec">
                            <div>
                                <form className="theme-form">
                                    <div className="form-group">
                                        <label>Select Your Interests</label>
                                        <input type="text" className="form-control" placeholder="Select Interests"/>
                                        <div className="interest-list-blk">
                                          <span><i className="ti-camera"></i> Photography</span>
                                          <span><i className="ti-book"></i> Books</span>
                                          <span><i className="ti-music"></i> Song</span>
                                          <span><i className="ti-video-camera"></i> Movies</span>
                                          <span><i className="ti-car"></i> Travelling</span>
                                          <span><i className="ti-pencil"></i> Writing</span>
                                          <span><i className="ti-thought"></i> Philosophy</span>
                                          <span><i className="ti-basketball"></i> Astrology</span>
                                          <span><i className="ti-image"></i> Reading</span>
                                          <span><i className="ti-image"></i> Reading</span>
                                          <span><i className="ti-image"></i> Reading</span>
                                          <span><i className="ti-image"></i> Reading</span>
                                          <span><i className="ti-image"></i> Reading</span>
                                          <span><i className="ti-image"></i> Reading</span>
                                          <span><i className="ti-image"></i> Reading</span>
                                          <span><i className="ti-image"></i> Reading</span>
                                          <span><i className="ti-image"></i> Reading</span>
                                          <span><i className="ti-image"></i> Reading</span>
                                        </div>
                                    </div>
                                    <div className="btn-section">
                                        <NavLink to="/Home" className="btn btn-solid btn-lg">CONTINUE</NavLink>
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