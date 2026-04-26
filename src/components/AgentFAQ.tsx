import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import { ShieldCheck, Share2, Brain, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigateToHomeContact } from "@/lib/navigateToContact";

const items = [
  {
    icon: ShieldCheck,
    q: "L'agent peut-il se tromper ?",
    a: "Non, nous le bridons pour qu'il ne réponde qu'avec vos informations vérifiées. L'agent reste dans le périmètre de votre base de connaissances et redirige les demandes hors-cadre vers votre équipe humaine.",
  },
  {
    icon: Share2,
    q: "Sur quels canaux peut-il être déployé ?",
    a: "Sur votre site web en priorité, mais aussi potentiellement sur WhatsApp ou Instagram (sur demande). Nous adaptons le déploiement à vos canaux principaux pour maximiser la portée de votre agent.",
  },
  {
    icon: Brain,
    q: "Apprend-il tout seul ?",
    a: "Il s'améliore avec le temps grâce aux interactions réelles, mais nous supervisons chaque étape pour garantir la qualité, la cohérence du discours et la sécurité des informations partagées.",
  },
];

const AgentFAQ = () => {
  const navigate = useNavigate();
  return (
    <section id="faq" className="py-28 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="flex justify-center mb-4">
            <div className="web-faq-eyebrow">
              <span className="web-faq-eyebrow-dot" />
              <span>FAQ — Agent AgencIA</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Tout ce que vous devez savoir avant de déployer votre Agent IA.
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
              <button
                type="button"
                onClick={() => navigateToHomeContact(navigate)}
                className="web-faq-cta-btn"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AgentFAQ;
