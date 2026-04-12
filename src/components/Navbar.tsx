import { useState } from "react";
import { Menu, X } from "lucide-react";
import AgencIALogo from "./AgencIALogo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Vocal IA", href: "#avantages" },
    { label: "Expertise Web", href: "#portfolio" },
    { label: "Notre Processus", href: "#processus" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          <AgencIALogo />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary-neu text-sm px-6 py-2.5 rounded-xl animate-[pulse-glow_3s_ease-in-out_infinite]">
            Contactez-nous
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border/50 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary-neu text-sm text-center px-6 py-2.5 rounded-xl"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
