import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";

const CORE_STACK = ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-bg">
      <Container>
        <div className="max-w-5xl">
          <SectionHeading eyebrow="about" title="About me" />

          <p className="font-body text-base leading-relaxed text-muted mb-5">
            I'm{" "}
            <span className="font-medium text-ink">Mark Vincent Cleofe</span>, a
            junior full-stack developer who builds web applications with the
            MERN stack — from REST APIs and authentication systems to real-time
            features and dashboards.
          </p>

          <p className="font-body text-base leading-relaxed text-muted mb-5">
            I led development of IntelliCRM, a production CRM system adopted by
            20+ employees, and worked on projects like ChronoLock and a custom
            Redis-inspired database, learning to take ideas from a rough concept
            to something people actually rely on.
          </p>

          <p className="font-body text-base leading-relaxed text-muted mb-8">
            Outside of code, I'm usually playing guitar, deep in a video game,
            or losing a game of chess — I like that building software and
            picking up a new hobby both start the same way: figuring things out
            as you go.
          </p>

          <div className="pt-2 border-t border-border">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
              Core stack
            </p>

            <div className="flex flex-wrap gap-2">
              {CORE_STACK.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-accent border border-border rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-border">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
              Education
            </p>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <p className="font-body text-sm text-ink font-medium">
                  BS in Information Technology
                </p>
                <p className="font-body text-sm text-muted">
                  Camarines Sur Polytechnic Colleges &mdash; Nabua, Camarines
                  Sur
                </p>
              </div>
              <p className="font-mono text-xs text-muted whitespace-nowrap">
                Jan 2021 &ndash; Jul 2026
              </p>
            </div>

            <p className="font-body text-sm leading-relaxed text-muted mt-2">
              Placed 3rd in Computer Programming at TECXplosion: Exploring the
              Digital Universe (4th CCS Cyberfest), Jan 2024.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
