import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import MobiusAdvanced from "@/components/MobiusAdvanced";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingPlans from "@/components/PricingPlans";
import ResumeBuilding from "@/components/ResumeBuilding";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Hero />
      <AboutUs />
      <Testimonials />
      <MobiusAdvanced />
      <WhyChooseUs />
      <PricingPlans />
      <ResumeBuilding />
      <Footer />
    </main>
  );
}
