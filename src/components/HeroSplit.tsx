"use client";

import { motion } from "framer-motion";
import WaveBackground from "./WaveBackground";

interface Props {
  accent: string;
  textColor: string;
  muted: string;
}

export default function HeroSplit({ accent, textColor, muted }: Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <WaveBackground accent={accent} variant="particles" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div
              className="w-8 h-[2px]"
              style={{ backgroundColor: accent }}
            />
            <span
              className="uppercase tracking-[0.25em] text-xs font-medium"
              style={{ color: accent }}
            >
              Inductica
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] mb-6"
            style={{ color: textColor }}
          >
            Rebuilding
            <br />
            Physics from
            <br />
            <span style={{ color: accent }}>First Principles</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg max-w-md mb-10 leading-relaxed"
            style={{ color: muted }}
          >
            A systematic method for proving scientific conclusions from
            observation — and the physics that follows from it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex gap-4 flex-wrap"
          >
            <button
              className="px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all hover:translate-x-1"
              style={{
                backgroundColor: accent,
                color: "#0a0a0f",
              }}
            >
              Book Tutoring &rarr;
            </button>
            <button
              className="px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all border-b-2 hover:translate-x-1"
              style={{
                borderColor: accent,
                color: textColor,
              }}
            >
              Join the Mission
            </button>
          </motion.div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
