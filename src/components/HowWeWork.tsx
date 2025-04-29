import React from "react";
import AnimatedSection from "./ui/AnimatedSection";

type Props = {};

const HowWeWork = (props: Props) => {
  const Steps = [
    {
      id: 1,
      title: "Submit Intake Form",
      description: "Fill out the intake form to get started.",
      icon: "📋",
    },
    {
      id: 2,
      title: "We do the search and curation for list of jobs",
      description: "We curate a list of jobs that match your profile.",
      icon: "🔍",
    },
    {
      id: 3,
      title: "You approve, we do the tedious part (applying)",
      description: "You approve the jobs, and we handle the applications.",
      icon: "✍️",
    },
    {
      id: 4,
      title: "You get the interviews",
      description: "You get interview calls from the companies.",
      icon: "📞",
    },
  ];

  return (
    <div className="w-full px-6">
      <div className="max-w-5xl flex flex-col mx-auto py-8 items-center md:items-stretch">
        <h2 className="text-blue-600 font-medium text-lg mb-8">How we work?</h2>

        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-2">
          {Steps.map((step, index) => (
            <AnimatedSection delay={0.1 * index} className="flex flex-col items-start w-1/4 text-lg" key={index}>
              <div className="rounded-full border border-[#0649E7] w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-3xl">{step.id}</span>
              </div>
              <div className="w-40 border-t-2 border-[#0649E7] mb-4"></div>
              <p className="text-blue-600 font-semibold text-start text-sm w-40">{step.title}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
