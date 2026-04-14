import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AgencIALogo from "./AgencIALogo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Vocal AgencIA", href: "/vocal" },
    { label: "Web AgencIA", href: "/web" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Notre Processus", href: "/#processus", isAnchor: true },
  ];

  const isRoute = (href: string) => !href.startsWith("/#");

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    const [path, hash] = href.split("#");
    if (location.pathname === path || (path === "/" && location.pathname === "/")) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    // else: normal <a> navigation to path#hash
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
          <AgencIALogo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            isRoute(l.href) ? (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            )
          )}
          <button
            onClick={handleContactClick}
            className="btn-primary-neu text-sm px-6 py-2.5 rounded-xl animate-[pulse-glow_3s_ease-in-out_infinite]"
          >
            Contactez-nous
          </button>
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
            {links.map((l) =>
              isRoute(l.href) ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { handleAnchorClick(e, l.href); setOpen(false); }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  {l.label}
                </a>
              )
            )}
            <button
              onClick={(e) => { handleContactClick(e); setOpen(false); }}
              className="btn-primary-neu text-sm text-center px-6 py-2.5 rounded-xl"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
