import React from "react";
import aboutmeImg from "../assets/shutterstock_2302831127-min.4951ddec2c900727c46f.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  return (
    <div className="max-w-[1100px] pt-[180px] pb-[150px] px-6 grid md:grid-cols-2 gap-x-20 gap-y-10 h-full mx-auto min-h-[70vh] text-gray-700">
      <div>
        <img
          src={aboutmeImg}
          alt="About Profile image"
          className="rounded-xl w-full"
        />
        <div className="flex flex-col gap-y-2 mt-6">
          <h2 className="text-3xl">Alex Smith</h2>
          <div className="flex gap-x-6 my-2">
            <a href="">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faYoutube} className="text-xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faTiktok} className="text-xl" />
            </a>
          </div>
          <p className="text-lg">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />{" "}
            <span>123456789</span>
          </p>
          <p className="text-lg">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
            <span>alexsmith@coldwell.com</span>
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-4xl pb-8 uppercase">About me</h1>
        <div>
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
          <p>
            Born and raised in Ocean Park, Alex possesses an intimate knowledge
            of the community. He has kept a keen eye on development over the
            decades, from the earlier subdivisions, like Chantrell Park and
            Morgan Creek to the newer neighbourhoods, like Grandview and Pacific
            Douglas. Alex monitors the market daily and his local area knowledge
            offers his clients with a precise picture of the most current
            property values and sales activity. In South Surrey — White Rock and
            beyond throughout the Greater Vancouver area.
           </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
