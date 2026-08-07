import profilePhoto from "../assets/profile.png";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <Container className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
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
            I build full-stack web apps that teams actually use &mdash; like a
            CRM adopted by 20+ employees in production.
          </p>

          <div className="flex items-center gap-4">
            <Button onClick={() => window.open("/resume.pdf", "_blank")}>
              Download resume
            </Button>

            <a
              href="mailto:vincentmariscotescleofe@gmail.com"
              className="font-mono text-xs text-muted hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
            >
              or email me
            </a>
          </div>
        </div>

        {/* Right column — photo */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-[320px] aspect-square rounded-[32px] overflow-hidden bg-[#F5F7FA] border border-border shadow-[0_8px_30px_rgba(18,20,26,0.06)]">
            <img
              src={profilePhoto}
              alt="Mark Vincent Cleofe"
              className="w-full h-full object-cover contrast-105 brightness-[0.98] saturate-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
