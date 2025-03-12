import React from "react";
import "../../app.css";

const Listings = () => {
  return (
    <div className="max-w-[1100px] pt-[180px] px-6 mx-auto">
      <div className="w-full bg-slate-100 rounded-md py-4 px-8 mt-10">
        <h1 className="text-2xl my-4 montserrat-font uppercase">Search</h1>
        <form className="flex flex-wrap gap-x-10 pointer-events-auto">
          <div className="form-item w-36 mb-5 md:mb-0">
            <label className="form-label">
              Bedrooms
            </label>
            <select
              className="form-input rounded-md"
            >
              <option value="">Select</option>
              <option value="BedroomsTotal eq 1">1</option>
              <option value="BedroomsTotal eq 2">2</option>
              <option value="BedroomsTotal eq 3">3</option>
              <option value="BedroomsTotal ge 3">3+</option>
            </select>
          </div>

          <div className="form-item w-36 mb-5 md:mb-0">
            <label className="form-label">Bathrooms</label>
            <select className="form-input rounded-md">
              <option value="">Select</option>
              <option value="BathroomsTotalInteger eq 1">1</option>
              <option value="BathroomsTotalInteger eq 2">2</option>
              <option value="BathroomsTotalInteger eq 3">3</option>
              <option value="BathroomsTotalInteger ge 3">3+</option>
            </select>
          </div>
          <div className="form-item w-36 mb-5 md:mb-0">
            <label className="form-label">Minimum Price</label>
            <input className="form-input max-h-[31px] rounded-md" placeholder="Min" />
          </div>
          <div className="form-item w-36 mb-5 md:mb-0">
            <label className="form-label">Maximum Price</label>
            <input className="form-input max-h-[31px] rounded-md" placeholder="Max" />
          </div>
        </form>
        <button className="mb-3 mt-8 inline-block bg-neutral-700 py-2 px-4 rounded-full text-white font-semibold">SEARCH</button>
      </div>
      <div className="flex justify-between items-end gap-x-10 flex-wrap">
        <h1 className="text-4xl py-8 mt-6 montserrat-font">RECENT LISTINGS</h1>
        <div className="flex-auto max-w-36 mb-8">
          <label className="form-label">Show:</label>
          <select className="form-input rounded-md">
            <option value="All">All Listings</option>
            <option value="Agent">Office Listings</option>
          </select>
        </div>
      </div>
      <div className="mt-32 min-h-[20vh]">
        <div className="bouncing-loader flex justify-center">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
