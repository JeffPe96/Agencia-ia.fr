import { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    problem: "Appels manqués pendant vos prestations",
    solution: "Chaque appel est pris, sans exception",
  },
  {
    problem: "Planning complexe à gérer",
    solution: "Organisation fluide et automatique de vos rendez-vous",
  },
  {
    problem: "Interruptions permanentes",
    solution: "Concentration totale sur votre métier",
  },
];

const STEP_DELAY = 1800;
const SOLUTION_DELAY = 1000;

const ProblemSolution = () => {
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
      timers.push(
        setTimeout(() => setVisibleStep(i), i * STEP_DELAY)
      );
      timers.push(
        setTimeout(() => setShowSolution(i), i * STEP_DELAY + SOLUTION_DELAY)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [started]);

  return (
    <section className="py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Avant / Après <span className="text-primary">AgencIA</span>
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
            Passez du stress des appels manqués à un agenda rempli automatiquement.
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                i <= visibleStep ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-4 items-center">
                <div className="card-soft border border-destructive/10 bg-destructive/[0.02] px-5 py-4 flex items-center gap-3">
                  <span className="text-destructive text-lg shrink-0">✗</span>
                  <p className="text-sm text-muted-foreground">{step.problem}</p>
                </div>

                <span className="hidden sm:block text-muted-foreground/40 text-xl">→</span>

                <div
                  className={`card-soft border border-accent/10 bg-accent/[0.02] px-5 py-4 flex items-center gap-3 transition-all duration-500 ${
                    i <= showSolution ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  <span className="text-accent text-lg shrink-0">✓</span>
                  <p className="text-sm text-muted-foreground">{step.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
