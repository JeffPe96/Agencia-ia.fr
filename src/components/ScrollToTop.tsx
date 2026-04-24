import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        background: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)",
        boxShadow:
          "0 0 0 1px hsl(217 91% 53% / 0.3), 0 8px 24px -6px hsl(217 91% 53% / 0.55), 0 0 28px -4px hsl(190 80% 50% / 0.45)",
      }}
      aria-label="Retour en haut"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
