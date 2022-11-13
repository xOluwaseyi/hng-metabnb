import React from 'react'
import { Link } from "react-router-dom";
import Settings from "../assets/PlaceToStayAssets/settings.svg"
import ImagesGrid from '../components/UI/ImagesGrid';
import { PlacesImages } from '../assets/PlaceToStayAssets/PlacesImages';

const PlaceToStay = () => {
  return (
    <section className="pb-10">
      <div className="w-[90%] mx-auto flex justify-evenly items-center mt-4 mb-10">
        <nav className="flex gap-14">
          <Link to="#">Restaurant</Link>
          <Link to="#">Cottage</Link>
          <Link to="#">Castle</Link>
          <Link to="#">Fantasticity</Link>
          <Link to="#">Beach</Link>
          <Link to="#">Carbins</Link>
          <Link to="#">Off-grid</Link>
          <Link to="#">Farm</Link>
          <Link to="#">Location</Link>
        </nav>

        <div className="border-2 px-3 py-2 rounded-lg flex gap-5">
          <p>Location</p>
          <img src={Settings} alt="settingd" />
        </div>
      </div>

      <ImagesGrid images={PlacesImages} />
    </section>
  );
}

export default PlaceToStay