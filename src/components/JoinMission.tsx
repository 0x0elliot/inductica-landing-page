"use client";

import { motion } from "framer-motion";
import WaveBackground from "./WaveBackground";

export default function JoinMission() {
  return (
    <section id="mission" className="relative py-32 md:py-40 overflow-hidden">
      <WaveBackground accent="#4ecdc4" variant="ripple" />
      <div className="absolute inset-0 bg-[#0a0a0f]/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.25em] text-xs text-[#4ecdc4] mb-4">
            Support the Mission
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#e8e8e8] leading-tight mb-6">
            Help Us Rebuild
            <br />
            the Foundations of Physics
          </h2>
          <p className="text-lg text-[#9a9a9a] max-w-2xl mx-auto mb-12 leading-relaxed">
            Your support funds ongoing research, video production, and open
            access to lectures. Every contribution accelerates the path to real
            discoveries in physics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                amount: "$5",
                label: "Exclusive Media",
                description: "Access to exclusive lectures and articles, including a 34-hour Inductive Summary of Physics series.",
              },
              {
                amount: "$20",
                label: "Extra Support",
                description: "All exclusive media plus the opportunity to support the project at a higher level.",
              },
              {
                amount: "$30",
                label: "Theory of Induction",
                description: "A copy of the current draft of the theory guiding Inductica's reproof of math and physics. Includes all lower tiers.",
                featured: true,
              },
            ].map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border transition-all ${
                  tier.featured
                    ? "border-[#4ecdc4]/40 bg-[#4ecdc4]/[0.05]"
                    : "border-white/5 bg-white/[0.02]"
                }`}
              >
                <p className="text-2xl font-bold text-[#4ecdc4] mb-1">
                  {tier.amount}
                  <span className="text-sm text-[#9a9a9a] font-normal">
                    /month
                  </span>
                </p>
                <p className="text-[#e8e8e8] font-medium mb-2">{tier.label}</p>
                <p className="text-sm text-[#9a9a9a]">{tier.description}</p>
              </motion.div>
            ))}
          </div>

          <a
            href="https://www.patreon.com/inductica/membership?vanity=inductica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-medium tracking-wide uppercase bg-[#4ecdc4] text-[#0a0a0f] rounded-full hover:scale-105 transition-transform"
          >
            Support on Patreon
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 8h8M9 5l3 3-3 3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
