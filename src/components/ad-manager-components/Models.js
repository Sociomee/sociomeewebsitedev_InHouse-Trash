import React, { useState } from 'react'

const Models = () => {
  // Media File Preview
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <div className="modal fade" id="createGroup" tabIndex="-1" role="dialog" aria-labelledby="createGroupTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered add-width" role="document">
          <div className="modal-content">
            <div className="modal-header ad-model-header">
              <div className="modal-header-title">
                <h2 className="modal-title ad-model-title" id="exampleModalLongTitle">Add Funds</h2>
                <p className="modal-mini-title">These funds will be used to allot the budget while creating Ads</p>
              </div>
              <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
            </div>
            <div className="modal-body">
              <div className="ed-model-block">
                <form className="theme-form">

                  <div className="form-group">
                    <label className='margin-add-fud' style={{ padding: "8px 20px" }}>Choose an amount to add </label>
                    <div className="amount d-flex">
                      <select className="form-control margin-add-fud">
                        <option value="">Choose currency</option>
                        <option value="">Choose currency 1</option>
                        <option value="">Choose currency 2</option>
                        <option value="">Choose currency 3</option>
                        <option value="">Choose currency 4</option>
                        <option value="">Choose currency 5</option>
                      </select>
                      <input type="text" className="form-control margin-add-fud" placeholder="Enter amount" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className='margin-add-fud'>Choose payment method</label>
                    <div className="amount d-flex">
                      <span className="form-control margin-add-fud margin-add-fud-bg">
                        <img src="/assets/images/adIcon/payment/1 (4).png" alt="" />
                        Nets.eu</span>
                      <span className="form-control margin-add-fud margin-add-fud-bg">
                        <img src="/assets/images/adIcon/payment/1 (2).png" alt="" />
                        Stripe</span>
                    </div>
                    <div className="amount d-flex">
                      <span className="form-control margin-add-fud margin-add-fud-bg">
                        <img src="/assets/images/adIcon/payment/1 (3).png" alt="" />
                        Google Pay</span>
                      <span className="form-control margin-add-fud margin-add-fud-bg">
                        <img src="/assets/images/adIcon/payment/1 (1).png" alt="" />
                        Apple Pay</span>
                    </div>
                  </div>


                </form>
              </div>
            </div>
            <div className="modal-footer add-footer">
              <button type="button" className="btn btn-solid add-btn">Make Payment</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Models