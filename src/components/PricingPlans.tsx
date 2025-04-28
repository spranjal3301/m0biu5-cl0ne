'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SignupForm from "@/components/ui/SignupForm";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import PricingCard from "./PricingCard";

const PricingPlans = () => {
  const plans = [
    {
      name: "April Promo",
      price: "$35/wk",
      image: "https://ext.same-assets.com/3633050338/1434614088.png",
      features: [
        "Search and Curation across 1m+ jobs, every 48 hours",
        "Up to 20 approved job apps/week - human based, no bots, company websites only",
        "Additional apps at $1.5/application",
        "Dedicated application analyst",
        "Up to 10 search criteria & 5 job titles included"
      ]
    },
    {
      name: "Starter",
      price: "$50/wk",
      image: "https://ext.same-assets.com/3633050338/3242615736.png",
      features: [
        "Resume review and feedback",
        "Up to 30 applications/week",
        "Additional apps $1.5/application",
        "24/7 chat support"
      ]
    },
    {
      name: "Plus",
      price: "$100/wk",
      image: "https://ext.same-assets.com/3633050338/3242615736.png",
      features: [
        "Everything in Promo plan",
        "Resume review and feedback report - format and storytelling",
        "Dedicated search specialist",
        "Up to 50 applications/week",
        "Additional apps $1.5/application",
        "Analyst support with 6 hour SLA / PST hours"
      ]
    },
    {
      name: "Advanced",
      price: "$150/wk",
      image: "https://ext.same-assets.com/3633050338/3242615736.png",
      features: [
        "Everything inStarter",
        "Up to 75 apps/week",
        "Apply to upto 15 job titles",
        "Analyst support(6-hourSLA)",
        "Dedicated application team on Pacific hours",
        "Custom Resumes & CL's",
        "Support for complex search criteria",
        "Up to 20 customized applications/week",
        "Senior advanced application team w/ resume specialist",
        "Access to Founder, CEO and Executive coaches"
      ]
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center">Job Application Service Plans</h2>
        </AnimatedSection>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={0.1 * index}>
              <Card className="flex flex-col h-full overflow-hidden">
                <CardHeader className="bg-gray-50 py-6">
                  <div className="text-center">
                    {plan.image && (
                      <div className="flex justify-center mb-4">
                        <Image
                          src={plan.image}
                          alt={`${plan.name} plan`}
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <SignupForm
                    buttonText="Sign up now"
                    buttonClassName="w-full bg-primary hover:bg-primary/90"
                    formTitle={`Sign up for ${plan.name}`}
                  />
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
// export default PricingPlans;


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
        "Personalized with up to 10 filters & 5 job titles"
      ],
      popular: false
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
        "Analyst support within 6 hours (SLA/PST hours)"
      ],
      popular: true
    },
    {
      name: "Plus",
      price: "$100",
      period: "/week",
      benefits: [
        "Everything in Starter, with more muscle:",
        "Up to 75 apps/week",
        "Apply to 15 job titles",
        "Analyst + full application team on Pacific hours"
      ],
      popular: false
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-12">Job Application Service Plans</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
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
}



