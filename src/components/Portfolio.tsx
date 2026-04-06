import { ExternalLink, Monitor } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Portfolio = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Nos <span className="text-primary">Réalisations Web</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Expertise Web : Nous concevons des plateformes modernes et performantes pour nos clients.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="max-w-3xl mx-auto">
          <div className="card-soft overflow-hidden p-0">
            {/* Laptop mockup */}
            <div className="bg-secondary/50 p-6 sm:p-10">
              <div className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border/50">
                {/* Browser bar */}
                <div className="bg-secondary px-4 py-3 flex items-center gap-3 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                  </div>
                  <div className="flex-1 bg-background/80 rounded-lg px-3 py-1 text-xs text-muted-foreground text-center">
                    www.votre-site-pro.fr
                  </div>
                </div>
                {/* Content preview */}
                <div className="p-8 sm:p-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Monitor className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Site Web Professionnel
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Design moderne, responsive et optimisé pour convertir vos visiteurs en clients.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
                    <span className="bg-primary/[0.08] text-primary px-3 py-1 rounded-full font-medium">Responsive</span>
                    <span className="bg-primary/[0.08] text-primary px-3 py-1 rounded-full font-medium">SEO Optimisé</span>
                    <span className="bg-primary/[0.08] text-primary px-3 py-1 rounded-full font-medium">Design Premium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="px-8 py-6 text-center border-t border-border/50">
              <a
                href="#contact"
                className="btn-primary-neu inline-flex items-center gap-2 text-sm px-8 py-3 rounded-xl"
              >
                <ExternalLink size={16} />
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Portfolio;
