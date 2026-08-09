import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
// import Button from "./ui/Button";
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
                  <div className="w-full overflow-hidden rounded-xl border border-border bg-white p-2">
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Info card — overlaps the screenshot on desktop */}
                <div
                  className={`relative z-10 mt-4 md:mt-0 md:w-5/12 bg-bg border border-border rounded-lg p-6 md:p-8 ${
                    reversed ? "md:-mr-16" : "md:-ml-16"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-xl text-ink">
                      {project.name}
                    </h3>

                    <span className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} GitHub repository`}
                          className="text-ink hover:text-accent transition-colors"
                        >
                          <FaGithub size={18} className="hover:text-accent" />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} live demo`}
                          className="text-ink hover:text-accent transition-colors"
                        >
                          <FaExternalLinkAlt
                            size={16}
                            className="hover:text-accent"
                          />
                        </a>
                      )}
                    </span>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-muted mb-5">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted mb-5">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  {/* Learn more — will link to a project detail route later */}
                  {/* <Button>Learn more -{">"}</Button> */}

                  {/* Case study placeholder */}
                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">
                      Coming soon
                    </p>
                    <p className="font-body text-sm text-muted">
                      A detailed case study covering the architecture,
                      development process, technical challenges, and key
                      implementation decisions for this project.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View other projects — will link to other projects route later */}
        {/* <div className="flex justify-center mt-16">
          <Button>View Other Projects</Button>
        </div> */}

        {/* More projects placeholder */}
        <div className="mt-10 text-center border-t border-border pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">
            More projects
          </p>
          <h3 className="font-display text-xl font-semibold text-ink mb-3">
            Additional projects coming soon
          </h3>
          <p className="font-body text-muted max-w-xl mx-auto">
            I'm currently documenting more projects and writing detailed case
            studies. More work will be added here soon.
          </p>
        </div>
      </Container>
    </section>
  );
}
