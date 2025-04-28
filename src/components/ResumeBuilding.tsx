import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "@/components/ui/SignupForm";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { desc } from "framer-motion/client";
import PricingCard from "./PricingCard";

const ResumeBuilding = () => {
  const services = [
    {
      name: "Resume Rebuild",
      price: "$1000",
      description:
        "Crafted for senior to VP-level professionals ready for their next big step.",
      period: "one-time",
      benefits: [
        "3 x 30-min coaching",
        "Focused on storytelling, not just formatting",
        "Analyst + full application team on Pacific hours",
        "Tailored to your target industry, company, or role",
        "Direct work with our co-founder (ex-Google, JP Morgan)",
        "Executive coaching from UC Berkeley alum with 10+ yrs experience Resume Rebuild portfolio available upon request",
      ],
    },
    {
      name: "Interview Prep",
      description:
        "Two sessions to sharpen your story, confidence, and clarity - fast.",
      price: "$500",
      period: "one-time",
      benefits: [
        "2x 45-min live coaching with our co-founder",
        "Real-time, practical feedback",
        "Build clarity, empathy & executive presence",
        "For senior and leadership roles - technical & non-technical",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 text-blue-600">
      <div className="mb-10">
        <h1 className="text-3xl font-bold ">Resume Building & Coaching</h1>
        <p>
          Let's talk about where you're headed and how your resume can get you
          there. 
        </p>
        <span className="font-semibold">Schedule a call to get started.</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-40">
        {services.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
            // onClick={() => setSelectedPlan(plan.name)}
            // isSelected={selectedPlan === plan.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeBuilding;
