import ScrollReveal from "./ScrollReveal";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.08] text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            Agent Vocal IA pour commerces locaux
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Ne manquez plus jamais un client.{" "}
            <span className="text-primary">Laissez votre Agent IA répondre.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Votre assistant vocal intelligent prend les appels, gère les rendez-vous et remplit votre agenda —&nbsp;24h/24, 7j/7, tout en respectant vos horaires d'ouverture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary-neu text-base px-10 py-4 rounded-2xl">
              Réserver ma démo gratuite
            </a>
            <a
              href="#avantages"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-6 py-4"
            >
              Découvrir les avantages ↓
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-muted-foreground/60 text-sm">
            <span>✓ Mise en service rapide</span>
            <span className="hidden sm:inline text-muted-foreground/30">·</span>
            <span>✓ Sans engagement</span>
            <span className="hidden sm:inline text-muted-foreground/30">·</span>
            <span>✓ Support dédié</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
