import ScrollReveal from "./ScrollReveal";

const FinalCTA = () => (
  <section className="py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center card-glass py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Passez votre commerce à l'ère de l'<span className="text-gradient">Agent IA</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Rejoignez les commerçants qui ne manquent plus aucun appel. Démo gratuite, sans engagement.
            </p>
            <a href="#contact" className="btn-primary-neu text-base px-10 py-4 rounded-2xl inline-block">
              Réserver ma démo gratuite
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
