import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate, useNavigationType } from 'react-router-dom'

import axios from 'axios';
import { useUserAuth } from '../../Context/userAuthContext';

const SignupEmail = () => {
   const location = useLocation();
   const navType = useNavigationType();

   const [user, setUser] = useState(location.state);

   const { logIn, googleSignIn } = useUserAuth();

   const [email, setEmail] = useState({email:''});
   const [flag, setFlag] = useState(false)
   const [error, setError] = useState('');
   const errorRef = useRef();

   let navigate = useNavigate();

   // Skip Signup by email function
   const skipSignupEmail = (e) => {
      navigate('/SignupProfile', { state: user })
   }

   // get email by google
   const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
         const respo = await googleSignIn();
         if (respo.user.email) {
            email.email=respo.user.email;
            emailVerification(e);
         }
      } catch (error) {
         console.log(error.message);
      }
   };


   // Email Verification
   const emailVerification = (ev) => {
      ev.preventDefault();
      const mailFormat = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      if (!email.email) { errorRef.current.classList.remove('d-none'); setError('Please Enter Email.email Address') }
      else if (!email.email.match(mailFormat)) { errorRef.current.classList.remove('d-none'); setError('Please Enter Valid Email Address') }
      else {
         axios.post(`${process.env.REACT_APP_IPURL}/public/userEmailAvailable/`, { email: email.email })
            .then(res => {
               console.log(res.data)
               if (res.data.data?.successResult) {
                  navigate('/SignupProfile', { state: { user: user, email: email.email } })
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
         if (email.email.match(mailFormat)) {
            setFlag(true)
         }
         else {
            setFlag(false)
         }
      }, 1000);
      return () => clearTimeout(emailTimeout);
   }, [email])

  
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
                           <div className="su-progress"></div>
                           <div className="su-progress"></div>
                           <div className="su-progress"></div>
                        </div>
                        <div>
                           <div className="login-title">
                              <h2>What's your email address?</h2>
                           </div>
                           <div className="login-discription">
                              {/* <h4>Please fill the form below.</h4> */}
                           </div>
                           <div className="form-sec">
                              <div>
                                 <form className="theme-form">
                                    <div className="form-group">
                                       {/* <label>Enter your Email Address</label> */}
                                       <input type="email" className={`form-control ${error && 'border-danger'}`} placeholder="Enter Email Address" value={email.email} onChange={(ev) => { setEmail({email:ev.target.value.replace(/[^0-9a-zA-Z!@#$%^&*.]/gi, '')}); setError(''); errorRef.current.classList.add('d-none') }} onKeyPress={(e) => { e.target.value.length >= 30 && e.preventDefault() }} maxLength={'30'} />
                                       <p className="error-input-msg text-center d-none" ref={errorRef}>{error}</p>
                                    </div>
                                    <div className="connect-with">
                                       <h6><span>OR</span></h6>
                                       <ul className="social-login-blk">
                                          <li onClick={handleGoogleSignIn}><a><img src="/assets/images/google-icon.png" /> Continue with Google</a></li>
                                          <li><a><img src="/assets/images/apple-icon.png" /> Continue with Apple</a></li>
                                       </ul>
                                    </div>
                                    {/* <p className="notimsg-blk">Provide your email for better communication. </p> */}
                                    <div className="btn-section">
                                       <button className="btn btn-solid btn-lg without-input-fill" onClick={emailVerification} disabled={!flag}>CONTINUE</button>

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
