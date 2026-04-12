import { useEffect, useRef } from "react";
import { Mic, Code } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      leftRef.current?.classList.add("hero-card-visible");
      rightRef.current?.classList.add("hero-card-visible");
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/[0.1] text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              Solutions IA & Web pour commerces locaux
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-6">
              Ne manquez plus jamais un client.{" "}
              <span className="text-gradient">Laissez l'IA travailler pour vous.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed font-light">
              Automatisez vos appels et créez votre vitrine digitale —&nbsp;tout-en-un, sur-mesure.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Action Cards */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 max-w-3xl mx-auto">
          {/* VocalAgencIA — slides from left */}
          <div
            ref={leftRef}
            className="hero-card-left flex-1"
          >
            <a
              href="#avantages"
              className="card-glass group flex flex-col items-center text-center h-full p-8 hover:border-primary/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:shadow-glow transition-shadow duration-500">
                  <Mic className="text-primary" size={28} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2">VocalAgencIA</p>
                <h3 className="text-lg font-bold text-foreground mb-2">Automatiser mes appels</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Agent vocal IA 24h/24 — rendez-vous, FAQ, transfert intelligent.
                </p>
              </div>
            </a>
          </div>

          {/* WebAgencIA — slides from right */}
          <div
            ref={rightRef}
            className="hero-card-right flex-1"
          >
            <a
              href="#portfolio"
              className="card-glass group flex flex-col items-center text-center h-full p-8 hover:border-accent/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:shadow-[0_0_24px_-4px_hsl(160_84%_39%/0.25)] transition-shadow duration-500">
                  <Code className="text-accent" size={28} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent/70 mb-2">WebAgencIA</p>
                <h3 className="text-lg font-bold text-foreground mb-2">Créer mon site web</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Site haute performance, SEO, design responsive sur-mesure.
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground/50 text-sm">
          <span>✓ Mise en service rapide</span>
          <span>✓ Sans engagement</span>
          <span>✓ Support dédié</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
