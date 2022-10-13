import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useNavigationType } from "react-router-dom";
import axios from "axios";

const REGEX =
  /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

const SignupProfile = () => {
  const location = useLocation();
  const navType = useNavigationType();

  const [user, setUser] = useState(location.state?.user || location.state);
  const [profile, setProfile] = useState({
    fullName: "",
    userName: "",
    password: "",
    tnc: true,
  });
  // Complete Data for registration
  const [completeUserData, setCompleteUSerData] = useState({
    mobile: "",
    email: "",
    fullName: "",
    userName: "",
    password: "",
    loginMode: "password",
    languagId: "",
    dob: "",
    gender: "",
    addressBy: "",
    locationLAT: "",
    locationLONG: "",
    countryId: "",
    platform: "web",
    ipAddress: "12.12.12.1",
    deviceId: "1234",
    deviceInfo: "Window",
    fcmToken: "",
  });

  // all suggested username name list
  const [userNameList, setUserNameList] = useState("");
  const [userNameSuggestion, setUserNameSuggestion] = useState({
    start: 0,
    end: 6,
  });

  const nameRef = useRef(null);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const tncRef = useRef(null);

  const nameFieldError = useRef(null);
  const userNameFieldError = useRef(null);
  const passwordFieldError = useRef(null);

  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);

  let navigate = useNavigate();

  // username suggestion handler
  const userNameSuggestionHandler = () => {
    userNameSuggestion.end >= userNameList.length
      ? setUserNameSuggestion({ start: 0, end: 6 })
      : setUserNameSuggestion({
          start: userNameSuggestion.end,
          end: userNameSuggestion.end + 6,
        });
  };

  // Input Handler
  const onChangeHandler = (ev) => {
    let { name, value } = ev.target;
    if (name === "password") {
      setProfile({ ...profile, password: value.replace(REGEX, "") });
    } else {
      setProfile({ ...profile, [name]: value });
    }
    nameRef.current.classList.add("invisible");
    userNameRef.current.classList.add("invisible");
    passwordRef.current.classList.add("invisible");
    nameFieldError.current.classList.remove("border-danger");
    userNameFieldError.current.classList.remove("border-danger");
    passwordFieldError.current.classList.remove("border-danger");

    setError("");
    if (name === "tnc") {
      setProfile({ ...profile, tnc: profile.tnc === false ? true : false });
      tncRef.current.classList.add("d-none");
    }
  };

  // Submit Profile Data
  const submitHandler = (ev) => {
    ev.preventDefault();
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!profile.fullName) {
      nameRef.current.classList.remove("invisible");
      nameFieldError.current.classList.add("border-danger");
      setError("Please Enter FullName");
    } else if (!profile.userName) {
      userNameRef.current.classList.remove("invisible");
      userNameFieldError.current.classList.add("border-danger");
      setError("Please Enter UserName");
    } else if (!profile.password.match(passwordRegex)) {
      passwordRef.current.classList.remove("invisible");
      passwordFieldError.current.classList.add("border-danger");
      setError("Please read password instruction");
    } else if (!profile.tnc) {
      tncRef.current.classList.remove("d-none");
      setError("Please Select Term & Condition");
    } else {
      // username availability checking
      axios
        .post(
          `${process.env.REACT_APP_IPURL}/public/userNameAvailable`,
          profile
        )
        .then((res) => {
          if (res.data.data.successResult === "available") {
            completeUserData.mobile = user.mobile.slice(4);
            completeUserData.email = location.state?.email;
            completeUserData.countryId = user.countryId;
            completeUserData.languagId = user.languagId;
            completeUserData.userName = profile.userName;
            completeUserData.fullName = profile.fullName;
            completeUserData.password = profile.password;

            axios
              .get(
                "https://api.ipgeolocation.io/ipgeo?apiKey=c1016d597c494a02aa190877148a5688"
              )
              .then((res) => {
                completeUserData.locationLONG = res.data.longitude;
                completeUserData.locationLAT = res.data.latitude;

                axios
                  .post(
                    `${process.env.REACT_APP_IPURL}/public/registerUser`,
                    completeUserData
                  )
                  .then((res) => {
                    if (res.data.data?.successResult) {
                      navigate("/SignupDetail",{state:{verified:true}});
                      localStorage.setItem(
                        "sociomeeUser",
                        JSON.stringify(res.data.data.successResult)
                      );
                    } else {
                      nameRef.current.classList.remove("invisible");
                      nameFieldError.current.classList.add("border-danger");
                      setError(res.data.data?.errorResult.message);
                    }
                  })
                  .catch((err) => {
                    nameRef.current.classList.remove("invisible");
                    nameFieldError.current.classList.add("border-danger");
                    setError(err);
                  });
              })
              .catch((err) => {
                // console.log(err)
              });
          } else if (res.data.data.errorResult.message === "userNameExists") {
            userNameRef.current.classList.remove("invisible");
            userNameFieldError.current.classList.add("border-danger");
            setError(
              "This username is already exist. Please try other username"
            );
            setUserNameList(res.data.data.errorResult.userNameList);
          }
        })
        .catch((err) => {
          nameRef.current.classList.remove("invisible");
          setError(`${err} !`);
        });
    }
  };

  const [style, setStyle] = useState(false);

  useEffect(() => {
    if (
      profile.fullName &&
      profile.userName &&
      profile.password &&
      profile.tnc
    ) {
      setFlag(true);
    }
  }, [profile]);

  
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
                <div className="logo-sec">
                  <Link className="" to="/">
                    <img
                      src="/assets/images/logo.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
              <div className="login-form">
                <div className="signup-progress-bar">
                  <div className="su-progress active"></div>
                  <div className="su-progress active"></div>
                  <div className="su-progress active"></div>
                  <div className="su-progress"></div>
                  <div className="su-progress"></div>
                </div>
                <div>
                  <div className="login-title">
                    <h2>What's your name?</h2>
                  </div>
                  <div className="login-discription">
                    {/* <h4>Please enter your details below.</h4> */}
                  </div>
                  <div className="form-sec">
                    <div>
                      <form className="theme-form" autoComplete="off">
                        <div className="form-group">
                          {/* <label>What's your name?</label> */}
                          <input
                            type="text"
                            className="form-control"
                            ref={nameFieldError}
                            placeholder="Write your full name here"
                            name="fullName"
                            value={profile.fullName}
                            onChange={onChangeHandler}
                            onKeyPress={(e) => {
                              e.target.value.length >= 64 && e.preventDefault();
                            }}
                            maxLength={64}
                            autoComplete="profile-fullName"
                          />
                          <label className="d-flex justify-content-between">
                            <p
                              className="error-input-msg invisible"
                              ref={nameRef}
                            >
                              {error}
                            </p>
                            {/* <p className="instruction-msg">Max 64 Characters</p> */}
                          </label>
                        </div>
                        <div className="form-group">
                          <h3 className="choose-gender-blk">Pick a username</h3>
                          <p className="label-descrip-blk">
                            Help your friends to find you on SocioMee with a
                            unique UserName
                          </p>
                          <input
                            type="text"
                            className="form-control"
                            ref={userNameFieldError}
                            placeholder="Pick a username"
                            name="userName"
                            value={profile.userName}
                            onChange={onChangeHandler}
                            onKeyPress={(e) => {
                              e.target.value.length >= 20 && e.preventDefault();
                            }}
                            maxLength={20}
                            autoComplete="profile-username"
                          />
                          <label className="d-flex justify-content-between">
                            <p
                              className="error-input-msg invisible"
                              ref={userNameRef}
                            >
                              {error}
                            </p>
                            {/* <p className="instruction-msg">Max 20 Characters</p> */}
                          </label>
                        </div>
                        <div className="form-group">
                          {/* <label>Pick a username</label> */}
                          {/* <p className="label-descrip-blk">Help your friends to find you on SocioMee with a unique Username</p> */}
                          {/* <input type="text" className="form-control" placeholder="Pick a username"/> */}
                          {userNameList && (
                            <div className="username-suggestion">
                              <h4>
                                Suggestions:{" "}
                                <a onClick={userNameSuggestionHandler}>
                                  Next suggestions
                                </a>
                              </h4>
                              <ul>
                                {userNameList &&
                                  userNameList
                                    .slice(
                                      userNameSuggestion.start,
                                      userNameSuggestion.end
                                    )
                                    .map((username) => {
                                      return (
                                        <li
                                          key={username}
                                          onClick={() =>
                                            setProfile({
                                              ...profile,
                                              userName: username,
                                            })
                                          }
                                        >
                                          <span
                                            className={
                                              profile.userName === username
                                                ? "border border-success"
                                                : ""
                                            }
                                          >
                                            {username}
                                          </span>
                                        </li>
                                      );
                                    })}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <h3 className="choose-gender-blk">Create password</h3>
                          <p className="label-descrip-blk">
                            Enter password of minimum 8 character with atleast
                            one lowercase, uppercase, number and special
                            character
                          </p>
                          <div className="input-block">
                            <input
                              type={!style ? "password" : "text"}
                              ref={passwordFieldError}
                              className="form-control"
                              placeholder="Enter your password here"
                              name="password"
                              value={profile.password}
                              onChange={onChangeHandler}
                              onKeyPress={(e) => {
                                e.target.value.length >= 25 &&
                                  e.preventDefault();
                              }}
                              maxLength={25}
                              autoComplete="off"
                            />

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#B9B9C3"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={
                                !style
                                  ? "input-icon iw-20 ih-20 d-none"
                                  : "input-icon iw-20 ih-20"
                              }
                              onClick={() => setStyle(!style)}
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              stroke="#B9B9C3"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={
                                !style
                                  ? "input-icon iw-20 ih-20 "
                                  : "input-icon iw-20 ih-20 d-none"
                              }
                              onClick={() => setStyle(!style)}
                            >
                              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                              <line x1="1" y1="1" x2="23" y2="23"></line>
                            </svg>
                          </div>
                          <label className="d-flex justify-content-between">
                            <p
                              className="error-input-msg invisible"
                              ref={passwordRef}
                            >
                              {error}
                            </p>
                            <p className="instruction-msg">Min 8 Characters</p>
                          </label>
                        </div>
                        <div className="bottom-sec">
                          <div className="form-check checkbox_animated">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="tnc"
                              value={profile.tnc}
                              checked={profile.tnc}
                              id="exampleCheck1"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleCheck1"
                            >
                              I accept the &nbsp;
                              <Link to="#">Terms &amp; Conditions</Link>
                            </label>
                          </div>
                        </div>
                        <p className="error-input-msg d-none" ref={tncRef}>
                          {error}
                        </p>
                        <div className="btn-section">
                          <button
                            className="btn btn-solid btn-lg without-input-fill"
                            onClick={submitHandler}
                            disabled={!flag}
                          >
                            CONTINUE
                          </button>
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
};

export default SignupProfile;
