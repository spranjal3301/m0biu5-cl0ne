import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./ui/AnimatedSection";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Ashwin",
      image: "/profile1.png",
      role: "Founder",
      bio: "Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.",
      vision:
        "Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
      linkedin: "https://www.linkedin.com/in/agrawalashwin/",
    },
    {
      name: "Nicole",
      image: "/profile2.png",
      role: "Executive Coach",
      bio: "Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.",
      vision:"With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in Al-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.",
      linkedin: "https://www.linkedin.com/in/nicole-lau-01414517/",
    },
  ];

  return (
    <section className="w-full px-6  bg-gradient-to-b from-[#0f1836] via-[#15349c] to-blue-700 text-white">
      <div className="max-w-5xl mx-auto py-14">
        <h2 className="text-3xl font-bold mb-12">About Us</h2>

        <div className="space-y-12">
          {teamMembers.map((member,index) => (
            <AnimatedSection delay={0.1 * index} key={member.name} className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              <div className="md:w-3/4">
                <div className="space-y-4">
                  <p className="text-base">{member.bio}</p>

                  {member.vision && (
                    <p className="text-base">{member.vision}</p>
                  )}

                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:underline"
                  >
                    {member.name}'s LinkedIn
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="w-full flex flex-col justify-center items-center  mt-10">
          <Link
            href="/about-us"
            className="font-medium hover:underline"
          >
            Learn more about our Board of Advisors
          </Link>

          <p className="mt-4">
            Follow us on our
            <Link
              href="https://www.linkedin.com/company/mobiusservices"
              target="_blank"
              rel="noopener noreferrer"
              className=" font-medium hover:underline ml-1"
            >
              Linkedin page
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
