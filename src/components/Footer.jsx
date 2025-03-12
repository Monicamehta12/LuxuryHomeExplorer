import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import realtorLogo from "../assets/Realtor-logo-270x300.4bc6ee7d0c1d5a04fb58.png";
import mslLogo from "../assets/2020_MLS_FINAL_WHITE.f771c6b81b33204eab51.png";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (dropdownIndex) => {
    if (openDropdown === dropdownIndex) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(dropdownIndex); // Open the clicked dropdown
    }
  };    

  return (
    <div className="bg-neutral-600 text-white">
      <div className="w-full flex flex-wrap gap-x-20 gap-y-10 justify-between py-12 px-16">
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-10 font-semibold mt-2">
          <div className="flex flex-col gap-y-3">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-y-3">
            <Dropdown
              title="Buying"
              isOpen={openDropdown === 0}  // Check if the current dropdown is open
          onToggle={() => handleToggle(0)} 
              items={[
                { label: "Mortgage Calculator", link: "/buying/mortgage-calculator" },
                { label: "Listings", link: "/buying/listings" },
              ]}
            />
            <Dropdown
              title="Selling"
              isOpen={openDropdown === 1} // Check if the current dropdown is open
          onToggle={() => handleToggle(1)} 
              items={[{ label: "Free Home Evaluation", link: "/selling/free-home-evaluation" }]}
            />
            <Dropdown
              title="Information"
              isOpen={openDropdown === 2} // Check if the current dropdown is open
          onToggle={() => handleToggle(2)} 
              items={[{ label: "Real Estate Reports", link: "/information/real-estate-report" }]}
            />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-2xl pb-8 max-[575px]:self-start uppercase montserrat-font">
            Follow
          </h1>
          <div className="flex gap-x-5 my-2">
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
        </div>
        <div>
          <div className="mb-3">
            <img
              src={realtorLogo}
              alt="Realtor Logo"
              className="w-8 inline mr-2"
            />
            <span>
              The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are
              controlled by The Canadian Real Estate Association (CREA) and
              identify real estate professionals who are members of CREA.
            </span>
          </div>
          <div className="mb-3">
            <img src={mslLogo} alt="MSL Logo" className="w-8 inline mr-2" />
            <span>
              The trademarks MLS®, Multiple Listing Service® and the associated
              logos are owned by The Canadian Real Estate Association (CREA) and
              identify the quality of services provided by real estate
              professionals who are members of CREA.
            </span>
          </div>
          <p>
            Presented by <Link to="https://aptoconnect.com/">APTO Connect ©</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
