import React, { useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import AdmanagerHeaderR from "../../AdmanagerHeaderR/AdmanagerHeaderR";
import MultiChoice from "./MultiChoice";
import ShortAnswer from "./ShortAnswer";
import SingleChoice from "./SingleChoice";

const LeadGenerationScreen = () => {
  const [formDetail, setFormDetail] = useState({ formName: "", formDesc: "" });
  const [inputType, setInputType] = useState([]);

  const inputHandler = (ev) => {
    const { name, value } = ev.target;
    setFormDetail({ ...formDetail, [name]: value });
  };

  const inputRemover=({type,id})=>{
    setInputType(inputType.filter(inp=>inp.type!==type && inp.id!==id))
  }

  return (
    <>
      <AdmanagerHeaderR />

      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-3 ad-left">
            <div className="desh-icon-main">
              <div className="desh-icon lead-desh">
                <h4 className="ml-2">Select Input type</h4>
              </div>
            </div>
            <div className="create-add">
              <div className="create-add-one">
                <p className="ml-2">
                  Choose kind of information to be filled by user.
                </p>
              </div>
            </div>

            <div className="desh-icon-main">
              <div className="desh-icon lead-desh">
                <h5 className="ml-2">Short answer (+$1)</h5>
                <h4
                  className="ml-2 lead-add"
                  role="button"
                  onClick={() =>
                    setInputType([
                      ...inputType,
                      { type: "short", id: Math.floor(Math.random() * 10) },
                    ])
                  }
                >
                  + Add
                </h4>
              </div>
            </div>
            <div className="desh-icon-main">
              <div className="desh-icon lead-desh">
                <h5 className="ml-2">Single Choice Options (+$1)</h5>
                <h4
                  className="ml-2 lead-add"
                  role="button"
                  onClick={() =>
                    setInputType([
                      ...inputType,
                      { type: "single", id: Math.floor(Math.random() * 10) },
                    ])
                  }
                >
                  + Add
                </h4>
              </div>
            </div>
            <div className="desh-icon-main">
              <div className="desh-icon lead-desh">
                <h5 className="ml-2">Multi Choice Options (+$1)</h5>
                <h4
                  className="ml-2 lead-add"
                  role="button"
                  onClick={() =>
                    setInputType([
                      ...inputType,
                      { type: "multi", id: Math.floor(Math.random() * 10) },
                    ])
                  }
                >
                  + Add
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="navigate col-lg-12">
              <div className="row mt-3">
                <div className="navigate-left col-lg-6 d-flex align-items-center">
                  <p className="navigate-color">
                    Brand Awareness- CPV / Full Screen Video Ad
                  </p>
                </div>
                <div class="btn-section col-lg-6 d-flex justify-content-end">
                  <button
                    class="btn btn-solid btn-lg without-input-fill"
                    disabled
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="p-heading">Customize Form</h3>

                <div className="row ad-types-of-type-map position-relative">
                  <div class="signup-progress-bar w-100 p-0">
                    <div class="su-progress active"></div>
                  </div>
                  <div className="single-ad">
                    <div className="col-lg-12 inputs d-flex p-0">
                      <div className="col-lg-12 col-12 mt-3">
                        <div className="">
                          <p className="p-heading">Create Form</p>
                        </div>
                        <div className="">
                          <input
                            type="text"
                            className="form-control p-2"
                            placeholder="Form Name"
                            maxLength={"32"}
                            name="formName"
                            onChange={inputHandler}
                          />
                        </div>
                        <p className="p-max-car">Upto 32 Characters</p>
                      </div>
                    </div>
                    <div className="textarea col-lg-12 mt-4">
                      <div className="">
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Form Description"
                          maxLength={"300"}
                          name="formDesc"
                          onChange={inputHandler}
                        >
                          {" "}
                        </textarea>
                      </div>
                      <p className="p-max-car">Max 300 Characters</p>
                    </div>
                  </div>
                </div>

                {inputType &&
                  inputType.map(({ type, id }) => {
                    return type === "single" ? (
                      <SingleChoice key={id} remover={()=>inputRemover({type:type,id:id})} />
                    ) : type === "multi" ? (
                      <MultiChoice key={id} remover={()=>inputRemover({type:type,id:id})}/>
                    ) : (
                      <ShortAnswer key={id} remover={()=>inputRemover({type:type,id:id})}/>
                    );
                  })}
              </div>

              {/* Preview Screen*/}
              <div className="col-lg-6">
                <h3 className="p-heading">Preview </h3>
                <div className="row ad-types-of-type-map ">
                  <div className="single-ad">
                    <div className="col-lg-12 inputs d-flex p-0">
                      <div className="col-lg-12 col-12">
                        <div className="">
                          <p className="p-heading">
                            {formDetail.formName || "Form name..."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="textarea col-lg-12">
                      <div className="">
                        <p className="p-heading font-weight-normal">
                          {formDetail.formDesc || "Form Description..."}
                        </p>
                      </div>
                    </div>
                    <div class="btn-section d-flex justify-content-center mt-5">
                      <button
                        class="btn btn-solid btn-lg without-input-fill"
                        disabled
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadGenerationScreen;