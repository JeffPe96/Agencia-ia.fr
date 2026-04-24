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
      size: Math.random() * 2 + 0.6,
      opacity: 0,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      life: 0,
      maxLife: Math.random() * 180 + 120,
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
    const count = fullScreen ? (isMobile ? 28 : 75) : (isMobile ? 12 : 28);
    sparklesRef.current = [];
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

    const REPEL_RADIUS = 140;
    const REPEL_FORCE = 2.8;
    const LINK_DIST = fullScreen ? 130 : 100;
    const MOUSE_LINK_DIST = 180;

    const animate = () => {
      const r = container.getBoundingClientRect();
      ctx.clearRect(0, 0, r.width, r.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const sparkles = sparklesRef.current;

      // Update positions and lifecycles
      sparkles.forEach((s, i) => {
        s.life++;

        // Mouse interaction (repel)
        const dx = s.x - mx;
        const dy = s.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
          s.speedX += (dx / dist) * force * 0.1;
          s.speedY += (dy / dist) * force * 0.1;
        }

        // Damping
        s.speedX *= 0.97;
        s.speedY *= 0.97;

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
          sparkles[i] = createSparkle(r.width, r.height);
        }
      });

      // Neural network: connection lines between close particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < sparkles.length; i++) {
        const a = sparkles[i];
        for (let j = i + 1; j < sparkles.length; j++) {
          const b = sparkles[j];
          const ddx = a.x - b.x;
          const ddy = a.y - b.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.2 * Math.min(a.opacity, b.opacity);
            ctx.strokeStyle = `hsla(195, 100%, 65%, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Mouse-to-particle connection lines (active neural feel)
      if (mx > -500) {
        for (const s of sparkles) {
          const ddx = s.x - mx;
          const ddy = s.y - my;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < MOUSE_LINK_DIST) {
            const alpha = (1 - d / MOUSE_LINK_DIST) * 0.4 * s.opacity;
            ctx.strokeStyle = `hsla(190, 100%, 70%, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }
      }

      // Draw glowing particles
      sparkles.forEach((s) => {
        ctx.save();
        ctx.globalAlpha = s.opacity * 0.95;
        ctx.fillStyle = "hsl(195, 100%, 70%)";
        ctx.shadowColor = "hsl(195, 100%, 65%)";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
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
