import React, { useState } from "react";

const MultiChoice = ({ remover }) => {
  const [multiOptionCount, setMultiOptionCount] = useState([1, 2]);

  const [tempMultiOption, setTempMultiOption] = useState({
    seq1: "",
    seq2: "",
  });
  const multiDataHandler = (e) => {
    const { name, value } = e.target;
    setTempMultiOption({ ...tempMultiOption, [name]: value });
  };
  const optionIncrementHandler = (e) => {
    e.preventDefault();
    if (multiOptionCount.length < 10) {
      const nextData = `seq${multiOptionCount.length + 1}`;
      setMultiOptionCount([...multiOptionCount, multiOptionCount.length + 1]);
      setTempMultiOption({ ...tempMultiOption, [nextData]: "" });
    }
  };
  return (
    <>
      <div className="row ad-types-of-type-map ">
        <div className="single-ad">
          <div className="col-lg-12 inputs d-flex p-0">
            <div className="col-lg-12 col-12">
              <div className="d-flex lead-switch">
                <p className="p-heading">Enter Question</p>
                <p className="lead-greem" role="button" onClick={remover}>
                  Remove
                </p>
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Type the ‘Hint’ here..."
                  maxLength={'32'}
                />
              </div>
              <p className="p-max-car">Upto 32 Characters</p>
              <div className="d-flex lead-switch mb-3 mt-3">
                <p className="p-heading">Add Options</p>
                {multiOptionCount?.length < 10 && (
                  <p
                    className="lead-greem"
                    role="button"
                    onClick={optionIncrementHandler}
                  >
                    + Add More
                  </p>
                )}
              </div>
              {multiOptionCount &&
                multiOptionCount.map((option, i) => {
                  return (
                    <div className="form-control d-flex my-3 position-relative" key={i}>
                      <input type="checkbox" name="kiAeYaar" id="" />
                      <input
                        type="text"
                        className="form-control p-2"
                        style={{ border: "none" }}
                        placeholder="Type the ‘Option’ here.."
                        name={`seq${option}`}
                        value={tempMultiOption[`seq${option}`]}
                        onChange={multiDataHandler}
                      />
                      {
                        i>=2 && <div className='input-minus' role='button' onClick={()=>setMultiOptionCount(multiOptionCount.filter(opt=>opt!==option))}></div>
                      }
                    </div>
                  );
                })}

              <div className="mt-4">
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

export default MultiChoice;