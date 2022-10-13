import React, { useState } from "react";
import { useSelector } from "react-redux";
import ColorModal from "./Modals/ColorModal";

const CreateThought = ({
  postData,
  setPostData,
  bgReference,
  OpenGradientReference,
  gradientReference,
  closeBgClick,
  clickColorShow,
  clickGradient,
  clickColorHide,
  colorListReference,
  colorToggleRef,
}) => {
  // thought color selection
  const [selectedColor, setSelectedColor] = useState("#9acd32");

  // get all colors
  const { colors } = useSelector((state) => state.getColorsData);

  return (
    <>
      <div className="create-bg">
        <div className="bg-post gr-1" ref={bgReference} id="bg-post">
          <div className="input-sec" style={{ background: selectedColor }}>
            <input
              type="text"
              className="form-control enable text-white thought-input"
              placeholder="What's going on"
              value={postData?.caption}
              onChange={(e) =>
                setPostData({ ...postData, caption: e.target.value })
              }
            />
            <div className="close-icon" onClick={closeBgClick}>
              <button className="button-anchor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="iw-20 ih-20"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="gradient-bg-block" ref={OpenGradientReference}>
          <img
            className="opengradient-box"
            ref={gradientReference}
            onClick={clickColorShow}
            src="/assets/images/colorgroupbtn.png"
            alt=''
          />
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <ul className="gradient-bg d-none" ref={colorListReference}>
            <li className="closearrow-btn" onClick={clickColorHide}></li>
            {colors &&
              colors
                .map(({ id, colorHexCode }) => {
                  return (
                    <li
                      onClick={(e) => {
                        setSelectedColor(colorHexCode);
                        clickGradient(e, colorHexCode);
                      }}
                      className="gr-1"
                      style={{ background: colorHexCode }}
                      key={id}
                    ></li>
                  );
                })
                .slice(0, 16)}
          </ul>
          <div
          role='button'
            className="bg-color-btn d-none"
            ref={colorToggleRef}
            data-bs-toggle="modal"
            data-bs-target="#bgColorModel"
          >
            <img src="assets/images/bg-color.png" alt="" />
          </div>

        </div>
        {/* More Colors Modal */}
        <ColorModal colors={colors} clickGradient={clickGradient} />
      </div>
    </>
  );
};

export default CreateThought;
