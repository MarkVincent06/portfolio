import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiHtml5,
  SiCss,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import { skills } from "../data/portfolio";

// Maps the icon name stored in data/portfolio.js to the actual icon component
const ICON_MAP = {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiHtml5,
  SiCss,
  SiCplusplus,
  FaJava,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  TbApi,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-bg">
      <Container>
        <SectionHeading
          eyebrow="skills"
          title="Skills"
          subtext="Tools and technologies I work with. Core technologies are highlighted."
        />

        <div className="space-y-10">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
                {group.category}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const Icon = ICON_MAP[skill.icon];
                  return (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 border ${
                        skill.core ? "bg-accent border-accent" : "border-border"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          className={skill.core ? "text-white" : "text-accent"}
                          size={16}
                        />
                      )}
                      <span
                        className={`font-body text-sm ${
                          skill.core ? "text-white font-medium" : "text-ink"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
