import ScrollReveal from "./ScrollReveal";
import FAQSearch, { type FAQItem } from "./FAQSearch";
import { Mic, Calendar, Brain, Languages, Lock, PhoneForwarded, UserSearch, Zap, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigateToHomeContact } from "@/lib/navigateToContact";

const items: FAQItem[] = [
  {
    icon: Mic,
    q: "Qu'est-ce qu'un agent vocal IA ?",
    a: "C'est une technologie avancée capable de tenir des conversations fluides et naturelles avec vos clients par téléphone. Contrairement à un simple répondeur, il comprend les demandes, répond aux questions complexes et peut effectuer des actions comme prendre des rendez-vous en temps réel.",
    tags: ["simplicité", "définition"],
  },
  {
    icon: Calendar,
    q: "Comment l'IA gère-t-elle les prises de rendez-vous ?",
    a: "L'Agent IA est synchronisé directement avec votre calendrier (Google, Calendly, etc.). Il vérifie vos disponibilités, propose des créneaux au client et inscrit le rendez-vous instantanément sans que vous ayez à intervenir.",
    tags: ["installation", "simplicité", "rendez-vous"],
  },
  {
    icon: Brain,
    q: "L'agent vocal peut-il répondre aux questions complexes ?",
    a: "Oui. Nous entraînons l'IA avec toutes les informations spécifiques à votre entreprise (tarifs, services, horaires, FAQ). Elle peut ainsi répondre avec précision à la grande majorité des questions de vos clients, comme le ferait un assistant humain.",
    tags: ["installation"],
  },
  {
    icon: Languages,
    q: "Est-ce que l'IA peut parler plusieurs langues ?",
    a: "Oui, cette fonctionnalité est disponible en tant que complément optionnel pour répondre à une clientèle internationale.",
    tags: ["langues", "prix"],
  },
  {
    icon: Lock,
    q: "Est-ce sécurisé pour les données de mes clients ?",
    a: "La sécurité est notre priorité. Toutes les conversations et données sont cryptées et traitées conformément aux normes RGPD. Vous gardez un contrôle total sur les informations que l'IA est autorisée à manipuler.",
    tags: ["sécurité", "rgpd"],
  },
  {
    icon: PhoneForwarded,
    q: "Que se passe-t-il si l'IA ne connaît pas la réponse ?",
    a: "L'IA est programmée pour reconnaître ses limites. Si une demande est trop complexe ou nécessite une intervention humaine, l'agent peut transférer l'appel vers votre ligne ou prendre un message détaillé pour que vous puissiez recontacter le client.",
    tags: ["simplicité"],
  },
  {
    icon: UserSearch,
    q: "Puis-je personnaliser la voix de l'IA ?",
    a: "Oui, tout à fait. Vous pouvez choisir entre plusieurs types de voix (féminine, masculine, tons calmes ou dynamiques) pour qu'elle corresponde parfaitement à l'image de marque de votre entreprise.",
    tags: ["installation", "personnalisation"],
  },
  {
    icon: Zap,
    q: "Quel est l'avantage par rapport à un secrétariat classique ?",
    a: "L'IA est disponible 24h/24, 7j/7, elle peut gérer des dizaines d'appels simultanément sans attente, et elle ne coûte qu'une fraction du prix d'un secrétariat humain, tout en éliminant les erreurs de saisie.",
    tags: ["prix", "simplicité"],
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
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Tout ce que vous devez savoir avant de déployer votre Agent Vocal IA.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <FAQSearch
            items={items}
            keywords={["Simplicité", "Prix", "Installation", "Sécurité", "Langues"]}
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

export default FAQ;
