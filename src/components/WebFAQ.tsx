import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import { Clock, Search, Settings, Smartphone, ShieldCheck, Bot, MessageCircle } from "lucide-react";

const items = [
  {
    icon: Clock,
    q: "Combien de temps faut-il pour créer mon site ?",
    a: "En général, un site vitrine est livré en 2 à 4 semaines. Nous adaptons le planning à vos besoins et à la complexité du projet.",
  },
  {
    icon: Search,
    q: "Mon site sera-t-il bien référencé sur Google ?",
    a: "Absolument. Chaque site est construit avec les meilleures pratiques SEO : balises optimisées, vitesse de chargement, structure sémantique et contenu adapté.",
  },
  {
    icon: Settings,
    q: "Puis-je modifier le contenu moi-même ?",
    a: "Oui, nous intégrons une interface d'administration simple et intuitive pour que vous puissiez modifier textes et images en toute autonomie.",
  },
  {
    icon: Smartphone,
    q: "Le site sera-t-il adapté aux mobiles ?",
    a: "100% responsive. Votre site s'adapte parfaitement à tous les écrans : smartphone, tablette et desktop.",
  },
  {
    icon: ShieldCheck,
    q: "Qu'est-ce qui est inclus dans la maintenance ?",
    a: "Hébergement, mises à jour de sécurité, sauvegardes régulières et support technique. Vous n'avez à vous soucier de rien.",
  },
  {
    icon: Bot,
    q: "Peut-on intégrer un ChatBot IA sur mon site ?",
    a: "Bien sûr ! Notre ChatBot IA Web agit comme un vendeur expert 24/7, guidant vos visiteurs et boostant vos conversions. En complément, l'Agent Vocal AgencIA gère vos appels téléphoniques pour une automatisation à 360°.",
  },
];

const WebFAQ = () => (
  <section id="faq" className="py-28 relative">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="flex justify-center mb-4">
          <div className="web-faq-eyebrow">
            <span className="web-faq-eyebrow-dot" />
            <span>FAQ — Web AgencIA</span>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Questions <span className="text-gradient">fréquentes</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Tout ce que vous devez savoir avant de lancer votre projet web.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="web-faq-item group"
              >
                <AccordionTrigger className="web-faq-trigger hover:no-underline">
                  <div className="flex items-center gap-4 flex-1 text-left">
                    <div className="web-faq-icon">
                      <item.icon size={18} strokeWidth={1.8} />
                    </div>
                    <div className="flex-1">
                      <span className="web-faq-index">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                        {item.q}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="web-faq-content">
                  <div className="pl-[3.25rem] pr-2 pb-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="web-faq-cta">
            <div className="web-faq-cta-icon">
              <MessageCircle size={22} strokeWidth={1.8} />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-foreground text-sm sm:text-base">
                Une autre question ?
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Notre équipe vous répond sous 24h, sans engagement.
              </p>
            </div>
            <a href="#contact" className="web-faq-cta-btn">
              Nous contacter
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default WebFAQ;
