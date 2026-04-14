import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import GlobalSparkles from "@/components/GlobalSparkles";
import Navbar from "@/components/Navbar";
import SectionBanner from "@/components/SectionBanner";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import DemoSection from "@/components/DemoSection";
import Sectors from "@/components/Sectors";
import FAQ from "@/components/FAQ";
import OnboardingSteps from "@/components/OnboardingSteps";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const VocalPage = () => (
  <>
    <AnimatedBackground />
    <GlobalSparkles />
    <div className="relative z-10">
      <Navbar />
      <div className="pt-20" />
      <SectionBanner text="Vocal AgencIA :" subtitle="Ne manquez plus aucun client." variant="primary" />
      <ProblemSolution />
      <Features />
      <DemoSection />
      <Sectors />
      <FAQ />
      <OnboardingSteps />
      <ContactForm formContext="vocal" />
      <Footer />
    </div>
    <ScrollToTop />
  </>
);

export default VocalPage;
