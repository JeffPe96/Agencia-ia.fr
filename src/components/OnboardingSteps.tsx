import { Brain, Settings2, Rocket, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: Brain,
    number: "01",
    title: "Analyse & Stratégie",
    desc: "Analyse de vos besoins et entraînement de l'IA avec vos données spécifiques pour créer un script sur-mesure.",
  },
  {
    icon: Settings2,
    number: "02",
    title: "Configuration & IA",
    desc: "Connexion à vos outils (Agenda, CRM) et configuration de la voix pour des conversations naturelles et fluides.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Déploiement & Suivi",
    desc: "Lancement de votre agent 24h/7 et optimisation continue des performances pour maximiser vos résultats.",
  },
];

const OnboardingSteps = () => (
  <section id="processus" className="py-28 relative scroll-mt-[160px]">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Workflow IA</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Notre processus <span className="text-gradient">vocal</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Un parcours optimisé par l'IA, de l'analyse stratégique au déploiement de votre Assistant Vocal.
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
                <strong className="text-foreground font-semibold">Délai moyen de mise en production : 48h à 72h</strong>{" "}
                <span className="text-muted-foreground">— grâce à notre workflow d'entraînement IA accéléré.</span>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default OnboardingSteps;
