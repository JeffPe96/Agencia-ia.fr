import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import GlobalSparkles from "@/components/GlobalSparkles";
import Navbar from "@/components/Navbar";
import SectionBanner from "@/components/SectionBanner";
import WebProblemSolution from "@/components/WebProblemSolution";
import WebFeatures from "@/components/WebFeatures";
import Portfolio from "@/components/Portfolio";
import WebFAQ from "@/components/WebFAQ";
import WebOnboardingSteps from "@/components/WebOnboardingSteps";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const WebPage = () => (
  <>
    <AnimatedBackground />
    <GlobalSparkles />
    <div className="relative z-10">
      <Navbar />
      <div className="pt-20" />
      <SectionBanner text="Web AgencIA" subtitle="Votre vitrine digitale sur-mesure." variant="accent" />
      <WebProblemSolution />
      <WebFeatures />
      <Portfolio />
      <WebFAQ />
      <WebOnboardingSteps />
      <ContactForm formContext="web" />
      <Footer />
    </div>
    <ScrollToTop />
  </>
);

export default WebPage;
