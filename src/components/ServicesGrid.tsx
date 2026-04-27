import { PhoneForwarded, MonitorCheck, MessageCircleCode, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: PhoneForwarded,
    title: "Agent Vocal IA 24/7 à Annecy & Genève",
    desc: "Automatisez vos appels entrants. Notre IA qualifie vos leads et fixe des rendez-vous sans intervention humaine, pour les commerces d'Annecy, Genève et du Bassin Genevois.",
  },
  {
    icon: MonitorCheck,
    title: "Sites Web Haute Performance — Haute-Savoie",
    desc: "Sites optimisés pour la conversion et le SEO local à Annecy, Annemasse et Saint-Julien-en-Genevois, avec IA intégrée pour capturer chaque opportunité.",
  },
  {
    icon: MessageCircleCode,
    title: "Chatbots & Omnicanalité IA",
    desc: "Vendez sur WhatsApp, Instagram et Web depuis Annecy ou Genève. Une réponse instantanée 24h/24 pour booster vos ventes locales.",
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
          Une suite IA <span className="text-gradient">complète</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Trois leviers d'automatisation pensés pour convertir plus, plus vite, sans effort.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
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
