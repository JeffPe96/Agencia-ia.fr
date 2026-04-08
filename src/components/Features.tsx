import { PhoneForwarded, Languages, Brain, CalendarSync } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: PhoneForwarded,
    title: "Transfert Intelligent",
    desc: "L'IA vous passe la main si une intervention humaine est requise. Zéro appel perdu.",
  },
  {
    icon: Languages,
    title: "Support Multilingue",
    desc: "Capacité de répondre en plusieurs langues naturellement, sans configuration supplémentaire.",
  },
  {
    icon: Brain,
    title: "Analyse de Sentiment",
    desc: "L'IA détecte l'urgence ou l'humeur du client pour adapter son ton en temps réel.",
  },
  {
    icon: CalendarSync,
    title: "Synchro Temps Réel",
    desc: "Mise à jour automatique de vos agendas (Google Calendar, Calendly, etc.).",
  },
];

const Features = () => (
  <section id="avantages" className="py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Fonctionnalités avancées</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Pourquoi choisir <span className="text-gradient">AgencIA</span> ?
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Une technologie de pointe au service de votre commerce.
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
