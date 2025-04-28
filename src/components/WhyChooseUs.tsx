import SupportIcon from "@/icons/SupportIcon";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Trusted",
      description:
        "Our founding team has over 40 years of experience in tech and recruiting.",
      icon: <SupportIcon />,
    },
    {
      title: "Human based service",
      description:
        "Dedicated and trained team. 360 degree services to support your career transition",
      icon: <SupportIcon />,
    },
    {
      title: "Be the first",
      description:
        "Our advanced AI and human driven search and apply daily ensures you are the first to show up.",
      icon: <SupportIcon />,
    },
  ];

  return (
    <section className="w-full text-[#022183]">
      <div className="max-w-6xl bg-blue-50 rounded-3xl mx-auto py-8 px-8">
        <h2 className="text-3xl font-bold mb-12 text-">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col justify-between p-8 gap-11 rounded-3xl shadow-sm border-2 border-[#022183]"
            >
              <span className="">{reason.icon}</span>
              <div>
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="font-light">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
