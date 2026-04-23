import { CalendarCheck, PhoneForwarded, FileText, Mic, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: Mic,
    title: "Agent Vocal IA 24/7",
    desc: "Une voix naturelle qui répond à vos clients jour et nuit, sans attente ni interruption.",
  },
  {
    icon: CalendarCheck,
    title: "Prise de RDV Intelligente",
    desc: "Synchronisation native avec Google Calendar, Cal.com, et vos outils métier.",
  },
  {
    icon: PhoneForwarded,
    title: "Transfert d'Appel Instantané",
    desc: "Redirection fluide vers un humain si l'IA détecte un besoin spécifique.",
  },
  {
    icon: FileText,
    title: "Intelligence Post-Appel",
    desc: "Résumés automatiques et retranscriptions envoyés directement par email après chaque échange.",
  },
];

const ServicesGrid = () => (
  <section id="avantages" className="py-20 sm:py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">
          Nos Solutions
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Des outils <span className="text-gradient">d'automatisation d'élite</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Une suite complète pour ne plus jamais perdre une opportunité.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div className="service-card group h-full text-center">
                <div className="service-icon-wrap flex justify-center">
                  <div className="service-icon">
                    <Icon size={28} className="text-white" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
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
