import { ScanSearch, Cpu, Rocket, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: ScanSearch,
    number: "01",
    title: "Audit & Diagnostic IA",
    desc: "Analyse approfondie de votre présence numérique et identification des leviers de croissance grâce à nos outils prédictifs.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Conception & Architecture Augmentée",
    desc: "Développement agile de votre plateforme. Nous fusionnons design premium et optimisation technique pour une vitesse de chargement record.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Déploiement & Évolutivité",
    desc: "Mise en ligne sécurisée et suivi continu. Votre site n'est pas juste fini, il est prêt à évoluer avec les dernières innovations de l'IA.",
  },
];

const WebOnboardingSteps = () => (
  <section className="py-28 relative">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">PROCESSUS</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Notre processus <span className="text-gradient">web</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Un processus optimisé par l'IA, du diagnostic au déploiement.
        </p>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto relative">
        {/* Desktop circuit connectors between cards */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="workflow-connector"
            style={{ left: "calc(33.333% - 24px)", width: "48px" }}
          >
            <span className="workflow-pulse" />
          </div>
          <div
            className="workflow-connector"
            style={{ left: "calc(66.666% - 24px)", width: "48px" }}
          >
            <span className="workflow-pulse" style={{ animationDelay: "1.2s" }} />
          </div>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 relative">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 140}>
              <div className="workflow-step group">
                <div className="workflow-icon">
                  <step.icon size={26} strokeWidth={1.5} />
                </div>
                <div className="workflow-number">{step.number}</div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Speed badge */}
        <ScrollReveal delay={500}>
          <div className="flex justify-center mt-12">
            <div className="speed-badge">
              <span className="speed-badge-dot" />
              <Zap size={15} className="text-primary" strokeWidth={2} />
              <span>
                <strong className="text-foreground font-semibold">Délai moyen de livraison : 7 à 14 jours</strong>{" "}
                <span className="text-muted-foreground">— grâce à notre workflow optimisé par l'IA.</span>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WebOnboardingSteps;
