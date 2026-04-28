import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AgencIALogo from "./AgencIALogo";
import { navigateToHomeContact } from "@/lib/navigateToContact";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Vocal", href: "/vocal" },
    { label: "Web", href: "/web" },
    { label: "Tarifs", href: "/tarifs" },
  ];

  const isRoute = (href: string) => !href.startsWith("/#");

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    // If already on this page, scroll to top
    if (location.pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    const [path, hash] = href.split("#");
    if (location.pathname === path || (path === "/" && location.pathname === "/")) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 160;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToHomeContact(navigate);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-in-out ${
        scrolled ? "glass opacity-100 pointer-events-auto" : "bg-transparent opacity-100 pointer-events-auto"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" onClick={handleLogoClick} className="text-xl font-bold tracking-tight text-foreground">
          <AgencIALogo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = isRoute(l.href) && location.pathname === l.href;
            const baseCls = `relative text-sm font-medium transition-colors py-1.5 ${
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`;
            const indicator = (
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#7b5cff] origin-left transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            );
            return isRoute(l.href) ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
                aria-current={isActive ? "page" : undefined}
                className={`group ${baseCls}`}
              >
                {l.label}
                {indicator}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className={`group ${baseCls}`}
              >
                {l.label}
                {indicator}
              </a>
            );
          })}

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
            {links.map((l) => {
              const isActive = isRoute(l.href) && location.pathname === l.href;
              const cls = `relative flex items-center gap-2 text-sm font-medium py-2 pl-3 transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`;
              const dot = (
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full bg-gradient-to-b from-[#00BFFF] to-[#7b5cff] transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              );
              return isRoute(l.href) ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={(e) => { handleLinkClick(e, l.href); setOpen(false); }}
                  aria-current={isActive ? "page" : undefined}
                  className={cls}
                >
                  {dot}
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { handleAnchorClick(e, l.href); setOpen(false); }}
                  className={cls}
                >
                  {dot}
                  {l.label}
                </a>
              );
            })}
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
