import { useEffect, useState, useRef } from "react";
import { Mic, Code, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TITLE = "AgencIA";

const CardReveal = ({
  children,
  className,
  direction,
}: {
  children: React.ReactNode;
  className?: string;
  direction: "left" | "right";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Desktop: left card from left, right card from right
  // Mobile: both from bottom with stagger via CSS
  const desktopX = direction === "left" ? "-50px" : "50px";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate(0, 0) scale(1)"
          : `translate(var(--reveal-x, 0), var(--reveal-y, 0)) scale(0.8)`,
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        // @ts-ignore CSS custom properties
        "--reveal-x": `var(--card-desktop-x, ${desktopX})`,
        "--reveal-y": "var(--card-desktop-y, 0px)",
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

const HeroSection = () => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLetters(i);
      if (i >= TITLE.length) {
        clearInterval(interval);
        setTimeout(() => setShowSubtitle(true), 300);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20">
      <style>{`
        @media (max-width: 639px) {
          .card-reveal-left {
            --card-desktop-x: 0px !important;
            --card-desktop-y: 30px !important;
          }
          .card-reveal-right {
            --card-desktop-x: 0px !important;
            --card-desktop-y: 30px !important;
            transition-delay: 0.15s !important;
          }
        }
      `}</style>

      {/* Hero title */}
      <div className="min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
          {TITLE.split("").map((letter, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-500 ${
                i < visibleLetters
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-4 blur-sm"
              } ${
                i >= TITLE.length - 2
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-primary to-[hsl(260,60%,58%)]"
                  : "text-foreground"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <p
          className={`mt-6 text-lg sm:text-xl text-muted-foreground font-light max-w-xl mx-auto transition-all duration-700 ${
            showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Solutions IA &amp; Web pour commerces locaux
        </p>

        <div className="mt-10 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scrollez pour découvrir</span>
          <div className="w-5 h-8 rounded-full border border-border/50 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-primary/40 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Service cards */}
      <div className="container mx-auto px-4 pb-12 -mt-4 sm:mt-0">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-xl border border-border/40 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/20">
              {/* Vocal AgencIA Card */}
              <CardReveal direction="left" className="card-reveal-left">
                <button
                  onClick={() => navigate("/vocal")}
                  className="group relative flex flex-col items-center text-center p-8 sm:p-10 bg-card/60 hover:bg-card/80 transition-all duration-500 cursor-pointer w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] border border-primary/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:shadow-[0_0_20px_-4px_hsl(217_91%_53%/0.2)] transition-all duration-500">
                      <Mic className="text-primary" size={24} />
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60 mb-2">Vocal AgencIA</p>
                    <h3 className="text-lg font-bold text-foreground mb-3">Automatiser mes appels</h3>
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-5">
                      <li>IA Vocale 24h/7</li>
                      <li>Réservation Automatique</li>
                      <li>Transfert Intelligent</li>
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary/70 group-hover:text-primary transition-colors">
                      Découvrir <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>
              </CardReveal>

              {/* Web AgencIA Card */}
              <CardReveal direction="right" className="card-reveal-right">
                <button
                  onClick={() => navigate("/web")}
                  className="group relative flex flex-col items-center text-center p-8 sm:p-10 bg-card/60 hover:bg-card/80 transition-all duration-500 cursor-pointer w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(260,60%,58%)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[hsl(260,60%,58%)]/[0.06] border border-[hsl(260,60%,58%)]/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:shadow-[0_0_20px_-4px_hsl(260_60%_58%/0.2)] transition-all duration-500">
                      <Code className="text-[hsl(260,60%,58%)]" size={24} />
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[hsl(260,60%,58%)]/60 mb-2">Web AgencIA</p>
                    <h3 className="text-lg font-bold text-foreground mb-3">Créer mon site web</h3>
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-5">
                      <li>Sites Haute Performance</li>
                      <li>SEO Optimisé</li>
                      <li>Design Sur-Mesure</li>
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[hsl(260,60%,58%)]/70 group-hover:text-[hsl(260,60%,58%)] transition-colors">
                      Découvrir <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>
              </CardReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
