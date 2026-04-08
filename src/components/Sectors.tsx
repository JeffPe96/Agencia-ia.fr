import { useState } from "react";
import { Scissors, PawPrint, UtensilsCrossed, Sparkles, HelpCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const sectors = [
  {
    id: "coiffure",
    icon: Scissors,
    label: "Coiffure",
    text: "L'Agent IA identifie le type de soin et réserve le créneau idéal. Sublimez vos clients, l'IA gère le temps.",
  },
  {
    id: "toilettage",
    icon: PawPrint,
    label: "Toilettage",
    text: "L'Agent IA prend les rendez-vous et pose les bonnes questions : race, taille, type de soin. Vous vous occupez des poils, pas du téléphone.",
  },
  {
    id: "restauration",
    icon: UtensilsCrossed,
    label: "Restauration",
    text: "Gestion des réservations de tables et réponses immédiates aux questions de vos clients (carte, horaires, accès).",
  },
  {
    id: "bien-etre",
    icon: Sparkles,
    label: "Bien-être",
    text: "Offrez un accueil VIP immédiat pour vos centres de soin, spas ou salles de sport.",
  },
  {
    id: "autre",
    icon: HelpCircle,
    label: "Votre secteur ?",
    text: "Votre métier n'est pas listé ? Nous créons des agents sur-mesure pour tout type d'activité. Contactez-nous pour en discuter.",
    cta: true,
  },
];

const Sectors = () => {
  const [active, setActive] = useState("coiffure");
  const current = sectors.find((s) => s.id === active)!;

  return (
    <section id="secteurs" className="py-28">
      <div className="container mx-auto px-4">
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
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {sectors.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                    active === s.id
                      ? "bg-primary text-primary-foreground border-primary shadow-glow"
                      : "bg-card/60 text-muted-foreground border-border/50 hover:text-foreground hover:border-border"
                  }`}
                >
                  <s.icon size={16} />
                  {s.label}
                </button>
              ))}
            </div>

            <div className="card-glass text-center animate-fade-in-up" key={current.id}>
              <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-5">
                <current.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{current.label}</h3>
              <p className="text-muted-foreground leading-relaxed">{current.text}</p>
              {"cta" in current && current.cta && (
                <a href="#contact" className="btn-primary-neu text-sm px-6 py-2.5 rounded-xl inline-block mt-5">
                  Nous contacter
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
