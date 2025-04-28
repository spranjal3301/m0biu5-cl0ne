import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {};

const ContactCTA = (props: Props) => {
  return (
    <div className="w-full mx-auto flex justify-center items-center p-4">
      <div className="bg-[#0649E7] md:h-64 text-white p-8 rounded-3xl w-full max-w-6xl flex md:flex-row flex-col items-center justify-between gap-4">
        <div className="flex md:flex-col flex-row items-start text-md md:text-xl font-semibold">
          <span>STILL HAVE</span>
          <span>DOUBTS ?</span>
        </div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact us</h1>
        <div className="flex justify-end mt-2">
          <button className="flex justify-center items-center bg-white md:size-20 rounded-full p-1 text-[#0649E7]">
            <ArrowRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
