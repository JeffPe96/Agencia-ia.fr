import { Search, BrainCircuit, FlaskConical, Rocket, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit Stratégique",
    desc: "Analyse approfondie de votre flux d'appels et de vos process métier pour identifier les opportunités d'automatisation les plus rentables.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Conception & Entraînement IA",
    desc: "Création de votre Assistant Vocal sur-mesure. Nous entraînons l'IA sur vos données, votre ton et votre catalogue pour une expérience 100% naturelle.",
  },
  {
    icon: FlaskConical,
    number: "03",
    title: "Tests & Optimisation",
    desc: "Tests en conditions réelles et ajustements basés sur vos retours. Nous peaufinons chaque scénario pour garantir une qualité de réponse irréprochable.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Déploiement & Suivi",
    desc: "Mise en production de votre Assistant et connexion à votre agenda. Nous assurons le monitoring continu et l'évolution de votre IA dans le temps.",
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
          Un parcours optimisé par l'IA, de l'audit stratégique au déploiement de votre Assistant Vocal.
        </p>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto relative">
        {/* Desktop circuit connectors between cards */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="workflow-connector"
            style={{ left: "calc(25% - 24px)", width: "48px" }}
          >
            <span className="workflow-pulse" />
          </div>
          <div
            className="workflow-connector"
            style={{ left: "calc(50% - 24px)", width: "48px" }}
          >
            <span className="workflow-pulse" style={{ animationDelay: "0.8s" }} />
          </div>
          <div
            className="workflow-connector"
            style={{ left: "calc(75% - 24px)", width: "48px" }}
          >
            <span className="workflow-pulse" style={{ animationDelay: "1.6s" }} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
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
        <ScrollReveal delay={600}>
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
