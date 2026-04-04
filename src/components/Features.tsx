import { Clock, Moon, CalendarSync, Headphones } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Clock,
    title: "Gain de Temps",
    desc: "Réponse instantanée à chaque appel. Vos clients n'attendent plus jamais.",
  },
  {
    icon: Moon,
    title: "Disponible 24/7",
    desc: "L'Agent IA répond jour et nuit, mais respecte vos horaires d'ouverture pour la prise de rendez-vous.",
  },
  {
    icon: CalendarSync,
    title: "Agenda Automatique",
    desc: "Synchronisation directe avec Google Calendar, Calendly et vos outils.",
  },
  {
    icon: Headphones,
    title: "Service Client Premium",
    desc: "Une voix naturelle et chaleureuse qui reflète l'image de votre commerce.",
  },
];

const Features = () => (
  <section id="avantages" className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Pourquoi choisir <span className="text-primary">AgencIA</span> ?
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Quatre fonctionnalités clés qui transforment la gestion de vos appels.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100}>
            <div className="card-soft text-center h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center mx-auto mb-5">
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
