import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SignupForm from "@/components/ui/SignupForm";

const Hero = () => {
  const steps = [
    { number: 1, title: "Submit Intake Form", icon: "https://ext.same-assets.com/3633050338/3783633550.svg" },
    { number: 2, title: "We do the search and curation for list of jobs", icon: "https://ext.same-assets.com/3633050338/2563901416.svg" },
    { number: 3, title: "You approve, we do the tedious part (applying)", icon: "https://ext.same-assets.com/3633050338/548389142.svg" },
    { number: 4, title: "You get the interviews", icon: "https://ext.same-assets.com/3633050338/260646423.svg" },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-6 hero-gradient">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <AnimatedSection direction="up" delay={0.1}>
              <h1 className="text-4xl font-bold mb-8">
                Land job interviews<br />
                10x faster
              </h1>
            </AnimatedSection>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <AnimatedSection key={step.number} direction="left" delay={0.2 + index * 0.1}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Image
                        src={step.icon}
                        alt={`Step ${step.number}`}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Step {step.number}: {step.title}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection className="md:w-1/2 flex justify-center" direction="right" delay={0.3}>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3633050338/197532015.png"
                alt="Mobius E-Book"
                width={250}
                height={350}
                className="rounded-lg shadow-lg"
              />
              <div className="mt-4 flex justify-center">
                <SignupForm
                  buttonText="Download our free E-Book"
                  formTitle="Get your free E-Book"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
