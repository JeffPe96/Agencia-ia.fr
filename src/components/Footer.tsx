import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AgencIALogo from "./AgencIALogo";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// Custom X (Twitter) icon
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: XIcon, label: "X", href: "#" },
];

const solutions = [
  { label: "Vocal AgencIA", to: "/vocal" },
  { label: "Web AgencIA", to: "/web" },
  { label: "Agents Chatbots", to: "/", scrollTo: "services" },
  { label: "Audit IA", to: "/", scrollTo: "contact" },
];

const agence = [
  { label: "À propos", to: "/", scrollTo: "services" },
  { label: "Nos Tarifs", to: "/tarifs" },
  { label: "Processus", to: "/", scrollTo: "processus" },
  { label: "Contact", to: "/", scrollTo: "contact" },
];

const Footer = () => {
  const [mentionsOpen, setMentionsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="relative mt-20">
      {/* Top gradient divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(190 80% 50% / 0.5) 25%, hsl(217 91% 53% / 0.5) 75%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative bg-[hsl(220_25%_8%)] text-white/80 overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle 1px at center, hsl(0 0% 100% / 0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 py-16 relative">
          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-block mb-4"
              >
                <AgencIALogo />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-xs">
                L'alliance de la performance web et de l'intelligence vocale au service des entreprises visionnaires.
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 text-white/70 border border-white/10 hover:text-white hover:bg-primary/20 hover:border-primary/40 hover:shadow-[0_0_16px_-2px_hsl(217_91%_53%/0.5)] transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
                Solutions
              </h4>
              <ul className="space-y-3 text-sm">
                {solutions.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => item.scrollTo && setTimeout(() => scrollToId(item.scrollTo!), 100)}
                      className="text-white/60 hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Agence */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
                Agence
              </h4>
              <ul className="space-y-3 text-sm">
                {agence.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => item.scrollTo && setTimeout(() => scrollToId(item.scrollTo!), 100)}
                      className="text-white/60 hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:contact@agencia.fr"
                    className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors duration-200"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0 text-primary/80" />
                    <span>contact@agencia.fr</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary/80" />
                  <span>Paris, France</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© 2024 AgencIA — Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <Dialog open={mentionsOpen} onOpenChange={setMentionsOpen}>
                <DialogTrigger asChild>
                  <button className="hover:text-white transition-colors">Mentions Légales</button>
                </DialogTrigger>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Mentions légales</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                    <p><strong className="text-foreground">Éditeur du site :</strong> AgencIA — Agence de solutions vocales intelligentes pour commerces locaux.</p>
                    <p><strong className="text-foreground">Responsable de la publication :</strong> Le gérant de la société AgencIA.</p>
                    <p><strong className="text-foreground">Hébergement :</strong> Le site est hébergé par un prestataire professionnel conforme aux normes européennes de protection des données.</p>
                    <p><strong className="text-foreground">Propriété intellectuelle :</strong> L'ensemble du contenu de ce site (textes, images, logos, design, code source) est protégé par le droit d'auteur et les lois relatives à la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable d'AgencIA.</p>
                    <p><strong className="text-foreground">Responsabilité :</strong> AgencIA s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour des informations.</p>
                    <p><strong className="text-foreground">Contact :</strong> Pour toute question relative aux mentions légales, veuillez utiliser le formulaire de contact disponible sur le site.</p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
                <DialogTrigger asChild>
                  <button className="hover:text-white transition-colors">Confidentialité</button>
                </DialogTrigger>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Politique de confidentialité</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                    <p><strong className="text-foreground">Introduction :</strong> AgencIA accorde une importance primordiale à la protection de vos données personnelles. Cette politique décrit les données collectées, leur utilisation et vos droits.</p>
                    <p><strong className="text-foreground">Données collectées :</strong> Les informations recueillies via le formulaire de contact (nom, établissement, téléphone, type d'activité, centre d'intérêt) sont utilisées exclusivement pour répondre à votre demande et vous proposer nos services d'Agent IA vocal.</p>
                    <p><strong className="text-foreground">Finalité du traitement :</strong> Vos données sont traitées dans le but de : répondre à vos demandes de démonstration, vous proposer une offre adaptée à votre activité, et assurer le suivi de la relation commerciale.</p>
                    <p><strong className="text-foreground">Conservation :</strong> Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.</p>
                    <p><strong className="text-foreground">Partage des données :</strong> Vos données ne sont jamais revendues ni cédées à des tiers à des fins commerciales. Elles peuvent être partagées avec nos sous-traitants techniques (hébergement, CRM) dans le strict cadre de la prestation.</p>
                    <p><strong className="text-foreground">Vos droits (RGPD) :</strong> Conformément au Règlement Général sur la Protection des Données, vous disposez d'un droit d'accès, de rectification, de suppression, de portabilité et d'opposition concernant vos données. Pour exercer ces droits, contactez-nous via le formulaire du site.</p>
                    <p><strong className="text-foreground">Cookies :</strong> Ce site n'utilise pas de cookies de suivi publicitaire ni de cookies tiers. Seuls des cookies techniques essentiels au bon fonctionnement du site peuvent être déposés.</p>
                    <p><strong className="text-foreground">Sécurité :</strong> Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité de vos données.</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
