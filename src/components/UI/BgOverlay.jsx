import React from "react";
import ReactDOM from "react-dom";

const BgOverlay = ({ handleShowWallets }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`fixed h-screen w-screen top-[0px] left-[0px] bg-black opacity-30 z-30`}
          onClick={handleShowWallets}
        ></div>,
        document.getElementById("bg-overlay")
      )}
    </>
  );
};

export default BgOverlay;
