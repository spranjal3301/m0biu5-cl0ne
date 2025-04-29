import StarIcon from "@/icons/StarIcon";
import SupportIcon from "@/icons/SupportIcon";
import UserIcon from "@/icons/UserIcon";
import AnimatedSection from "./ui/AnimatedSection";

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
      icon: <UserIcon />,
    },
    {
      title: "Be the first",
      description:
        "Our advanced AI and human driven search and apply daily ensures you are the first to show up.",
      icon: <StarIcon/>,
    },
  ];

  return (
    <section className="w-full text-[#022183] px-4">
      <div className="max-w-6xl bg-blue-50 rounded-3xl mx-auto py-8 md:px-8 px-2">
        <h2 className="text-3xl font-bold mb-12 text-">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason,index) => (
            <AnimatedSection
              key={reason.title}
              delay={0.1 * index}
              className="flex flex-col justify-between p-8 gap-11 rounded-3xl shadow-sm border-2 border-[#022183]"
            >
              <span className="">{reason.icon}</span>
              <div>
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="font-light">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
