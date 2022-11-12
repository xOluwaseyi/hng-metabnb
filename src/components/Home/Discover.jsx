import React from "react";
import DiscoveryImage from "../../assets/DiscoveryImages/DiscoveryImage.png";
import DiscoveryImage1 from "../../assets/DiscoveryImages/DiscoveryImage1.png";
import DiscoveryImage2 from "../../assets/DiscoveryImages/DiscoveryImage2.png";
import DiscoveryImage3 from "../../assets/DiscoveryImages/DiscoveryImage3.png";


const Discover = () => {
  return (
    <section className="bg-[#A02279] px-5 py-16 text-white flex items-center justify-evenly">
      <div className="w-[30%] flex flex-col gap-8">
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
      <div className="w-[50%] relative h-[570px] ">
        <img src={DiscoveryImage1} alt="discovery-image" width={400} className="absolute right-[20px]" />
        <img src={DiscoveryImage2} alt="discovery-image" width={400} className="absolute top-[150px] left-[80px] " />
        <img src={DiscoveryImage3} alt="discovery-image" width={400} className="absolute top-[250px] right-[0px]" />
      </div>
    </section>
  );
};

export default Discover;
