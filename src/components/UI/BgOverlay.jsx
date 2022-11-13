import React from "react";
import ReactDOM from "react-dom";

const BgOverlay = ({ bg_function }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`fixed h-screen w-screen top-[0px] left-[0px] bg-black opacity-30 z-30`}
          onClick={bg_function}
        ></div>,
        document.getElementById("bg-overlay")
      )}
    </>
  );
};

export default BgOverlay;
