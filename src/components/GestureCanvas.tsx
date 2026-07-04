import { useEffect, useRef } from "react";

/**
 * GestureCanvas — a slow, cursor-following gesture trail.
 * Reads as an EEG/motion-capture read-out. Dark or light variant via `tone`.
 */
export function GestureCanvas({
  tone = "dark",
  density = 1,
  className = "",
}: {
  tone?: "dark" | "light";
  density?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const points: Array<{ x: number; y: number; vx: number; vy: number; a: number }> = [];
    const trail: Array<{ x: number; y: number; a: number }> = [];
    const target = { x: 0, y: 0, has: false };

    const N = Math.floor(80 * density);
    for (let i = 0; i < N; i++) {
      points.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0006,
        vy: (Math.random() - 0.5) * 0.0006,
        a: Math.random(),
      });
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = (e.clientX - rect.left) / rect.width;
      target.y = (e.clientY - rect.top) / rect.height;
      target.has = true;
      trail.push({ x: target.x, y: target.y, a: 1 });
      if (trail.length > 120) trail.shift();
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const ink = tone === "dark" ? "245, 241, 234" : "20, 16, 13";
    const copper = "184, 121, 75";

    let t = 0;
    const tick = () => {
      t += 0.006;
      ctx.clearRect(0, 0, width, height);

      // subtle grid
      ctx.strokeStyle = `rgba(${ink}, 0.05)`;
      ctx.lineWidth = 1;
      const step = 80;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // horizontal EEG lines
      for (let li = 0; li < 3; li++) {
        const yBase = height * (0.28 + li * 0.22);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${ink}, ${0.14 - li * 0.03})`;
        ctx.lineWidth = 1;
        for (let x = 0; x <= width; x += 4) {
          const px = x / width;
          const wob =
            Math.sin(px * 24 + t * 4 + li) * 6 +
            Math.sin(px * 8 + t * 1.7 + li * 2) * 10 +
            (target.has ? Math.exp(-Math.pow((px - target.x) * 6, 2)) * 30 : 0);
          const y = yBase + wob;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // drifting particles pulled toward cursor
      for (const p of points) {
        if (target.has) {
          const dx = target.x - p.x;
          const dy = target.y - p.y;
          const d2 = dx * dx + dy * dy + 0.0005;
          p.vx += dx * 0.00006 / d2 * 0.02;
          p.vy += dy * 0.00006 / d2 * 0.02;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${ink}, ${0.25 + p.a * 0.35})`;
        ctx.arc(p.x * width, p.y * height, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      // gesture trail
      ctx.lineWidth = 1.25;
      for (let i = 1; i < trail.length; i++) {
        const a = trail[i];
        const b = trail[i - 1];
        a.a *= 0.985;
        ctx.strokeStyle = `rgba(${copper}, ${a.a * 0.8})`;
        ctx.beginPath();
        ctx.moveTo(b.x * width, b.y * height);
        ctx.lineTo(a.x * width, a.y * height);
        ctx.stroke();
      }
      if (target.has) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${copper}, 0.9)`;
        ctx.lineWidth = 1;
        ctx.arc(target.x * width, target.y * height, 22 + Math.sin(t * 6) * 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [tone, density]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
