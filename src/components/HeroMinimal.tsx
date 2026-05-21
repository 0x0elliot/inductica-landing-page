"use client";

import { motion } from "framer-motion";
import WaveBackground from "./WaveBackground";

interface Props {
  accent: string;
  textColor: string;
  muted: string;
}

export default function HeroMinimal({ accent, textColor, muted }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveBackground accent={accent} variant="ripple" />
      <div className="absolute inset-0 bg-[#0a0a0f]/50" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1
            className="font-[family-name:var(--font-space)] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            style={{ color: textColor }}
          >
            What if everything we know
            <br />
            about physics is{" "}
            <span
              className="relative inline-block"
            >
              <span style={{ color: accent }}>wrong</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-1 left-0 w-full h-[2px] origin-left"
                style={{ backgroundColor: accent }}
              />
            </span>
            ?
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg max-w-2xl mx-auto mt-8 mb-12 leading-relaxed"
          style={{ color: muted }}
        >
          Inductica is developing a systematic method for proving scientific
          conclusions from observation — and using it to rebuild physics from
          the ground up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <button
            className="group px-8 py-4 text-sm font-medium tracking-wide transition-all flex items-center gap-2"
            style={{
              color: accent,
              borderBottom: `2px solid ${accent}`,
            }}
          >
            Book Tutoring
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
          <button
            className="group px-8 py-4 text-sm font-medium tracking-wide transition-all flex items-center gap-2"
            style={{
              color: muted,
              borderBottom: `2px solid ${muted}44`,
            }}
          >
            Join the Mission
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
