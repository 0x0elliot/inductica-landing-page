"use client";

import FadeIn from "./FadeIn";

const pillars = [
  {
    index: "01",
    title: "Theory of Induction",
    description:
      "A systematic method for proving scientific conclusions from observation. With certainty, not probability.",
  },
  {
    index: "02",
    title: "Reproof of Physics",
    description:
      "Using induction to reprove every essential principle of physics from observation, eliminating faulty assumptions.",
  },
  {
    index: "03",
    title: "New Discoveries",
    description:
      "A proof of the aether's existence, a refutation of special relativity, and a fluid hypothesis of electromagnetism.",
  },
  {
    index: "04",
    title: "The Mechanical Universe",
    description:
      "Chantal Roth's hypothesis integrating all known physical phenomena under one elastic aether theory, brought to life with simulations.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
      <FadeIn>
        <div className="border-b border-[var(--color-border)] pb-6 mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
            The project
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="grid gap-0 md:grid-cols-[1.4fr_auto_1fr] mb-16">
          <div className="pr-0 md:pr-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-fg)] leading-tight mb-4">
              Modern physics is built on
              <br />
              flawed{" "}
              <span className="font-serif italic text-[var(--color-accent)]">
                foundations.
              </span>
            </h2>
          </div>
          <div className="hidden md:block border-l border-[var(--color-border)]" />
          <div className="pt-6 md:pt-0 md:pl-10">
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Quantum Mechanics and General Relativity make correct predictions
              but false claims about the underlying phenomena. Inductica is going
              back to observation to rebuild physics on provable ground.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="grid gap-px bg-[var(--color-border)] rounded-lg overflow-hidden border border-[var(--color-border)] md:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.index} className="bg-[#0D0D0D] p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]/50 mb-3">
                {pillar.index}
              </p>
              <h3 className="text-[14px] font-semibold text-[var(--color-fg)] mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-[12px] leading-relaxed text-[var(--color-muted)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
