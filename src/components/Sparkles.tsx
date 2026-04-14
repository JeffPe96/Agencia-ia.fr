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

interface SparklesProps {
  children?: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
}

const Sparkles = ({ children, className = "", fullScreen = false }: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const animFrameRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  // Global mouse tracking for fullScreen mode
  useEffect(() => {
    if (!fullScreen) return;
    const handleGlobalMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleGlobalMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleGlobalMove);
  }, [fullScreen]);

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

    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const rect = container.getBoundingClientRect();
    const isMobile = rect.width < 768;
    const count = fullScreen ? (isMobile ? 20 : 60) : (isMobile ? 12 : 28);
    for (let i = 0; i < count; i++) {
      sparklesRef.current.push(createSparkle(rect.width, rect.height));
    }

    const handleMouseMove = fullScreen
      ? null
      : (e: MouseEvent) => {
          const r = container.getBoundingClientRect();
          mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
        };

    if (handleMouseMove) container.addEventListener("mousemove", handleMouseMove);

    const REPEL_RADIUS = 120;
    const REPEL_FORCE = 2.5;

    const animate = () => {
      const r = container.getBoundingClientRect();
      ctx.clearRect(0, 0, r.width, r.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      sparklesRef.current.forEach((s, i) => {
        s.life++;
        
        // Mouse repel
        const dx = s.x - mx;
        const dy = s.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
          s.speedX += (dx / dist) * force * 0.1;
          s.speedY += (dy / dist) * force * 0.1;
        }

        // Damping
        s.speedX *= 0.98;
        s.speedY *= 0.98;

        s.x += s.speedX;
        s.y += s.speedY;

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

        ctx.save();
        ctx.globalAlpha = s.opacity * 0.9;
        ctx.fillStyle = `hsl(217, 91%, ${65 + Math.random() * 20}%)`;
        ctx.shadowColor = "hsl(217, 91%, 70%)";
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

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
      if (handleMouseMove) container.removeEventListener("mousemove", handleMouseMove);
      sparklesRef.current = [];
    };
  }, [createSparkle, fullScreen]);

  if (fullScreen) {
    return (
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default Sparkles;
