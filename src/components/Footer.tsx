import AgencIALogo from "./AgencIALogo";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="block">
            <AgencIALogo />
          </a>
          <p className="text-xs text-muted-foreground mt-1">
            Agents vocaux IA pour commerces locaux
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
          <a
            href="https://wa.me/33600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent/10 text-accent font-medium px-4 py-2 rounded-xl hover:bg-accent/20 transition-colors"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground/50 mt-8">
        © {new Date().getFullYear()} AgencIA. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
