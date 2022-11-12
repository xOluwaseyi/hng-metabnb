import React from "react";
import Logo from "../../assets/metabnb-logo-w.svg";
import LogoText from "../../assets/metabnb-white-text.png";
import facebook from "../../assets/facebook-icon.svg";
import instagram from "../../assets/instagram-icon.svg";
import twitter from "../../assets/twitter-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E] py-14 text-white flex justify-around">
      {/* first div */}
      <div>
        <div >
          <img src={Logo} alt="logo" className="inline" />
          <img src={LogoText} alt="logo" className="inline-block h-[30px] w-auto ml-1" />
        </div>

        <div className="mt-20 mb-10 flex gap-5">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>

        <p>&copy; 2022 Metabnb </p>
      </div>
      {/* second div */}
      <div>
        <h3 className="text-lg">Community</h3>
        <ul className="flex flex-col gap-3 mt-3 font-light text-sm">
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
      </div>

      {/* third div */}
      <div>
        <h3 className="text-lg">Places</h3>
        <ul className="flex flex-col gap-3 mt-3 font-light text-sm">
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
      </div>

      {/* fourth div */}
      <div>
        <h3 className="text-lg">About us</h3>
        <ul className="flex flex-col gap-3 mt-3 font-light text-sm">
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
