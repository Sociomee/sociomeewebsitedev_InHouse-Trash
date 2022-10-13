import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios';
import LoginLanguage from './LoginLanguage';

const Signup = () => {
    const [user, setUser] = useState({
        isEmail: false,
        countryId: "",
        languagId: "",
        email: "",
        mobile: "",
        type: "signup"
    });
    const [searchValue, setSearchValue] = useState("")
    const errorRef = useRef(null);
    const [userData, setUserData] = useState({ code: "", mobile: "" });
    const [phoneCode, setPhoneCode] = useState([])
    const [error, setError] = useState('');
    const [language, setLanguage] = useState([])
    const [defaultCountryCode, setDefaultCountryCode] = useState('');
    const [defaultPhoneCode,setDefaultPhoneCode]=useState('');

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneFormat = /^[6-9]\d{9}$/;
        if (!userData.code) { errorRef.current.classList.remove('d-none'); setError('Please Select Phone Code') }
        else if (defaultCountryCode !== user.countryId) { errorRef.current.classList.remove('d-none'); setError('Please select right country code') }
        else if (!userData.mobile) { errorRef.current.classList.remove('d-none'); setError('Please Enter Phone Number !') }
        else if (userData.mobile.length > 10 || userData.mobile.length < 10 || !userData.mobile.match(phoneFormat)) { errorRef.current.classList.remove('d-none'); setError('Please Enter Valid Phone Number ! ') }
        else {
            setUser({ ...user, mobile: `${userData.code} ${userData.mobile}` })
            user.mobile = `${userData.code} ${userData.mobile}`;
            axios.post(`${process.env.REACT_APP_IPURL}/public/sendOtp`, user)
                .then((res) => {
                    if (res.data.data?.successResult) {
                        navigate("/Otp", { state: user })
                    }
                    else {
                        errorRef.current.classList.remove('d-none'); setError(res.data.data?.errorResult)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    // number filter in input field function
    const numberFilter = (e) => {
        var ASCIICode = (e.which) ? e.which : e.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            e.preventDefault();
        if (e.target.value.length >= 10) {
            e.preventDefault();
        }
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    // Get all phone code
    useEffect(() => {
        axios.post(`${process.env.REACT_APP_IPURL}/public/getAllCountry/`)
            .then((res) => { setPhoneCode(res.data.data.successResult.rows) })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    // Get all language code
    useEffect(() => {
        axios.post(`${process.env.REACT_APP_IPURL}/public/getAllAppLanguages/`)
            .then((res) => { setLanguage(res.data.data.successResult.rows) })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const countryCodeHandler = (id,teleCode,name,iconURL)=> {
        setDefaultPhoneCode({id:id,teleCode:teleCode,name:name,iconURL:iconURL})
        userData.code = `+${teleCode}`;
        if (userData.code) {
            // filter country by phone code
            const filterCode = phoneCode.filter((curr) => { return `+${curr.teleCode}` === userData.code })
            user.countryId = filterCode[0].id;

        }
    }
    useEffect(() => {
        axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=c1016d597c494a02aa190877148a5688')
            .then(res => {
                setUserData({ ...userData, code: res.data.calling_code });
                // filter country by phone code
                const filterCode = phoneCode.find((curr) => { return `+${curr.teleCode}` === res.data.calling_code })
                user.countryId = filterCode?.id;
                setDefaultCountryCode(filterCode?.id)
                setDefaultPhoneCode(filterCode)
            })
            .catch(err => {
                console.log(err)
            })
    }, [phoneCode])

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
                                        <h2>Welcome</h2>
                                    </div>
                                    <div className="login-discription">
                                        <h4>Please SignUp to your account.</h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    {/* <label>Enter your Mobile Number</label> */}
                                                    <div className={`input-block ${userData.mobile.length === 10 && 'border border-success rounded-3'}`}>
                                                        <div className="phone-with-code">
                                                            <div className="phone-code-dropdown">
                                                                <a className="d-flex" data-bs-toggle="modal" data-bs-target="#languageModal" aria-haspopup="true" aria-expanded="false">
                                                                    <img src={defaultPhoneCode?.iconURL} width='18' height='12'/> 
                                                                    +{defaultPhoneCode?.teleCode}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 phone-code-arrow "><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                                </a>
                                                            </div>
                                                            <input type="text" className="form-control w-75 pr-5" placeholder="Enter Mobile Number" name="mobile" value={userData.mobile} onChange={(e) => { setUserData({ ...userData, mobile: e.target.value.replace(/[^0-9]/gi, '') }); errorRef.current.classList.add('d-none') }} onKeyPress={numberFilter} maxLength={'10'}/>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                        </div>
                                                    </div> 
                                                    <p className="error-input-msg text-center d-none" ref={errorRef}>{error}</p>
                                                </div>
                                                <p className="notimsg-blk">When you will click on continue,  you will receive a verification code on the mobile number that you have entered.</p>
                                                <div className="btn-section">
                                                    <button className={"btn btn-solid btn-lg without-input-fill"} disabled={userData.mobile.length !== 10 ? true : false} onClick={handleSubmit}>CONTINUE</button>
                                                </div>
                                                <div className="connect-with">
                                                    <div className="no-account-blk">
                                                        <p>Already have an account? <Link className="" to="/">Login</Link></p>
                                                    </div>
                                                    <div className="privacy-usernoti-blk"><a href="/">Privacy Policy</a> • <a href="/">User Notice</a></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <LoginLanguage setUser={user}></LoginLanguage>
                </div>
            </section>

            {/* country code modal */}
            <div className="modal fade" id="languageModal" tabIndex="-1" role="dialog" aria-labelledby="bioModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title font-weight-bold text-black" id="exampleModalLongTitle">Choose Country Code</h2>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <form className="theme-form pr-3 pl-3 p-2">
                                <div className="input-search-blk">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <input type="text" className="form-control" name="search" placeholder="Search Country..." value={searchValue} onChange={e => setSearchValue(e.target.value)} onKeyPress={(e)=>e.key==='Enter' && e.preventDefault()} />
                                </div>

                                {/* list of countries */}
                                <ul className="list-group">
                                    {
                                        phoneCode && phoneCode
                                            ?.filter(code => code.name.match(new RegExp(searchValue, "i")))
                                            ?.length<=0 ?<h2 className='text-center'>Invalid Search</h2> : phoneCode
                                            ?.filter(code => code.name.match(new RegExp(searchValue, "i")))
                                            ?.map(({
                                                id,
                                                name,
                                                iconURL,
                                                teleCode
                                            }) => {
                                                return <li className={`list-group-item mt-2 d-flex justify-content-between align-items-center border-white rounded cursor-pointer phone-code-list ${defaultPhoneCode?.id===id && 'active-phone-code'}`} key={id} onClick={()=>countryCodeHandler(id,teleCode,name,iconURL)} data-bs-dismiss="modal">
                                                    <div className='d-flex align-items-center login-discription'>
                                                        <img src={iconURL} alt="" height='20' width='28'/>
                                                        <h5 className='ml-3 h4 font-weight-bold'>{name}</h5>
                                                    </div>
                                                    <h5 className="mb-1 h4 font-weight-bold">+{teleCode}</h5>
                                                </li>

                                            })
                                    }

                                </ul>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
