import { useState, useEffect, useRef, useMemo } from "react";
import { Play, Pause, Phone, Bot, User, Clock, CheckCircle2, Sparkles, RotateCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import ScrollReveal from "./ScrollReveal";

type Speaker = "ai" | "client";

interface Line {
  time: number;
  speaker: Speaker;
  text: string;
}

const subtitles: Line[] = [
  { time: 0, speaker: "ai", text: "Bonjour, Salon Élégance, comment puis-je vous aider ?" },
  { time: 3, speaker: "client", text: "Bonjour, je voudrais prendre un rendez-vous." },
  { time: 6, speaker: "ai", text: "Bien sûr, vous souhaitez un rendez-vous pour quelle prestation ?" },
  { time: 10, speaker: "client", text: "Une coupe et un brushing, s'il vous plaît." },
  { time: 13, speaker: "ai", text: "Parfait. Je regarde les disponibilités… Je vous propose jeudi à 14h ou vendredi à 10h." },
  { time: 18, speaker: "client", text: "Jeudi à 14h, c'est parfait." },
  { time: 21, speaker: "ai", text: "C'est noté ! À quel nom, s'il vous plaît ?" },
  { time: 24, speaker: "client", text: "Madame Dupont." },
  { time: 26, speaker: "ai", text: "Merci Madame Dupont, votre rendez-vous est confirmé. À jeudi !" },
];

const TOTAL_DURATION = 30;

const DemoSection = () => {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= TOTAL_DURATION) {
            setPlaying(false);
            return TOTAL_DURATION;
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

  const visibleLines = useMemo(
    () => subtitles.filter((s) => elapsed >= s.time),
    [elapsed]
  );

  // Auto-scroll transcript to bottom
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [visibleLines.length]);

  const progress = (elapsed / TOTAL_DURATION) * 100;
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const handleToggle = () => {
    if (!playing && elapsed >= TOTAL_DURATION) setElapsed(0);
    setPlaying(!playing);
  };

  const handleReset = () => {
    setPlaying(false);
    setElapsed(0);
  };

  const bars = Array.from({ length: 56 }, (_, i) => i);
  const isFinished = elapsed >= TOTAL_DURATION;

  return (
    <section id="demo" className="py-28 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Démo live</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Écoutez la <span className="text-gradient">différence</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Une voix humaine, pas un robot. Découvrez en temps réel comment l'Agent IA gère un appel entrant.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="max-w-2xl mx-auto">
            <div className="card-glass p-0 overflow-hidden relative">
              {/* Header */}
              <div className="px-6 sm:px-8 py-5 flex items-center justify-between gap-4 border-b border-border/30 bg-gradient-to-r from-primary/[0.04] to-transparent">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                      <Phone className="text-primary" size={18} />
                    </div>
                    {playing && (
                      <span className="absolute inset-0 rounded-full ring-2 ring-primary/40 animate-ping" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Salon Élégance</p>
                    <p className="text-xs text-muted-foreground">Appel entrant — Simulation</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 ring-1 ring-red-500/20">
                  <span className={`w-2 h-2 rounded-full bg-red-500 ${playing ? "animate-pulse" : "opacity-50"}`} />
                  <span className="text-[11px] font-semibold tracking-wider text-red-500 uppercase">Live</span>
                </div>
              </div>

              {/* Transcript chat */}
              <div
                ref={transcriptRef}
                className="px-5 sm:px-7 py-6 h-[260px] overflow-y-auto space-y-3 bg-background/30"
              >
                {visibleLines.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center gap-3 text-center">
                    <Sparkles size={28} className="text-primary/40" />
                    <p className="text-sm text-muted-foreground">
                      Appuyez sur lecture pour démarrer la simulation
                    </p>
                  </div>
                )}
                {visibleLines.map((line, i) => (
                  <div
                    key={i}
                    className={`flex items-end gap-2 animate-fade-in ${
                      line.speaker === "ai" ? "justify-start" : "justify-end"
                    }`}
                  >
                    {line.speaker === "ai" && (
                      <div className="w-7 h-7 shrink-0 rounded-full bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                        <Bot size={14} className="text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed rounded-2xl ${
                        line.speaker === "ai"
                          ? "bg-primary/[0.08] text-foreground rounded-bl-sm ring-1 ring-primary/10"
                          : "bg-foreground/[0.06] text-foreground rounded-br-sm ring-1 ring-border/40"
                      }`}
                    >
                      {line.text}
                    </div>
                    {line.speaker === "client" && (
                      <div className="w-7 h-7 shrink-0 rounded-full bg-foreground/[0.06] ring-1 ring-border/40 flex items-center justify-center">
                        <User size={14} className="text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isFinished && (
                  <div className="flex items-center justify-center gap-2 pt-3 animate-fade-in">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span className="text-xs font-medium text-emerald-500">Rendez-vous confirmé & enregistré</span>
                  </div>
                )}
              </div>

              {/* Sound wave */}
              <div className="px-6 sm:px-8 pt-5 pb-2">
                <div className="w-full h-10 flex items-center justify-center gap-[2px]">
                  {bars.map((i) => (
                    <div
                      key={i}
                      className="w-[3px] rounded-full transition-all duration-150"
                      style={{
                        height: playing
                          ? `${Math.max(6, Math.abs(Math.sin((Date.now() / 200) + i * 0.4)) * 32 + Math.random() * 8)}px`
                          : "6px",
                        backgroundColor: `hsl(217 91% ${50 + Math.sin(i * 0.3) * 15}%)`,
                        opacity: playing ? 0.85 : 0.25,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Progress + controls */}
              <div className="px-6 sm:px-8 pb-7 space-y-4">
                <div className="space-y-2">
                  <Progress value={progress} className="h-1.5 rounded-full" />
                  <div className="flex justify-between text-xs text-muted-foreground font-mono">
                    <span>{formatTime(elapsed)}</span>
                    <span>{formatTime(TOTAL_DURATION)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleToggle}
                    className="btn-primary-neu flex items-center gap-2.5 text-sm px-7 py-3 rounded-xl"
                  >
                    {playing ? <Pause size={18} /> : <Play size={18} />}
                    {playing ? "Pause" : isFinished ? "Rejouer" : "Écouter la simulation"}
                  </button>
                  {(elapsed > 0 && !playing) && (
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-colors text-muted-foreground hover:text-foreground"
                      aria-label="Réinitialiser"
                    >
                      <RotateCcw size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
              {[
                { icon: Clock, value: "< 1s", label: "Temps de réponse" },
                { icon: CheckCircle2, value: "100%", label: "Appels décrochés" },
                { icon: Sparkles, value: "24/7", label: "Disponibilité" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="card-glass px-3 py-4 flex flex-col items-center text-center gap-1.5"
                >
                  <stat.icon size={16} className="text-primary" />
                  <p className="text-base sm:text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground/60 text-center mt-6 max-w-sm mx-auto">
              Ceci est un exemple. Chaque agent est configuré sur-mesure pour votre entreprise.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DemoSection;
