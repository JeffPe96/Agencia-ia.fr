import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import GlobalSparkles from "@/components/GlobalSparkles";
import Navbar from "@/components/Navbar";
import SectionBanner from "@/components/SectionBanner";
import AgentProblemSolution from "@/components/AgentProblemSolution";
import AgentFeatures from "@/components/AgentFeatures";
import AgentOnboardingSteps from "@/components/AgentOnboardingSteps";
import AgentSectors from "@/components/AgentSectors";
import AgentFAQ from "@/components/AgentFAQ";
import Footer from "@/components/Footer";

const AgentPage = () => (
  <>
    <AnimatedBackground />
    <GlobalSparkles />
    <div className="relative z-10">
      <Navbar />
      <div className="pt-20" />
      <SectionBanner
        text="Vos Agents IA Intelligents"
        subtitle="Automatisez votre support client et vos ventes avec des agents capables de comprendre, d'apprendre et d'agir 24h/7."
        variant="primary"
      />
      <AgentProblemSolution />
      <AgentFeatures />
      <AgentOnboardingSteps />
      <AgentSectors />
      <AgentFAQ />
      <Footer />
    </div>
    <ScrollToTop />
  </>
);

export default AgentPage;
