import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import ScrollReveal from "./ScrollReveal";
import { Mic, Calendar, Brain, Languages, Lock, PhoneForwarded, UserSearch, Zap, MessageCircle, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigateToHomeContact } from "@/lib/navigateToContact";

const KEYWORDS = ["Simplicité", "Prix", "Installation", "Sécurité", "Langues"];

const items = [
  {
    icon: Mic,
    q: "Qu'est-ce qu'un agent vocal IA ?",
    a: "C'est une technologie avancée capable de tenir des conversations fluides et naturelles avec vos clients par téléphone. Contrairement à un simple répondeur, il comprend les demandes, répond aux questions complexes et peut effectuer des actions comme prendre des rendez-vous en temps réel.",
  },
  {
    icon: Calendar,
    q: "Comment l'IA gère-t-elle les prises de rendez-vous ?",
    a: "L'Agent IA est synchronisé directement avec votre calendrier (Google, Calendly, etc.). Il vérifie vos disponibilités, propose des créneaux au client et inscrit le rendez-vous instantanément sans que vous ayez à intervenir.",
  },
  {
    icon: Brain,
    q: "L'agent vocal peut-il répondre aux questions complexes ?",
    a: "Oui. Nous entraînons l'IA avec toutes les informations spécifiques à votre entreprise (tarifs, services, horaires, FAQ). Elle peut ainsi répondre avec précision à la grande majorité des questions de vos clients, comme le ferait un assistant humain.",
  },
  {
    icon: Languages,
    q: "Est-ce que l'IA peut parler plusieurs langues ?",
    a: "Oui, cette fonctionnalité est disponible en tant que complément optionnel pour répondre à une clientèle internationale.",
  },
  {
    icon: Lock,
    q: "Est-ce sécurisé pour les données de mes clients ?",
    a: "La sécurité est notre priorité. Toutes les conversations et données sont cryptées et traitées conformément aux normes RGPD. Vous gardez un contrôle total sur les informations que l'IA est autorisée à manipuler.",
  },
  {
    icon: PhoneForwarded,
    q: "Que se passe-t-il si l'IA ne connaît pas la réponse ?",
    a: "L'IA est programmée pour reconnaître ses limites. Si une demande est trop complexe ou nécessite une intervention humaine, l'agent peut transférer l'appel vers votre ligne ou prendre un message détaillé pour que vous puissiez recontacter le client.",
  },
  {
    icon: UserSearch,
    q: "Puis-je personnaliser la voix de l'IA ?",
    a: "Oui, tout à fait. Vous pouvez choisir entre plusieurs types de voix (féminine, masculine, tons calmes ou dynamiques) pour qu'elle corresponde parfaitement à l'image de marque de votre entreprise.",
  },
  {
    icon: Zap,
    q: "Quel est l'avantage par rapport à un secrétariat classique ?",
    a: "L'IA est disponible 24h/24, 7j/7, elle peut gérer des dizaines d'appels simultanément sans attente, et elle ne coûte qu'une fraction du prix d'un secrétariat humain, tout en éliminant les erreurs de saisie.",
  },
];

const FAQ = () => {
  const navigate = useNavigate();
  return (
  <section id="faq" className="py-28 relative">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="flex justify-center mb-4">
          <div className="web-faq-eyebrow">
            <span className="web-faq-eyebrow-dot" />
            <span>FAQ — Vocal AgencIA</span>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Questions <span className="text-gradient">fréquentes</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Tout ce que vous devez savoir avant de déployer votre Agent Vocal IA.
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

export default FAQ;
