import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AdmanagerHeaderR from "../../AdmanagerHeaderR/AdmanagerHeaderR";

// Use for snakeBar
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import Loader from "../../../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { loadAdType } from "../../../../Services/Actions/AdManager/getAdTypeAction";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CaroselImageAdImage = () => {
  const types = useLocation();
  const { adType } = useSelector((state) => state.getTypeData);
  const adTypeData = useMemo(() => {
    return adType.find((ad) => ad.id === types.state.typeId);
  }, [adType]);

  // Snackbar Code
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ sev: "success", content: "" });
  const [loading, setLoading] = useState(false);
  // used for identify all fields are filled or not
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  const [mediaData, setMediaData] = useState([
    {
      file: "",
      fileType: "image",
      heading: "",
      subHeading: "",
      callToActionId: "",
    },
  ]);

  const [adData, setAdData] = useState({
    discriptions: "",
    websiteLink: "",
    adStatus: "READY_TO_START",
    adTypesId: types.state.typeId,
    adSubTypesId: types.state.subTypeId,
    media: [],
  });

  const mediaInputsHandler = (ev, i) => {
    const { name, value, files } = ev.target;
    let cloneArr = mediaData;
    let tempObj = cloneArr[i];
    if (name === "file") {
      tempObj = { ...tempObj, [name]: files[0] };
    } else {
      tempObj = { ...tempObj, [name]: value };
    }
    cloneArr[i] = tempObj;
    setMediaData([...cloneArr]);
  };

  const deleteImageHandler = (i) => {
    console.log("delete", i);
    let cloneArr = mediaData;
    let tempObj = cloneArr[i];
    tempObj = { ...tempObj, file: "" };
    cloneArr[i] = tempObj;
    setMediaData([...cloneArr]);
  };

  //   this function is used for submit details
  const submitDetails = (e) => {
    e.preventDefault();
    if (!flag) {
      setOpen(true);
      setAlert({ sev: "error", content: "Please Fill All Details !" });
    } else if (!adData.discriptions) {
      setOpen(true);
      setAlert({ sev: "error", content: "Please Enter Description !" });
    } else {
      setLoading(true);
      const formData = new FormData();
      formData.append("uploadFor", "ads");
      mediaData.map((media) => formData.append("files", media.file));
      axios
        .post(`${process.env.REACT_APP_IPURL}/admin/UploadFile`, formData, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("sociomeeUser"))?.token
            }`,
          },
        })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.data.successResult);
            mediaData.file = res.data.data.successResult[0];
            adData.media = mediaData.map((media, i) => {
              media.file = res.data.data.successResult[i];
              return media;
            });
            console.log(adData);
            axios
              .post(
                `${process.env.REACT_APP_IPURL}/ads/create/adMaster/adType/subTypes/adManager`,
                adData,
                {
                  headers: {
                    Authorization: `Bearer ${
                      JSON.parse(localStorage.getItem("sociomeeUser"))?.token
                    }`,
                  },
                }
              )
              .then((response) => {
                console.log(response);
                setLoading(false);
                setOpen(true);
                setAlert({
                  sev: "success",
                  content: "Ad Created  Successfully",
                });
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            setOpen(true);
            setAlert({
              sev: "error",
              content: `${res.data.data.errorResult}`,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const imageUpload = (id) => {
    document.getElementById(`input_file${id}`).click();
  };

  // Cancel Snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useLayoutEffect(() => {
    dispatch(loadAdType());
  }, []);

  useEffect(() => {
    mediaData &&
      mediaData.map((media) => {
        if (
          media.heading &&
          media.subHeading &&
          media.file &&
          adData.discriptions
        ) {
          setFlag(true);
        } else {
          setFlag(false);
        }
      });
  }, [mediaData, adData]);

  return (
    <>
      <AdmanagerHeaderR />

      <div className="col-lg-12">
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
            <div className="desh-icon-main pl-1">
              <div className="desh-icon">
                <img src="/assets/images/adIcon/folder.png" alt="" />
                <p className="ml-2">Create Ad</p>
              </div>
              <div className="desh-second">
                <i className="fa fa-ellipsis-h"></i>
              </div>
            </div>

            <div className="desh-icon-main pl-2">
              <div className="desh-icon">
                <img src="/assets/images/adIcon/folder.png" alt="" />
                <p className="ml-2">
                  {adTypeData?.adTypes} - ({adTypeData?.adMastrerType.name})
                </p>
              </div>
              <div className="desh-second">
                <i className="fa fa-ellipsis-h"></i>
              </div>
            </div>

            <div className="create-add-main">
              <div className="create-add">
                <div className="create-add-one">
                  <img src="/assets/images/adIcon/folder.png" alt="" />
                  <p className="ml-2">
                    {adTypeData?.adTypes} - ({adTypeData?.adMastrerType.name})
                    Carousel Image Ad
                  </p>
                </div>
                <div className="create-add-second">
                  <i className="fa fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 pad-zero">
            {/* NAVIGATION AND STEP */}
            <div className="col-lg-12 step-ad-heading">
              <div className="row step-section">
                <div className="col-lg-2 ad-count">
                  <button className="ad-count-btn">3</button>
                  <p className="ad-count-step">Step 3</p>
                </div>
                <div className="col-lg-10">
                  <p className="ad-count-heading">Configure Your Ad</p>
                  <p>Set-up your ad campaign with an image and description</p>
                </div>
              </div>
            </div>

            {/* Section SCREEN */}
            <div className="col-lg-12 pad-zero">
              <div className="row ad-types-of-type-map ">
                <div className="single-ad pad-zero">
                  <div className="navigate col-lg-12">
                    <div className="row">
                      <div className="navigate-left col-lg-6">
                        <p className="navigate-color">
                          {adTypeData?.adTypes} - (
                          {adTypeData?.adMastrerType.name}) / Carousel Images ad
                        </p>
                      </div>
                      <div className="navigate-right col-lg-6">
                        <h4>
                          Preview on
                          <span>
                            <button
                              type="button"
                              class="btn btn-lg btn-size btn-toggle"
                              data-toggle="button"
                              aria-pressed="false"
                              autocomplete="off"
                            >
                              <div class="handle"></div>
                            </button>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* <div className="row"> */}
                  {mediaData &&
                    mediaData.map((data, i) => {
                      return (
                        <div
                          className="col-lg-12 inputs d-flex mb-3 p-0 input-img"
                          key={i}
                        >
                          <div className="col-lg-6 col-12">
                            <div className="d-flex justify-content-between">
                              <p className="p-heading">
                                Ad Heading
                                <span className="pl-1">
                                  <img
                                    src="/assets/images/adIcon/alert-circle.png"
                                    alt=""
                                  />
                                </span>
                              </p>
                              <p className="p-heading">({i + 1}/5) Media</p>
                            </div>
                            <div className="">
                              <input
                                type="text"
                                className="form-control p-2"
                                placeholder="50% sale at girls fashion"
                                maxLength={"42"}
                                name="heading"
                                value={data.heading}
                                onChange={(e) => mediaInputsHandler(e, i)}
                              />
                            </div>
                            <p className="p-max-car">Max 42 Characters</p>

                            <div className="">
                              <p className="p-heading">
                                Ad Sub-Heading
                                <span className="pl-1">
                                  <img
                                    src="/assets/images/adIcon/alert-circle.png"
                                    alt=""
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="">
                              <input
                                type="text"
                                className="form-control p-2"
                                placeholder="Enter advertisement sub-heading..."
                                maxLength={"60"}
                                name="subHeading"
                                value={data.subHeading}
                                onChange={(e) => mediaInputsHandler(e, i)}
                              />
                            </div>
                            <p className="p-max-car">Max 60 Characters</p>
                          </div>
                          <div className="col-lg-6 col-12">
                            <div className="d-flex justify-content-between">
                              <p className="p-heading">Add Your Image</p>
                              {i !== 0 && (
                                <p
                                  className="p-heading text-primary"
                                  role="button"
                                  onClick={() =>
                                    setMediaData(
                                      mediaData.filter(
                                        (med, ind) =>
                                          ind !== mediaData.length - 1
                                      )
                                    )
                                  }
                                >
                                  Remove
                                </p>
                              )}
                            </div>
                            {data.file?.name ? (
                              <div className="recomandation-display-block position-relative">
                                <img
                                  src={URL.createObjectURL(data.file)}
                                  alt=""
                                />
                                <div className="recom-btn-cont-blk new-recom-btn-cont-blk bottom-0">
                                  <div className="container">
                                    <div className="row d-flex justify-content-center">
                                      <div className="col-4 px-auto border-right">
                                        <h4
                                          className="text-center"
                                          role="button"
                                          onClick={() => imageUpload(i)}
                                        >
                                          Edit
                                        </h4>
                                      </div>
                                      <div className="col-4 px-auto border-left">
                                        <h4
                                          className="text-center"
                                          role="button"
                                          onClick={() => deleteImageHandler(i)}
                                        >
                                          Delete
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div
                                role="button"
                                onClick={() => imageUpload(i)}
                                className="upload-img w-100 d-flex flex-column justify-content-center align-items-center"
                              >
                                <img
                                  src="/assets/images/adIcon/upload.png"
                                  alt=""
                                />
                                <h4 className="mt-2 font-weight-bold">
                                  Upload Image
                                </h4>
                              </div>
                            )}

                            <input
                              type="file"
                              name="file"
                              id={`input_file${i}`}
                              hidden
                              onChange={(e) => {
                                e.target.files[0].type.slice(0, 5) === "image"
                                  ? mediaInputsHandler(e, i)
                                  : deleteImageHandler(e, i);
                                e.target.files[0].type.slice(0, 5) !==
                                  "image" && setOpen(true);
                                setAlert({
                                  sev: "error",
                                  content: "Please Select Image Only !",
                                });
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  {/* </div> */}

                  {mediaData.length < 5 && (
                    <div class="ad-buttons-blk">
                      <div
                        class="ad-btn-new ad-green-clr-btn"
                        role="button"
                        onClick={() =>
                          setMediaData([
                            ...mediaData,
                            {
                              file: "",
                              fileType: "image",
                              heading: "",
                              subHeading: "",
                              callToActionId: "",
                            },
                          ])
                        }
                      >
                        + Add More Images
                      </div>
                    </div>
                  )}

                  <div className="textarea col-lg-12 pt-5">
                    <div className="">
                      <p className="p-heading">
                        Ad Description{" "}
                        <span className="pl-1">
                          <img
                            src="/assets/images/adIcon/alert-circle.png"
                            alt=""
                          />
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder=""
                        maxLength={"300"}
                        value={adData.discriptions}
                        onChange={(e) =>
                          setAdData({ ...adData, discriptions: e.target.value })
                        }
                      >
                        {" "}
                      </textarea>
                    </div>
                    <p className="p-max-car">Max 300 Characters</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="ad-btn">
                  <Link to="" className="btn-cancel">
                    Cancel
                  </Link>
                  <button
                    className="btn-next ml-2 without-input-fill"
                    onClick={submitDetails}
                    disabled={!flag}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            {loading && <Loader loading={loading} />}
          </div>
        </div>
      </div>
      <Stack spacing={2} sx={{ width: "100%" }} id="stack">
        {/* Snackbar */}
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={alert.sev}
            sx={{ width: "100%" }}
          >
            {alert.content}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default CaroselImageAdImage;
