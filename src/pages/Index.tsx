import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import GlobalSparkles from "@/components/GlobalSparkles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import OnboardingSteps from "@/components/OnboardingSteps";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CityFooter from "@/components/CityFooter";

const Index = () => (
  <>
    <AnimatedBackground />
    <GlobalSparkles />
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      {/* Smooth gradient bridge between Hero and Services */}
      <div
        aria-hidden="true"
        className="relative h-24 sm:h-40 -mt-px pointer-events-none overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, hsl(220 30% 6%) 0%, hsl(217 50% 10%) 50%, hsl(220 30% 6%) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 0%, hsl(217 91% 55% / 0.18), transparent 70%), radial-gradient(ellipse 40% 80% at 50% 100%, hsl(260 70% 55% / 0.12), transparent 70%)",
          }}
        />
      </div>
      <ServicesGrid />
      <WhyChooseUs />
      <OnboardingSteps />
      <ContactForm />
      <CityFooter />
      <Footer />
    </div>
    <ScrollToTop />
  </>
);

export default Index;
