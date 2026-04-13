import { Globe, Mic, Sparkles, Check, ArrowRight } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import GlobalSparkles from "@/components/GlobalSparkles";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Découverte",
    subtitle: "Web AgencIA",
    icon: Globe,
    color: "primary",
    features: [
      "Site vitrine sur-mesure",
      "Design responsive (Mobile & Tablette)",
      "Référencement SEO optimisé",
      "Interface d'administration autonome",
      "Hébergement & maintenance inclus",
    ],
    cta: "Demander un devis",
    popular: false,
  },
  {
    name: "Performance",
    subtitle: "Vocal AgencIA",
    icon: Mic,
    color: "primary",
    features: [
      "Agent Vocal IA 24/7",
      "Prise de RDV intelligente",
      "Transfert d'appel instantané",
      "Intelligence post-appel (résumés)",
      "Voix naturelle personnalisée",
    ],
    cta: "Demander un devis",
    popular: false,
  },
  {
    name: "Pack Combo",
    subtitle: "AgencIA Complet",
    icon: Sparkles,
    color: "primary",
    features: [
      "Tout de l'offre Découverte",
      "Tout de l'offre Performance",
      "ChatBot IA Web intégré",
      "Synchronisation native complète",
      "Un seul interlocuteur dédié",
      "Le meilleur rapport qualité/prix",
    ],
    cta: "Demander un devis",
    popular: true,
  },
];

const PricingPage = () => (
  <>
    <AnimatedBackground />
    <GlobalSparkles />
    <div className="relative z-10">
      <Navbar />
      <section className="pt-32 pb-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Tarifs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
              Des offres <span className="text-gradient">sur-mesure</span>
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
              Chaque projet est unique. Contactez-nous pour un devis personnalisé adapté à vos besoins.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 120}>
                <div className={`card-glass h-full flex flex-col relative ${plan.popular ? "border-primary/30 shadow-[0_0_30px_-8px_hsl(217_91%_53%/0.15)]" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Recommandé
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                  </div>

                  <div className="text-center mb-6">
                    <span className="text-2xl font-bold text-foreground">Sur-mesure</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`w-full text-center text-sm font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? "btn-primary-neu"
                        : "bg-secondary text-foreground hover:bg-secondary/80 border border-border/50"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <p className="text-center text-xs text-muted-foreground/60 mt-12 max-w-lg mx-auto italic">
              *Tous nos tarifs sont personnalisés selon la complexité de votre projet. Contactez-nous pour un devis gratuit et sans engagement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
    <ScrollToTop />
  </>
);

export default PricingPage;
