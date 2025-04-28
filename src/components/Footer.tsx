import React from "react";
import { Linkedin } from "lucide-react";
import LogoFooter from "@/icons/LogoFooter";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full">
      <div className="flex flex-col  justify-between items-start px-6 md:px-20 py-8 gap-2">
        {/* Logo Section */}
        <div className="">
          <LogoFooter />
        </div>

        <hr className="md:w-96 w-20 h-3" />
        

        <div className="flex flex-col md:flex-row justify-between items-start w-full"> 
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-28 gap-5">
            {/* Address */}
            <div>
              <h3 className="text-sm font-medium text-[#0649E7] mb-2 underline">
                Address
              </h3>
              <p className="text-sm  text-[#0649E7]">
                1875 Mission St Ste 103 #450
                <br />
                San Francisco, CA 94103
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-sm font-medium text-[#0649E7] mb-2 underline">Email</h3>
              <a
                href="mailto:finance@mobiusengine.ai"
                className="text-sm text-[#0649E7] hover:text-blue-800 underline"
              >
                finance@mobiusengine.ai
              </a>
            </div>

            {/* Telephone */}
            <div>
              <h3 className="text-sm font-medium text-[#0649E7] mb-2 underline">
                Telephone
              </h3>
              <a
                href="tel:650-889-6026"
                className="text-sm text-[#0649E7] hover:nderline"
              >
                650-889-6026
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-sm font-medium text-[#0649E7] mb-2">Socials</h3>
            <div className="flex space-x-2">
              <a
                href="#"
                className="p-2 rounded-full border border-[#0649E7] "
              >
                <Linkedin size={16} className="text-[#0649E7]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-[#0649E7] "
              >
                <Linkedin size={16} className="text-[#0649E7]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center md:px-20 py-4 bg-blue-600 text-white text-sm text-center">
        <p>© 2023 MobiusServices LLC</p>
        <div className="flex justify-center items-center md:gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline mr-4">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
