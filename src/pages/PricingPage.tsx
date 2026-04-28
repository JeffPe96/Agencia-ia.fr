import { Phone, Monitor, MessageCircleHeart, Mic2, Languages, CreditCard, CheckCircle2, Sparkles, Info, type LucideIcon } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import GlobalSparkles from "@/components/GlobalSparkles";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

type Plan = {
  name: string;
  tagline: string;
  icon: LucideIcon;
  setupLabel: string;
  setupPrice: string;
  monthly?: string;
  monthlyDetail?: string;
  altOption?: { label: string; price: string; detail?: string };
  features: string[];
  note?: string;
  popular?: boolean;
  accent: "primary" | "violet" | "cyan";
};

const plans: Plan[] = [
  {
    name: "Vocal AgencIA",
    tagline: "Votre réceptionniste intelligente 24/7",
    icon: Phone,
    setupLabel: "Mise en place",
    setupPrice: "À partir de 950 €",
    monthly: "149 €/mois",
    features: [
      "Installation et configuration complète",
      "IA entraînée sur vos données",
      "Prise de rendez-vous automatisée (Sync Agenda)",
      "Transfert d'appel intelligent vers un humain",
      "Support technique dédié",
      "Rapport d'appels hebdomadaire",
    ],
    note: "Le prix final dépend de la complexité de la connexion avec vos outils de gestion internes.",
    popular: true,
    accent: "primary",
  },
  {
    name: "Web AgencIA",
    tagline: "Vitesse, SEO et Conversion",
    icon: Monitor,
    setupLabel: "Création / Refonte",
    setupPrice: "À partir de 1 600 €",
    monthly: "89 €/mois",
    features: [
      "Installation et configuration complète",
      "Design Premium & Responsive",
      "Optimisation SEO",
      "Hébergement Ultra-rapide",
      "Maintenance & Sécurité incluses",
      "Support technique dédié",
    ],
    note: "Hébergement et DNS à la charge du client (AgencIA vous accompagne dans la configuration).",
    accent: "violet",
  },
];

const addons = [
  { icon: Mic2, name: "Clonage de voix personnalisé", price: "+350 €" },
  { icon: Languages, name: "Module Multilingue", price: "+250 € / langue" },
  { icon: CreditCard, name: "Système de Paiement & Réservation Complexe", price: "+550 €" },
];

const accentClasses: Record<Plan["accent"], { iconBg: string; iconText: string; tag: string }> = {
  primary: {
    iconBg: "bg-primary/10 border-primary/20",
    iconText: "text-primary",
    tag: "text-primary",
  },
  violet: {
    iconBg: "bg-[hsl(260,60%,58%)]/10 border-[hsl(260,60%,58%)]/20",
    iconText: "text-[hsl(260,60%,58%)]",
    tag: "text-[hsl(260,60%,58%)]",
  },
  cyan: {
    iconBg: "bg-[hsl(190,80%,45%)]/10 border-[hsl(190,80%,45%)]/20",
    iconText: "text-[hsl(190,80%,45%)]",
    tag: "text-[hsl(190,80%,45%)]",
  },
};

const scrollToContact = () => {
  const el = document.getElementById("pricing-contact");
  el?.scrollIntoView({ behavior: "smooth" });
};

const PricingPage = () => {
  return (
    <>
      <AnimatedBackground />
      <GlobalSparkles />
      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-24 relative">
          <div className="container mx-auto px-4">
            {/* HEADER */}
            <ScrollReveal>
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <p className="text-[10px] font-semibold text-primary tracking-[0.2em] uppercase mb-4">
                  Tarifs · AgencIA
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 text-foreground">
                  Des solutions IA{" "}
                  <span className="text-gradient">transparentes</span>
                </h1>
                <p className="text-base text-muted-foreground">
                  Trois services modulaires conçus pour automatiser, convertir et faire grandir votre activité.
                </p>
              </div>
            </ScrollReveal>

            {/* PLANS GRID */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
              {plans.map((plan, i) => {
                const Icon = plan.icon;
                const a = accentClasses[plan.accent];
                return (
                  <ScrollReveal key={plan.name} delay={i * 120}>
                    <div
                      className={`group relative h-full flex flex-col rounded-3xl p-7 lg:p-8 bg-card/70 backdrop-blur-xl transition-all duration-500
                        ${plan.popular
                          ? "border-2 border-primary/30 shadow-[0_10px_40px_-12px_hsl(217_91%_53%/0.25)] hover:shadow-[0_16px_50px_-12px_hsl(217_91%_53%/0.35)] hover:-translate-y-1"
                          : "border border-border/60 hover:border-primary/20 hover:-translate-y-1 hover:shadow-medium"
                        }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                          <div className="flex items-center gap-1.5 bg-primary text-primary-foreground text-[10px] font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-[0_4px_20px_-4px_hsl(217_91%_53%/0.5)]">
                            <Sparkles size={12} />
                            La Plus Populaire
                          </div>
                        </div>
                      )}

                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${a.iconBg}`}>
                        <Icon size={24} className={a.iconText} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-1.5">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-7">{plan.tagline}</p>

                      {/* Price block */}
                      <div className="mb-6 pb-6 border-b border-border/60">
                        <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] mb-1.5 ${a.tag}`}>
                          {plan.setupLabel}
                        </p>
                        <p className="text-3xl font-bold text-foreground leading-tight">{plan.setupPrice}</p>

                        {plan.altOption && (
                          <div className="mt-4 pt-4 border-t border-border/40">
                            <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] mb-1 ${a.tag}`}>
                              {plan.altOption.label}
                            </p>
                            <p className="text-2xl font-bold text-foreground">{plan.altOption.price}</p>
                            {plan.altOption.detail && (
                              <p className="text-xs text-muted-foreground mt-1.5">{plan.altOption.detail}</p>
                            )}
                          </div>
                        )}

                        {plan.monthly && (
                          <div className="mt-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/60">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                              <span className="text-sm text-foreground">
                                <span className="font-semibold">ABONNEMENT :</span> {plan.monthly}
                              </span>
                            </div>
                            {plan.monthlyDetail && (
                              <p className="text-xs text-muted-foreground mt-2">{plan.monthlyDetail}</p>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-6 flex-1">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                            <CheckCircle2 size={18} className={`${a.iconText} mt-0.5 shrink-0`} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Note */}
                      {plan.note && (
                        <div className="mb-6 flex items-start gap-2 p-3 rounded-xl bg-secondary/70 border border-border/50">
                          <Info size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                          <p className="text-xs text-muted-foreground leading-relaxed">{plan.note}</p>
                        </div>
                      )}

                      {/* CTA */}
                      <button
                        onClick={scrollToContact}
                        className="btn-primary-neu w-full text-sm py-3.5"
                      >
                        Contactez-nous
                      </button>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* COMPLEMENTS */}
            <ScrollReveal delay={300}>
              <div className="mt-24 max-w-5xl mx-auto">
                <div className="text-center mb-8">
                  <p className="text-[10px] font-semibold text-primary tracking-[0.2em] uppercase mb-3">
                    Modules additionnels
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Les compléments</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {addons.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div
                        key={a.name}
                        className="group flex items-center gap-4 p-5 rounded-2xl bg-card/70 backdrop-blur-md border border-border/60 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300"
                      >
                        <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-foreground leading-snug">{a.name}</p>
                          <p className="text-base font-semibold text-gradient mt-0.5">{a.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* CONTACT ANCHOR + DISCLAIMER */}
            <ScrollReveal delay={400}>
              <div id="pricing-contact" className="mt-20 max-w-2xl mx-auto text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-3xl bg-card/70 backdrop-blur-xl border border-border/60 shadow-soft">
                  <p className="text-sm text-foreground/80">
                    Besoin d'un devis personnalisé ? Discutons de votre projet.
                  </p>
                  <a
                    href="https://wa.me/33000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-neu text-sm px-6 py-2.5 whitespace-nowrap"
                  >
                    Contactez-nous
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-6 italic">
                  *Tous les tarifs sont HT. Devis détaillé gratuit et sans engagement.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

export default PricingPage;
