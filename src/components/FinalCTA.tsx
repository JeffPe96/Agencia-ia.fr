import ScrollReveal from "./ScrollReveal";

const marqueeText = "DÉMO GRATUITE • SANS ENGAGEMENT • PASSEZ À L'ÈRE DE L'AGENT IA • NE MANQUEZ PLUS AUCUN APPEL • ";

const FinalCTA = () => (
  <section className="py-6 overflow-hidden">
    <div className="relative bg-foreground/[0.03] border-y border-border/30 py-5">
      <div className="marquee-track flex whitespace-nowrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-gradient shrink-0 px-4"
          >
            {marqueeText}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default FinalCTA;
