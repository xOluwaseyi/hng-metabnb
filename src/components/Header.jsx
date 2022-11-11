import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/metabnb-logo.png";
import LogoText from "../assets/metabnb-logotext.png";

const Header = () => {
  return (
    <header className="w-[85%] mx-auto py-8 flex items-center justify-between">
      <img src={Logo} alt="logo" />

      <nav className="flex gap-16">
        <Link to="/">Home</Link>
        <Link to="places">Place to stay</Link>
        <Link to="#">NFTS</Link>
        <Link to="#">Community</Link>
      </nav>

      <button className="bg-[#A02279] px-5 py-2 text-white rounded-xl">
        Connect wallet
      </button>
    </header>
  );
};

export default Header;