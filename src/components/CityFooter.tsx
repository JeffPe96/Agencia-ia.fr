import { MapPin } from "lucide-react";

const cities = [
  "Annecy",
  "Genève",
  "Annemasse",
  "Saint-Julien-en-Genevois",
  "Thonon-les-Bains",
  "Évian-les-Bains",
  "Cluses",
  "Sallanches",
  "Cran-Gevrier",
  "Seynod",
  "Rumilly",
  "La Roche-sur-Foron",
  "Bonneville",
  "Chamonix",
  "Bassin Genevois",
  "Haute-Savoie",
];

const services = [
  "Agent Vocal IA",
  "Automatisation des appels",
  "Prise de rendez-vous IA",
  "Chatbot WhatsApp",
  "Site web haute performance",
  "SEO local",
];

const CityFooter = () => {
  return (
    <section
      aria-label="Zones d'intervention AgencIA"
      className="relative border-t border-white/10 bg-[hsl(220_25%_8%)] text-white/70"
    >
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-primary" aria-hidden="true" />
              <h2 className="text-xs font-semibold uppercase tracking-wider text-white">
                Nos zones d'intervention
              </h2>
            </div>
            <p className="text-xs text-white/50 mb-4 leading-relaxed">
              AgencIA accompagne les commerces locaux à Annecy, Genève et dans tout le Bassin Genevois.
            </p>
            <ul className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <li key={city}>
                  <span className="inline-block text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-primary hover:border-primary/40 transition-colors">
                    Agence IA {city}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Nos services IA
            </h2>
            <ul className="flex flex-wrap gap-2">
              {services.map((s) => (
                <li key={s}>
                  <span className="inline-block text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-white/80">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] text-white/40 leading-relaxed">
              Agence IA basée à Annecy (74) — interventions à Genève, Annemasse, Saint-Julien-en-Genevois,
              Thonon, Évian et toute la Haute-Savoie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityFooter;
