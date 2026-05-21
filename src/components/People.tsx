"use client";

import FadeIn from "./FadeIn";

const people = [
  {
    name: "James Ellias",
    role: "Founder",
    bio: "Physicist and objectivist philosopher. His 2015 insight into the scientific method led to the Theory of Induction. Revolutionizing physics ever since.",
  },
  {
    name: "Chantal Roth",
    role: "Researcher",
    bio: "PhD from ETH Zurich in Scientific Computing. Creates simulations bringing her elastic aether hypothesis to life, integrating all physical phenomena under one theory.",
  },
  {
    name: "William Parker",
    role: "Physics Educator",
    bio: "Two decades teaching physics. Develops inductive narratives of foundational ideas in geometry and physics at Inductica.",
  },
];

export default function People() {
  return (
    <section id="people" className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
      <FadeIn>
        <div className="border-b border-[var(--color-border)] pb-6 mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
            Team
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="grid gap-px bg-[var(--color-border)] rounded-lg overflow-hidden border border-[var(--color-border)] md:grid-cols-3">
          {people.map((person) => (
            <div key={person.name} className="bg-[#0D0D0D] p-6">
              <p className="text-[14px] font-semibold text-[var(--color-fg)] mb-0.5">
                {person.name}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-3">
                {person.role}
              </p>
              <p className="text-[12px] leading-relaxed text-[var(--color-muted)]">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
