"use client";

import { useEffect, useRef } from "react";

export default function OrbitalDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let meanAnomaly = 0;

    const dpr = window.devicePixelRatio || 1;
    const TILT = Math.PI / 4;
    const ECCENTRICITY = 0.6;
    const PADDING = 0.1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const solveKepler = (M: number, e: number): number => {
      let E = M;
      for (let i = 0; i < 10; i++) {
        E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
      }
      return E;
    };

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;

      const availW = w * (1 - 2 * PADDING);
      const availH = h * (1 - 2 * PADDING);
      const cosTilt = Math.cos(TILT);
      const sinTilt = Math.sin(TILT);

      const fitSemiMajor = (a: number) => {
        const b = a * Math.sqrt(1 - ECCENTRICITY * ECCENTRICITY);
        const halfW = Math.sqrt((a * cosTilt) ** 2 + (b * sinTilt) ** 2);
        const halfH = Math.sqrt((a * sinTilt) ** 2 + (b * cosTilt) ** 2);
        return halfW <= availW / 2 && halfH <= availH / 2;
      };

      let semiMajor = Math.min(w, h) * 0.5;
      while (semiMajor > 10 && !fitSemiMajor(semiMajor)) {
        semiMajor -= 1;
      }

      const semiMinor = semiMajor * Math.sqrt(1 - ECCENTRICITY * ECCENTRICITY);
      const focalOffset = semiMajor * ECCENTRICITY;

      const starX = cx + focalOffset * cosTilt;
      const starY = cy + focalOffset * sinTilt;

      ctx.beginPath();
      ctx.ellipse(cx, cy, semiMajor, semiMinor, TILT, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(91, 154, 139, 0.10)";
      ctx.lineWidth = 1;
      ctx.stroke();

      const glowOuter = ctx.createRadialGradient(starX, starY, 0, starX, starY, 48);
      glowOuter.addColorStop(0, "rgba(232, 220, 200, 0.12)");
      glowOuter.addColorStop(1, "rgba(232, 220, 200, 0)");
      ctx.beginPath();
      ctx.arc(starX, starY, 48, 0, Math.PI * 2);
      ctx.fillStyle = glowOuter;
      ctx.fill();

      const glowInner = ctx.createRadialGradient(starX, starY, 0, starX, starY, 20);
      glowInner.addColorStop(0, "rgba(232, 220, 200, 0.25)");
      glowInner.addColorStop(1, "rgba(232, 220, 200, 0)");
      ctx.beginPath();
      ctx.arc(starX, starY, 20, 0, Math.PI * 2);
      ctx.fillStyle = glowInner;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(starX, starY, 8, 0, Math.PI * 2);
      ctx.fillStyle = "#E8DCC8";
      ctx.fill();

      const E = solveKepler(meanAnomaly, ECCENTRICITY);
      const trueAnomaly = 2 * Math.atan2(
        Math.sqrt(1 + ECCENTRICITY) * Math.sin(E / 2),
        Math.sqrt(1 - ECCENTRICITY) * Math.cos(E / 2)
      );
      const r =
        (semiMajor * (1 - ECCENTRICITY * ECCENTRICITY)) /
        (1 + ECCENTRICITY * Math.cos(trueAnomaly));

      const localX = r * Math.cos(trueAnomaly);
      const localY = r * Math.sin(trueAnomaly);

      const px = starX + localX * cosTilt - localY * sinTilt;
      const py = starY + localX * sinTilt + localY * cosTilt;

      const planetGlow = ctx.createRadialGradient(px, py, 0, px, py, 14);
      planetGlow.addColorStop(0, "rgba(184, 144, 122, 0.18)");
      planetGlow.addColorStop(1, "rgba(184, 144, 122, 0)");
      ctx.beginPath();
      ctx.arc(px, py, 14, 0, Math.PI * 2);
      ctx.fillStyle = planetGlow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#B8907A";
      ctx.fill();

      meanAnomaly += 0.004;
      if (meanAnomaly > Math.PI * 2) meanAnomaly -= Math.PI * 2;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
}
