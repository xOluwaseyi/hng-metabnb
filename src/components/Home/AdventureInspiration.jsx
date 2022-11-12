import React from "react";
import { AdventureImages } from "./AdventureImages";
import star from "../../assets/AdventureImages/star.svg";

const AdventureInspiration = () => {

  return (
    <section className="py-10">
      <h1 className="text-center text-4xl font-bold pb-10">
        Inspiration for your next adventure
      </h1>

      <div className="w-[95%] mx-auto grid grid-cols-4 gap-7">
        {AdventureImages.map((image) => {
          return (
            <div
              key={image.id}
              className="border-2 p-2 rounded-2xl text-sm flex flex-col items-center gap-2"
            >
              <img src={image.image} alt="adventure-image" width={300} />

              <div className="flex justify-between w-[95%]">
                <p>Desert King</p>
                <p>1MBT per night</p>
              </div>

              <div className="flex justify-between w-[95%]">
                <p>2345km away</p>
                <p>Available for 2 weeks stay</p>
              </div>

              <div className="flex gap-3 mt-1 w-[95%]">
                {[1, 2, 3, 4, 5].map((starIndex) => {
                  return <img key={starIndex} src={star} alt="star" />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdventureInspiration;
