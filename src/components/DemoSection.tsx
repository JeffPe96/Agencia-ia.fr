import { useState, useEffect, useRef } from "react";
import { Play, Pause, Phone } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import ScrollReveal from "./ScrollReveal";

const subtitles = [
  { time: 0, text: "« Bonjour, Salon Élégance, comment puis-je vous aider ? »" },
  { time: 3, text: "« Oui bien sûr, vous souhaitez un rendez-vous pour quelle prestation ? »" },
  { time: 7, text: "« Parfait, une coupe et un brushing. Je regarde les disponibilités… »" },
  { time: 11, text: "« Je vous propose jeudi à 14h ou vendredi à 10h, qu'est-ce qui vous arrange ? »" },
  { time: 15, text: "« Jeudi à 14h, c'est noté ! À quel nom, s'il vous plaît ? »" },
  { time: 19, text: "« Merci Madame Dupont, votre rendez-vous est confirmé. À jeudi ! »" },
];

const TOTAL_DURATION = 24;

const DemoSection = () => {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= TOTAL_DURATION) {
            setPlaying(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing]);

  const currentSubtitle = [...subtitles].reverse().find((s) => elapsed >= s.time);
  const progress = (elapsed / TOTAL_DURATION) * 100;

  // Generate wave bars
  const bars = Array.from({ length: 40 }, (_, i) => i);

  return (
    <section id="demo" className="py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Démo live</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Écoutez la <span className="text-gradient">différence</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Une voix humaine, pas un robot. Découvrez comment l'Agent IA gère un appel.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="max-w-lg mx-auto">
            <div className="card-glass p-0 overflow-hidden">
              <div className="px-8 py-5 flex items-center gap-4 border-b border-border/30">
                <div className="w-10 h-10 rounded-full bg-primary/[0.06] flex items-center justify-center">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Salon Élégance — Appel entrant</p>
                  <p className="text-xs text-muted-foreground">Simulation Agent IA</p>
                </div>
              </div>

              <div className="px-8 py-8 flex flex-col items-center gap-6">
                {/* Sound wave visualization */}
                <div className="w-full h-12 flex items-center justify-center gap-[2px]">
                  {bars.map((i) => (
                    <div
                      key={i}
                      className="w-[3px] rounded-full transition-all duration-150"
                      style={{
                        height: playing
                          ? `${Math.max(8, Math.random() * 40)}px`
                          : '8px',
                        backgroundColor: `hsl(217 91% ${50 + Math.sin(i * 0.3) * 15}%)`,
                        opacity: playing ? 0.7 : 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="w-full space-y-2">
                  <Progress value={progress} className="h-1.5 rounded-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{Math.floor(elapsed)}s</span>
                    <span>{TOTAL_DURATION}s</span>
                  </div>
                </div>

                <div className="min-h-[3rem] flex items-center justify-center">
                  <p className="text-sm text-foreground text-center italic transition-opacity duration-300" key={currentSubtitle?.time}>
                    {playing || elapsed > 0
                      ? currentSubtitle?.text
                      : "Appuyez sur lecture pour démarrer la simulation"}
                  </p>
                </div>

                <button
                  onClick={() => {
                    if (!playing && elapsed >= TOTAL_DURATION) setElapsed(0);
                    setPlaying(!playing);
                  }}
                  className="btn-primary-neu flex items-center gap-3 text-sm px-8 py-3 rounded-xl"
                >
                  {playing ? <Pause size={18} /> : <Play size={18} />}
                  {playing ? "Mettre en pause" : "Écouter la simulation"}
                </button>
              </div>
            </div>

            <p className="text-xs text-muted-foreground/50 text-center mt-6 max-w-sm mx-auto">
              Ceci est un exemple. Chaque agent est configuré sur-mesure pour votre entreprise.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DemoSection;
