import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  BookOpen,
  ChevronDownIcon,
} from "lucide-react";
import LogoIcon from "@/icons/LogoIcon";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Bookmookup from "@/icons/bookmookup";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Plans", href: "/plans" },
  { label: "Testimonials", href: "/team" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Hero2() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#4a7bff] via-[#0649e7] to-[#022183] text-white px-4">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LogoIcon className="w-[30px] md:w-[69px]" />
          <span className="text-xl font-medium">MobiusEngine</span>
        </div>

        <nav className="hidden xl:flex items-center font-medium gap-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base  text-white hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer">
            <span>More</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </nav>

        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-white  text-[#022183] rounded-full px-6 py-2 hover:bg-opacity-90"
          )}
        >
          Get Started
        </Link>
      </header>

      <div className="max-w-5xl flex flex-col md:flex-row items-center justify-center mt-8 mx-auto">
        <div className="w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Land job interviews
            <br />
            <span className="text-6xl md:text-7xl">
              <span className="text-[#022182]">10x</span> faster</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md">
            Custom-built resumes that match your goals, keywords, and recruiter
            expectations.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white text-[#022183] px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <Bookmookup className="cursor-pointer" />
      </div>
    </div>
  );
}
