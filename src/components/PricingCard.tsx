import { ArrowRight, CheckCircle } from "lucide-react";
import React from "react";
import GetStartedButton from "./GetStartedButton";
import { desc } from 'framer-motion/client';

type Props = {
  plan: {
    name: string;
    description?: string;
    price: string;
    period: string;
    popular?: boolean;
    benefits: string[];
  };
};

const PricingCard = ({ plan }: Props) => {
  return (
    <div className="border-2 border-[#0649E7] text-[#0649E7] rounded-3xl p-6 relative flex flex-col h-full">
      {plan.popular && (
        <span className="absolute top-6 right-6 bg-blue-100  text-sm px-4 py-1 rounded-full">
          Popular
        </span>
      )}

      <h2 className="text-2xl font-bold  mb-4">{plan.name}</h2>

      <div className="mb-8">
        <span className="text-5xl font-bold ">{plan.price}</span>
        <span className="text-lg ">{plan.period}</span>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6"></div>

      <ul className="flex-grow mb-6 space-y-4">
        {plan.benefits.map((benefit, benefitIndex) => (
          <li key={benefitIndex} className="flex items-start">
            <div className="mt-1 mr-2 text-blue-500">
              <CheckCircle size={20} className="text-green-500" />
            </div>
            <span className="">{benefit}</span>
          </li>
        ))}
      </ul>

     <GetStartedButton/>
    </div>
  );
};

export default PricingCard;
