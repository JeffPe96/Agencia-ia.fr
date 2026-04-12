import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FinalCTA from "@/components/FinalCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import OnboardingSteps from "@/components/OnboardingSteps";
import PackCombo from "@/components/PackCombo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <AnimatedBackground />
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <FinalCTA />
      <WhyChooseUs />
      <OnboardingSteps />
      <PackCombo />
      <ContactForm />
      <Footer />
    </div>
    <ScrollToTop />
  </>
);

export default Index;
