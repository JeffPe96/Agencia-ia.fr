import { useEffect, useState, useRef } from "react";
import { Mic, Code, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-annecy.png";

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

const AnnecyHero = () => {
  const [titleVisible, setTitleVisible] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const rippleId = useRef(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTitleVisible(i);
      if (i >= TITLE.length) {
        clearInterval(interval);
        setTimeout(() => setShowSubtitle(true), 300);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const handleHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = rippleId.current++;
    setRipples((prev) => [...prev.slice(-8), { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1800);
  };

  return (
    <div
      ref={heroRef}
      onMouseMove={handleHeroMove}
      className="relative w-screen left-1/2 -translate-x-1/2 min-h-screen h-screen overflow-hidden"
    >
      {/* SVG filters for nature distortion */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="waterDistort" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.025" numOctaves="2" seed="3" result="turb">
              <animate attributeName="baseFrequency" dur="18s" values="0.012 0.025;0.018 0.03;0.012 0.025" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turb" scale="14" />
          </filter>
          <filter id="reflectionDistort" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.04" numOctaves="2" seed="7">
              <animate attributeName="baseFrequency" dur="14s" values="0.02 0.04;0.03 0.05;0.02 0.04" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="8" />
          </filter>
        </defs>
      </svg>

      {/* Single background image (sky, mountains, houses, lake) - covers entire hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Subtle water shimmer overlay - tinted gradient only, NO image duplication */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[28%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(210 60% 75% / 0.08) 40%, hsl(210 70% 70% / 0.12))",
          maskImage:
            "radial-gradient(ellipse 70% 100% at 50% 100%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 100% at 50% 100%, black 30%, transparent 90%)",
          filter: "url(#waterDistort)",
        }}
      />

      {/* Ripple overlays - span the entire Hero */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute rounded-full border-2 border-white/40"
            style={{
              left: r.x,
              top: r.y,
              width: 0,
              height: 0,
              transform: "translate(-50%, -50%)",
              animation: "ripple-expand 1.6s ease-out forwards",
            }}
          />
        ))}
      </div>

      {/* Smooth seam between sky and water */}
      <div
        className="absolute inset-x-0 top-[50%] h-[10%] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(220 40% 70% / 0.15), transparent)",
        }}
      />

      {/* Title + reflection - perfectly centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="relative" style={{ animation: "title-float 6s ease-in-out infinite" }}>
          <h1 className="text-5xl sm:text-7xl lg:text-[10rem] font-extrabold tracking-tight text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] leading-none">
            {TITLE.split("").map((letter, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-500 ${
                  i < titleVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"
                } ${
                  i >= TITLE.length - 2
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(260,70%,65%)]"
                    : "text-white"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {letter}
              </span>
            ))}
          </h1>

          {/* Reflection */}
          <div
            className="absolute left-0 right-0 top-full mt-2 select-none"
            style={{
              transform: "scaleY(-1)",
              filter: "url(#reflectionDistort) blur(0.5px)",
              opacity: 0.35,
              maskImage: "linear-gradient(to bottom, black 0%, transparent 90%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 90%)",
            }}
            aria-hidden="true"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-[10rem] font-extrabold tracking-tight text-center leading-none">
              {TITLE.split("").map((letter, i) => (
                <span
                  key={i}
                  className={`inline-block ${
                    i >= TITLE.length - 2
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(260,70%,65%)]"
                      : "text-white"
                  }`}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        </div>

        <p
          className={`mt-3 sm:mt-8 text-xs sm:text-xl text-white/90 font-light max-w-xl mx-auto text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-700 ${
            showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Solutions IA &amp; Web pour commerces locaux
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 pointer-events-none">
        <span className="text-[9px] sm:text-[10px] text-white/70 uppercase tracking-widest drop-shadow">Scrollez pour découvrir</span>
        <div className="w-5 h-8 rounded-full border border-white/50 flex items-start justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1 h-2 rounded-full bg-white/80 animate-bounce" />
        </div>
      </div>

      {/* Fade-out to next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--background)))",
        }}
      />
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section>
      <style>{`
        @keyframes title-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes ripple-expand {
          0% { width: 0; height: 0; opacity: 0.7; border-width: 2px; }
          100% { width: 220px; height: 220px; opacity: 0; border-width: 0.5px; }
        }
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

      <AnnecyHero />

      {/* Service cards */}
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-xl border border-border/40 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/20">
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
