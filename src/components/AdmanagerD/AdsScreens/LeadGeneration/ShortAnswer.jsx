import React from "react";

const ShortAnswer = ({ remover }) => {
  return (
    <>
      <div className="row ad-types-of-type-map "> 
        <div className="single-ad">
          <div className="col-lg-12 inputs d-flex p-0">
            <div className="col-lg-12 col-12">
              <div className="d-flex justify-content-between">
                <p className="p-heading">
                  Give Hint about the question in field to user
                </p>
                <p className="lead-greem" role="button" onClick={remover}>
                  Remove
                </p>
              </div>
              <div className="">
                <p className="mb-4">
                  Hint would indicate the kind of information required to fill.
                </p>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Type the ‘Hint’ here..."
                  maxLength={"32"}
                />
                <p className="p-max-car">Upto 32 Characters</p>
              </div>

              <div className="">
                <div className="d-flex lead-switch">
                  <p className="p-heading">
                    Mandatory Question
                    <span className="pl-1">
                      <img
                        src="/assets/images/adIcon/alert-circle.png"
                        alt=""
                      />
                    </span>
                  </p>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
                <p>Add a star mark to indicate mandatory question field</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortAnswer;