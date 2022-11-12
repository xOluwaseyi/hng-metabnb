import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/metabnb-logo.svg";
import LogoText from "../../assets/metabnb-logotext.png";
import ConnectWallet from "../Home/ConnectWallet";
import BgOverlay from "./BgOverlay";

const Header = () => {
  const [showWallets, setShowWallets] = useState(false);

  const handleShowWallets = () => {
    setShowWallets(!showWallets)
  };

  return (
    <header className="w-[85%] mx-auto py-8 flex items-center justify-between">
      <div>
        <img src={Logo} alt="logo" className="inline" />
        <img
          src={LogoText}
          alt="logo"
          className="inline-block h-[30px] w-auto ml-1"
        />
      </div>

      <nav className="flex gap-16">
        <Link to="/">Home</Link>
        <Link to="places">Place to stay</Link>
        <Link to="#">NFTS</Link>
        <Link to="#">Community</Link>
      </nav>

      <button
        onClick={handleShowWallets}
        className="bg-[#A02279] px-5 py-2 text-white rounded-xl"
      >
        Connect wallet
      </button>

      {showWallets && <BgOverlay handleShowWallets={handleShowWallets} />}
      {showWallets && <ConnectWallet handleShowWallets={handleShowWallets} />}
    </header>
  );
};

export default Header;
