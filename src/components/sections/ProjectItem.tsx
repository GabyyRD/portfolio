import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { GithubIcon } from "@/components/ui/BrandIcons";

const statusLabel: Record<Project["status"], string> = {
  concluido: "Concluído",
  "em-andamento": "Em andamento",
  planejado: "Em planejamento",
};

export function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="grid gap-8 border-b border-line py-12 first:pt-0 last:border-b-0 md:grid-cols-2 md:gap-12">
      <div className="order-2 flex flex-col md:order-1">
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-sm text-ink-soft">{number}</span>
          {project.status !== "concluido" && (
            <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-ink-soft">
              {statusLabel[project.status]}
            </span>
          )}
        </div>

        <h3 className="font-serif text-2xl md:text-3xl">{project.title}</h3>

        <p className="mt-4 max-w-md text-ink-soft">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink transition-colors duration-200 hover:text-accent"
            >
              <GithubIcon size={16} />
              Código no GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink transition-colors duration-200 hover:text-accent"
            >
              Ver demonstração
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="order-1 md:order-2">
        {project.image ? (
          <div className="relative aspect-video overflow-hidden rounded-lg border border-line">
            <Image
              src={project.image}
              alt={`Mockup do projeto ${project.title}`}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-line text-sm text-ink-soft">
            Imagem em breve
          </div>
        )}
      </div>
    </article>
  );
}