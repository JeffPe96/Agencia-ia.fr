import { useState } from "react";
import { Scissors, PawPrint, UtensilsCrossed, Sparkles, HelpCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const sectors = [
  {
    id: "coiffure",
    icon: Scissors,
    label: "Coiffure",
    text: "Gérez vos clients en toute sérénité. L'Agent IA s'occupe des réservations pendant que vous créez. Vous sublimez les cheveux, laissez-nous gérer le téléphone.",
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
    text: "L'Agent IA gère les réservations de tables et les demandes d'horaires selon vos disponibilités. Plus un seul appel manqué en plein rush.",
  },
  {
    id: "bien-etre",
    icon: Sparkles,
    label: "Bien-être",
    text: "Spas, instituts de beauté, salles de sport & studios : accueil VIP immédiat. Offrez à vos clients la réactivité d'un grand spa, même si vous travaillez seul.",
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
    <section id="secteurs" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Adapté à votre secteur
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
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
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    active === s.id
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <s.icon size={16} />
                  {s.label}
                </button>
              ))}
            </div>

            <div className="card-soft text-center animate-fade-in-up" key={current.id}>
              <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center mx-auto mb-5">
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
