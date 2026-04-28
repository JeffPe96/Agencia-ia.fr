import { useState, useEffect, useRef, useMemo } from "react";
import { Play, Pause, Phone, Bot, User, CheckCircle2, Sparkles, RotateCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type Speaker = "ai" | "client";
export interface DemoLine {
  time: number;
  speaker: Speaker;
  text: string;
}

interface Props {
  businessName: string;
  subtitle?: string;
  lines: DemoLine[];
  duration: number;
  finishedLabel?: string;
  accent?: string;
}

const SectorDemo = ({
  businessName,
  subtitle = "Appel entrant — Simulation",
  lines,
  duration,
  finishedLabel = "Rendez-vous confirmé & enregistré",
  accent = "from-[#00BFFF] to-[#3a7bd5]",
}: Props) => {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= duration) {
            setPlaying(false);
            return duration;
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
  }, [playing, duration]);

  const visibleLines = useMemo(
    () => lines.filter((s) => elapsed >= s.time),
    [elapsed, lines]
  );

  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [visibleLines.length]);

  const progress = (elapsed / duration) * 100;
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const handleToggle = () => {
    if (!playing && elapsed >= duration) setElapsed(0);
    setPlaying(!playing);
  };

  const handleReset = () => {
    setPlaying(false);
    setElapsed(0);
  };

  const bars = Array.from({ length: 56 }, (_, i) => i);
  const isFinished = elapsed >= duration;

  return (
    <div className="card-glass p-0 overflow-hidden relative animate-fade-in">
      {/* Header */}
      <div className="px-5 sm:px-7 py-4 flex items-center justify-between gap-4 border-b border-border/30 bg-gradient-to-r from-primary/[0.04] to-transparent">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center`}>
              <Phone className="text-white" size={16} />
            </div>
            {playing && (
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/40 animate-ping" />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{businessName}</p>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 ring-1 ring-red-500/20">
          <span className={`w-2 h-2 rounded-full bg-red-500 ${playing ? "animate-pulse" : "opacity-50"}`} />
          <span className="text-[11px] font-semibold tracking-wider text-red-500 uppercase">Live</span>
        </div>
      </div>

      {/* Transcript */}
      <div
        ref={transcriptRef}
        className="px-5 sm:px-6 py-5 h-[240px] overflow-y-auto space-y-3 bg-background/30"
      >
        {visibleLines.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center gap-3 text-center">
            <Sparkles size={26} className="text-primary/40" />
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
            <span className="text-xs font-medium text-emerald-500">{finishedLabel}</span>
          </div>
        )}
      </div>

      {/* Sound wave */}
      <div className="px-6 pt-4 pb-1">
        <div className="w-full h-9 flex items-center justify-center gap-[2px]">
          {bars.map((i) => (
            <div
              key={i}
              className="w-[3px] rounded-full transition-all duration-150"
              style={{
                height: playing
                  ? `${Math.max(6, Math.abs(Math.sin((Date.now() / 200) + i * 0.4)) * 28 + Math.random() * 8)}px`
                  : "6px",
                backgroundColor: `hsl(217 91% ${50 + Math.sin(i * 0.3) * 15}%)`,
                opacity: playing ? 0.85 : 0.25,
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress + controls */}
      <div className="px-6 pb-6 space-y-3">
        <div className="space-y-2">
          <Progress value={progress} className="h-1.5 rounded-full" />
          <div className="flex justify-between text-xs text-muted-foreground font-mono">
            <span>{formatTime(elapsed)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleToggle}
            className="btn-primary-neu flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-primary/30 ring-1 ring-primary/40 hover:scale-[1.03] transition-transform"
          >
            {playing ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
            {playing ? "Pause" : isFinished ? "Rejouer" : "Écouter"}
          </button>
          {(elapsed > 0 && !playing) && (
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-sm px-3 py-3 rounded-xl border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Réinitialiser"
            >
              <RotateCcw size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectorDemo;
