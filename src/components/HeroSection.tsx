import { useEffect, useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.classList.add("section-animate");
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.08] text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            Agent Vocal IA pour commerces locaux
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Ne manquez plus jamais un client.{" "}
            <span className="text-primary">Laissez votre IA répondre.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Votre assistant vocal intelligent prend les appels, gère les rendez-vous et remplit votre agenda —&nbsp;24h/24, 7j/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demo" className="btn-primary-neu text-base px-10 py-4 rounded-2xl">
              Réserver ma démo gratuite
            </a>
            <a
              href="#avantages"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-6 py-4"
            >
              Découvrir les avantages ↓
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60 text-sm">
            <span>✓ Installation en 24h</span>
            <span>✓ Sans engagement</span>
            <span>✓ Support dédié</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
