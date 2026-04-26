import { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    problem: "Clients en attente, formulaires de contact ignorés",
    solution: "Réponses instantanées 24h/7, chaque message reçoit une réaction immédiate.",
  },
  {
    problem: "Perte de leads pendant le week-end et la nuit",
    solution: "Capture automatique de leads et qualification des prospects en continu.",
  },
  {
    problem: "Support répétitif qui épuise l'équipe humaine",
    solution: "Satisfaction client multipliée par 3, votre équipe se concentre sur l'essentiel.",
  },
];

const STEP_DELAY = 1800;
const SOLUTION_DELAY = 1000;

const AgentProblemSolution = () => {
  const [visibleStep, setVisibleStep] = useState(-1);
  const [showSolution, setShowSolution] = useState(-1);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    steps.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleStep(i), i * STEP_DELAY));
      timers.push(setTimeout(() => setShowSolution(i), i * STEP_DELAY + SOLUTION_DELAY));
    });
    return () => timers.forEach(clearTimeout);
  }, [started]);

  return (
    <section className="py-28 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Avant / Après</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Le changement avec <span className="text-gradient">Agent AgencIA</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Passez d'un support saturé à un agent IA disponible 24h/7.
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`audit-row transition-all duration-500 ${
                i <= visibleStep ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-2 items-center">
                <div className="audit-card-before">
                  <span className="audit-icon-x text-sm">✕</span>
                  <p className="text-sm text-muted-foreground/90 leading-snug">{step.problem}</p>
                </div>

                <div className="audit-connector" aria-hidden="true" />

                <div
                  className={`audit-card-after transition-all duration-500 ${
                    i <= showSolution ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  <span className="audit-icon-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <p className="audit-text text-sm text-foreground/90 leading-snug font-medium">{step.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentProblemSolution;
