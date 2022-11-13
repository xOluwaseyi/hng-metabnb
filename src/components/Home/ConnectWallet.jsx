import React from "react";
import ReactDOM from "react-dom";
import Metamask from "../../assets/WalletImages/metamask-logo.png";
import WalletConnect from "../../assets/WalletImages/walletconnect-logo.png";
import next from "../../assets/WalletImages/greaterthan.svg";

const WalletType = [
  {
    id: 1,
    img: Metamask,
    name: "Metamask",
  },
  {
    id: 2,
    img: WalletConnect,
    name: "WalletConnect",
  },
];

const ConnectWallet = ({ handleShowWallets }) => {
  return (
    <>
    {/* using react portal for semantic reasons since this is going on top of the content */}
      {ReactDOM.createPortal(
        <div className="w-[300px] md:w-[400px] fixed top-[20%] right-[50%] translate-x-2/4 translate-y-2/4 bg-white flex flex-col z-50 rounded-lg">
          <div className="h-full py-4 px-5 flex justify-between border-b-2 border-gray-300">
            <h1 className="font-bold">Connect Wallet</h1>
            <p className="cursor-pointer" onClick={handleShowWallets}>X</p>
          </div>

          <div className="p-5">
            <p>Choose your preferred wallet:</p>
            {WalletType.map((wallet) => {
              return (
                <div
                  key={wallet.id}
                  className="mt-3 cursor-pointer flex justify-between items-center border-2 rounded-xl px-3 py-1 hover:bg-[#F8F9FA] "
                >
                  <div className="flex items-center gap-3">
                    <img src={wallet.img} alt="metamask" />
                    <p className="font-bold">{wallet.name}</p>
                  </div>

                  <img src={next} alt="next" />
                </div>
              );
            })}
          </div>
        </div>,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};

export default ConnectWallet;
