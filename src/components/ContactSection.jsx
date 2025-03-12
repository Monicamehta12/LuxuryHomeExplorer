import React from "react";
import "../App.css";
import MapComponent from "./MapComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactSection = ({classname}) => {
  return (
    <div className={`w-full flex flex-wrap px-7 py-16 gap-x-16 gap-y-10 justify-center ${classname}`}>
      <div>
        <h4 className="text-lg min-w-[20vw] mb-6 font-semibold montserrat-font">
          Questions? I'm here to help
        </h4>
        <form action="">
          <div className="form-item">
            <label htmlFor="name" className="form-label">
              Name*
            </label>
            <input type="text" className="form-input mb-5 rounded-md" placeholder="Full Name" />
          </div>
          <div className="form-item">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="email"
              className="form-input mb-5 rounded-md"
              placeholder="Email Address"
            />
          </div>
          <div className="form-item">
            <label htmlFor="message" className="form-label">
              Message*
            </label>
            <textarea
              name="message"
              id="message"
              className="form-input mb-5 rounded-md resize-none h-32"
              placeholder="Your Message"
            ></textarea>
          </div>
          
          <button className="bg-neutral-600 px-10 text-white py-2">Send</button>
        </form>
      </div>
      <div className="min-w-[30vw]">
        <MapComponent src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.1670922064877!2d-79.3108446!3d43.686289499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc14ec855631%3A0xb3d0feb68a2d0ed3!2s85%20Cedarvale%20Ave%2C%20Toronto%2C%20ON%20M4C%204J7!5e0!3m2!1sen!2sca!4v1730912488107!5m2!1sen!2sca" />
        <div className="flex flex-col gap-y-2 mt-6">
          <h2 className="text-2xl">Alex Smith</h2>
          <p className="text-lg">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-800" />
            <span>123456789</span>
          </p>
          <p className="text-lg">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-800" />
            <span>alexsmith@coldwell.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
