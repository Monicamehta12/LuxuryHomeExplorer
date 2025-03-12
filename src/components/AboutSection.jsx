import React from "react";
import aboutusImg from "../assets/shutterstock_2302831127-min.4951ddec2c900727c46f.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="bg-slate-800 w-full px-10 py-32 text-white">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="flex flex-col items-center w-full lg:w-[40%]">
          <h1 className="text-4xl pb-10 px-10 uppercase text-center">
            About Me
          </h1>
          <div className="h-52 w-52 lg:w-64 lg:h-64 rounded-full overflow-clip mx-4 mb-12">
            <img
              src={aboutusImg}
              alt="About us profile image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col lg:pr-[25%] text-xl">
          <p className="mb-5">
            Alex brings a unique perspective to real estate. A pioneer of social
            media and digital marketing, with over a decade of expertise. He has
            a true understanding of luxury service, branding and positioning,
            having collaborated with numerous global brands, including
            Mercedes-Benz, Porsche, Nordstrom, Lacoste and Shangri-La Hotels &
            Resorts.
          </p>
          <p className="mb-5">
            Combined with experience in luxury home marketing, home staging, and
            personal experience investing in real estate, his business acumen
            and passion for real estate give his clients an edge in the market.
            Whether you’re looking to buy or sell, Alex will be there for you
            every step of the way, with professional guidance tailored
            personally to you. His client-centered approach allows him to
            deliver an elevated experience through premium service at every
            stage of your real estate journey.
          </p>
          <div className="flex gap-x-4 mt-4">
            <button>
              <Link
                to="/contact"
                className="px-4 uppercase bg-white text-slate-800 py-2 border-transparent border-2 hover:border-white hover:bg-slate-800 hover:text-white transition-colors duration-500 ease-in-out"
              >Contact Me</Link>
            </button>

            <Link
              to="/about"
              className="uppercase border border-2 border-white py-2 px-5 hover:bg-white hover:text-slate-800 transition-colors duration-500 ease-in-out "
            >
              Full Bio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
