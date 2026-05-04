import ScrollReveal from "./ScrollReveal";
import FAQSearch, { type FAQItem } from "./FAQSearch";
import { Clock, Search, Edit3, Server, Smartphone, LifeBuoy, Sparkles, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigateToHomeContact } from "@/lib/navigateToContact";

const items: FAQItem[] = [
  {
    icon: Clock,
    q: "Combien de temps faut-il pour créer un site ?",
    a: "Grâce à notre workflow optimisé par l'Intelligence Artificielle, nous sommes capables de livrer un site professionnel en un temps record, généralement entre 7 et 14 jours. Nous combinons rapidité d'exécution et précision technologique pour vous offrir un avantage concurrentiel immédiat.",
    tags: ["installation", "délai", "simplicité"],
  },
  {
    icon: Search,
    q: "Le site est-il optimisé pour le SEO ?",
    a: "Absolument. Chaque site bénéficie d'une architecture SEO de haute performance dès sa conception. De plus, votre abonnement de 89€ inclut une surveillance continue pour adapter votre site aux évolutions des algorithmes de Google et maintenir votre visibilité.",
    tags: ["seo", "prix"],
  },
  {
    icon: Edit3,
    q: "Puis-je modifier le contenu moi-même ?",
    a: "Nous faisons mieux que ça : nous gérons tout pour vous. Pour vous libérer de toute contrainte technique, les modifications de textes ou d'images sont incluses dans votre abonnement. Envoyez-nous simplement vos changements par message, et nous les appliquons sous 48h.",
    tags: ["simplicité", "support"],
  },
  {
    icon: Server,
    q: "Proposez-vous un hébergement ?",
    a: "Oui, un hébergement Cloud ultra-rapide et sécurisé est inclus dans votre forfait mensuel. Nous gérons la configuration technique et les serveurs. Seul le nom de domaine reste à votre charge (environ 15€/an) afin de vous garantir la pleine propriété légale de votre identité numérique.",
    tags: ["installation", "prix", "hébergement"],
  },
  {
    icon: Smartphone,
    q: "Est-ce que mon site sera compatible mobile ?",
    a: "Totalement. Nous utilisons une approche \"Mobile-First\". Votre site sera parfaitement fluide, rapide et esthétique sur tous les supports : smartphones, tablettes et ordinateurs.",
    tags: ["mobile", "simplicité"],
  },
  {
    icon: LifeBuoy,
    q: "Offrez-vous un support technique ?",
    a: "Oui, c'est l'essence même de notre service. Vous bénéficiez d'une assistance prioritaire et d'une maintenance proactive. Sécurité, mises à jour et sauvegardes : nous veillons sur votre site 24h/24 pour que vous puissiez vous concentrer sur votre métier.",
    tags: ["support", "simplicité"],
  },
  {
    icon: Sparkles,
    q: "Pourquoi choisir l'abonnement à 89€/mois ?",
    a: "C'est votre pack \"Sérénité Totale\". Il couvre l'hébergement premium, la sécurité avancée, les mises à jour techniques et surtout, les modifications de contenu illimitées. C'est l'assurance d'un site qui reste moderne, performant et qui évolue avec votre entreprise.",
    tags: ["prix", "abonnement"],
  },
];

const WebFAQ = () => {
  const navigate = useNavigate();
  return (
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
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Tout ce que vous devez savoir avant de lancer votre projet web.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <FAQSearch
            items={items}
            keywords={["Simplicité", "Prix", "Installation", "Support", "SEO"]}
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

export default WebFAQ;
