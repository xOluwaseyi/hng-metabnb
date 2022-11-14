import React from "react";
import DiscoveryImage1 from "../../assets/DiscoveryImages/DiscoveryImage1.png";
import DiscoveryImage2 from "../../assets/DiscoveryImages/DiscoveryImage2.png";
import DiscoveryImage3 from "../../assets/DiscoveryImages/DiscoveryImage3.png";

const Discover = () => {
  return (
    <section className="bg-[#A02279] px-5 py-16 text-white flex flex-col lg:flex-row items-center justify-evenly">
    {/* discover description */}
      <div className="w-[90%] lg:w-[30%] flex flex-col gap-8">
        <h1 className="text-5xl font-bold">Metabnb NFTs</h1>
        <p className="leading-relaxed">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <div>
          <button className="bg-white text-[#A02279] py-3 px-5 rounded-lg w-auto">
            Learn more
          </button>
        </div>
      </div>

      {/* discover images */}
      <div className="w-[90%] md:w-[70%] lg:w-[50%] mt-10 lg:mt-0 relative h-[570px] ">
        <img src={DiscoveryImage1} alt="discovery-image" className="absolute right-[20px] w-[350px] lg:w-[400px]" />
        <img src={DiscoveryImage2} alt="discovery-image" className="absolute top-[140px] lg:top-[150px] lg:left-[80px] w-[350px] lg:w-[400px]" />
        <img src={DiscoveryImage3} alt="discovery-image"className="absolute top-[320px] md:top-[250px] right-[0px] w-[350px] lg:w-[400px]" />
      </div>
    </section>
  );
};

export default Discover;
