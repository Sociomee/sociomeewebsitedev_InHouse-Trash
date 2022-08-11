import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'


// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';

const SignupEmail = () => {
   const location = useLocation();
   const [user, setUser] = useState(location.state);

   const [email, setEmail] = useState("");
   const [flag, setFlag] = useState(false)
   const [error, setError] = useState('');
   const errorRef = useRef();

   let navigate = useNavigate();

   // Skip Signup by email function
   const skipSignupEmail = (e) => {
      navigate('/SignupProfile', { state: user })
   }


   // Email Verification
   const emailVerification = (ev) => {
      ev.preventDefault();
      const mailFormat = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      if (!email) { errorRef.current.classList.remove('d-none'); setError('Please Enter Email Address') }
      else if (!email.match(mailFormat)) { errorRef.current.classList.remove('d-none'); setError('Please Enter Valid Email Address') }
      else {
         axios.post('https://apiserver.msgmee.com/public/userEmailAvailable/', { email: email })
            .then(res => {
               console.log(res.data)
               if (res.data.data?.successResult) {
                  navigate('/SignupProfile', { state: { user: user, email: email } })
               }
               else {
                  errorRef.current.classList.remove('d-none');
                  setError('This email is already registered')
               }
            })
            .catch(err => {
               console.log(err)
            })
      }

   }

   // this function is identify the email is right or wrong
   useEffect(() => {
      const mailFormat = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      const emailTimeout = setTimeout(() => {
         if (email.match(mailFormat)) {
            setFlag(true)
         }
         else {
            setFlag(false)
         }
      }, 1000);
      return () => clearTimeout(emailTimeout);
   }, [email])

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
                              <h2>Enter Email</h2>
                           </div>
                           <div className="login-discription">
                              <h4>Please fill the form below.</h4>
                           </div>
                           <div className="form-sec">
                              <div>
                                 <form className="theme-form">
                                    <div className="form-group">
                                       <label>Enter your Email Address</label>
                                       <input type="email" className="form-control" placeholder="Enter Email Address" value={email} onChange={(ev) => {setEmail(ev.target.value);errorRef.current.classList.add('d-none')}} />
                                       <p className="error-input-msg text-center d-none" ref={errorRef}>{error}</p>
                                    </div>
                                    <div className="connect-with">
                                       <h6><span>OR Connect With</span></h6>
                                       <ul className="social-login-blk">
                                          <li><a href="#"><img src="assets/images/google-icon.png" /> Continue with Google</a></li>
                                          <li><a href="#"><img src="assets/images/apple-icon.png" /> Continue with Apple</a></li>
                                       </ul>
                                    </div>
                                    <p className="notimsg-blk">Provide your email for better communication. </p>
                                    <div className="btn-section">
                                       <button className="btn btn-solid btn-lg" onClick={emailVerification} disabled={!flag}>CONTINUE</button>

                                    </div>
                                    <div className="skip-reg-block">
                                       <a onClick={skipSignupEmail}>Skip</a>
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

export default SignupEmail
