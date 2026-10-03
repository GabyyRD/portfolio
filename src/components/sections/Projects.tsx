import { Section } from "@/components/ui/Section";
import { ProjectItem } from "./ProjectItem";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function Projects() {
  return (
    <Section id="projetos" eyebrow="Projetos" title="">
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={project.slug} project={project} index={index} />
        ))}
      </div>

      <p className="mt-12 text-sm text-ink-soft">
        Outros projetos e experimentos ficam no meu{" "}
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}