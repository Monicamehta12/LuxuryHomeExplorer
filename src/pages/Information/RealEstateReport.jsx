import React from "react";
import heroImg from "../../assets/shutterstock_2493365641-min.6a755df6ed7d1a882336.jpg";
import "../../App.css";

const RealEstateReport = () => {
  return (
    <>
      <div className="max-w-[1100px] pt-[150px] mx-auto grid md:grid-cols-2 px-6 gap-x-24 gap-y-10 min-h-[70vh] mb-12">
        <div>
          <h1 className="text-4xl uppercase montserrat-font text-gray-700">
            Free Real Estate Reports
          </h1>
          <p className="font-semibold text-gray-500 my-5">
            Get exclusive buyer &amp; seller real estate reports to help you
            with your next purchase or sale. Get insider tips and tricks, and
            learn how to invest your time and money wisely in the real estate
            market. Just complete the form below, select all the reports you'd
            like to receive and have them emailed to your inbox right away. Get
            started now!
          </p>
          <form id="form">
            <div className="form-item">
              <label className="form-label">Name*</label>
              <input required className="form-input rounded-md mb-5" placeholder="Full Name" />
            </div>
            <div className="form-item">
              <label className="form-label">Email*</label>
              <input required className="form-input rounded-md mb-5" placeholder="Email Address" />
            </div>

            <div className="form-item">
              <label className="form-label">I am a*</label>
              <select required="" className="form-input rounded-md mb-5" name="Client Type">
                <option value="">Please Select</option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
                <option value="Renter">Renter</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-item">
              <label className="form-label">I am interested in:</label>
              <div className="grid grid-cols-2 gap-3 my-3">
                <div className="cursor-pointer">
                  <input
                    className="mr-2"
                    name="Interested in:"
                    type="checkbox"
                    id="1"
                    value="Buying guides"
                  />
                  <label for="1">Guides for Buying</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    name="Interested in:"
                    type="checkbox"
                    id="2"
                    value="Selling guides"
                  />
                  <label for="2">Guides for Selling</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    name="Interested in:"
                    type="checkbox"
                    id="3"
                    value="Choosing realtor"
                  />
                  <label for="3">Choosing a Realtor</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    name="Interested in:"
                    type="checkbox"
                    id="4"
                    value="Renovations"
                  />
                  <label for="4">Home Renovations</label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-neutral-700 text-white px-10 py-2 mt-6 cursor-pointer"
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

export default RealEstateReport;
