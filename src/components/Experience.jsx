import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-bg">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="experience"
            title="Experience"
            subtext="Where I've worked and what I've built."
          />

          <div className="relative pl-10 border-l border-border">
            <div className="space-y-16">
              {experience.map((job) => (
                <div key={job.company} className="relative">
                  <span className="absolute -left-[46px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-bg" />

                  <p className="font-mono text-xs text-muted mb-1">
                    {job.dates}
                  </p>
                  <h3 className="font-display font-bold text-xl text-ink">
                    {job.role}
                  </h3>
                  <p className="font-body text-sm text-accent mb-4">
                    {job.company} &mdash; {job.location}
                  </p>

                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="font-body text-sm leading-relaxed text-muted flex gap-2.5"
                      >
                        <span className="text-accent mt-1 shrink-0">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
