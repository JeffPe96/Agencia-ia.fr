import { Database, Bot, Rocket, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: Database,
    number: "01",
    title: "Analyse & Base de Connaissances",
    desc: "Nous importons vos documents, FAQ et données pour que l'IA connaisse votre entreprise par cœur.",
  },
  {
    icon: Bot,
    number: "02",
    title: "Entraînement & Personnalité",
    desc: "Nous configurons le ton et le comportement de l'agent pour qu'il reflète votre image de marque.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Déploiement & Apprentissage",
    desc: "Intégration sur votre site et optimisation continue basée sur les interactions réelles.",
  },
];

const AgentOnboardingSteps = () => (
  <section className="py-28 relative">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">PROCESSUS</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Notre processus <span className="text-gradient">agent</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Un cerveau numérique entraîné sur mesure, de la connaissance au déploiement.
        </p>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto relative">
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

        <ScrollReveal delay={500}>
          <div className="flex justify-center mt-12">
            <div className="speed-badge">
              <span className="speed-badge-dot" />
              <Zap size={15} className="text-primary" strokeWidth={2} />
              <span>
                <strong className="text-foreground font-semibold">
                  "Un cerveau numérique qui travaille pour vous, même quand vous dormez."
                </strong>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AgentOnboardingSteps;
