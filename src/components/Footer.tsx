import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AgencIALogo from "./AgencIALogo";

const TIME_ZONE = "Europe/Paris";

const formatLocalTime = (date: Date) =>
  new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: TIME_ZONE,
  }).format(date);

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};


const solutions: { label: string; to: string; scrollTo?: string }[] = [
  { label: "Vocal AgencIA", to: "/vocal" },
  { label: "Web AgencIA", to: "/web" },
];

const agence = [
  { label: "Nos Tarifs", to: "/tarifs" },
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
                    href="mailto:contact@agencia-ia.fr"
                    className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors duration-200"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0 text-primary/80" />
                    <span>contact@agencia-ia.fr</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary/80" />
                  <span>Annecy, France</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} AgencIA — Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <Dialog open={mentionsOpen} onOpenChange={setMentionsOpen}>
                <DialogTrigger asChild>
                  <button className="hover:text-white transition-colors">Mentions Légales</button>
                </DialogTrigger>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto bg-[hsl(220_25%_8%)] border-white/10 text-white/80">
                  <DialogHeader>
                    <DialogTitle className="text-white">Mentions légales</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-white/70 space-y-3 leading-relaxed">
                    <p><strong className="text-white">Éditeur :</strong> AgencIA (En attente d'immatriculation).</p>
                    <p><strong className="text-white">Directeur de la publication :</strong> Jefferson DE LA CRUZ.</p>
                    <p><strong className="text-white">Hébergement :</strong> Vercel.</p>
                    <p><strong className="text-white">Propriété intellectuelle :</strong> Tous les contenus (textes, logos, images) sont la propriété exclusive d'AgencIA. Toute reproduction est interdite sans accord préalable.</p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setMentionsOpen(false)}
                      className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-colors"
                    >
                      ← Retour
                    </button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
                <DialogTrigger asChild>
                  <button className="hover:text-white transition-colors">Confidentialité</button>
                </DialogTrigger>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto bg-[hsl(220_25%_8%)] border-white/10 text-white/80">
                  <DialogHeader>
                    <DialogTitle className="text-white">Politique de confidentialité (RGPD)</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-white/70 space-y-3 leading-relaxed">
                    <p><strong className="text-white">Collecte des données :</strong> Les informations collectées via le formulaire de contact (nom, email, établissement) sont utilisées exclusivement pour répondre à vos demandes de démo.</p>
                    <p><strong className="text-white">Conservation :</strong> Vos données sont conservées pendant une durée maximale de 3 ans.</p>
                    <p><strong className="text-white">Droits :</strong> Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant via le formulaire de contact.</p>
                    <p><strong className="text-white">Cookies :</strong> Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement de l'interface et à l'analyse de trafic anonyme.</p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setPrivacyOpen(false)}
                      className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-colors"
                    >
                      ← Retour
                    </button>
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
