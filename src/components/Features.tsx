import { CalendarCheck, PhoneForwarded, FileText, Mic } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
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

const Features = () => (
  <section id="avantages" className="py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Nos Solutions</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Des outils <span className="text-gradient">d'automatisation d'élite</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Une suite complète pour ne plus jamais perdre une opportunité.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100}>
            <div className="card-glass text-center h-full group">
              <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/[0.12] transition-colors duration-300">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
