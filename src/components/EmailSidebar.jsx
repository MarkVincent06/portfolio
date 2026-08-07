import { email } from "../data/portfolio";

export default function EmailSidebar() {
  return (
    <div
      className="hidden xl:flex fixed bottom-0 z-40 flex-col items-center"
      style={{ right: "max(1.5rem, calc((100vw - 72rem) / 2 - 3.5rem))" }}
    >
      <a
        href={`mailto:${email}`}
        className="font-mono text-xs tracking-widest text-muted hover:text-accent hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl]"
      >
        {email}
      </a>
      <div className="w-px h-24 bg-border mt-6" aria-hidden="true" />
    </div>
  );
}
