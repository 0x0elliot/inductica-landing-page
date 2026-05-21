"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: "uZWFq8rxLHI",
    title: "The Theory of Induction",
    description: "An introduction to the systematic method for proving scientific conclusions.",
  },
  {
    id: "bI5exNrgsaA",
    title: "PAMO Lecture",
    description: "A proof of the existence of the aether and a refutation of special relativity.",
  },
  {
    id: "bQ53xy9gRLw",
    title: "Inductive Summary of Physics",
    description: "An outline of the inductive proof of physical principles from observation.",
  },
];

export default function TheWork() {
  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4ecdc4]/[0.02] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.25em] text-xs text-[#4ecdc4] mb-4">
            Featured Lectures
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#e8e8e8] leading-tight mb-6">
            Watch the Work in Progress
          </h2>
          <p className="text-lg text-[#9a9a9a] max-w-2xl mx-auto">
            Follow along as we rebuild physics from the ground up through
            lectures, proofs, and discoveries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/5 group-hover:border-[#4ecdc4]/20 transition-colors">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#e8e8e8] mb-1">
                {video.title}
              </h3>
              <p className="text-sm text-[#9a9a9a]">{video.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@Inductica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#4ecdc4] hover:text-[#e8c77b] transition-colors"
          >
            View all lectures on YouTube
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 8h8M9 5l3 3-3 3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
