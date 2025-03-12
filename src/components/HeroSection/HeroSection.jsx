import React from "react";
import heroImg from "../../assets/shutterstock_2493365641-min.6a755df6ed7d1a882336.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] flex relative text-white font-medium">
      {/* Left side of Hero Section */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center flex-col absolute lg:relative">
        <h1 className="md:text-5xl text-3xl pb-12 text-center font-bold lg:text-neutral-600 montserrat-font">
          Find Your Dream Home
        </h1>
        <div className="flex gap-5 self-center">
          <div className="relative">
            <input
              type="text"
              className="form-input rounded-full"
              placeholder="Search Keyword"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute text-stone-400 right-4 top-3"
            />
          </div>
          <Link to="#">
            <button className="rounded-full bg-neutral-600 px-4 font-semibold py-[5px] cursor-pointer">
              Search
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full px-10 py-6 absolute bottom-6">
          <div className="flex mb-5 w-[70%] md:w-auto md:mb-0 bg-neutral-600 rounded-full py-[5px] px-5 gap-3 items-center cursor-pointer">
            <FontAwesomeIcon icon={faPhone} />
            <span>Contact Alex Now</span>
          </div>
          <Link to="/buying/listings">
            <div className="flex justify-center items-center gap-2">
              <span className="font-semibold lg:text-neutral-600">
                See All Listings
              </span>
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="-rotate-45 lg:text-neutral-600"
              />
              <img
                src={heroImg}
                alt="Listings logo"
                className="size-12 rounded-full"
              />
            </div>
          </Link>
        </div>
        {/* <img src={heroImg} alt="Hero Image" className="rounded-2xl w-[100%]m-5 bg-cover" /> */}
      </div>
      {/* Right side of Hero Section */}
      <div className="hero-section w-full lg:w-1/2 rounded-2xl m-5">
      </div>
    </div>
  );
};

export default Hero;
