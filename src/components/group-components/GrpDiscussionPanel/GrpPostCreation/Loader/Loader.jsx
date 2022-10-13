import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { green } from "@mui/material/colors";

const Loader = ({ loading }) => {
  return (
    <>
      <Backdrop
        sx={{
          color: green[500],
          position: "absolute",
          marginTop: "-12px",
          marginLeft: "-12px",
          zIndex:2,
          borderRadius:'7px',
        }}
        open={loading}
        // onClick={!loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Loader;
