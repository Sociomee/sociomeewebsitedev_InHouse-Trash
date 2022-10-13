import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loadAdType } from "../../../../Services/Actions/AdManager/getAdTypeAction";
import AdmanagerHeaderR from "../../AdmanagerHeaderR/AdmanagerHeaderR";
import "../../style.css";

// MUI Dialog box
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CreateAdScreen = () => {
  const [adTypeId, setAdTypeId] = useState("");
  const { adType } = useSelector((state) => state.getTypeData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(loadAdType());
  }, []);

  // navigate to next screen
  const submitHandler = (e) => {
    e.preventDefault();
    if (!adType) {
      alert("Please Select Type");
    } else {
      navigate(`/Ad/Display/${adTypeId}`);
    }
  };

  // CANCEL
  const logoutUser = () => {
    setOpen(false);
    navigate("/AdManager");
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AdmanagerHeaderR />

      <div className="col-lg-12 pad-zero ">
        <div className="row">
          <div className="col-lg-3 ad-left">
            <div className="desh-icon-main">
              <div className="desh-icon">
                <img src="/assets/images/adIcon/grid.png" alt="" />
                <p className="ml-2">User Dashboard</p>
              </div>
              <div className="desh-second">
                <i className="fa fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="create-add-main">
              <div className="create-add">
                <div className="create-add-one">
                  <img src="/assets/images/adIcon/folder.png" alt="" />
                  <p className="ml-2">Create Ad</p>
                </div>
                <div className="create-add-second">
                  <i className="fa fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="col-lg-12 step-ad-heading">
              <div className="row step-section">
                <div className="col-lg-2 ad-count">
                  <button className="ad-count-btn">1</button>
                  <p className="ad-count-step">Step 1</p>
                </div>
                <div className="col-lg-10">
                  <p className="ad-count-heading">
                    Select your advertisement goal
                  </p>
                  <p>To generate high-quality leads & acquire new customers.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 pad-zero">
              <div className="row">
                {adType.map(({ id, adTypes, descriptions, adMastrerType }) => {
                  return (
                    <div
                      className="pad-zero form-check checkbox_animated"
                      onClick={() => setAdTypeId(id)}
                      key={id}
                    >
                      <div className="col-lg-12">
                        <div className="ad-type d-flex">
                          <div>
                            <div className="form-check checkbox_animated">
                              <ul>
                                <li className="pad-zero">
                                  <div className="form-check checkbox_animated d-flex align-items-center">
                                    <input
                                      type="radio"
                                      className="radio_animated radio_animated_lg"
                                      id={adTypes}
                                      name="ItsMe"
                                    />
                                    <label
                                      className="form-check-label ml-2"
                                      for={adTypes}
                                      role="button"
                                    >
                                      <p className="type">{adTypes} - ({adMastrerType.name})</p>
                                      <p className="dec">{descriptions}</p>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-12">
              <div className="ad-btn">
                <a className="btn-cancel" onClick={() => setOpen(true)}>
                  Cancel
                </a>
                <button className="btn-next ml-2 without-input-fill" onClick={submitHandler} disabled={!adTypeId ? true : false}>
                  Next
                </button>
              </div>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {
                  "OOPS! You just stopped Do you really want to discard this AD?"
                }
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description"></DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={logoutUser}>Yes</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdScreen;
