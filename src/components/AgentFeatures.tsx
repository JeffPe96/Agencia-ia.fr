import { MessagesSquare, Bot, Database } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: MessagesSquare,
    title: "Support Client Illimité",
    desc: "Répondez instantanément aux questions fréquentes et résolvez les problèmes courants sans intervention humaine.",
    metric: "24/7",
    metricLabel: "Disponibilité",
    accent: "from-[#00d2ff] to-[#3a7bd5]",
  },
  {
    icon: Bot,
    title: "Capture de Leads IA",
    desc: "Transformez chaque visiteur en prospect qualifié en engageant la conversation de manière proactive et naturelle.",
    metric: "x3",
    metricLabel: "Conversion",
    accent: "from-[#7b5cff] to-[#3a7bd5]",
  },
  {
    icon: Database,
    title: "Intégration Écosystème",
    desc: "Nos agents se connectent à vos outils (Slack, CRM, E-mails) pour synchroniser les données en temps réel.",
    metric: "100%",
    metricLabel: "Synchronisé",
    accent: "from-[#00d2ff] to-[#7b5cff]",
  },
];

const AgentFeatures = () => (
  <section className="py-28 relative">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Nos Solutions Agents</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Des agents IA <span className="text-gradient">intelligents</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Comprendre, apprendre, agir : un cerveau numérique au service de votre croissance.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100}>
            <div className="web-feature-card group h-full relative">
              <div className="web-feature-glow" aria-hidden="true" />

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

export default AgentFeatures;
