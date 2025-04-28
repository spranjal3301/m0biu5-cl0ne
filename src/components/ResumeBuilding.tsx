import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SignupForm from "@/components/ui/SignupForm";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ResumeBuilding = () => {
  const services = [
    {
      name: "Resume Rebuild",
      price: "$1000",
      period: "one-time",
      image: "https://ext.same-assets.com/3633050338/3242615736.png",
      features: [
        "Rebuild your resume to position you in the strongest possible way toward a seniority, specific company, industry, or function",
        "Coaching sessions - 3x / 30 minutes",
        "Best for Senior to VP level positioning",
        "Focus is on storytelling rather than moving words and format around",
        "Work directly with our co-founder who has 20+ years of leadership experience at Google and JP Morgan",
        "Work with our Executive coach (UC Berkeley, 10+ years of executive experience)",
        "Resume Rebuild portfolio available upon request"
      ]
    },
    {
      name: "Interview Prep",
      price: "$500",
      period: "one-time",
      image: "https://ext.same-assets.com/3633050338/3242615736.png",
      features: [
        "Two 45-minute sessions with our co-founder, who has hired/coached 100's at Google, JP Morgan, and Reuters",
        "Targeted and real-time interview feedback",
        "Focus on clarity, confidence, empathy, communicating value",
        "Senior to executive roles, both technical and non technical"
      ]
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-4 text-center">Resume Building & Coaching</h2>
          <p className="text-center text-gray-600 mb-12">Schedule a call with us to discuss more</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={service.name} delay={0.1 * index} direction={index % 2 === 0 ? "left" : "right"}>
              <Card className="flex flex-col h-full overflow-hidden">
                <CardHeader className="p-6">
                  <div className="flex items-center mb-4">
                    {service.image && (
                      <div className="mr-4">
                        <Image
                          src={service.image}
                          alt={`${service.name}`}
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{service.price}</p>
                    <p className="text-sm text-gray-500">{service.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
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
                    formTitle={`Sign up for ${service.name}`}
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

export default ResumeBuilding;
