import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import DemoSection from "@/components/DemoSection";
import Sectors from "@/components/Sectors";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Portfolio from "@/components/Portfolio";
import PackCombo from "@/components/PackCombo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <AnimatedBackground />
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <Features />
      <DemoSection />
      <Sectors />
      <FinalCTA />
      <FAQ />
      <Portfolio />
      <PackCombo />
      <ContactForm />
      <Footer />
    </div>
    <ScrollToTop />
  </>
);

export default Index;
