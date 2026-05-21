"use client";

import { useState } from "react";
import HeroCentered from "@/components/HeroCentered";
import HeroSplit from "@/components/HeroSplit";
import HeroEditorial from "@/components/HeroEditorial";
import HeroMinimal from "@/components/HeroMinimal";

const palettes = {
  gold: {
    name: "Warm Gold",
    accent: "#d4a853",
    text: "#e8e8e8",
    muted: "#9a9a9a",
    swatch: "#d4a853",
  },
  cyan: {
    name: "Cool Cyan",
    accent: "#4ecdc4",
    text: "#e8e8e8",
    muted: "#9a9a9a",
    swatch: "#4ecdc4",
  },
  warm: {
    name: "Warm Academic",
    accent: "#6b8cce",
    text: "#f0ead6",
    muted: "#8a8578",
    swatch: "#6b8cce",
  },
} as const;

const layouts = [
  { key: "centered", label: "Centered", description: "Massive centered headline, wave interference background" },
  { key: "split", label: "Split", description: "Left-aligned text, particle field on the right" },
  { key: "editorial", label: "Editorial", description: "Oversized stacked text, field-line background, magazine feel" },
  { key: "minimal", label: "Minimal", description: "Provocative question, ripple background, underline animation" },
] as const;

type PaletteKey = keyof typeof palettes;
type LayoutKey = (typeof layouts)[number]["key"];

export default function Lookbook() {
  const [palette, setPalette] = useState<PaletteKey>("gold");
  const [layout, setLayout] = useState<LayoutKey>("centered");

  const p = palettes[palette];

  return (
    <div className="relative">
      {/* Floating control panel */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-[#111118]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl max-w-[95vw]">
        {/* Layout switcher */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="text-xs text-white/40 uppercase tracking-wider mr-2">
            Layout
          </span>
          {layouts.map((l) => (
            <button
              key={l.key}
              onClick={() => setLayout(l.key)}
              className={`px-3 py-1.5 text-xs rounded-lg transition-all ${
                layout === l.key
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block w-[1px] h-6 bg-white/10" />

        {/* Palette switcher */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="text-xs text-white/40 uppercase tracking-wider mr-2">
            Palette
          </span>
          {(Object.keys(palettes) as PaletteKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setPalette(key)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg transition-all ${
                palette === key
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: palettes[key].swatch }}
              />
              {palettes[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom label with description */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#111118]/80 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 max-w-[90vw]">
        <p className="text-xs text-white/50 text-center">
          <span className="text-white/80 font-medium capitalize">
            {layout}
          </span>{" "}
          &middot;{" "}
          <span style={{ color: p.accent }}>{p.name}</span>{" "}
          &middot;{" "}
          {layouts.find((l) => l.key === layout)?.description}
        </p>
        <p className="text-xs text-white/30 text-center mt-1">
          <a href="/" className="hover:text-white/60 underline">
            &larr; Back to full page
          </a>
        </p>
      </div>

      {/* Hero */}
      <div className="bg-[#0a0a0f]">
        {layout === "centered" && (
          <HeroCentered accent={p.accent} textColor={p.text} muted={p.muted} />
        )}
        {layout === "split" && (
          <HeroSplit accent={p.accent} textColor={p.text} muted={p.muted} />
        )}
        {layout === "editorial" && (
          <HeroEditorial accent={p.accent} textColor={p.text} muted={p.muted} />
        )}
        {layout === "minimal" && (
          <HeroMinimal accent={p.accent} textColor={p.text} muted={p.muted} />
        )}
      </div>
    </div>
  );
}
