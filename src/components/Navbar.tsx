"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Lectures", href: "#work" },
  { label: "Tutoring", href: "#tutoring" },
  { label: "Team", href: "#people" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="" className="h-4 w-auto invert brightness-90" />
          <span className="font-mono text-[13px] tracking-wide text-[var(--color-fg)]">
            inductica
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tutoring"
            className="font-mono text-[11px] uppercase tracking-[0.1em] px-4 py-2 border border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 hover:border-[var(--color-accent)] rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            Book a session
          </a>
        </div>
      </div>
    </nav>
  );
}
