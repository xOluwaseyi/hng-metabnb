import React from "react";
import { AdventureImages } from "../../assets/AdventureImages/AdventureImages";
import ImagesGrid from "../UI/ImagesGrid";

const AdventureInspiration = () => {
  return (
    <section className="py-10">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-10">
        Inspiration for your next adventure
      </h1>

      {/* images */}
      <ImagesGrid images={AdventureImages} />
    </section>
  );
};

export default AdventureInspiration;
