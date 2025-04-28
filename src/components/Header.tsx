"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SignupForm from "@/components/ui/SignupForm";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Down from "@/icons/Down";
import DownIcon from "@/icons/Down";
import { ThemeToggle } from "./ThemeToggle";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Plans", href: "/plans" },
  { label: "Testimonials", href: "/team" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname();
  
    

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full dark:bg-black bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/3633050338/1862396306.png"
              alt="Mobius Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn("text-sm font-medium text-gray-700 hover:text-primary",
                path == item.href ? 'text-blue-500' : ''
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="text-sm font-medium text-gray-700 hover:text-primary flex items-center">
              More
             <DownIcon/>
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-3">
            <ThemeToggle/>

          {/* Sign up button */}
          <SignupForm buttonText="Sign up" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden  text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={mobileMenuOpen ? "hidden" : "block"}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={mobileMenuOpen ? "block" : "hidden"}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
