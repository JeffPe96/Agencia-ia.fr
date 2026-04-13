import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    q: "Combien de temps faut-il pour créer mon site ?",
    a: "En général, un site vitrine est livré en 2 à 4 semaines. Nous adaptons le planning à vos besoins et à la complexité du projet.",
  },
  {
    q: "Mon site sera-t-il bien référencé sur Google ?",
    a: "Absolument. Chaque site est construit avec les meilleures pratiques SEO : balises optimisées, vitesse de chargement, structure sémantique et contenu adapté.",
  },
  {
    q: "Puis-je modifier le contenu moi-même ?",
    a: "Oui, nous intégrons une interface d'administration simple et intuitive pour que vous puissiez modifier textes et images en toute autonomie.",
  },
  {
    q: "Le site sera-t-il adapté aux mobiles ?",
    a: "100% responsive. Votre site s'adapte parfaitement à tous les écrans : smartphone, tablette et desktop.",
  },
  {
    q: "Qu'est-ce qui est inclus dans la maintenance ?",
    a: "Hébergement, mises à jour de sécurité, sauvegardes régulières et support technique. Vous n'avez à vous soucier de rien.",
  },
  {
    q: "Peut-on intégrer un ChatBot IA sur mon site ?",
    a: "Bien sûr ! Notre ChatBot IA Web agit comme un vendeur expert 24/7, guidant vos visiteurs et boostant vos conversions. En complément, l'Agent Vocal AgencIA gère vos appels téléphoniques pour une automatisation à 360°.",
  },
];

const WebFAQ = () => (
  <section id="faq" className="py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Questions <span className="text-gradient">fréquentes — Web</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Tout ce que vous devez savoir sur la création de votre site.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-glass border-border/30 px-6 py-1"
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

export default WebFAQ;
