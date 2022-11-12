import React from "react";
import DiscoveryImage from "../../assets/DiscoveryImages/DiscoveryImage.png";

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
      <div>
        <img src={DiscoveryImage} alt="discovery-image" width={600} />
      </div>
    </section>
  );
};

export default Discover;
