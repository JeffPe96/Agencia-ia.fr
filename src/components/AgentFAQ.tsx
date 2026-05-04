import ScrollReveal from "./ScrollReveal";
import FAQSearch, { type FAQItem } from "./FAQSearch";
import { ShieldCheck, Share2, Brain, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigateToHomeContact } from "@/lib/navigateToContact";

const items: FAQItem[] = [
  {
    icon: ShieldCheck,
    q: "L'agent peut-il se tromper ?",
    a: "Non, nous le bridons pour qu'il ne réponde qu'avec vos informations vérifiées. L'agent reste dans le périmètre de votre base de connaissances et redirige les demandes hors-cadre vers votre équipe humaine.",
    tags: ["sécurité", "simplicité"],
  },
  {
    icon: Share2,
    q: "Sur quels canaux peut-il être déployé ?",
    a: "Sur votre site web en priorité, mais aussi potentiellement sur WhatsApp ou Instagram (sur demande). Nous adaptons le déploiement à vos canaux principaux pour maximiser la portée de votre agent.",
    tags: ["installation", "canaux"],
  },
  {
    icon: Brain,
    q: "Apprend-il tout seul ?",
    a: "Il s'améliore avec le temps grâce aux interactions réelles, mais nous supervisons chaque étape pour garantir la qualité, la cohérence du discours et la sécurité des informations partagées.",
    tags: ["simplicité", "apprentissage"],
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
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Tout ce que vous devez savoir avant de déployer votre Agent IA.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <FAQSearch
            items={items}
            keywords={["Simplicité", "Installation", "Sécurité"]}
          />
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
