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
                {/* Progress bar */}
                <div className="w-full space-y-2">
                  <Progress value={progress} className="h-2 rounded-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{Math.floor(elapsed)}s</span>
                    <span>{TOTAL_DURATION}s</span>
                  </div>
                </div>

                {/* Subtitle */}
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DemoSection;
