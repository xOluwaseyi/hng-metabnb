import React from "react";
import Logo from "../../assets/metabnb-logo-w.svg";
import LogoText from "../../assets/metabnb-white-text.png";
import facebook from "../../assets/facebook-icon.svg";
import instagram from "../../assets/instagram-icon.svg";
import twitter from "../../assets/twitter-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E] py-14 text-white flex flex-col md:flex-row justify-around items-center md:items-start">
      {/* footer details */}
      <div className="mb-10 md:mb-0">
        <div>
          <img src={Logo} alt="logo" className="inline" />
          <img src={LogoText} alt="logo" className="inline-block h-[30px] w-auto ml-1" />
        </div>

        <div className="my-7 md:mt-20 md:mb-10 flex justify-center md:justify-start gap-5">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>

        <p className="text-center md:text-start">&copy; 2022 Metabnb </p>
      </div>

      {/* community */}
      <div>
        <h3 className="text-xl font-extrabold">Community:</h3>
        <ul className="flex flex-col items-center md:items-start gap-3 mt-3 font-light text-lg">
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
      </div>

      {/* places */}
      <div className="my-10 md:my-0">
        <h3 className="text-xl font-extrabold text-center md:text-start">Places:</h3>
        <ul className="flex flex-col items-center md:items-start gap-3 mt-3 font-light text-lg">
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
      </div>

      {/* about us */}
      <div>
        <h3 className="text-xl font-extrabold">About us:</h3>
        <ul className="flex flex-col items-center md:items-start gap-3 mt-3 font-light text-lg">
          <li>Road map</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
