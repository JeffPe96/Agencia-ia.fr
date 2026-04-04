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
    a: "Pas du tout. Nous configurons tout pour vous en 48 à 72 heures. Vous n'avez rien à faire techniquement.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Nous proposons des forfaits adaptés aux petits commerces, à partir de 49 €/mois. Réservez une démo pour obtenir un devis personnalisé.",
  },
  {
    q: "L'IA comprend-elle bien les demandes ?",
    a: "Oui. Notre IA est entraînée sur les conversations réelles de votre secteur. Elle comprend les accents, les hésitations et les demandes complexes.",
  },
  {
    q: "Mes clients vont-ils savoir que c'est un robot ?",
    a: "La voix est très naturelle et chaleureuse. La plupart des clients ne font pas la différence avec un humain.",
  },
  {
    q: "Puis-je garder le contrôle sur mon agenda ?",
    a: "Absolument. Vous définissez vos créneaux, vos pauses et vos indisponibilités. L'IA répond 24h/24 et 7j/7, mais elle respecte strictement vos horaires d'ouverture pour la prise de rendez-vous.",
  },
  {
    q: "Peut-on personnaliser la voix de l'IA ?",
    a: "Oui, vous pouvez choisir parmi plusieurs voix et ajuster le ton pour qu'il corresponde parfaitement à l'image de votre établissement.",
  },
  {
    q: "Est-ce facile à utiliser au quotidien ?",
    a: "Très simple. Une fois configuré, tout est automatique. Vous pouvez consulter vos rendez-vous et ajuster vos disponibilités depuis une interface intuitive.",
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
