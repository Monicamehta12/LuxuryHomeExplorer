import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const BuyingGuide = () => {
  const [accordion, showAccordion] = useState();

  const handleAccordionToggle = (menu) => {
    // Toggle the selected submenu
    showAccordion(accordion === menu ? null : menu); // Close the menu if it is already open
  };

  return (
    <div className="max-w-[1100px] mx-auto px-7 pt-40 mb-20 min-h-[55vh]">
      <h1 className="text-4xl uppercase montserrat-font mb-8 text-gray-700">
        Guide for Buyers
      </h1>
      <div className="flex flex-col gap-y-3">
        <div>
          <div className="flex justify-between py-4 px-3 cursor-pointer bg-slate-200 items-center">
            <span>Getting started</span>
            <FontAwesomeIcon icon={accordion === '0'? faChevronUp : faChevronDown} />
          </div>
        </div>

        {/* what can i afford section */}
        <div>
          <div
            className="flex justify-between py-4 px-3 cursor-pointer bg-slate-200 items-center relative"
            onClick={() => handleAccordionToggle("1")}
          >
            <span>What can I Afford</span>
            <FontAwesomeIcon
              icon={accordion === '1'? faChevronUp : faChevronDown}
              className="transition-transform duration-300 transform"
            />
          </div>
          {accordion === "1" && (
            <div className="py-8 px-3 bg-slate-100 tranform translate-y-0 transition-all duration-300">
              <p className="mb-6">
                Homes come in every size, style and price range. Knowing what
                you can afford at the beginning of your search saves you time
                and disappointment later on. The following calculations outline
                the process financial institutions use to determine what you can
                afford.
              </p>
              <h3 className="text-3xl mb-6">First Affordabiltiy Rule</h3>
              <p className="mb-6">
                Lenders such as banks and trust companies allow you to spend
                approximately 32%* of your gross monthly income on housing costs
                (including property taxes, heating and, if applicable, 50% of
                condominium fees. The ratio of debt to income is referred to as
                the Gross Debt Service ratio or GDS).
                <br />
                The following calculation will you how much you can afford
                monthly for housing.
                <br />
                Your gross monthly income __________________________
                <br />
                Spouse’s gross monthly income ______________________
                <br />
                Other monthly income ______________________________
                <br />
                Total monthly income _______________________________
                <br />
                Monthly income x 32% = GDS ________________________
              </p>

              <h3 className="text-3xl mb-6">Second Affordability Rule</h3>
              <p>
                The second affordability rule is that your entire monthly debt
                load shouldn't be more that 40% of your gross monthly income.
                This includes housing costs and other debts, such as car loans
                and credit card payments. Lenders add up these debts to
                determine what percentage they are of your gross household
                monthly income. This is your Total Debt Service (TDS) ratio.
                <br />
                <br />
                The following calculation will you what you can afford for
                housing including your outstanding debts:
                <br />
                <br />
                A) Monthly Income from your GDS Calculation Above x 40% =
                TDS____________________
                <br />
                B) Add up your monthly payments for loans, credit cards and
                other debts__________________
                <br />
                Monthly income left for housing costs (subtract the amount from
                (A) from the amount in (B).
                <br />
                In addition to GDS and TDS ratios, financial institutions base
                their lending decision on your credit history, job stability and
                the amount of your down payment. Interest rates also affect the
                amount of financing you will be able to obtain.
                <br />
                <span className="mt-6 block">
                  *Please note that many lenders are prepared to exceed these
                  guidelines.
                </span>
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
            <span>Your Buyer Team and Their Roles</span>
            <FontAwesomeIcon
              icon={accordion === '2'? faChevronUp : faChevronDown}
              className="transition-transform duration-300 transform"
            />
          </div>
          {accordion === "2" && (
            <div className="py-8 px-3 bg-slate-100 tranform translate-y-0 transition-all duration-300">
              <h3 className="text-3xl mb-6">Sales Representatives</h3>
              <p className="mb-6">
                A real estate sales representative is a professional who can
                save you time and trouble. And possibly even a lot of money. You
                see, real estate sales representatives have the home buying
                experience most people lack. They know all of the steps and they
                are good negotiators who will work on your behalf.
              </p>

              <span className="mb-6 block">A sales representative will:</span>
              <ul className="list-disc list-inside mb-6">
                <li>Fine-tune your wants/needs list</li>
                <li>Get special computer access to listing information</li>
                <li>Screen houses so as not to waste your time</li>
                <li>Arrange appointments</li>
                <li>Offer helpful advice about the neighbourhood</li>
                <li>
                  Introduce you to trusted contacts who should be on your team,
                  such as mortgage brokers, lawyers, and home inspectors.
                </li>
              </ul>
              <p className="mb-6">
                Above all, find a real estate sales representative who is a
                professional in the type of home you're looking for. A country
                home professional may not be the urban market specialist you
                need. And when speaking with your sales representative, be as
                clear as possible about your needs
              </p>

              <h3 className="text-3xl mb-6">Contractors</h3>
              <p className="mb-6">
                If you've decided to do some renovations on your home to make it
                more sellable, it's time to look for a credible contractor.
                Before anyone begins work on your home, it is important to do
                your homework.
              </p>

              <span className="font-bold mb-6 block">Ask for Referrals</span>
              <p className="mb-6">
                Your architect will make recommendations Your sales
                representative will offer some suggestions Contact friends or
                neighbours who have had similar work done Ask at your local
                builder supply store When you're interviewing contractors,
                ensure their credibility. Contact their references. Ask to see
                some samples of the contractor's work and speak to his clients
                to ensure that they were satisfied with the price, length of
                time in which the project was completed and overall, how the
                project was handled. Also, check with your local Better Business
                Bureau. Once you have the names of a few contractors that look
                promising, arrange to get estimates from them. By arranging for
                three quotes you'll get a good idea of the costs and quality of
                work. When going over the project with your contractor, ensure
                that he understands your needs and your budget. Each contractor
                will have a different idea on how to approach the work and they
                should inspect your home before giving an estimate. If
                contractors are bidding based on an architect's plans, be
                certain that they have detailed their approach to the job based
                on the drawings. What's more, if there is a significant
                difference in the price, ask the contractors to explain their
                estimates. And keep in mind that the lowest price is not always
                the best. A price that's too low may mean that the contractor
                has undercut to get the project and then may submit additional
                project costs once the project is underway. As well, a high
                price doesn't always mean that you're getting gouged. The
                contractor may have budgeted for higher quality materials and
                may offer workmanship that is of an overall better quality. In
                every case, before you sign the contract, be certain that it is
                as detailed as possible to the point of noting the specific
                finishes and brand names of the products to be installed.{" "}
              </p>

              <p className="mb-6">
                <span className="font-bold mb-6 block">
                  Evaluating a Quotation
                </span>

                <ul className="list-disc list-inside">
                  <li>Are the specific details of the project outlined?</li>
                  <li>Are the specific costs detailed?</li>
                  <li>Is there a provision for extra costs?</li>
                  <li>Has a cap been set for the total project?</li>
                  <li>Is there a firm project timeline?</li>
                  <li>Has the contractor allotted time for inspections?</li>
                  <li>
                    Have you indicated that you wish to see all material
                    receipts?
                  </li>
                  <li>Will the work be subcontracted?</li>
                </ul>
              </p>

              <h3 className="text-3xl mb-6">Appraisers</h3>
              <p className="mb-6">
                Hiring an appraiser to appraise the value of a property you are
                considering to buy may seem sensible but it is highly
                unnecessary. Your lender will want their own personal appraiser
                anyway, so you could be wasting valuable money. As well, most
                sales representatives are competent and can do a "Comparative
                Market Analysis" for you, to establish a value range. The only
                situation where hiring an appraiser would become necessary is
                where the property is unusual with no comparable sales.
              </p>

              <h3 className="text-3xl mb-6">Lenders</h3>
              <p className="mb-6">
                The true test for a buyer is "What else can we buy for the same
                or less money?" In short, a lender is anyone who will give you
                money. There are private lenders and institutional lenders, like
                banks and credit unions. Even your brother-in-law can be your
                lender. Of course, when you're looking for a lender, you are
                looking for a long-term relationship and terms and rates which
                are beneficial to you. You really have a few options. You should
                go to a mortgage broker who will search the mortgage market for
                the best rates and conditions based on your circumstances.
                Usually, the broker is paid by the lender without cost to you.
                However, the cloudier your credit history, the more likely there
                will be a fee! A good mortgage broker will be connected to all
                major lenders through the mortgage market. You can also do your
                own search. With a good credit history, it's really not that
                complicated. Pick up your newspaper and you'll see what the
                different lending institutions are offering. Find the
                institution you feel you would be most comfortable with and one
                that offers the terms and conditions you're looking for. Then,
                go in person and negotiate your best deal. We'll go into more
                detail about this process in the arranging a mortgage section.
              </p>

              <h3 className="text-3xl mb-6">Mortgage Brokers</h3>
              <p className="mb-6">
                This is a person who will do the work in finding the institution
                which offers the mortgage terms and conditions that are right
                for you. Much like an insurance broker, this professional works
                for you and can offer you an unbiased referral. Although most
                brokers are paid a finders fee by the lender, some will charge
                2% of the total mortgage to find you a lender.
              </p>

              <h3 className="text-3xl mb-6">Lawyers/Notaries</h3>
              <p className="mb-6">
                A lawyer is there to represent your interest, and to process the
                documentation required. The legal aspects differ from province
                to province. Your sales representative can recommend lawyers to
                advise you on the steps to be taken before the keys to your new
                home are presented to you. A lawyer helps ensure you are
                protected!
              </p>

              <h3 className="text-3xl mb-6">Home Inspectors</h3>
              <p className="mb-6">
                Have the home inspected! Whether you make it a condition of
                purchase or not, having the property pre-inspected by a
                qualified home inspector will give you the added confidence that
                you've made the right decision. Be very careful to verify the
                qualifications of your home inspector because there are no
                government standards or licenses for home inspectors. Some home
                inspectors in Canada do not have any form of accreditation. For
                your protection make sure your home inspector is a member of
                (PACHI) or (OAHI). This is your assurance that they have met
                their education requirements, have the experience and carry E
                &amp; O Insurance.
              </p>

              <h3 className="text-3xl mb-6">Insurance Brokers</h3>
              <p className="mb-6">
                You'll want to make sure your property and valuables will be
                covered. A broker offers independent advice and can save you
                time, trouble and money. Plus, the bank will insist that you
                carry full insurance since your property is used as collateral
                against your mortgage.
              </p>
            </div>
          )}
        </div>

        {/* Mortgage Types */}
        <div>
          <div
            className="flex justify-between py-4 px-3 cursor-pointer bg-slate-200 items-center relative"
            onClick={() => handleAccordionToggle("3")}
          >
            <span>Mortgage Types</span>
            <FontAwesomeIcon
              icon={accordion === '3'? faChevronUp : faChevronDown}
              className="transition-transform duration-300 transform"
            />
          </div>
          {accordion === "3" && (
            <div className="py-8 px-3 bg-slate-100 tranform translate-y-0 transition-all duration-300">
              <h3 className="text-3xl mb-6">
                Conventional and High Ratio Mortgages
              </h3>
              <p className="mb-6">
                To qualify for a conventional mortgage, you simply have to have
                a 20% down payment of the purchase price, with the mortgage not
                exceeding 80% of the appraised value. If your down payment is
                less than 20%, then you qualify for a high-ratio mortgage. This
                type of mortgage requires loan insurance, which can cost an
                additional 0.6% to 4.50% of the mortgage amount. With this type
                of mortgage, you could also be limited to a maximum house price.
              </p>

              <h3 className="text-3xl mb-6">Second Mortgage</h3>
              <p className="mb-6">
                Of course, if you cannot add on to your mortgage, you may
                consider a second mortgage. Each mortgage uses your home as
                security and gives the mortgagee the right to take your home if
                you default on your loan. The first mortgagee gets paid first in
                cases of default and has the best chance of recovering all of
                its money. So it only goes to figure that subsequent mortgages
                usually come with a higher interest rate.
              </p>

              <span className="text-3xl mb-6 block">Mortgage Features</span>
              <p className="mb-6">
                Every lending institution is different, and each will have their
                own customizable mortgage options. When you're hunting for a
                lender and a home, see how the following features could be
                beneficial to you.
              </p>

              <h3 className="font-bold mb-6">Prepayment</h3>
              <p className="mb-6">
                This is a wonderful option if you receive regular bonuses or if
                your income fluctuates throughout the year. With a pre-payment
                privilege, you have the right to make payments toward the
                principal portion of your mortgage over and above the monthly
                payments. A mortgage with a pre-payment option is closed. An
                open mortgage means you can pay the entire principal sum without
                notice of bonus.
              </p>

              <h3 className="font-bold mb-6">Portability</h3>
              <p className="mb-6">
                If you still have time remaining on that fantastic loan you
                negotiated, portability is one option you'll want to discuss
                with your lender. Quite simply, it means transferring the
                balance of your current mortgage at the existing rates and with
                the existing terms and conditions, to your new home.
              </p>

              <h3 className="font-bold mb-6">Assumability</h3>
              <p className="mb-6">
                Let's say that the vendor has negotiated a dynamite mortgage.
                With an assumable mortgage you, the purchaser, simply assume the
                obligations of the mortgage. This is a wonderful feature
                especially if the terms are more favourable than the existing
                market conditions would allow. Remember, when it is time for you
                to sell, you may still be liable for any mortgage you allow the
                buyer to assume. This means if the buyer stops making payments,
                you could be accountable for the payments. Be sure to have the
                subsequent buyer approved for the assumption of the payments,
                thereby avoiding this potential land mine.
              </p>

              <h3 className="font-bold mb-6">Expandability</h3>
              <p className="mb-6">
                If you need additional funds down the road, will your mortgage
                terms allow you to increase the principal amount? Usually, your
                new rate will be a blended amount of the initial mortgage rate
                and the prevailing rates. It's a great option to discuss with
                your lender if you foresee large expenses in your future like
                renovation or education costs.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyingGuide;
