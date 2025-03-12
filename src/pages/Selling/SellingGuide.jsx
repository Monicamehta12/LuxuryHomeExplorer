import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SellingGuide = () => {
  const [accordion, showAccordion] = useState();

  const handleAccordionToggle = (menu) => {
    // Toggle the selected submenu
    showAccordion(accordion === menu ? null : menu); // Close the menu if it is already open
  };

  return (
    <div className="max-w-[1100px] mx-auto px-7 pt-40 mb-20 min-h-[55vh]">
      <h1 className="text-4xl uppercase montserrat-font mb-8 text-gray-700">
        Guide for Sellers
      </h1>
      <div className="flex flex-col gap-y-3">
        <div>
          <div className="flex justify-between py-4 px-3 cursor-pointer bg-slate-200 items-center">
            <span>Selling Your Home</span>
            <FontAwesomeIcon
              icon={accordion === "0" ? faChevronUp : faChevronDown}
            />
          </div>
        </div>

        {/* what can i afford section */}
        <div>
          <div
            className="flex justify-between py-4 px-3 cursor-pointer bg-slate-200 items-center relative"
            onClick={() => handleAccordionToggle("1")}
          >
            <span>Choosing the Right Sales Representative</span>
            <FontAwesomeIcon
              icon={accordion === "1" ? faChevronUp : faChevronDown}
              className="transition-transform duration-300 transform"
            />
          </div>
          {accordion === "1" && (
            <div className="py-8 px-3 bg-slate-100 tranform translate-y-0 transition-all duration-300">
              <p className="mb-6">
                Our sales representative is a trained professional who knows all
                aspects of the real estate market. A sales representative will
                save you time, money and aggravation. As with purchasing a home,
                you want to list with the sales representative who is the expert
                in your location. After all, potential purchasers will be
                calling this same "area expert" to inquire about houses for
                sale. There will be a few sales representatives who are
                knowledgeable about your neighbourhood. Call them up and
                interview them. You need to feel comfortable with him or her,
                after all, they will be working for you.
              </p>
              <h3 className="text-3xl mb-6">
                Should You Go With a Non-Exclusive or Exclusive Listing
                Arrangement?
              </h3>
              <p className="mb-6">
                If you enter into this type of arrangement with your sales
                representative, you are giving him or her the exclusive right to
                find a purchaser for your home. With this type of agreement, no
                other sales representative will bring potential buyers to your
                home, because only the listing sales representative is entitled
                to the commission. You may consider this type of arrangement in
                a Sellers' Market during which time there are more people
                interested in purchasing a home than there are homes available.
              </p>

              <h3 className="text-3xl mb-6">Understand Market Conditions</h3>
              <p className="mb-6">
                The real estate market is in constant flux, not only as a whole
                but in particular areas as well. Knowing what is going on in the
                overall and local real estate markets will help you understand
                how these conditions can affect the sale of your home. We've
                designed the following comparison to help give you an overview
                of the three significant market positions. When you meet with
                your sales representative, ask about the current state of the
                market.
              </p>

              <h3 className="text-3xl mb-6">Buyer's Market:</h3>
              <p className="mb-6">
                The supply of homes on the market exceeds
                demand.Characteristics: High inventory of homes. Few buyers
                compared to availability. Homes usually stay on the market
                longer. Prices are stable or perhaps dropping. Implications:
                Buyers spend more time looking for a home, and when they
                negotiate, they usually have more leverage.
              </p>

              <h3 className="text-3xl mb-6">Seller's Market:</h3>
              <p className="mb-6">
                The number of potential buyers exceeds the supply of homes on
                the market. Characteristics: There is a smaller inventory of
                homes with many buyers. Homes sell quickly. Prices usually
                increase. Implications: Prices may be higher or perhaps
                climbing. Buying decisions must be made quickly. Conditional
                offers may be rejected.
              </p>

              <h3 className="text-3xl mb-6">Balanced Market:</h3>
              <p className="mb-6">
                The number of homes on the market is roughly equal to the
                demand. Characteristics: Demand equals supply. Sellers accept
                reasonable offers. Homes sell within a reasonable time period.
                Prices generally remain stable. Implications: There is less
                tension among buyers and sellers. There is a reasonable number
                of homes to choose from.
              </p>
            </div>
          )}
        </div>

        {/* Buyer team and team roles */}
        <div>
          <div
            className="flex justify-between py-4 px-3 cursor-pointer bg-slate-200 items-center relative"
            onClick={() => handleAccordionToggle("2")}
          >
            <span>Closing the Sale</span>
            <FontAwesomeIcon
              icon={accordion === "2" ? faChevronUp : faChevronDown}
              className="transition-transform duration-300 transform"
            />
          </div>
          {accordion === "2" && (
            <div className="py-8 px-3 bg-slate-100 tranform translate-y-0 transition-all duration-300">
              <h3 className="text-3xl mb-6">Home</h3>
              <p className="mb-6">
                Closing is a time of packing and organization. Be sure you do
                not pack anything that you agreed to sell! Unless you
                specifically mentioned certain fixtures, everything must remain
                in place. You are responsible for handing over the home in the
                same condition it was at the time of closing. This applies to
                everything that was in the agreement. If the home suffers a
                major disaster, you are responsible for telling the buyer, at
                which point the buyer may walk away from the deal and have the
                deposit returned. The buyer may also choose to close and receive
                any insurance proceeds. In this unfortunate event, remember not
                to make any repairs until you find out what the buyer wants to
                do.
              </p>

              <h3 className="text-3xl mb-6">The Closing</h3>
              <p className="mb-6">
                Once signing the agreement, both the seller and buyer are under
                a legal obligation to close. If you decide not to for whatever
                reason, the buyer has the right to sue. If the buyer decides to
                walk away from the deal, you can claim the buyer's deposit or
                sue for damages.
              </p>
            </div>
          )}
        </div>

       </div>
    </div>
  );
};

export default SellingGuide;
