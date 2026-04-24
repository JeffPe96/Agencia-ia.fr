import { Zap, Heart, Handshake, TrendingUp, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Reason = {
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
  glow: string;
};

const reasons: Reason[] = [
  {
    icon: Zap,
    title: "Gain de Temps",
    desc: "Libérez-vous de 90% des tâches répétitives. Concentrez-vous sur votre cœur de métier pendant que l'IA gère le reste.",
    gradient: "from-[#00d2ff] to-[#3a7bd5]",
    glow: "hsl(190 80% 50% / 0.35)",
  },
  {
    icon: Heart,
    title: "Satisfaction Client",
    desc: "Réponses instantanées et amicales. Vos clients bénéficient d'une attention VIP, 24h/24, sans attente.",
    gradient: "from-[#00d2ff] to-[#3a7bd5]",
    glow: "hsl(217 91% 53% / 0.35)",
  },
  {
    icon: Handshake,
    title: "Accompagnement Sur-Mesure",
    desc: "Nous ne vendons pas des outils, nous bâtissons votre collaborateur digital. Un suivi humain pour une IA performante.",
    gradient: "from-[#3a7bd5] to-[#6c5ce7]",
    glow: "hsl(217 91% 53% / 0.35)",
  },
  {
    icon: TrendingUp,
    title: "Évolutivité",
    desc: "Des solutions qui grandissent avec vous. De la simple FAQ à l'automatisation complète de vos ventes.",
    gradient: "from-[#6c5ce7] to-[#00d2ff]",
    glow: "hsl(260 60% 65% / 0.35)",
  },
];

const WhyChooseUs = () => (
  <section className="py-20 sm:py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">
          Nos Engagements
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Pourquoi nous <span className="text-gradient">choisir ?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Un partenaire qui comprend vos enjeux et s'engage à vos côtés.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <ScrollReveal key={r.title} delay={i * 100}>
              <div
                className="service-card group h-full text-center"
                style={{ ["--card-glow" as string]: r.glow }}
              >
                <div className="flex justify-center mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
