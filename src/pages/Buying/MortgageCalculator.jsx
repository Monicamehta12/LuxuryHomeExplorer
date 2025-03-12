import React from "react";

const MortgageCalculator = () => {
  return (
    <div className="w-full pt-[180px] px-6 mx-auto">
      <div className="px-4 md:px-24 lg:px-46 montserrat-font mb-6">
        <h1 className="text-3xl md:text-4xl pb-4 uppercase text-gray-700">
          Mortgage Calculator
        </h1>
        <span className="text-lg font semi-bold text-gray-500">
          Find a price range that works with your budget by using our Mortgage
          Calculator
        </span>
      </div>

      <iframe
        src="https://www.mortgagecalculator.org/webmasters/?downpayment=80000&amp;homevalue=400000&amp;loanamount=320000&amp;interestrate=7&amp;loanterm=30&amp;propertytax=2700&amp;pmi=1&amp;homeinsurance=1500&amp;monthlyhoa=0"
        scrolling="no"
        className="w-full h-[2200px] md:h-[1200px] border-0"
      >
      </iframe>
    </div>
  );
};

export default MortgageCalculator;
