import { MessageSquare, Settings, TestTube, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Échange initial",
    desc: "Nous comprenons vos besoins, votre métier et vos attentes pour définir l'agent parfait.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Mise en place",
    desc: "Nous définissons ensemble vos attentes et configurons les bases de votre solution sur-mesure.",
  },
  {
    icon: TestTube,
    number: "03",
    title: "Phase de test",
    desc: "Tests en conditions réelles et ajustements selon vos retours pour un résultat parfait.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lancement",
    desc: "Activation de votre ligne en 48h-72h. Votre Agent IA est opérationnel.",
  },
];

const OnboardingSteps = () => (
  <section id="processus" className="py-20 scroll-mt-[120px]">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Processus</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Votre transformation en <span className="text-gradient">4 étapes</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Un processus simple et transparent, de l'échange initial au lancement.
        </p>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 120}>
              <div className="card-glass text-center h-full relative group">
                <span className="text-5xl font-extrabold text-primary/[0.06] absolute top-4 right-6 group-hover:text-primary/[0.12] transition-colors duration-300">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/[0.12] transition-colors duration-300">
                  <step.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal delay={500}>
        <p className="text-xs text-muted-foreground/60 text-center mt-10 max-w-lg mx-auto italic">
          *Notre approche s'adapte aussi bien à l'IA qu'à vos projets Web.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default OnboardingSteps;
