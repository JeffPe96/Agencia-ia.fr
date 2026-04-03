import ScrollReveal from "./ScrollReveal";

const FinalCTA = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center card-soft bg-gradient-to-br from-primary/[0.04] to-accent/[0.04] py-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Passez votre commerce à l'ère de l'IA
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Rejoignez les commerçants qui ne manquent plus aucun appel. Démo gratuite, sans engagement.
          </p>
          <a href="#demo" className="btn-primary-neu text-base px-10 py-4 rounded-2xl inline-block">
            Réserver ma démo gratuite
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
