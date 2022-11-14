import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="h-[600px] grid place-items-center">
        <div className="w-[80%] lg:w-auto">
          <p className="text-3xl lg:text-4xl font-bold text-center">Sorry, this page does not exist!</p>
          <p className="text-center mt-5 text-2xl lg:text-3xl ">
            Go{" "}
            <Link to="/" className="bg-[#A02279] px-5 py-1 mx-1 text-white">
              Home
            </Link>{" "}
            from here.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
