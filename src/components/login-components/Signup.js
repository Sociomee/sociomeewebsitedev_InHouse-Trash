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
                            <h2>Welcome</h2>
                        </div>
                        <div className="login-discription">
                            <h4>Welcome to SocioMee, please SignUp to your account.</h4>
                        </div>
                        <div className="form-sec">
                            <div>
                                <form className="theme-form">
                                    {/* <div className="form-group">
                                    <div className="row">
                                        <div className="col-6">
                                          <div className="language-country-blk">
                                            <div className="country-block">
                                              <img src="assets/images/flag-india.png"/>
                                              <select className="form-select">
                                                <option value="IND">IND</option>
                                                <option value="2">Country 1</option>
                                                <option value="2">Country 2</option>
                                                <option value="2">Country 3</option>
                                                <option value="2">Country 4</option>
                                                <option value="2">Country 5</option>
                                                <option value="2">Country 6</option>
                                                <option value="2">Country 7</option>
                                                <option value="2">Country 8</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="language-country-blk">
                                            <div className="langauge-block">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none" className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589"></path></svg>
                                              <select className="form-select">
                                                <option value="ENG">ENG</option>
                                                <option value="2">Language 1</option>
                                                <option value="2">Language 2</option>
                                                <option value="2">Language 3</option>
                                                <option value="2">Language 4</option>
                                                <option value="2">Language 5</option>
                                                <option value="2">Language 6</option>
                                                <option value="2">Language 7</option>
                                                <option value="2">Language 8</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                    <div className="form-group">
                                        <label>Enter your Mobile Number</label>
                                        <div className="input-block">
                                          <div className="phone-with-code">
                                            <select className="form-select">
                                              <option value="+91">+91</option>
                                              <option value="+92">+92</option>
                                              <option value="+01">+01</option>
                                              <option value="+93">+93</option>
                                              <option value="+54">+54</option>
                                              <option value="+501">+501</option>
                                            </select>
                                            <input type="text" className="form-control" placeholder="Enter Mobile Number"/>{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> */}
                                          </div>
                                        </div>
                                        <p className="error-input-msg d-none">**Caption text, description, error notification**</p>
                                    </div>
                                    <p className="notimsg-blk">When you will click on continue,  you will receive a verification code on the mobile number that you have entered.</p>
                                    <div className="btn-section">
                                        <NavLink to="/Otp" className="btn btn-solid btn-lg">CONTINUE</NavLink>
                                    </div>
                                </form>
                                <div className="connect-with">
                                    <div className="no-account-blk"><p>Already have an account? <NavLink to="/">Login</NavLink></p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="language-selection-blk">
                  <div className="langauge-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none" className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589"></path></svg>
                    <select className="form-select">
                      <option value="">Select Language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Dutch">Dutch</option>
                      <option value="Arabic">Arabic</option>
                      <option value="Arawak">Arawak</option>
                      <option value="Chinese">Chinese</option>
                    </select>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
} 