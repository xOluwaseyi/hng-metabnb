import React from "react";
import ReactDOM from "react-dom";

const BgOverlay = ({ bg_function }) => {
  return (
    <>
      {/* using react portal for semantic reasons since this is going on top of the content */}
      {/* this component is for the black background when connect wallet or nav is displayed */}
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
