import { useState } from "react";
import { LuCode, LuMenu, LuX } from "react-icons/lu";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        {/* Logo/Brand */}
        <a href="#top" className="flex items-center gap-2">
          <LuCode className="text-accent text-lg" />
          <span className="font-display font-semibold text-ink">MVC</span>
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-body text-sm text-ink"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <LuX size={22} /> : <LuMenu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm text-muted hover:text-ink py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
