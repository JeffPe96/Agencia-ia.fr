import { PhoneOff, SmilePlus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ProblemSolution = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Avant / Après <span className="text-primary">vocalAI</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Passez du stress des appels manqués à un agenda rempli automatiquement.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ScrollReveal delay={100}>
          <div className="card-soft border border-destructive/10 bg-destructive/[0.02] h-full">
            <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
              <PhoneOff className="text-destructive" size={22} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Le chaos</h3>
            <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <li>❌ Appels manqués pendant vos prestations</li>
              <li>❌ Clients qui partent chez la concurrence</li>
              <li>❌ Agenda rempli à la main, avec des trous</li>
              <li>❌ Stress permanent et charge mentale</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="card-soft border border-accent/10 bg-accent/[0.02] h-full">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <SmilePlus className="text-accent" size={22} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">La sérénité IA</h3>
            <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <li>✅ Chaque appel est pris, sans exception</li>
              <li>✅ Clients satisfaits dès le premier contact</li>
              <li>✅ Agenda optimisé et synchronisé</li>
              <li>✅ Vous vous concentrez sur votre métier</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
