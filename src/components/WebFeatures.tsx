import { Rocket, Search, Smartphone, ShieldCheck, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Rocket,
    title: "Vitesse Éclair & Performance",
    desc: "Architecture optimisée avec les technologies les plus rapides pour un temps de chargement minimal et un score SEO maximal.",
    metric: "< 1.5s",
    metricLabel: "Temps de chargement",
    accent: "from-[#00d2ff] to-[#3a7bd5]",
  },
  {
    icon: Search,
    title: "SEO Local & National Avancé",
    desc: "Optimisation structurelle complète pour dominer Google, attirer des clients qualifiés et booster votre visibilité.",
    metric: "TOP 3",
    metricLabel: "Objectif Google",
    accent: "from-[#7b5cff] to-[#3a7bd5]",
  },
  {
    icon: Smartphone,
    title: "Expérience Mobile-First",
    desc: "Navigation fluide et design adaptatif sur tous les écrans (mobile, tablette, PC) pour convertir chaque visiteur.",
    metric: "100%",
    metricLabel: "Responsive",
    accent: "from-[#00d2ff] to-[#7b5cff]",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Évolutions Illimitées",
    desc: "Service tout inclus : sécurité, mises à jour techniques et modifications de contenu illimitées chaque mois pour votre sérénité.",
    metric: "49€/mois",
    metricLabel: "Tout inclus",
    accent: "from-[#3a7bd5] to-[#00d2ff]",
    badge: "Abonnement",
  },
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

export default WebFeatures;
