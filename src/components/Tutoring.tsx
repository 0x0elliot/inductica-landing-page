"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Cal?: any;
  }
}

import { useEffect } from "react";
import FadeIn from "./FadeIn";

export default function Tutoring() {
  useEffect(() => {
    (function (C: Window & { Cal?: unknown }, A: string) {
      const p = function () {
        const cal = C.Cal as { q: unknown[] };
        cal.q = cal.q || [];
        // eslint-disable-next-line prefer-rest-params
        cal.q.push(arguments);
      };
      if (!C.Cal) {
        const cal = p as unknown as {
          ns?: Record<string, unknown>;
          q: unknown[];
          loaded?: boolean;
        };
        cal.ns = {};
        cal.q = [];
        cal.loaded = false;
        C.Cal = cal;
        const d = C.document;
        const s = d.createElement("script");
        s.src = A;
        s.async = true;
        d.head.appendChild(s);
      }
    })(window, "https://app.cal.com/embed/embed.js");

    const waitForCal = setInterval(() => {
      if (window.Cal && typeof window.Cal === "function") {
        clearInterval(waitForCal);
        window.Cal("init", { origin: "https://cal.com" });
        window.Cal("ui", {
          theme: "dark",
          cssVarsPerTheme: {
            dark: { "cal-bg": "#0D0D0D", "cal-text": "#E5E5E5" },
          },
        });
      }
    }, 100);

    return () => clearInterval(waitForCal);
  }, []);

  return (
    <section id="tutoring" className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
      <FadeIn>
        <div className="border-b border-[var(--color-border)] pb-6 mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
            Tutoring
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-[1.4fr_auto_1fr] gap-0">
        <FadeIn>
          <div className="pr-0 md:pr-10 pb-10 md:pb-0">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-fg)] leading-tight mb-4">
              Learn physics with
              <br />
              <span className="font-serif italic text-[var(--color-accent)]">
                James Ellias.
              </span>
            </h2>

            <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8">
              Over two decades of teaching experience. James doesn&apos;t help you
              memorize. He helps you reason about the physical world.
            </p>

            <div className="grid grid-cols-2 gap-px bg-[var(--color-border)] rounded-lg overflow-hidden border border-[var(--color-border)] mb-8">
              {[
                { value: "$100", label: "per hour" },
                {
                  value: "4,000+",
                  label: "verified reviews",
                  link: "https://www.wyzant.com/Tutors/radmath",
                },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0D0D0D] p-4">
                  <p className="font-serif italic text-2xl text-[var(--color-fg)]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] mt-1">
                    {"link" in stat ? (
                      <a
                        href={stat.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-accent)] hover:text-[var(--color-fg)] transition-colors"
                      >
                        {stat.label} &rarr;
                      </a>
                    ) : (
                      stat.label
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                "Math & physics, algebra through quantum mechanics",
                "Theory feedback & scientific paper review",
                "Conceptual understanding, not memorization",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1 text-xs">
                    &bull;
                  </span>
                  <p className="text-[13px] text-[var(--color-muted)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="hidden md:block border-l border-[var(--color-border)]" />

        <FadeIn delay={150}>
          <div className="pt-6 md:pt-0 md:pl-10">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]/50 mb-4">
              Book a session
            </p>
            <p className="text-[13px] text-[var(--color-muted)] leading-relaxed mb-6">
              Pick a time. First 15 minutes are a free consultation.
            </p>

            <button
              data-cal-link="mann-sharma-xfxaht/15min"
              data-cal-config='{"theme":"dark"}'
              className="w-full py-3.5 text-[13px] font-medium tracking-wide border border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] rounded-lg transition-all duration-200 active:scale-[0.98]"
            >
              Pick a time &rarr;
            </button>

            <p className="font-mono text-[10px] text-[var(--color-muted)]/40 mt-4 text-center">
              Book through inductica.org for discounted rate
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
