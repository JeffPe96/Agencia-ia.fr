import { CalendarCheck, PhoneForwarded, FileText, Mic, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Mic,
    title: "Agent Vocal IA 24/7",
    desc: "Une voix naturelle qui répond à vos clients jour et nuit, sans attente ni interruption.",
    metric: "24/7",
    metricLabel: "Disponibilité",
    accent: "from-[#00d2ff] to-[#3a7bd5]",
  },
  {
    icon: CalendarCheck,
    title: "Prise de RDV Intelligente",
    desc: "Synchronisation native avec Google Calendar, Cal.com, et vos outils métier.",
    metric: "100%",
    metricLabel: "Sync agenda",
    accent: "from-[#7b5cff] to-[#3a7bd5]",
  },
  {
    icon: PhoneForwarded,
    title: "Transfert d'Appel Instantané",
    desc: "Redirection fluide vers un humain si l'IA détecte un besoin spécifique.",
    metric: "< 2s",
    metricLabel: "Temps de transfert",
    accent: "from-[#00d2ff] to-[#7b5cff]",
  },
  {
    icon: FileText,
    title: "Intelligence Post-Appel",
    desc: "Résumés automatiques et retranscriptions envoyés directement par email après chaque échange.",
    metric: "Auto",
    metricLabel: "Résumé & email",
    accent: "from-[#3a7bd5] to-[#00d2ff]",
    badge: "IA",
  },
];

const Features = () => (
  <section id="avantages" className="py-28 relative">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Nos Solutions Vocales</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Des outils <span className="text-gradient">d'automatisation d'élite</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Une suite complète pour ne plus jamais perdre une opportunité.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100}>
            <div className={`web-feature-card group h-full relative ${f.badge ? "web-feature-card-premium" : ""}`}>
              <div className="web-feature-glow" aria-hidden="true" />

              {f.badge && (
                <div className="web-feature-badge">
                  <Sparkles size={11} strokeWidth={2.2} />
                  <span>{f.badge}</span>
                </div>
              )}

              <div className={`web-feature-icon bg-gradient-to-br ${f.accent}`}>
                <f.icon size={22} strokeWidth={1.8} className="text-white" />
              </div>

              <h3 className="font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{f.desc}</p>

              <div className="web-feature-metric">
                <span className={`web-feature-metric-value bg-gradient-to-r ${f.accent}`}>
                  {f.metric}
                </span>
                <span className="web-feature-metric-label">{f.metricLabel}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
