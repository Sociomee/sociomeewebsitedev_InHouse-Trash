import React, { Component, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";


export default function AdManagerSearch() {

    return (
        <>
            <div className="profile-menu section-t-space adserch-menu col-lg-12">
                <ul className='col-lg-10'>
                    <li>
                        <NavLink to="/CreateAd" className='btn btn-solid adserch-btn'>
                            +  Create new Ad
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <h6>History</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <h6>Preview</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <h6>Reports</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <h6>Ad Stop</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <h6>More..</h6>
                        </NavLink>
                    </li>
                    <li>
                        <input type="text" className="form-control search-type ad-search-bar" placeholder="Search" />
                    </li>
                </ul>

                <div className='col-lg-2'>
                    <div className="row ad-filters">
                        <a href="" className='ad-manager-filter mr-1'>
                            <img src="/assets/images/adIcon/Vector.png" alt="" />
                        </a>
                        <a href="" className='ad-manager-filter'>
                            <img src="/assets/images/adIcon/Frame.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
} 