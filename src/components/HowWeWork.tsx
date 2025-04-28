import React from "react";

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
    <div className="w-full border">
      <div className="max-w-6xl flex flex-col mx-auto py-16 px-4">
        <h2 className="text-blue-600 font-medium text-lg mb-8">How we work?</h2>

        <div className="flex flex-row justify-between gap-2">
          {Steps.map((step, index) => (
            <div className="flex flex-col items-center w-1/4" key={index}>
              <div className="rounded-full border border-gray-300 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-lg">{step.id}</span>
              </div>
              <div className="w-full border-t border-gray-300 mb-4"></div>
              <p className="text-blue-600 text-center text-sm">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
