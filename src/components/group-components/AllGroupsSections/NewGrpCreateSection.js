import React from 'react';
import { Link } from "react-router-dom";

const NewGrpCreateSection = () => {

  return (
    <>
      <div className="new-create-grp">
        <div className="col-lg-12 col-12">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="new-create-grp-img">
                <img src="/assets/images/grp/crt-grp.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-12 new-create-right">
              <div className="new-create-grp-content">
                <h1 className='mb-2'>Create Your Group</h1>
                <p className='grp-create-p mb-4'>
                  Create a group & express yourself. Get connected to the people around the world with similar interest.
                </p>
                <div className="group-buttons-blk mb-2">
                  <Link to="/Group/create" className="group-btn green-clr-btn grp-create-btn">Create Group</Link>
                </div>
                <div className="groupmember-blk mb-2">
                  <span>By clicking create group, you agree to the</span>
                </div>
                <div className="groupmember-blk mb-2">
                  <span><Link to="/#" >Sociomee terms & Conditions.</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewGrpCreateSection