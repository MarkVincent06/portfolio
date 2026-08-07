import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-bg">
      <Container>
        <SectionHeading
          eyebrow="projects"
          title="Featured projects"
          subtext="A few things I've shipped."
        />

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1;

            return (
              <div
                key={project.name}
                className={`relative md:flex md:items-center ${
                  reversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Screenshot placeholder */}
                <div className="md:w-8/12">
                  <div className="aspect-video w-full rounded-lg border border-border bg-code-bg/5 flex items-center justify-center">
                    <span className="font-mono text-xs text-muted">
                      {project.name} screenshot
                    </span>
                  </div>
                </div>

                {/* Info card — overlaps the screenshot on desktop */}
                <div
                  className={`relative z-10 mt-4 md:mt-0 md:w-5/12 bg-bg border border-border rounded-lg p-6 md:p-8 ${
                    reversed ? "md:-mr-16" : "md:-ml-16"
                  }`}
                >
                  <h3 className="font-display font-bold text-xl text-ink mb-3">
                    {project.name}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted mb-5">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted mb-5">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 mb-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} GitHub repository`}
                      className="text-ink hover:text-accent transition-colors"
                    >
                      <FaGithub size={18} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} live demo`}
                        className="text-ink hover:text-accent transition-colors"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                  {/* Learn more — will link to a project detail route later */}
                  <Button
                    name="Learn more →"
                    cta="#"
                    className="inline-block mt-4"
                  />
                  {/* <a
                    href="#"
                    className="font-body text-sm text-accent border-b border-accent pb-0.5"
                  ></a> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* View other projects — will link to other projects route later */}
        <div className="flex justify-center mt-16">
          <Button name="View other projects" cta="#" />
        </div>
      </Container>
    </section>
  );
}
