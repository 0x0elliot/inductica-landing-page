"use client";

import { useEffect, useRef } from "react";

interface WaveBackgroundProps {
  accent: string;
  variant?: "interference" | "particles" | "field-lines" | "ripple";
}

export default function WaveBackground({
  accent,
  variant = "interference",
}: WaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };

    const color = hexToRgb(accent);
    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const drawInterference = () => {
      ctx.clearRect(0, 0, w(), h());
      const rows = 60;
      const cols = 120;
      const cellW = w() / cols;
      const cellH = h() / rows;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cx = x * cellW + cellW / 2;
          const cy = y * cellH + cellH / 2;

          const d1 = Math.sqrt((cx - w() * 0.3) ** 2 + (cy - h() * 0.5) ** 2);
          const d2 = Math.sqrt((cx - w() * 0.7) ** 2 + (cy - h() * 0.5) ** 2);

          const wave1 = Math.sin(d1 * 0.02 - time * 0.8);
          const wave2 = Math.sin(d2 * 0.02 - time * 0.8);
          const interference = (wave1 + wave2) / 2;

          const alpha = Math.abs(interference) * 0.15;
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
          ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);
        }
      }
    };

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];
    if (variant === "particles") {
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * 1920,
          y: Math.random() * 1080,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, w(), h());
      const scaleX = w() / 1920;
      const scaleY = h() / 1080;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = 1920;
        if (p.x > 1920) p.x = 0;
        if (p.y < 0) p.y = 1080;
        if (p.y > 1080) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x * scaleX, p.y * scaleY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${p.alpha})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = (particles[i].x - particles[j].x) * scaleX;
          const dy = (particles[i].y - particles[j].y) * scaleY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x * scaleX, particles[i].y * scaleY);
            ctx.lineTo(particles[j].x * scaleX, particles[j].y * scaleY);
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${(1 - dist / 150) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const drawFieldLines = () => {
      ctx.clearRect(0, 0, w(), h());
      const numLines = 20;
      const amplitude = 30;

      for (let i = 0; i < numLines; i++) {
        const baseY = (h() / (numLines + 1)) * (i + 1);
        const phase = i * 0.3 + time * 0.5;
        const opacity = 0.03 + (Math.sin(i * 0.5 + time * 0.3) * 0.5 + 0.5) * 0.08;

        ctx.beginPath();
        ctx.moveTo(0, baseY);

        for (let x = 0; x <= w(); x += 4) {
          const y =
            baseY +
            Math.sin(x * 0.005 + phase) * amplitude +
            Math.sin(x * 0.003 + phase * 0.7) * amplitude * 0.5;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const drawRipple = () => {
      ctx.clearRect(0, 0, w(), h());
      const centerX = w() / 2;
      const centerY = h() / 2;
      const maxRadius = Math.sqrt(w() * w() + h() * h()) / 2;

      for (let r = 0; r < maxRadius; r += 8) {
        const wave = Math.sin(r * 0.03 - time * 1.2) * 0.5 + 0.5;
        const alpha = wave * 0.08 * (1 - r / maxRadius);

        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    const draw = () => {
      time += 0.016;
      switch (variant) {
        case "interference":
          drawInterference();
          break;
        case "particles":
          drawParticles();
          break;
        case "field-lines":
          drawFieldLines();
          break;
        case "ripple":
          drawRipple();
          break;
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [accent, variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}
