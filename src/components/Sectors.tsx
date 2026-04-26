import { useState } from "react";
import { Scissors, PawPrint, UtensilsCrossed, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const sectors = [
  {
    id: "coiffure",
    icon: Scissors,
    label: "Coiffure",
    text: "L'Agent IA identifie le type de soin et réserve le créneau idéal. Sublimez vos clients, l'IA gère le temps.",
    accent: "from-[#00d2ff] to-[#3a7bd5]",
    stats: [
      { value: "+38%", label: "RDV pris hors horaires" },
      { value: "0", label: "Appel manqué" },
    ],
  },
  {
    id: "toilettage",
    icon: PawPrint,
    label: "Toilettage",
    text: "L'Agent IA prend les rendez-vous et pose les bonnes questions : race, taille, type de soin. Vous vous occupez des poils, pas du téléphone.",
    accent: "from-[#7b5cff] to-[#3a7bd5]",
    stats: [
      { value: "100%", label: "Qualification automatique" },
      { value: "24/7", label: "Disponibilité" },
    ],
  },
  {
    id: "restauration",
    icon: UtensilsCrossed,
    label: "Restauration",
    text: "Gestion des réservations de tables et réponses immédiates aux questions de vos clients (carte, horaires, accès).",
    accent: "from-[#00d2ff] to-[#7b5cff]",
    stats: [
      { value: "< 2s", label: "Temps de réponse" },
      { value: "+25%", label: "Tables remplies" },
    ],
  },
  {
    id: "bien-etre",
    icon: Sparkles,
    label: "Bien-être",
    text: "Offrez un accueil VIP immédiat pour vos centres de soin, spas ou salles de sport.",
    accent: "from-[#3a7bd5] to-[#00d2ff]",
    stats: [
      { value: "VIP", label: "Accueil premium" },
      { value: "24/7", label: "Réservations" },
    ],
  },
  {
    id: "autre",
    icon: HelpCircle,
    label: "Votre secteur ?",
    text: "Votre métier n'est pas listé ? Nous créons des agents sur-mesure pour tout type d'activité. Contactez-nous pour en discuter.",
    accent: "from-[#7b5cff] to-[#00d2ff]",
    cta: true,
  },
];

const Sectors = () => {
  const [active, setActive] = useState("coiffure");
  const current = sectors.find((s) => s.id === active)!;

  return (
    <section id="secteurs" className="py-28 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Secteurs</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Adapté à <span className="text-gradient">votre secteur</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Un Agent IA entraîné pour les besoins spécifiques de chaque métier.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {sectors.map((s) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`sector-tab group ${isActive ? "sector-tab-active" : ""}`}
                  >
                    {isActive && (
                      <span
                        className={`sector-tab-bg bg-gradient-to-r ${s.accent}`}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      <s.icon size={15} strokeWidth={2} />
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Card */}
            <div className="sector-card group relative animate-fade-in" key={current.id}>
              <div className="web-feature-glow" aria-hidden="true" />

              <div className="flex items-start gap-5 mb-6">
                <div className={`web-feature-icon shrink-0 bg-gradient-to-br ${current.accent}`}>
                  <current.icon size={24} strokeWidth={1.8} className="text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-foreground">{current.label}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{current.text}</p>
                </div>
              </div>

              {"stats" in current && current.stats && (
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-border/40">
                  {current.stats.map((stat, idx) => (
                    <div key={idx} className="sector-stat">
                      <span
                        className={`sector-stat-value bg-gradient-to-r ${current.accent}`}
                      >
                        {stat.value}
                      </span>
                      <span className="sector-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {"cta" in current && current.cta && (
                <a href="#contact" className="sector-cta-btn group/btn">
                  <span>Nous contacter</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Sectors;
