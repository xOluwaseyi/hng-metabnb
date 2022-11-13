import React from 'react'
import { Link } from "react-router-dom";
import Settings from "../assets/PlaceToStayAssets/settings.svg"
import ImagesGrid from '../components/UI/ImagesGrid';
import { PlacesImages } from '../assets/PlaceToStayAssets/PlacesImages';

const PlaceToStay = () => {
  return (
    <section className="pb-10">
        <nav className="w-[85%] mx-auto justify-between mt-4 mb-10 flex flex-wrap items-center gap-4 lg:gap-14 text-lg">
          <Link to="#">Restaurant</Link>
          <Link to="#">Cottage</Link>
          <Link to="#">Castle</Link>
          <Link to="#">Fantast city</Link>
          <Link to="#">Beach</Link>
          <Link to="#">Carbins</Link>
          <Link to="#">Off-grid</Link>
          <Link to="#">Farm</Link>
          
          <div className="border-2 px-3 py-2 rounded-lg flex gap-5">
            <p>Location</p>
            <img src={Settings} alt="settingd" />
          </div>
        </nav>

      <ImagesGrid images={PlacesImages} />
    </section>
  );
}

export default PlaceToStay