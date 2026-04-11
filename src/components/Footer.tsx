import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AgencIALogo from "./AgencIALogo";

const Footer = () => {
  const [mentionsOpen, setMentionsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="block">
              <AgencIALogo />
            </a>
            <p className="text-xs text-muted-foreground mt-1">
              L'alliance de la performance web et de l'intelligence vocale.
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
                <button className="hover:text-foreground transition-colors">Confidentialité</button>
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

            <a
              href="https://wa.me/33651626514"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent/[0.08] text-accent font-medium px-4 py-2 rounded-xl hover:bg-accent/[0.15] transition-colors border border-accent/20"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground/40 mt-8">
          © 2024 AgencIA — Solutions Digitales & Vocales Innovantes pour les commerçants visionnaires. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
