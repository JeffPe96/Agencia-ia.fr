import { MapPin, Globe2 } from "lucide-react";

const CityFooter = () => {
  return (
    <section
      aria-label="Zones d'intervention AgencIA"
      className="relative border-t border-white/10 bg-[hsl(220_25%_8%)] text-white/70"
    >
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <MapPin size={14} className="text-primary" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
              Zones d'intervention
            </span>
          </div>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
            Basés à <span className="text-white font-medium">Annecy</span>, mais cela ne nous empêche pas
            de vous rencontrer pour un <span className="text-white font-medium">audit gratuit</span> ou
            le <span className="text-white font-medium">déploiement de votre Agent Vocal</span> ou de
            votre <span className="text-white font-medium">site web</span>.
          </p>
          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed font-light">
            Tout est faisable <span className="text-white/90 font-medium">à distance</span> :
            AgencIA s'occupe de tout, de A à Z, où que vous soyez.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs text-white/50">
            <Globe2 size={14} className="text-primary/80" aria-hidden="true" />
            <span>France · Suisse romande · Europe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityFooter;
