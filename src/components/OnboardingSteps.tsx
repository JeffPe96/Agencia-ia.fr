import { Search, CodeXml, FlaskConical, Rocket, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Step = {
  icon: LucideIcon;
  number: string;
  title: string;
  desc: string;
  glow: string;
};

const steps: Step[] = [
  {
    icon: Search,
    number: "01",
    title: "Audit Stratégique",
    desc: "Analyse approfondie de vos processus actuels pour identifier les opportunités d'automatisation et de croissance les plus rentables.",
    glow: "hsl(190 80% 50% / 0.35)",
  },
  {
    icon: CodeXml,
    number: "02",
    title: "Conception & Développement",
    desc: "Création de votre solution sur-mesure (Vocal, Web ou Agent). Nous bâtissons l'intelligence et l'architecture technique de votre futur collaborateur.",
    glow: "hsl(217 91% 53% / 0.35)",
  },
  {
    icon: FlaskConical,
    number: "03",
    title: "Phase de Test & Optimisation",
    desc: "Tests en conditions réelles et ajustements basés sur vos retours. Nous peaufinons chaque détail pour garantir une expérience utilisateur parfaite.",
    glow: "hsl(260 60% 65% / 0.35)",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Déploiement & Suivi",
    desc: "Mise en ligne de votre solution en 48h-72h. Nous restons à vos côtés pour assurer le monitoring et l'évolution continue de votre système.",
    glow: "hsl(190 80% 50% / 0.35)",
  },
];

const OnboardingSteps = () => (
  <section id="processus" className="py-20 sm:py-28 scroll-mt-[160px]">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Processus</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Votre transformation en <span className="text-gradient">4 étapes</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Un processus simple et transparent, de l'audit stratégique au déploiement.
        </p>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto relative">
        {/* Connector line - desktop only */}
        <div
          className="hidden lg:block absolute top-[88px] left-[12%] right-[12%] h-px pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent, hsl(190 80% 50% / 0.4) 15%, hsl(217 91% 53% / 0.4) 50%, hsl(260 60% 65% / 0.4) 85%, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={i * 120}>
                <div
                  className="service-card group h-full text-center relative"
                  style={{ ["--card-glow" as string]: step.glow }}
                >
                  <span className="text-6xl font-extrabold absolute top-4 right-5 pointer-events-none select-none text-gradient opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    {step.number}
                  </span>
                  <div className="flex justify-center mb-5 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 relative z-10">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{step.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <ScrollReveal delay={500}>
        <p className="text-xs text-muted-foreground/50 text-center mt-10 max-w-lg mx-auto italic">
          *Notre approche s'adapte aussi bien à l'IA qu'à vos projets Web.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default OnboardingSteps;
