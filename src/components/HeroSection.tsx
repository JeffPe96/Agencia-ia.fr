import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/hero-annecy.png";

const TITLE = "AgencIA";

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
    </section>
  );
};

export default HeroSection;
