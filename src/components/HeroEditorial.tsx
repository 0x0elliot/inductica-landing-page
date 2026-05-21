"use client";

import { motion } from "framer-motion";
import WaveBackground from "./WaveBackground";

interface Props {
  accent: string;
  textColor: string;
  muted: string;
}

export default function HeroEditorial({ accent, textColor, muted }: Props) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <WaveBackground accent={accent} variant="field-lines" />
      <div className="absolute inset-0 bg-[#0a0a0f]/60" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.85] tracking-tight"
          style={{ color: textColor }}
        >
          REBUILDING
          <br />
          <span style={{ color: accent }}>PHYSICS.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="origin-left my-8 md:my-12"
        >
          <div
            className="h-[1px] w-48 md:w-96"
            style={{ backgroundColor: accent }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p
            className="text-base md:text-lg max-w-lg leading-relaxed"
            style={{ color: muted }}
          >
            A new theory of induction. A reformed scientific method.
            <br />
            Real, provable progress — from observation to discovery.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              className="px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all hover:scale-105"
              style={{
                backgroundColor: accent,
                color: "#0a0a0f",
              }}
            >
              Book Tutoring
            </button>
            <button
              className="px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all border hover:scale-105"
              style={{
                borderColor: `${accent}66`,
                color: textColor,
              }}
            >
              Join the Mission
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
