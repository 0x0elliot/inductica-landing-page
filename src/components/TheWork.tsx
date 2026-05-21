"use client";

import FadeIn from "./FadeIn";

const videos = [
  {
    id: "uZWFq8rxLHI",
    title: "The Theory of Induction",
    description:
      "An introduction to the systematic method for proving scientific conclusions.",
  },
  {
    id: "bI5exNrgsaA",
    title: "PAMO Lecture",
    description:
      "A proof of the existence of the aether and a refutation of special relativity.",
  },
  {
    id: "bQ53xy9gRLw",
    title: "Inductive Summary of Physics",
    description:
      "An outline of the inductive proof of physical principles from observation.",
  },
];

export default function TheWork() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
      <FadeIn>
        <div className="border-b border-[var(--color-border)] pb-6 mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
            Lectures
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-fg)] leading-tight mb-10">
          Watch the work in{" "}
          <span className="font-serif italic text-[var(--color-accent)]">
            progress.
          </span>
        </h2>
      </FadeIn>

      <div className="space-y-6">
        {videos.map((video, i) => (
          <FadeIn key={video.id} delay={i * 100}>
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 items-start border border-[var(--color-border)] rounded-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="p-6 md:py-6 md:pr-6 md:pl-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]/50 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[16px] font-semibold text-[var(--color-fg)] mb-2">
                  {video.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--color-muted)]">
                  {video.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <div className="mt-8">
          <a
            href="https://www.youtube.com/@Inductica"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-accent)] hover:text-[var(--color-fg)] transition-colors duration-200"
          >
            All lectures on YouTube &rarr;
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
