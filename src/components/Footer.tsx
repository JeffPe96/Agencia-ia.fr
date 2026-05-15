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
  const [localTime, setLocalTime] = useState(() => formatLocalTime(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setLocalTime(formatLocalTime(new Date()));
    }, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer className="relative mt-20">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(190 80% 50% / 0.5) 25%, hsl(217 91% 53% / 0.5) 75%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative bg-[hsl(220_25%_8%)] text-white/80 overflow-hidden">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
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
                <li className="flex items-start gap-3 text-white/60">
                  <Clock size={16} className="mt-0.5 shrink-0 text-primary/80" />
                  <span className="flex flex-col">
                    <span>
                      Local time :{" "}
                      <span className="text-white font-medium tabular-nums" aria-live="polite">
                        {localTime}
                      </span>
                    </span>
                    <span className="text-[11px] text-white/40">Annecy · CET/CEST</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} AgencIA — Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <Dialog open={mentionsOpen} onOpenChange={setMentionsOpen}>
                <DialogTrigger asChild>
                  <button className="hover:text-white transition-colors">Mentions Légales</button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[hsl(220_25%_8%)] border-white/10 text-white/80">
                  <DialogHeader>
                    <DialogTitle className="text-white">Mentions Légales & RGPD — AgencIA</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-white/70 space-y-5 leading-relaxed">
                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">1. Informations sur l'Éditeur</h3>
                      <p>Le site <span className="text-white">agencia-ia.fr</span> est édité par :</p>
                      <ul className="space-y-1 pl-1">
                        <li><strong className="text-white">Nom — Prénom :</strong> DE LA CRUZ Jefferson</li>
                        <li><strong className="text-white">Forme juridique :</strong> Auto-entrepreneur (en cours d'immatriculation)</li>
                        <li><strong className="text-white">Enseigne :</strong> AgencIA</li>
                        <li><strong className="text-white">Adresse :</strong> Annecy, France</li>
                        <li><strong className="text-white">E-mail :</strong> contact@agencia-ia.fr</li>
                        <li><strong className="text-white">Directeur de publication :</strong> Jefferson DE LA CRUZ</li>
                      </ul>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">2. Hébergement</h3>
                      <p>Le site est hébergé par :</p>
                      <ul className="space-y-1 pl-1">
                        <li><strong className="text-white">Hébergeur :</strong> Vercel Inc.</li>
                        <li><strong className="text-white">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</li>
                      </ul>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">3. Propriété Intellectuelle</h3>
                      <p>Tout le contenu présent sur ce site (textes, logos, graphismes, vidéos) est la propriété exclusive de AgencIA, sauf mention contraire. Toute reproduction, même partielle, est strictement interdite sans accord écrit préalable.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">4. Protection des Données (RGPD)</h3>
                      <p>AgencIA s'engage à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD).</p>
                      <p><strong className="text-white">Données collectées :</strong> Via nos formulaires et services, nous collectons : votre nom, votre numéro de téléphone, votre adresse e-mail et le nom de votre entreprise.</p>
                      <p><strong className="text-white">Finalité :</strong> Traitement de vos demandes de démo et communication relative à nos services.</p>
                      <p><strong className="text-white">Sécurité (Captcha) :</strong> Afin de protéger nos formulaires contre les abus et le spam, nous utilisons un système de CAPTCHA. Ce service peut collecter des données techniques (ex : adresse IP) pour vérifier que l'utilisateur est humain.</p>
                      <p><strong className="text-white">Conservation & Droits :</strong> Vos données sont conservées pendant 2 ans. Vous disposez d'un droit d'accès, de rectification et de suppression en écrivant à : <span className="text-white">contact@agencia-ia.fr</span>.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">5. Cookies</h3>
                      <p>Le site agencia-ia.fr n'utilise aucun cookie de traçage, de profilage ou de publicité. Seuls des éléments techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">6. Responsabilité</h3>
                      <p>AgencIA s'efforce de fournir des informations exactes mais ne saurait être tenue pour responsable en cas d'omission. L'utilisation du site se fait sous la seule responsabilité de l'utilisateur.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">7. Litiges</h3>
                      <p>Les présentes conditions sont régies par les lois françaises. En cas de contestation, les tribunaux français seront seuls compétents.</p>
                    </section>
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
                <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[hsl(220_25%_8%)] border-white/10 text-white/80">
                  <DialogHeader>
                    <DialogTitle className="text-white">Politique de Confidentialité (RGPD) — AgencIA</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-white/70 space-y-5 leading-relaxed">
                    <section className="space-y-1.5">
                      <p>AgencIA, représentée par Jefferson DE LA CRUZ (Annecy, France), accorde une importance particulière à la protection de vos données personnelles.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">1. Responsable du traitement</h3>
                      <p>Le responsable du traitement des données est <strong className="text-white">Jefferson DE LA CRUZ</strong>, éditeur du site <span className="text-white">agencia-ia.fr</span>. Pour toute question : <span className="text-white">contact@agencia-ia.fr</span>.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">2. Données collectées</h3>
                      <p>Via nos formulaires et demandes de démo, nous pouvons collecter : votre <strong className="text-white">nom</strong>, votre <strong className="text-white">numéro de téléphone</strong>, votre <strong className="text-white">e-mail</strong>, votre <strong className="text-white">localité</strong> et le nom de votre <strong className="text-white">établissement</strong>.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">3. Finalités du traitement</h3>
                      <p>Vos données sont utilisées exclusivement pour le traitement de vos demandes de démo et la communication relative à nos services. Aucune donnée n'est revendue ni utilisée à des fins publicitaires.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">4. Sécurité & CAPTCHA</h3>
                      <p>Nos formulaires utilisent un système de CAPTCHA pour se protéger contre les abus. Vos données sont stockées de manière sécurisée et accessibles uniquement aux personnes habilitées.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">5. Conservation des données</h3>
                      <p>Vos données sont conservées pendant une durée maximale de <strong className="text-white">2 ans</strong> à compter du dernier contact, puis automatiquement supprimées.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">6. Vos droits</h3>
                      <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, de portabilité et d'opposition. Écrivez-nous à : <span className="text-white">contact@agencia-ia.fr</span>.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">7. Cookies</h3>
                      <p>Le site agencia-ia.fr <strong className="text-white">n'utilise aucun cookie</strong> de traçage, de profilage ou de publicité.</p>
                    </section>

                    <section className="space-y-1.5">
                      <h3 className="text-white font-semibold">8. Hébergement des données</h3>
                      <p>Les données transitant par le site sont hébergées par <strong className="text-white">Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, États-Unis).</p>
                    </section>
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
