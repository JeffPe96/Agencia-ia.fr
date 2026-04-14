import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnNav = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 160;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOnNav;
