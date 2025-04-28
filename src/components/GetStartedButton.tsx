import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
};

function GetStartedButton({ className }: Props) {
  return (
    <button
      className={cn(
        "bg-blue-600 text-white rounded-full py-2 px-4 flex items-center justify-center hover:bg-opacity-90",
        className
      )}
    >
      Get Started
      <ArrowUpRight size={16} className="ml-1" />
    </button>
  );
}

export default GetStartedButton;
