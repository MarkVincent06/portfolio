export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8 px-6 md:px-12 py-16 md:py-24 items-center bg-bg">
      {/* Left column — text */}
      <div>
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-wide text-accent">
            Open to work &middot; Metro Manila, PH
          </span>
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
          Junior software developer
        </p>

        <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-ink mb-5 -tracking-[0.01em]">
          Mark Vincent
          <br />
          Cleofe
        </h1>

        <p className="font-body text-base leading-relaxed text-muted max-w-md mb-8">
          I build full-stack web apps that teams actually use &mdash; like a CRM
          adopted by 20+ employees in production.
        </p>

        <div className="flex items-center gap-5">
          <button className="bg-accent hover:bg-accent-dark text-white font-body text-sm font-medium rounded-md px-5 py-3 transition-colors">
            View projects
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            className="font-body text-sm text-ink border-b border-ink pb-0.5"
          >
            Download resume
          </a>
        </div>
      </div>

      {/* Right column — code card */}
      <div className="bg-code-bg rounded-xl px-6 py-5 font-mono text-xs leading-loose text-gray-200">
        <span className="text-white/40">// about.js</span>
        <br />
        <span className="text-[#d4906f]">const</span>{" "}
        <span className="text-[#9fc1d4]">developer</span> = {"{"}
        <br />
        &nbsp;&nbsp;<span className="text-[#9fc1d4]">name</span>:{" "}
        <span className="text-[#e3b98d]">'Mark Vincent Cleofe'</span>,
        <br />
        &nbsp;&nbsp;<span className="text-[#9fc1d4]">role</span>:{" "}
        <span className="text-[#e3b98d]">'Full-Stack Developer'</span>,
        <br />
        &nbsp;&nbsp;<span className="text-[#9fc1d4]">stack</span>: [
        <span className="text-[#e3b98d]">'React'</span>,{" "}
        <span className="text-[#e3b98d]">'Node'</span>,{" "}
        <span className="text-[#e3b98d]">'MongoDB'</span>],
        <br />
        &nbsp;&nbsp;<span className="text-[#9fc1d4]">status</span>:{" "}
        <span className="text-[#e3b98d]">'open_to_work'</span>
        <br />
        {"}"};
      </div>
    </section>
  );
}
