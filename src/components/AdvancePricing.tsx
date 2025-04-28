import React from "react";
import GetStartedButton from "./GetStartedButton";
import TickIcon from "@/icons/TickIcon";

type Props = {};

const AdvancePricing = (props: Props) => {
  const AdvanceSupport = [
    "Everything in Plus",
    "Custom Resumes & Cover Letters",
    "20 fully customized applications/week",
    "Help with complex job searches",
    "Access to senior resume experts, Founder & Exec Coaches",
  ];

  return (
    <div className="w-full flex justify-center items-center px-6">
      <div className="bg-blue-600 text-white p-8 rounded-3xl w-full max-w-6xl">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-1">Advance</h2>
            <p className="text-xs text-blue-100">
              Top-tier support for serious job hunters:
            </p>
          </div>
          <div className="text-right">
            <span className="text-xl md:text-5xl font-bold">$150</span>
            <span className="text-base md:text-xl">/week</span>
          </div>
        </div>

        <div className="border-t  border-white pt-6 mb-6 md:w-72  w-40"></div>

        <div className="flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full">
            {AdvanceSupport.map((item, index) => (
              <div className="flex items-center text-xs md:text-base">
                <span className="text-xs inline-flex items-center justify-center bg-green-500 rounded-full p-1 mr-3">
                  <TickIcon />
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="md:flex justify-end items-end hidden">
            <GetStartedButton className="bg-white text-blue-600 h-10 w-44" />
          </div>
        </div>
        <GetStartedButton className="bg-white text-blue-600 h-10 md:hidden " />
      </div>
    </div>
  );
};

export default AdvancePricing;
