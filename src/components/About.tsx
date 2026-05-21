"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Theory of Induction",
    description:
      "A systematic method for proving scientific conclusions from observation with certainty.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4v24M8 12l8-8 8 8M6 28h20" />
      </svg>
    ),
  },
  {
    title: "Overhauling Physics",
    description:
      "Reproving the essentials of known physics from observation, free of faulty assumptions.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="10" />
        <ellipse cx="16" cy="16" rx="10" ry="4" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="10" ry="4" transform="rotate(-60 16 16)" />
      </svg>
    ),
  },
  {
    title: "Conquering the Aether",
    description:
      "Making provable new discoveries about the underlying nature of electromagnetism and gravity.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16c4-8 8-12 12-12s8 4 12 12c-4 8-8 12-12 12s-8-4-12-12z" />
        <circle cx="16" cy="16" r="4" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <p className="uppercase tracking-[0.25em] text-xs text-[#4ecdc4] mb-4">
            What is Inductica
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#e8e8e8] leading-tight mb-6">
            Modern physics is built on
            <br />
            <span className="text-[#4ecdc4]">flawed foundations.</span>
          </h2>
          <p className="text-lg text-[#9a9a9a] leading-relaxed">
            Quantum Mechanics and General Relativity make many correct
            predictions, but they make false claims about the underlying nature
            of the phenomena. Inductica is going back to the observations to
            build physics on solid, provable ground.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#4ecdc4]/20 transition-all duration-500"
            >
              <div className="text-[#4ecdc4] mb-6">{pillar.icon}</div>
              <h3 className="font-serif text-xl font-bold text-[#e8e8e8] mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#9a9a9a] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
