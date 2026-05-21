export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-border)] mx-auto max-w-5xl px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
        <p className="font-mono text-[11px] text-[var(--color-muted)]/50">
          &copy; {new Date().getFullYear()} Inductica
        </p>

        <div className="flex items-center gap-6">
          {[
            { label: "YouTube", href: "https://www.youtube.com/@Inductica" },
            {
              label: "Patreon",
              href: "https://www.patreon.com/inductica/membership?vanity=inductica",
            },
            { label: "Contact", href: "mailto:contact@inductica.org" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]/50 hover:text-[var(--color-fg)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
