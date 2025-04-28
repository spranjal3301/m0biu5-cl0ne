import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import MobiusAdvanced from "@/components/MobiusAdvanced";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingPlans from "@/components/PricingPlans";
import ResumeBuilding from "@/components/ResumeBuilding";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
import HowWeWork from "@/components/HowWeWork";
import ContactCTA from "@/components/ContactCTA";
import AdvancePricing from "@/components/AdvancePricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8">
      <Hero2 />
      <HowWeWork />
      <AboutUs />
      <Testimonials />
      <MobiusAdvanced />
      <WhyChooseUs />
      <PricingPlans />
      <AdvancePricing />
      <ResumeBuilding /> 
      <ContactCTA/>
      <Footer />
    </main>
  );
}
