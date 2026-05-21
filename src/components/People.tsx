"use client";

import { motion } from "framer-motion";

const people = [
  {
    name: "James Ellias",
    role: "Founder",
    bio: "Physicist and objectivist philosopher. In 2015, James had an insight about the true nature of the scientific method which led to his Theory of Induction. He has been working to revolutionize physics ever since.",
    initial: "JE",
  },
  {
    name: "Chantal Roth",
    role: "Researcher",
    bio: "PhD from ETH Zurich in Scientific Computing with a masters in biochemistry. She creates stunning simulations that bring her hypothesis of an elastic aether to life, integrating all known physical phenomena under one theory.",
    initial: "CR",
  },
  {
    name: "William Parker",
    role: "Physics Educator",
    bio: "Over two decades teaching physics, shaped by moving from memorization to conceptual understanding. At Inductica, he develops inductive narratives of foundational ideas in geometry and physics.",
    initial: "WP",
  },
];

export default function People() {
  return (
    <section id="people" className="relative py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.25em] text-xs text-[#4ecdc4] mb-4">
            The Team
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#e8e8e8]">
            The People Behind Inductica
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-center"
            >
              <div className="w-20 h-20 rounded-full border-2 border-[#4ecdc4]/30 flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-[#4ecdc4] font-bold">
                  {person.initial}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#e8e8e8] mb-1">
                {person.name}
              </h3>
              <p className="text-sm text-[#4ecdc4] mb-4">{person.role}</p>
              <p className="text-sm text-[#9a9a9a] leading-relaxed">
                {person.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
