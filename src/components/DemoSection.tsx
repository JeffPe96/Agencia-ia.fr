import { useState } from "react";
import { Play, Pause, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const DemoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Écoutez l'IA en action
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
            Découvrez comment l'IA gère une prise de rendez-vous réelle dans un salon de coiffure.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="max-w-lg mx-auto">
            <div className="card-soft shadow-neu p-0 overflow-hidden">
              {/* Call UI header */}
              <div className="bg-primary/[0.04] px-8 py-5 flex items-center gap-4 border-b border-border/50">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Salon Élégance — Appel entrant</p>
                  <p className="text-xs text-muted-foreground">Simulation IA • Coiffeur</p>
                </div>
              </div>

              {/* Player body */}
              <div className="px-8 py-8 flex flex-col items-center gap-6">
                {/* Waveform placeholder */}
                <div className="w-full flex items-center gap-1 h-10 justify-center">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full bg-primary/20 transition-all duration-300"
                      style={{
                        width: 3,
                        height: playing
                          ? `${8 + Math.sin(i * 0.5) * 16 + Math.random() * 8}px`
                          : `${4 + Math.sin(i * 0.3) * 4}px`,
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setPlaying(!playing)}
                  className="btn-primary-neu flex items-center gap-3 text-sm px-8 py-3 rounded-xl"
                >
                  {playing ? <Pause size={18} /> : <Play size={18} />}
                  {playing ? "Mettre en pause" : "Écouter la simulation"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  « Bonjour, Salon Élégance, comment puis-je vous aider ? … Parfait, je vous propose un créneau jeudi à 14h. »
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DemoSection;
