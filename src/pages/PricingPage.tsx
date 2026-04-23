import { Phone, Monitor, MessageCircleHeart, Mic2, Languages, CreditCard, Check, Sparkles, type LucideIcon } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import GlobalSparkles from "@/components/GlobalSparkles";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

type Plan = {
  name: string;
  tagline: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  setupLabel: string;
  setupPrice: string;
  monthly?: string;
  altOption?: { label: string; price: string };
  features: string[];
  popular?: boolean;
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
      "Création du cerveau IA",
      "Scripts sur-mesure",
      "Connexion calendriers (Google / Cal.com)",
      "Transfert d'appels intelligents",
      "SMS de confirmation automatique",
    ],
    popular: true,
  },
  {
    name: "Web AgencIA",
    tagline: "Vitesse, SEO et Conversion",
    icon: Monitor,
    setupLabel: "Création / Refonte",
    setupPrice: "À partir de 1 600 €",
    monthly: "89 €/mois",
    features: [
      "Design Premium & Responsive",
      "Optimisation SEO",
      "Hébergement Ultra-rapide",
      "Maintenance & Sécurité incluses",
    ],
  },
  {
    name: "Les Agents Chatbots",
    tagline: "Vendez sur WhatsApp, Instagram et Web",
    icon: MessageCircleHeart,
    setupLabel: "Pack Intégration Seule",
    setupPrice: "750 €",
    altOption: { label: "Pack Solution Complète", price: "1 100 €" },
    monthly: "79 €/mois",
    features: [
      "IA experte SAV",
      "Stratégie proactive de vente",
      "Lead Scoring",
      "Analyse des logs mensuelle",
    ],
  },
];

const addons = [
  { icon: Mic2, name: "Clonage de voix", price: "350 €" },
  { icon: Languages, name: "Module Multilingue", price: "250 €/langue" },
  { icon: CreditCard, name: "Passerelle de paiement complexe", price: "550 €" },
];

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

        {/* DARK PRICING ISLAND */}
        <section className="pt-32 pb-24 relative">
          {/* Dark background overlay just for this section */}
          <div className="absolute inset-0 bg-[hsl(222_47%_6%)] -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217_91%_30%/0.25),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(190_90%_40%/0.15),_transparent_60%)]" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle 1px at center, hsl(190 90% 70%) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative">
            <ScrollReveal>
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <p className="text-xs font-semibold text-[hsl(190_90%_65%)] tracking-[0.2em] uppercase mb-4">
                  Tarifs · AgencIA
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 text-white">
                  Des solutions IA{" "}
                  <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,hsl(217_91%_65%),hsl(190_90%_65%))]">
                    transparentes
                  </span>
                </h1>
                <p className="text-base text-white/60">
                  Trois services modulaires conçus pour automatiser, convertir et faire grandir votre activité.
                </p>
              </div>
            </ScrollReveal>

            {/* PLANS GRID */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {plans.map((plan, i) => {
                const Icon = plan.icon;
                return (
                  <ScrollReveal key={plan.name} delay={i * 120}>
                    <div
                      className={`group relative h-full flex flex-col rounded-3xl p-7 lg:p-8 backdrop-blur-xl transition-all duration-500
                        ${plan.popular
                          ? "bg-[linear-gradient(160deg,hsl(217_91%_18%/0.6),hsl(222_47%_8%/0.8))] border border-[hsl(190_90%_55%/0.4)] shadow-[0_0_40px_-10px_hsl(190_90%_50%/0.5)]"
                          : "bg-white/[0.03] border border-white/10 hover:border-[hsl(190_90%_55%/0.3)] hover:bg-white/[0.05]"
                        }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                          <div className="flex items-center gap-1.5 bg-[linear-gradient(135deg,hsl(217_91%_55%),hsl(190_90%_55%))] text-white text-[11px] font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-[0_4px_20px_-4px_hsl(190_90%_50%/0.6)]">
                            <Sparkles size={12} />
                            La Plus Populaire
                          </div>
                        </div>
                      )}

                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                          ${plan.popular
                            ? "bg-[linear-gradient(135deg,hsl(217_91%_55%/0.3),hsl(190_90%_55%/0.3))] border border-[hsl(190_90%_55%/0.4)]"
                            : "bg-white/5 border border-white/10"
                          }`}
                      >
                        <Icon size={24} className="text-[hsl(190_90%_70%)]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-1.5">{plan.name}</h3>
                      <p className="text-sm text-white/50 mb-7">{plan.tagline}</p>

                      {/* Price block */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <p className="text-[11px] font-medium text-[hsl(190_90%_65%)] uppercase tracking-wider mb-1.5">
                          {plan.setupLabel}
                        </p>
                        <p className="text-3xl font-bold text-white leading-tight">{plan.setupPrice}</p>

                        {plan.altOption && (
                          <div className="mt-3 pt-3 border-t border-white/5">
                            <p className="text-[11px] font-medium text-[hsl(190_90%_65%)] uppercase tracking-wider mb-1">
                              {plan.altOption.label}
                            </p>
                            <p className="text-xl font-semibold text-white/90">{plan.altOption.price}</p>
                          </div>
                        )}

                        {plan.monthly && (
                          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(190_90%_60%)] animate-pulse" />
                            <span className="text-sm text-white/80">
                              <span className="font-semibold">Abonnement :</span> {plan.monthly}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                            <Check size={16} className="text-[hsl(190_90%_65%)] mt-0.5 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <button
                        onClick={scrollToContact}
                        className={`w-full text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300
                          ${plan.popular
                            ? "bg-[linear-gradient(135deg,hsl(217_91%_55%),hsl(190_90%_55%))] text-white hover:shadow-[0_8px_30px_-6px_hsl(190_90%_50%/0.6)] hover:-translate-y-0.5"
                            : "bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-[hsl(190_90%_55%/0.4)]"
                          }`}
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
              <div className="mt-20 max-w-5xl mx-auto">
                <div className="text-center mb-8">
                  <p className="text-xs font-semibold text-[hsl(190_90%_65%)] tracking-[0.2em] uppercase mb-3">
                    Modules additionnels
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Les compléments</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {addons.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div
                        key={a.name}
                        className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[hsl(190_90%_55%/0.3)] hover:bg-white/[0.05] transition-all duration-300"
                      >
                        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[hsl(190_90%_55%/0.1)] transition-colors">
                          <Icon size={20} className="text-[hsl(190_90%_70%)]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-white truncate">{a.name}</p>
                          <p className="text-base font-semibold bg-clip-text text-transparent bg-[linear-gradient(135deg,hsl(217_91%_70%),hsl(190_90%_70%))]">
                            {a.price}
                          </p>
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
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl bg-[linear-gradient(135deg,hsl(217_91%_18%/0.6),hsl(222_47%_8%/0.8))] backdrop-blur-xl border border-[hsl(190_90%_55%/0.25)]">
                  <p className="text-sm text-white/80">
                    Besoin d'un devis personnalisé ? Discutons de votre projet.
                  </p>
                  <a
                    href="https://wa.me/33000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-6 py-2.5 rounded-xl bg-[linear-gradient(135deg,hsl(217_91%_55%),hsl(190_90%_55%))] text-white whitespace-nowrap hover:shadow-[0_8px_30px_-6px_hsl(190_90%_50%/0.6)] transition-all"
                  >
                    Contactez-nous
                  </a>
                </div>
                <p className="text-xs text-white/40 mt-6 italic">
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
