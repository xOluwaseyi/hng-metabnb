import React from "react";
import img1 from "../../assets/HeroImages/img1.png";
import img2 from "../../assets/HeroImages/img2.png";
import img3 from "../../assets/HeroImages/img3.png";
import img4 from "../../assets/HeroImages/img4.png";
import MBToken from "../../assets/HeroImages/MBToken.png";
import Metamask from "../../assets/HeroImages/Metamask.png";
import OpenSea from "../../assets/HeroImages/OpenSea.png";

const HeroSection = () => {
  return (
    <>
      <main className="w-[85%] mx-auto flex gap-5 justify-between py-10">
        {/* text */}
        <div className="w-[50%] my-auto">
          <h1 className="text-5xl leading-snug">
            Rent a <span className="text-[#A02279] font-bold">Place</span> away
            from <span className="text-[#A02279] font-bold">Home</span> in the{" "}
            <span className="text-[#A02279] font-bold">Metaverse</span>
          </h1>
          <p className="w-[90%] text-xl my-8">
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="w-[90%] flex items-center justify-between">
            <input
              type="search"
              className="border-2 py-3 px-3 w-[65%] rounded-tl-lg rounded-bl-lg border-r-0 focus:outline-none"
              placeholder="Search for location"
            />
            <button
              type="button"
              className="bg-[#A02279] border-2 border-[#A02279] w-[35%] px-10 py-3 rounded-tr-lg rounded-br-lg text-white"
            >
              Search
            </button>
          </div>
        </div>

        {/* image */}
        <div className="flex gap-2">
          <div className="mt-24">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" className="mt-2" />
          </div>
          <div>
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" className="mt-2" />
          </div>
        </div>
      </main>

      {/* banner */}
      <section className="bg-[#A02279] py-3 flex justify-around items-center">
        <img src={MBToken} alt="mbtoken" />
        <img src={Metamask} alt="metamask" />
        <img src={OpenSea} alt="opensea" />
      </section>
    </>
  );
};

export default HeroSection;
