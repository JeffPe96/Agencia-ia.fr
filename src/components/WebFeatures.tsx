import { Gauge, Search, Smartphone, Settings, Zap, TrendingUp, Layout, Lock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Gauge,
    title: "Site Haute Performance",
    desc: "Architecture moderne, hébergement premium et optimisation Core Web Vitals pour une expérience ultra-fluide.",
    metric: "< 1.5s",
    metricLabel: "Temps de chargement",
    accent: "from-[#00d2ff] to-[#3a7bd5]",
  },
  {
    icon: Search,
    title: "SEO & Visibilité Google",
    desc: "Référencement naturel avancé, données structurées et stratégie de contenu pour dominer la première page.",
    metric: "TOP 3",
    metricLabel: "Objectif Google",
    accent: "from-[#7b5cff] to-[#3a7bd5]",
  },
  {
    icon: Smartphone,
    title: "Design Responsive",
    desc: "Une expérience parfaite sur mobile, tablette et desktop. Design sur-mesure aligné à votre identité de marque.",
    metric: "100%",
    metricLabel: "Mobile-first",
    accent: "from-[#00d2ff] to-[#7b5cff]",
  },
  {
    icon: Settings,
    title: "Interface d'Administration",
    desc: "Modifiez textes, images et pages en autonomie totale grâce à un back-office intuitif et sécurisé.",
    metric: "0 code",
    metricLabel: "Autonomie totale",
    accent: "from-[#3a7bd5] to-[#00d2ff]",
  },
];

const trustPoints = [
  { icon: Zap, label: "Stack moderne (React, Vite, Tailwind)" },
  { icon: TrendingUp, label: "Analytics & conversion intégrés" },
  { icon: Layout, label: "Design system cohérent" },
  { icon: Lock, label: "Sécurité & hébergement premium" },
];

const WebFeatures = () => (
  <section className="py-28 relative">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Nos Solutions Web</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Votre vitrine digitale <span className="text-gradient">sur-mesure</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Des sites conçus pour convertir, pas juste pour exister.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100}>
            <div className="web-feature-card group h-full">
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

      <ScrollReveal delay={500}>
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="web-trust-chip">
                <tp.icon size={14} className="text-primary" strokeWidth={2} />
                <span>{tp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default WebFeatures;
