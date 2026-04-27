import { useEffect, useRef, useState } from "react";

/**
 * Global custom cursor: a soft glowing dot that follows the mouse + a larger
 * trailing ring. Active across the entire site (mounted at root).
 * Disabled on touch devices.
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Disable on touch / coarse pointer devices and when user prefers reduced motion
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || reduced) return;
    setEnabled(true);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
      if (hidden) setHidden(false);
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const animate = () => {
      // Smooth trailing for the ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [hidden]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full"
        style={{
          background: "hsl(var(--primary))",
          boxShadow: "0 0 12px hsl(var(--primary) / 0.6)",
          opacity: hidden ? 0 : 1,
          transition: "opacity 200ms ease",
          mixBlendMode: "normal",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-9 w-9 rounded-full border"
        style={{
          borderColor: "hsl(var(--primary) / 0.45)",
          boxShadow: "0 0 18px hsl(var(--primary) / 0.18)",
          opacity: hidden ? 0 : 1,
          transition: "opacity 250ms ease, width 200ms ease, height 200ms ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
