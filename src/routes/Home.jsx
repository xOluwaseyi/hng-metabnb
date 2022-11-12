import React from "react";
import AdventureInspiration from "../components/Home/AdventureInspiration";
import Discover from "../components/Home/Discover";
import HeroSection from "../components/Home/HeroSection";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <AdventureInspiration />
      <Discover />
    </section>
  );
};

export default Home;
