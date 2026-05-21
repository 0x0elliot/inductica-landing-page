"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "One-on-One Tutoring",
    description: "Personalized sessions in math and physics, from algebra to quantum mechanics.",
  },
  {
    title: "Theory Feedback",
    description: "Get expert feedback on your scientific theories and research papers.",
  },
  {
    title: "Conceptual Understanding",
    description: "Move beyond memorization to genuine, principled understanding of physics.",
  },
];

export default function Tutoring() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="tutoring" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4ecdc4]/[0.03] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.25em] text-xs text-[#4ecdc4] mb-4">
              Tutoring
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#e8e8e8] leading-tight mb-6">
              Learn Physics
              <br />
              <span className="text-[#4ecdc4]">With James Ellias</span>
            </h2>
            <p className="text-lg text-[#9a9a9a] leading-relaxed mb-8">
              Over two decades of teaching experience. James doesn&apos;t just help
              you pass — he helps you actually understand the physical world.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#4ecdc4]/30 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#4ecdc4]" />
                  </div>
                  <div>
                    <h3 className="text-[#e8e8e8] font-medium mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#9a9a9a]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-[#4ecdc4]">$100</p>
                <p className="text-sm text-[#9a9a9a]">per hour</p>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-[#e8e8e8]">4,000+</p>
                <p className="text-sm text-[#9a9a9a]">
                  <a
                    href="https://www.wyzant.com/Tutors/radmath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4ecdc4] hover:underline"
                  >
                    verified reviews
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold text-[#e8e8e8] mb-2">
                Book a Session
              </h3>
              <p className="text-sm text-[#9a9a9a] mb-8">
                Pick a time that works for you. First session includes a free
                15-minute consultation.
              </p>

              <button
                data-cal-link="mann-sharma-xfxaht/15min"
                data-cal-config='{"theme":"dark"}'
                className="w-full px-8 py-5 text-base font-medium bg-[#4ecdc4] text-[#0a0a0f] rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="14" height="14" rx="2" />
                  <path d="M3 8h14M7 2v4M13 2v4" />
                </svg>
                Schedule a Free 15-Min Consultation
              </button>
            </div>

            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4ecdc4]/10 to-transparent -z-10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
