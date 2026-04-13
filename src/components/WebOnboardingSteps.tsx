import { Palette, Layout, Code, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: Palette,
    number: "01",
    title: "Étude de marque",
    desc: "Nous analysons votre image de marque, vos valeurs et votre positionnement pour créer un univers visuel cohérent.",
  },
  {
    icon: Layout,
    number: "02",
    title: "Design & Maquettage",
    desc: "Création de maquettes sur-mesure validées ensemble avant le développement.",
  },
  {
    icon: Code,
    number: "03",
    title: "Développement & SEO",
    desc: "Construction de votre site avec les meilleures pratiques de performance et de référencement naturel.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Mise en ligne & Formation",
    desc: "Lancement de votre site et formation complète à l'interface d'administration pour votre autonomie.",
  },
];

const WebOnboardingSteps = () => (
  <section className="py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Processus</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Votre site en <span className="text-gradient">4 étapes</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Un processus clair et transparent pour votre projet web.
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
    </div>
  </section>
);

export default WebOnboardingSteps;
