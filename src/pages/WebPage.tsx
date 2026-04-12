import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import SectionBanner from "@/components/SectionBanner";
import WebProblemSolution from "@/components/WebProblemSolution";
import WebFeatures from "@/components/WebFeatures";
import Portfolio from "@/components/Portfolio";
import WebFAQ from "@/components/WebFAQ";
import OnboardingSteps from "@/components/OnboardingSteps";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const WebPage = () => (
  <>
    <AnimatedBackground />
    <div className="relative z-10">
      <Navbar />
      <div className="pt-20" />
      <SectionBanner text="WebAgencIA : Votre vitrine digitale sur-mesure." variant="accent" />
      <WebProblemSolution />
      <WebFeatures />
      <Portfolio />
      <WebFAQ />
      <OnboardingSteps />
      <ContactForm />
      <Footer />
    </div>
    <ScrollToTop />
  </>
);

export default WebPage;
