import type { NavigateFunction } from "react-router-dom";

const SCROLL_OFFSET = 80;

const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
};

/**
 * Navigates the user to the contact form on the home page (/).
 * If already on home, just scrolls. Otherwise navigates and then scrolls
 * once the section is in the DOM.
 */
export const navigateToHomeContact = (navigate: NavigateFunction) => {
  if (window.location.pathname === "/") {
    scrollToContact();
    return;
  }
  navigate("/");
  // Wait for Index page to render the ContactForm section before scrolling.
  let attempts = 0;
  const tryScroll = () => {
    const el = document.getElementById("contact");
    if (el) {
      scrollToContact();
      return;
    }
    if (attempts++ < 30) {
      setTimeout(tryScroll, 50);
    }
  };
  setTimeout(tryScroll, 50);
};
