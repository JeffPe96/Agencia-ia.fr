import { Globe, Search, Smartphone, Settings } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Globe,
    title: "Site Haute Performance",
    desc: "Temps de chargement optimisé, architecture moderne et hébergement premium pour une expérience fluide.",
  },
  {
    icon: Search,
    title: "SEO & Visibilité Google",
    desc: "Référencement naturel avancé pour que vos clients vous trouvent en première page de Google.",
  },
  {
    icon: Smartphone,
    title: "Design Responsive",
    desc: "Parfait sur mobile, tablette et desktop. Un design sur-mesure qui reflète votre image de marque.",
  },
  {
    icon: Settings,
    title: "Interface d'Administration",
    desc: "Modifiez vos textes et images en toute autonomie grâce à un back-office intuitif.",
  },
];

const WebFeatures = () => (
  <section className="py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Nos Solutions Web</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Votre vitrine digitale <span className="text-gradient">sur-mesure</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Des sites conçus pour convertir, pas juste pour exister.
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

export default WebFeatures;
