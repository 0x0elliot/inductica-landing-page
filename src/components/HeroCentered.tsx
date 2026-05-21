"use client";

import { motion } from "framer-motion";
import WaveBackground from "./WaveBackground";

interface Props {
  accent: string;
  textColor: string;
  muted: string;
}

export default function HeroCentered({ accent, textColor, muted }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveBackground accent={accent} variant="interference" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f]/80" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-sm mb-8"
          style={{ color: accent }}
        >
          Inductica
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
          style={{ color: textColor }}
        >
          The Inductive
          <br />
          Revolution
          <br />
          <span style={{ color: accent }}>Has Begun</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: muted }}
        >
          Rebuilding physics from the ground up. One proof at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            className="px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase transition-all hover:scale-105"
            style={{
              backgroundColor: accent,
              color: "#0a0a0f",
            }}
          >
            Book Tutoring
          </button>
          <button
            className="px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase transition-all border hover:scale-105"
            style={{
              borderColor: `${accent}44`,
              color: textColor,
            }}
          >
            Join the Mission
          </button>
        </motion.div>
      </div>
    </section>
  );
}
