import { PhoneForwarded, MonitorCheck, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: PhoneForwarded,
    title: "Vocal AgencIA — Agent Vocal IA 24/7",
    desc: "Notre produit phare. Une voix naturelle qui répond à vos appels, qualifie vos leads et fixe vos rendez-vous, jour et nuit, sans intervention humaine.",
  },
  {
    icon: MonitorCheck,
    title: "Web AgencIA — Sites Haute Performance",
    desc: "Votre vitrine digitale, conçue pour convertir. Sites rapides, optimisés pour le référencement et pensés pour transformer chaque visiteur en client.",
  },
];

const ServicesGrid = () => (
  <section id="services" className="py-20 sm:py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">
          Nos Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          L'Excellence de l'<span className="text-gradient">Intelligence Artificielle</span> au service de votre croissance
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Deux solutions complémentaires pour automatiser votre relation client et accélérer votre développement.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <ScrollReveal key={s.title} delay={i * 120}>
              <div className="service-card group h-full">
                <div className="service-icon-wrap">
                  <div className="service-icon">
                    <Icon size={32} className="text-white" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
