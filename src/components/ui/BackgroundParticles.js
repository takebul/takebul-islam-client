"use client";

import { useEffect, useRef, useMemo } from "react";
import { useTheme } from "next-themes";

export function BackgroundParticles() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();

  // Deterministic rising cyan particles (just like reference portfolio)
  const risingParticles = useMemo(() => {
    return Array.from({ length: 36 }).map((_, i) => {
      const left = ((i * 37 + 13) % 96) + 2 + "%";
      const top = ((i * 53 + 29) % 90) + 10 + "%";
      const size = (i % 3) * 0.8 + 2; // 2px to 3.6px
      const duration = 20 + (i % 18); // 20s to 38s
      const delay = (i % 12) * 1.5;
      const opacity = 0.18 + (i % 4) * 0.07;
      return { id: i, left, top, size, duration, delay, opacity };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let particles = [];

    const isDark = resolvedTheme !== "light";

    // Mouse coordinates (default offscreen)
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Scale particle count based on screen size
      const count = width < 768 ? 26 : Math.min(Math.floor(width / 26), 60);

      particles = [];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.2 + Math.random() * 0.4;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 1.8 + 1.2,
          alpha: Math.random() * 0.5 + 0.25,
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const maxDistance = width < 768 ? 95 : 125;
      const nodeColor = isDark ? "34, 211, 238" : "2, 132, 199"; // Vibrant cyan
      const lineColor = isDark ? "56, 189, 248" : "37, 99, 235";

      // 1. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce from walls smoothly
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse proximity reaction
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 0.7;
          p.x -= (dxMouse / distMouse) * force * 1.8;
          p.y -= (dyMouse / distMouse) * force * 1.8;
        }

        // Draw particle node with soft cyan glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor}, ${p.alpha * (isDark ? 0.85 : 0.6)})`;
        ctx.shadowBlur = isDark ? 8 : 0;
        ctx.shadowColor = `rgba(${nodeColor}, 0.5)`;
        ctx.fill();

        // 2. Connect with mouse if close
        if (distMouse < mouse.radius) {
          const mouseAlpha = (1 - distMouse / mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${nodeColor}, ${mouseAlpha})`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
          ctx.stroke();
        }

        // 3. Connect neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * (isDark ? 0.2 : 0.1);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Cyan Ambient Multi-Gradient Glows */}
      <div className="absolute -top-24 left-1/4 w-[650px] h-[650px] bg-cyan-500/12 dark:bg-cyan-500/15 rounded-full blur-[160px] animate-pulse [animation-duration:7s]" />
      <div className="absolute top-1/2 -right-28 w-[550px] h-[550px] bg-blue-600/10 dark:bg-sky-500/12 rounded-full blur-[170px] animate-pulse [animation-duration:9s] [animation-delay:3s]" />
      <div className="absolute -bottom-24 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 dark:bg-cyan-400/12 rounded-full blur-[180px] animate-pulse [animation-duration:8s] [animation-delay:4s]" />

      {/* Upward Rising Star Particles (like reference portfolio) */}
      {risingParticles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            "--initial-opacity": p.opacity,
            animation: `floatParticle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Dynamic Neural / Constellation Mesh Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
