import { Sparkles, Globe, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PackCombo = () => (
  <section className="py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Offre</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Pack <span className="text-gradient">Digital Premium</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Site Web Pro + Agent IA. L'alliance parfaite pour ne plus jamais perdre d'opportunité.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="max-w-3xl mx-auto card-glass p-0 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 border-b md:border-b-0 md:border-r border-border/20">
              <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] flex items-center justify-center mb-5">
                <Sparkles className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Agent Vocal IA</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-0.5 shrink-0" /> Réponse automatique 24/7</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-0.5 shrink-0" /> Gestion des rendez-vous</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-0.5 shrink-0" /> Voix naturelle personnalisée</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-0.5 shrink-0" /> Synchronisation agenda</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-0.5 shrink-0" /> ChatBot Web IA intégré nativement</li>
              </ul>
            </div>

            <div className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-accent/[0.06] flex items-center justify-center mb-5">
                <Globe className="text-accent" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Site Web Professionnel</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-0.5 shrink-0" /> Site Haute Performance (Vitesse optimisée)</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-0.5 shrink-0" /> Référencement SEO (Visible sur Google)</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-0.5 shrink-0" /> Design Responsive (Mobile & Tablette)</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-0.5 shrink-0" /> Interface d'administration autonome</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-0.5 shrink-0" /> Hébergement et maintenance inclus</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/20 px-8 py-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Un seul interlocuteur, une solution complète pour votre visibilité digitale.
            </p>
            <a href="#contact" className="btn-primary-neu text-sm px-8 py-3 rounded-xl inline-block">
              Demander un devis combo
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PackCombo;
