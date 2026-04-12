import { useEffect, useRef, useCallback } from "react";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
}

const Sparkles = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const animFrameRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const createSparkle = useCallback((width: number, height: number): Sparkle => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.5,
      opacity: 0,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      life: 0,
      maxLife: Math.random() * 120 + 60,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();

    // Initialize sparkles
    const rect = container.getBoundingClientRect();
    for (let i = 0; i < 28; i++) {
      sparklesRef.current.push(createSparkle(rect.width, rect.height));
    }

    const animate = () => {
      const r = container.getBoundingClientRect();
      ctx.clearRect(0, 0, r.width, r.height);

      sparklesRef.current.forEach((s, i) => {
        s.life++;
        s.x += s.speedX;
        s.y += s.speedY;

        // Fade in then out
        const progress = s.life / s.maxLife;
        if (progress < 0.2) {
          s.opacity = progress / 0.2;
        } else if (progress > 0.8) {
          s.opacity = (1 - progress) / 0.2;
        } else {
          s.opacity = 1;
        }

        if (s.life >= s.maxLife) {
          sparklesRef.current[i] = createSparkle(r.width, r.height);
          return;
        }

        // Draw sparkle with glow
        ctx.save();
        ctx.globalAlpha = s.opacity * 0.9;
        ctx.fillStyle = `hsl(217, 91%, ${65 + Math.random() * 20}%)`;
        ctx.shadowColor = "hsl(217, 91%, 70%)";
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Cross sparkle
        ctx.strokeStyle = `hsl(217, 91%, ${70 + Math.random() * 15}%)`;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = s.opacity * 0.5;
        ctx.beginPath();
        ctx.moveTo(s.x - s.size * 2, s.y);
        ctx.lineTo(s.x + s.size * 2, s.y);
        ctx.moveTo(s.x, s.y - s.size * 2);
        ctx.lineTo(s.x, s.y + s.size * 2);
        ctx.stroke();
        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [createSparkle]);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default Sparkles;
