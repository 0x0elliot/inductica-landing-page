"use client";

import FadeIn from "./FadeIn";

const tiers = [
  {
    amount: "$5",
    label: "Exclusive Media",
    description:
      "Exclusive lectures and articles, including the 34-hour Inductive Summary of Physics.",
  },
  {
    amount: "$20",
    label: "Extra Support",
    description:
      "All exclusive media. Support the project at a higher level.",
  },
  {
    amount: "$30",
    label: "Theory of Induction",
    description:
      "The current draft of the theory guiding Inductica's reproof of math and physics. All lower tiers included.",
  },
];

export default function JoinMission() {
  return (
    <section id="mission" className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
      <FadeIn>
        <div className="border-b border-[var(--color-border)] pb-6 mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
            Support the mission
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-fg)] leading-tight mb-4">
            Fund real progress in{" "}
            <span className="font-serif italic text-[var(--color-accent)]">
              physics.
            </span>
          </h2>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-lg">
            Your support funds research, video production, and open access to
            lectures.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="grid gap-px bg-[var(--color-border)] rounded-lg overflow-hidden border border-[var(--color-border)] md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className="bg-[#0D0D0D] p-6"
            >
              <p className="font-serif italic text-3xl text-[var(--color-fg)] mb-1">
                {tier.amount}
                <span className="font-sans not-italic text-[11px] text-[var(--color-muted)] ml-1">
                  /month
                </span>
              </p>
              <p className="text-[14px] font-semibold text-[var(--color-fg)] mb-2">
                {tier.label}
              </p>
              <p className="text-[12px] leading-relaxed text-[var(--color-muted)]">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="mt-8">
          <a
            href="https://www.patreon.com/inductica/membership?vanity=inductica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-[13px] font-medium border border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            Support on Patreon &rarr;
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
