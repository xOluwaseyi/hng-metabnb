import React from "react";
import { AdventureImages } from "./AdventureImages";
import star from "../../assets/AdventureImages/star.svg";
import heart from "../../assets/AdventureImages/heart.svg";


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
              className="border-2 w-[270px] py-2 rounded-2xl flex flex-col items-center gap-2"
            >
              <div className="relative w-[230px] h-[235px] rounded-xl overflow-hidden">
                <img
                  src={image.image}
                  alt="adventure-image"
                  className="object-cover h-full w-full"
                />
                <img src={heart} alt="heart" className="absolute top-3 right-3" />
              </div>

              <div className="flex justify-between w-[90%] text-[11px] text-[#434343]">
                <p>Desert King</p>
                <p className="font-bold">1MBT per night</p>
              </div>

              <div className="flex justify-between w-[90%] text-[11px] text-[#434343]">
                <p>2345km away</p>
                <p >available for 2 weeks stay</p>
              </div>

              <div className="flex gap-3 w-[90%] mt-1">
                {[1, 2, 3, 4, 5].map((starIndex) => {
                  return <img key={starIndex} src={star} alt="star" width={8} />;
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
