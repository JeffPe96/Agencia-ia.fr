import { Clock, SmilePlus, Handshake, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: Clock,
    title: "Gain de Temps",
    desc: "Libérez-vous de 90% des appels répétitifs et concentrez-vous sur votre cœur de métier.",
  },
  {
    icon: SmilePlus,
    title: "Satisfaction Client",
    desc: "Une réponse instantanée, aimable et professionnelle, sans attente.",
  },
  {
    icon: Handshake,
    title: "Accompagnement Sur-Mesure",
    desc: "Nous ne vendons pas un robot, nous créons votre collaborateur digital.",
  },
  {
    icon: TrendingUp,
    title: "Évolutivité",
    desc: "Des solutions qui grandissent avec votre volume d'appels.",
  },
];

const WhyChooseUs = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Nos Engagements</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Pourquoi nous <span className="text-gradient">choisir ?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Un partenaire qui comprend vos enjeux et s'engage à vos côtés.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 100}>
            <div className="card-glass text-center h-full group">
              <div className="w-14 h-14 rounded-2xl bg-accent/[0.06] flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/[0.12] transition-colors duration-300">
                <r.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
