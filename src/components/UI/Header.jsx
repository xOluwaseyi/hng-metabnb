import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/metabnb-logo.svg";
import LogoText from "../../assets/metabnb-logotext.png";
import ConnectWallet from "../Home/ConnectWallet";
import BgOverlay from "./BgOverlay";

const Header = () => {
  const [showWallets, setShowWallets] = useState(false);
  const [nav, setNav] = useState(false);

    const showNav = () => {
      setNav(!nav);
    };

  const handleShowWallets = () => {
    setShowWallets(!showWallets);
    setNav(false);
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

      <i
        className="fa fa-bars lg:hidden text-xl cursor-pointer"
        onClick={showNav}
        aria-hidden="true"
      ></i>

      {/* desktop nav */}
      <nav className="w-[70%] hidden lg:flex justify-between items-center gap-16 text-lg">
        <div className="flex gap-16">
          <Link to="/">Home</Link>
          <Link to="places">Place to stay</Link>
          <Link to="#">NFTS</Link>
          <Link to="#">Community</Link>
        </div>

        <button
          onClick={handleShowWallets}
          className="bg-[#A02279] px-5 py-2 text-white rounded-xl"
        >
          Connect wallet
        </button>
      </nav>

      {nav && <BgOverlay bg_function={showNav} />}

      {/* mobile and tab nav */}
      {ReactDOM.createPortal(
        <nav
          className={`mobileNav ${
            nav ? "right-[0px] w-[70%]" : "right-[-100vw] w-full"
          }`}
        >
          <i
            className="fa fa-times text-xl text-right cursor-pointer"
            onClick={showNav}
            aria-hidden="true"
          ></i>

          <div className="flex flex-col items-center gap-8 mt-28">
            <Link to="/" onClick={showNav}>
              Home
            </Link>
            <Link to="places" onClick={showNav}>
              Place to stay
            </Link>
            <Link to="#" onClick={showNav}>
              NFTS
            </Link>
            <Link to="#" onClick={showNav}>
              Community
            </Link>
          </div>

          <button
            onClick={handleShowWallets}
            className="bg-[#A02279] px-5 py-2 text-white rounded-xl"
          >
            Connect wallet
          </button>
        </nav>,
        document.getElementById("modal-overlay")
      )}

      {showWallets && <BgOverlay bg_function={handleShowWallets} />}
      {showWallets && <ConnectWallet handleShowWallets={handleShowWallets} />}
    </header>
  );
};

export default Header;
