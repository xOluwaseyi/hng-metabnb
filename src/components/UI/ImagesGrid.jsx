import React, { useState, useEffect } from "react";
import star from "../../assets/AdventureImages/star.svg";
import heart from "../../assets/AdventureImages/heart.svg";

const ImagesGrid = ({ images }) => {
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    if (images) {
      setImagesArray(images);
    }
  }, [images]);

  return (
    <div className="w-[85%] mx-auto grid place-items-center md:grid-cols-2 lg:grid-cols-4 gap-y-5">
      {imagesArray.map((image) => {
        return (
          <div
            key={image.id}
            className="border-2 w-[300px] py-2 rounded-2xl flex flex-col items-center gap-2"
          >
            <div className="relative w-[270px] h-[275px] rounded-xl overflow-hidden">
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
              <p>available for 2 weeks stay</p>
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
  );
};

export default ImagesGrid;