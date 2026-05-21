"use client";

import FadeIn from "./FadeIn";
import OrbitalDiagram from "./OrbitalDiagram";

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 md:hidden pointer-events-none overflow-hidden opacity-[0.3]">
        <div className="absolute top-[35%] right-0 w-[280px] h-[280px]">
          <OrbitalDiagram />
        </div>
      </div>

      <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <div>
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)] mb-6">
              Physics tutoring & research
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-[var(--color-fg)] mb-6">
              The Inductive Revolution{" "}
              <span className="font-serif italic text-[var(--color-accent)]">
                Has Begun.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-xl mb-10">
              Modern physics makes correct predictions but wrong claims about
              reality. We&apos;re going back to observation to rebuild it.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#tutoring"
                className="px-6 py-3 text-[13px] font-medium border border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] rounded-lg transition-all duration-200 active:scale-[0.98]"
              >
                Book a session &rarr;
              </a>
              <a
                href="#about"
                className="px-6 py-3 text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors duration-200"
              >
                Learn about the project
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-14 grid grid-cols-3 gap-px bg-[var(--color-border)] rounded-lg overflow-hidden border border-[var(--color-border)] max-w-md">
              {[
                { value: "507,544", label: "views" },
                { value: "700+", label: "reviews" },
                { value: "20+", label: "years" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0D0D0D] p-4 text-center">
                  <p className="font-serif italic text-xl text-[var(--color-fg)]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300} className="hidden md:block">
          <div className="aspect-square w-full">
            <OrbitalDiagram />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
