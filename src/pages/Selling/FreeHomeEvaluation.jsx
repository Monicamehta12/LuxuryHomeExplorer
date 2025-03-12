import React from "react";
import heroImg from "../../assets/shutterstock_2493365641-min.6a755df6ed7d1a882336.jpg";
import "../../App.css";

const FreeHomeEvaluation = () => {
  return (
    <>
      <div className="max-w-[1100px] pt-[150px] mx-auto grid md:grid-cols-2 px-6 gap-x-24 gap-y-10 min-h-[70vh] mb-12">
        <div>
          <h1 className="text-4xl uppercase montserrat-font text-gray-700">
            Free Home Evaluation
          </h1>
          <p className="font-semibold text-gray-500 my-5">
            Wondering how much your home would sell for in today's market?
            Please complete the form below and I would be happy to send you a
            Free Home Evaluation.
          </p>
          <form id="form">
            <input type="hidden" name="access_key" value="" />
            <input
              type="hidden"
              name="subject"
              value="New Lead Interested in Real Estate Reports"
            />
            <div className="form-item">
              <label className="form-label">Name*</label>
              <input required className="form-input rounded-md mb-5" placeholder="Full Name" />
            </div>
            <div className="form-item">
              <label className="form-label">Email*</label>
              <input required className="form-input rounded-md mb-5" placeholder="Email Address" />
            </div>
            <div className="form-item">
              <label className="form-label">Phone*</label>
              <input required className="form-input rounded-md mb-5" placeholder="Phone Number" />
            </div>
            <div className="form-item">
              <label className="form-label">Property Address*</label>
              <input
                required
                className="form-input rounded-md mb-5"
                placeholder="Address of the Property"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-x-10">
              <div className="form-item">
                <label className="form-label">City*</label>
                <input
                  required
                  className="form-input rounded-md mb-5"
                  placeholder="City of the Property"
                />
              </div>
              <div className="form-item">
                <label className="form-label">Province/State*</label>
                <input
                  required
                  className="form-input rounded-md mb-5"
                  placeholder="Province/State of the Property"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-10">
              <div className="form-item">
                <label className="form-label">Property Size*</label>
                <input
                  required
                  className="form-input rounded-md mb-5"
                  placeholder="Approx. Square Footage"
                />
              </div>
              <div className="form-item">
                <label className="form-label">Lot Size*</label>
                <input
                  required
                  className="form-input rounded-md mb-5"
                  placeholder="Approx. Square Footage/Acreage"
                />
              </div>
            </div>

            <div className="form-item">
              <label className="form-label">Property Type*</label>
              <select required className="form-input rounded-md mb-5">
                <option value="">Please Select</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Land">Land</option>
                <option value="Parking">Parking</option>
                <option value="Investment">Investment</option>
                <option value="Agricultural">Agricultural</option>
              </select>
            </div>
            <div className="form-item">
              <label className="form-label">Building Type*</label>
              <select required className="form-input rounded-md mb-5">
                <option value="">Please Select</option>
                <option value="House">House</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Condo">Condo</option>
                <option value="Duplex">Duplex</option>
                <option value="Triplex">Triplex</option>
                <option value="Office">Office</option>
                <option value="Mobile Home">Mobile Home</option>
                <option value="Retail">Retail</option>
              </select>
            </div>
            <div className="form-item">
              <label className="form-label">Other Notes</label>
              <textarea
                className="form-input resize-none h-32 rounded-md mb-5"
                placeholder="Please tell me any other information you feel I should know about your property"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-xl bg-neutral-700 text-white px-10 py-2 mt-3 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="overflow-hidden h-[600px]">
          <img className="h-full w-full object-cover" src={heroImg} />
        </div>
      </div>
    </>
  );
};

export default FreeHomeEvaluation;
