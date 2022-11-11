import React from "react";
import img1 from "../../assets/HeroImages/img1.png";
import img2 from "../../assets/HeroImages/img2.png";
import img3 from "../../assets/HeroImages/img3.png";
import img4 from "../../assets/HeroImages/img4.png";

const HeroSection = () => {
  return (
    <main className="w-[85%] mx-auto flex gap-5 justify-between py-10">
      {/* text */}
      <div className="w-[50%]">
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
        <div className="w-[75%] border-2 rounded-lg flex items-center justify-between">
          <input type="search" className="border-2 py-3 px-3 w-[70%] border-none focus:outline-none" placeholder="Search for location" />
          <button type="button" className="bg-[#A02279] px-10 py-3 rounded-lg text-white">
            Search
          </button>
        </div>
      </div>

      {/* image */}
      <div className="flex">
        <div>
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
        </div>
        <div>
          <img src={img3} alt="img3" />
          <img src={img4} alt="img4" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
