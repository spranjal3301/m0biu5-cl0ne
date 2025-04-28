"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "@/components/ui/SignupForm";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import PricingCard from "./PricingCard";

export default function JobApplicationServicePlans() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "April Promo",
      price: "$35",
      period: "/week",
      benefits: [
        "Curated jobs from 1M+ listings, refreshed every 48 hours",
        "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
        "Need more? Add extra apps for just $15 each",
        "Your own dedicated application analyst",
        "Personalized with up to 10 filters & 5 job titles",
      ],
      popular: false,
    },
    {
      name: "Starter",
      price: "$50",
      period: "/week",
      benefits: [
        "All the perks of the Promo Plan, plus:",
        "Resume review & story-focused feedback",
        "Dedicated search specialist",
        "Up to 50 job apps/week",
        "Extra apps at $15 each",
        "Analyst support within 6 hours (SLA/PST hours)",
      ],
      popular: true,
    },
    {
      name: "Plus",
      price: "$100",
      period: "/week",
      benefits: [
        "Everything in Starter, with more muscle:",
        "Up to 75 apps/week",
        "Apply to 15 job titles",
        "Analyst + full application team on Pacific hours",
      ],
      popular: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-6 md:px-4">
      <AnimatedSection>
        <h1 className="text-3xl font-bold text-blue-600 mb-12">
          Job Application Service Plans
        </h1>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <AnimatedSection key={plan.name} delay={0.1 * index}>
            <PricingCard
              // key={index}
              plan={plan}
              // onClick={() => setSelectedPlan(plan.name)}
              // isSelected={selectedPlan === plan.name}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
