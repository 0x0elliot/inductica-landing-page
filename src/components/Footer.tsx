export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-serif text-xl font-bold text-[#4ecdc4]">
              Inductica
            </span>
            <p className="text-sm text-[#9a9a9a] mt-1">
              Rebuilding physics from first principles.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/@Inductica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#9a9a9a] hover:text-[#4ecdc4] transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://www.patreon.com/inductica/membership?vanity=inductica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#9a9a9a] hover:text-[#4ecdc4] transition-colors"
            >
              Patreon
            </a>
            <a
              href="mailto:contact@inductica.org"
              className="text-sm text-[#9a9a9a] hover:text-[#4ecdc4] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-[#9a9a9a]/50">
            &copy; {new Date().getFullYear()} Inductica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
