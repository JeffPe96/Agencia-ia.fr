import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AgencIALogo from "./AgencIALogo";

const Footer = () => {
  const [mentionsOpen, setMentionsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="block">
              <AgencIALogo />
            </a>
            <p className="text-xs text-muted-foreground mt-1">
              Solutions Vocales Innovantes
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Dialog open={mentionsOpen} onOpenChange={setMentionsOpen}>
              <DialogTrigger asChild>
                <button className="hover:text-foreground transition-colors">Mentions légales</button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Mentions légales</DialogTitle>
                </DialogHeader>
                <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                  <p><strong className="text-foreground">Éditeur du site :</strong> AgencIA — Agence de solutions vocales intelligentes pour commerces locaux.</p>
                  <p><strong className="text-foreground">Hébergement :</strong> Le site est hébergé par un prestataire professionnel conforme aux normes européennes.</p>
                  <p><strong className="text-foreground">Propriété intellectuelle :</strong> L'ensemble du contenu de ce site (textes, images, logos, design) est protégé par le droit d'auteur. Toute reproduction est interdite sans autorisation préalable.</p>
                  <p><strong className="text-foreground">Contact :</strong> Pour toute question, veuillez utiliser le formulaire de contact disponible sur le site.</p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
              <DialogTrigger asChild>
                <button className="hover:text-foreground transition-colors">Confidentialité</button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Politique de confidentialité</DialogTitle>
                </DialogHeader>
                <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                  <p><strong className="text-foreground">Données collectées :</strong> Les informations recueillies via le formulaire de contact (nom, téléphone, type d'activité) sont utilisées exclusivement pour répondre à votre demande et vous proposer nos services.</p>
                  <p><strong className="text-foreground">Utilisation :</strong> Vos données ne sont jamais revendues à des tiers. Elles sont conservées le temps nécessaire au traitement de votre demande.</p>
                  <p><strong className="text-foreground">Droits :</strong> Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous pour exercer ces droits.</p>
                  <p><strong className="text-foreground">Cookies :</strong> Ce site n'utilise pas de cookies de suivi publicitaire. Seuls des cookies techniques essentiels au fonctionnement peuvent être déposés.</p>
                </div>
              </DialogContent>
            </Dialog>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent/10 text-accent font-medium px-4 py-2 rounded-xl hover:bg-accent/20 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground/50 mt-8">
          © 2024 AgencIA — Solutions Vocales Innovantes. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
