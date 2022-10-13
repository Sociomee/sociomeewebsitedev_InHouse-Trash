import React from "react";

const AnalysisSidebar = () => {
  return (
    <>
      <div className="col-lg-3 ad-left">
        <div className="desh-icon-main">
          <div className="desh-icon">
            <img src="/assets/images/adIcon/grid.png" alt="" />
            <p className="ml-2">New Lead Generation campaign...</p>
          </div>
          <div className="desh-second">
            <i className="fa fa-ellipsis-h"></i>
          </div>
        </div>

        <div className="desh-icon-main pl-2">
          <div className="desh-icon">
            <img src="/assets/images/adIcon/grid.png" alt="" />
            <p className="ml-2">New Lead Generation ad set</p>
          </div>
          <div className="desh-second">
            <i className="fa fa-ellipsis-h"></i>
          </div>
        </div>

        <div className="create-add-main">
          <div className="create-add">
            <div className="create-add-one">
              <img src="/assets/images/adIcon/folder.png" alt="" />
              <p className="ml-2">New Lead Generation ad</p>
            </div>
            <div className="create-add-second">
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalysisSidebar;
