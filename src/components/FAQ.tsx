import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    q: "C'est compliqué à installer ?",
    a: "C'est nous qui gérons tout. Après un court échange pour comprendre vos besoins, nous configurons votre agent de A à Z. Aucun équipement spécial n'est requis.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Nous proposons des forfaits adaptés aux petits commerces, à partir de 49 €/mois. Réservez une démo pour obtenir un devis personnalisé.",
  },
  {
    q: "L'Agent Vocal comprend-il bien les demandes ?",
    a: "Oui. Notre Agent Vocal est entraîné sur les conversations réelles de votre secteur. Il comprend les accents, les hésitations et les demandes complexes.",
  },
  {
    q: "Mes clients vont-ils savoir que c'est un robot ?",
    a: "La voix est si naturelle que la majorité des clients ne voient pas la différence. Possibilité de cloner votre propre voix (Option Premium).",
  },
  {
    q: "Puis-je garder le contrôle sur mon agenda ?",
    a: "Absolument. Vous définissez vos créneaux, vos pauses et vos indisponibilités. L'Agent IA répond 24h/24 et 7j/7, mais respecte strictement vos horaires d'ouverture. Option de validation manuelle : l'agent propose le créneau, et vous recevez une notification pour accepter ou refuser.",
  },
  {
    q: "Peut-on personnaliser la voix de l'Agent IA ?",
    a: "Oui, vous pouvez choisir parmi plusieurs voix et ajuster le ton pour qu'il corresponde parfaitement à l'image de votre établissement.",
  },
  {
    q: "Est-ce facile à utiliser au quotidien ?",
    a: "Très simple. Une fois configuré, tout est automatique. Vous suivez vos rendez-vous via une interface simple et intuitive (compatible Google Calendar, Calendly, etc.).",
  },
];

const FAQ = () => (
  <section id="faq" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Questions fréquentes
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Tout ce que vous devez savoir avant de démarrer.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-soft border-none px-6 py-1"
              >
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline text-foreground">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQ;
