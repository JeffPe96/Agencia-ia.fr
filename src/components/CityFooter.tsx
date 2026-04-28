import { MapPin } from "lucide-react";

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
            Basés à <span className="text-white font-medium">Annecy</span>, nous accompagnons les entreprises
            sur tout le <span className="text-white font-medium">bassin Genevois</span>, la
            <span className="text-white font-medium"> Haute-Savoie</span> et la
            <span className="text-white font-medium"> Suisse romande</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityFooter;
